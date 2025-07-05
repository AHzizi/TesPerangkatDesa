import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue } from 'firebase/database';

export function HallOfFame() {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, 'quizResults'), snapshot => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.values(data)
          .sort((a: any, b: any) => b.score - a.score || a.time - b.time);
        setEntries(formatted);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-black/40 rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4">🏆 Hall of Fame</h2>
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
  );
}
