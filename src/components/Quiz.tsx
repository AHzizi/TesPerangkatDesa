import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';
import type { Question, QuizState, UserInfo } from '../types';
import { UserForm } from './UserForm';
import { questions } from '../data/questions';
import { db } from '../lib/firebase';
import { ref, push } from 'firebase/database';

export function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    showResults: false,
    userInfo: null,
  });

  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    if (state.showResults && startTime && !endTime) {
      const finished = Date.now();
      const timeTaken = Math.floor((finished - startTime) / 1000);
      setEndTime(finished);

      const fullName = `${state.userInfo?.firstName} ${state.userInfo?.lastName}`;
      const newEntry = {
        name: fullName,
        score: state.score,
        total: questions.length,
        time: timeTaken,
      };
      push(ref(db, 'quizResults'), newEntry);
    }
  }, [state.showResults, startTime, endTime, state.score, state.userInfo]);

  const handleUserSubmit = (userInfo: UserInfo) => {
    setStartTime(Date.now());
    setState(prev => ({ ...prev, userInfo }));
  };

  const handleAnswer = (answer: number | string) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    if (!currentQuestion) return;

    const isNewAnswer = !(currentQuestion.id in state.answers);
    const isCorrect = answer === currentQuestion.correctAnswer;
    const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [currentQuestion.id]: answer },
      score: isNewAnswer && isCorrect ? prev.score + 1 : prev.score,
      showResults: isLastQuestion && Object.keys(prev.answers).length === questions.length - 1,
    }));
  };

  const handlePrevQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
    }));
  };

  const handleNextQuestion = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(questions.length - 1, prev.currentQuestionIndex + 1),
    }));
  };

  const handleSkipQuestion = () => {
    const isLastQuestion = state.currentQuestionIndex === questions.length - 1;
    setState(prev => ({
      ...prev,
      currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
      showResults: isLastQuestion && Object.keys(prev.answers).length === questions.length - 1,
    }));
  };

  const currentQuestion = questions[state.currentQuestionIndex];

  if (!state.userInfo) {
    return <UserForm onSubmit={handleUserSubmit} />;
  }

  if (state.showResults) {
    return (
      <div className="w-full max-w-3xl mx-auto p-8 bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Hasil Ujian</h2>
        <div className="text-center mb-8">
          <p className="text-xl text-white mb-2">
            {state.userInfo.firstName} {state.userInfo.lastName}
          </p>
          <p className="text-3xl font-bold text-white">
            Nilai: {state.score} / {questions.length}
          </p>
          <p className="text-lg text-white/80 mt-2">
            ({((state.score / questions.length) * 100).toFixed(1)}%)
          </p>
          <p className="text-sm text-white/60 mt-1">
            Waktu⌚: {endTime && startTime ? Math.floor((endTime - startTime) / 1000) : '-'} detik
          </p>
        </div>
        <div className="space-y-6">
          {questions.map((q, index) => {
            const userAnswer = state.answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div 
                key={q.id}
                className={`p-6 rounded-lg ${
                  isCorrect ? 'bg-teal-500/20' : 'bg-red-500/20'
                }`}
              >
                <p className="font-medium text-white mb-3">
                  {index + 1}. {q.question}
                </p>
                <p className="text-sm text-white/80 mb-2">
                  Jawaban Anda: {userAnswer === undefined ? 'Tidak dijawab' : (
                    Array.isArray(q.options) 
                      ? q.options[userAnswer as number]
                      : q.options[userAnswer as string]
                  )}
                </p>
                <p className="text-sm text-white/80 mb-2">
                  Jawaban Benar: {Array.isArray(q.options)
                    ? q.options[q.correctAnswer as number]
                    : q.options[q.correctAnswer as string]
                  }
                </p>
                {q.explanation && (
                  <p className="text-sm text-white/90 mt-3 italic">
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="w-full max-w-3xl mx-auto p-8 bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg">
        <p className="text-white text-center">Tidak ada soal tersedia.</p>
      </div>
    );
  }

  const userAnswer = state.answers[currentQuestion.id];
  const timeElapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white/80">
            Soal {state.currentQuestionIndex + 1} dari {questions.length}
          </p>
          <p className="text-white/80">
            Waktu: {timeElapsed} detik
          </p>
          <p className="text-white/80">
            Nilai: {state.score}
          </p>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-gray-500 to-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((state.currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-medium text-white mb-6">
        {currentQuestion.question}
      </h2>

      <div className="space-y-3">
        {Array.isArray(currentQuestion.options) 
          ? currentQuestion.options.map((option, index) => {
              const isSelected = userAnswer === index;
              const isCorrect = userAnswer !== undefined && index === currentQuestion.correctAnswer;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg text-white transition-all duration-300 ${
                    isSelected
                      ? isCorrect
                        ? 'bg-teal-600/40 hover:bg-teal-600/50'
                        : 'bg-red-600/40 hover:bg-red-600/50'
                      : 'bg-gray-700/40 hover:bg-gray-600/40'
                  }`}
                >
                  {option}
                </button>
              );
            })
          : Object.entries(currentQuestion.options).map(([key, value]) => {
              const isSelected = userAnswer === key;
              const isCorrect = userAnswer !== undefined && key === currentQuestion.correctAnswer;

              return (
                <button
                  key={key}
                  onClick={() => handleAnswer(key)}
                  className={`w-full p-4 text-left rounded-lg text-white transition-all duration-300 ${
                    isSelected
                      ? isCorrect
                        ? 'bg-teal-600/40 hover:bg-teal-600/50'
                        : 'bg-red-600/40 hover:bg-red-600/50'
                      : 'bg-gray-700/40 hover:bg-gray-600/40'
                  }`}
                >
                  {value}
                </button>
              );
            })
        }
      </div>

      <div className="fixed bottom-4 right-4 flex gap-2">
        <button
          onClick={handlePrevQuestion}
          disabled={state.currentQuestionIndex === 0}
          className="p-2 bg-gray-700/40 hover:bg-gray-600/40 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-white transition-all duration-300"
          aria-label="Previous question"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleSkipQuestion}
          className="p-2 bg-gray-700/40 hover:bg-gray-600/40 rounded-full text-white transition-all duration-300"
          aria-label="Skip question"
        >
          <SkipForward className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={state.currentQuestionIndex === questions.length - 1}
          className="p-2 bg-gray-700/40 hover:bg-gray-600/40 disabled:opacity-50 disabled:cursor-not-allowed rounded-full text-white transition-all duration-300"
          aria-label="Next question"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
