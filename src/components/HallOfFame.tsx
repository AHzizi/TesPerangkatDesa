import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue } from 'firebase/database';

interface HallOfFameProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HallOfFame({ isOpen, onClose }: HallOfFameProps) {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = onValue(ref(db, 'quizResults'), snapshot => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.values(data)
          .sort((a: any, b: any) => b.score - a.score || a.time - b.time);
        setEntries(formatted);
      }
    });

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-2xl text-white relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">🏆 Hall of Fame</h2>
        <ul className="space-y-2">
          {entries.length === 0 ? (
            <p>Belum ada peserta.</p>
          ) : (
            entries.map((entry, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{idx + 1}. {entry.name}</span>
                <span>Nilai: {entry.score} | Waktu: {entry.time} dtk</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
