import { useState } from 'react';
import { Moon, Sun, Info, Trophy } from 'lucide-react';
import { Quiz } from './components/Quiz';
import { HallOfFame } from './components/HallOfFame';

import uud from './data/uud.json';

const Footer = () => {
  return (
    <footer className="w-full text-white text-center py-4 italic mt-auto bg-transparent">
      <p className="text-sm">
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://github.com/AHzizi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Miftakul Azizi
        </a>{" "}
        &copy; 2025
      </p>
    </footer>
  );
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showHall, setShowHall] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col items-center ${
      isDark ? 'bg-gradient-to-br from-gray-800 to-teal-900' : 'bg-gradient-to-br from-gray-100 to-teal-100'
    }`}>

      {/* Tombol Hall of Fame */}
      <button
        onClick={() => setShowHall(true)}
        className="fixed bottom-16 left-4 p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300"
        aria-label="Hall of Fame"
      >
        <Trophy className="w-6 h-6 text-yellow-300" />
      </button>

      {/* Tombol Ganti Tema */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-white" />
        ) : (
          <Moon className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Tombol Modal */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
      >
        <Info className="w-5 h-5" />
        MATERI UUD
      </button>

      {/* Modal Materi UUD */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className={`rounded-2xl shadow-xl p-6 max-w-md w-full relative transform transition-all duration-300 max-h-[80vh] overflow-y-auto ${
              isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
            } ${
              isDark
                ? 'bg-white/10 text-white backdrop-blur-md border border-white/20'
                : 'bg-white/80 text-gray-800 backdrop-blur-md border border-gray-200'
            }`}
          >
            <button
              onClick={closeModal}
              className={`absolute top-2 right-2 text-xl font-bold ${
                isDark ? 'text-white hover:text-red-300' : 'text-gray-700 hover:text-red-500'
              }`}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Link Soal Per Pasal</h2>
            <ul className="space-y-3 text-sm">
              {uud.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.pasal}</strong> —{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline ${
                      isDark ? 'text-blue-300 hover:text-blue-100' : 'text-blue-700 hover:text-blue-500'
                    }`}
                  >
                    {item.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Modal Hall of Fame */}
      {showHall && <HallOfFame isOpen={showHall} onClose={() => setShowHall(false)} />}

      {/* Konten Utama */}
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Latihan Soal UU Desa Terbaru
          </h1>
          <p className={`text-xl md:text-2xl ${
            isDark ? 'text-white/90' : 'text-gray-700'
          }`}>
            (UU No. 3 Tahun 2024) Untuk Tes Perangkat Desa 2025
          </p>
        </div>
        <Quiz />
      </div>

      <Footer />
    </div>
  );
}

export default App;
