import type { Question } from '../types';

// Helper function to transform questions with "pilihan" format
function transformQuestion(q: any): Question {
  if ('pilihan' in q) {
    return {
      id: q.id,
      question: q.pertanyaan,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: q.penjelasan
    };
  }
  if ('soal' in q) {
    return {
      id: q.id,
      question: q.soal,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: ''
    };
  }
  return q;
}

// All questions combined and transformed
export const questions: Question[] = [
  {
    id: 1,
    question: "Apa syarat desa untuk mendapatkan dana konservasi dan/atau dana rehabilitasi?",
    options: ["Terletak di kawasan suaka alam", "Terletak di kawasan pelestarian alam", "Terletak di hutan produksi", "Terletak di pegunungan tertinggi"],
    correctAnswer: 0,
    explanation: "Desa harus terletak di kawasan suaka alam untuk memenuhi syarat mendapatkan dana konservasi dan/atau dana rehabilitasi sesuai peraturan perundang-undangan."
  },
  {
    id: 2,
    question: "Di mana desa harus berada agar bisa mendapatkan dana konservasi?",
    options: ["Di tengah kota metropolitan", "Di pinggiran hutan belantara", "Di kawasan industri", "Di kawasan suaka alam"],
    correctAnswer: 3,
    explanation: "Desa harus berada di kawasan suaka alam agar memenuhi syarat untuk mendapatkan dana konservasi sesuai peraturan yang berlaku."
  },
  {
    id: 3,
    question: "Siapa yang berwenang mengelola dana konservasi di desa?",
    options: ["Kepala Desa", "Badan Permusyawaratan Desa", "Camat", "Gubernur"],
    correctAnswer: 0,
    explanation: "Kepala Desa memiliki wewenang untuk mengelola dana konservasi sesuai dengan ketentuan yang berlaku."
  },
  {
    id: 4,
    question: "Bagaimana prosedur pengajuan dana konservasi untuk desa?",
    options: ["Langsung ke pusat", "Melalui provinsi", "Melalui kabupaten", "Melalui kecamatan"],
    correctAnswer: 2,
    explanation: "Prosedur pengajuan dana konservasi dilakukan melalui kabupaten sesuai dengan hierarki pemerintahan."
  },
  {
    id: 5,
    question: "Apa tujuan utama pemberian dana konservasi kepada desa?",
    options: ["Pembangunan infrastruktur", "Pelestarian lingkungan", "Pengembangan ekonomi", "Pemberdayaan masyarakat"],
    correctAnswer: 1,
    explanation: "Dana konservasi bertujuan untuk mendukung upaya pelestarian lingkungan di kawasan desa."
  },
  {
    id: 6,
    question: "Berapa lama periode pelaporan penggunaan dana konservasi?",
    options: ["1 bulan", "3 bulan", "6 bulan", "12 bulan"],
    correctAnswer: 2,
    explanation: "Pelaporan penggunaan dana konservasi dilakukan setiap 6 bulan sekali."
  },
  {
    id: 7,
    question: "Apa konsekuensi jika terjadi penyalahgunaan dana konservasi?",
    options: ["Teguran lisan", "Sanksi administratif", "Pencabutan dana", "Semua benar"],
    correctAnswer: 3,
    explanation: "Penyalahgunaan dana konservasi dapat mengakibatkan teguran lisan, sanksi administratif, hingga pencabutan dana."
  },
  {
    id: 8,
    question: "Siapa yang melakukan pengawasan terhadap penggunaan dana konservasi?",
    options: ["Masyarakat", "BPD", "Inspektorat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Pengawasan dana konservasi dilakukan oleh berbagai pihak termasuk masyarakat, BPD, dan Inspektorat."
  },
  {
    id: 9,
    question: "Apa yang harus dilakukan desa sebelum menerima dana konservasi?",
    options: ["Menyusun proposal", "Membuat tim khusus", "Melakukan survei", "Semua benar"],
    correctAnswer: 0,
    explanation: "Desa harus menyusun proposal yang komprehensif sebelum dapat menerima dana konservasi."
  },
  {
    id: 10,
    question: "Bagaimana mekanisme pencairan dana konservasi?",
    options: ["Langsung ke rekening desa", "Melalui bank daerah", "Bertahap sesuai progress", "Sekaligus di awal"],
    correctAnswer: 2,
    explanation: "Dana konservasi dicairkan secara bertahap sesuai dengan progress pelaksanaan program."
  },
  {
    id: 11,
    question: "Apa yang menjadi prioritas penggunaan dana konservasi?",
    options: ["Pembangunan fisik", "Pelestarian alam", "Gaji pegawai", "Operasional kantor"],
    correctAnswer: 1,
    explanation: "Prioritas penggunaan dana konservasi adalah untuk kegiatan pelestarian alam."
  },
  {
    id: 12,
    question: "Berapa persen dana konservasi yang boleh digunakan untuk operasional?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: 0,
    explanation: "Maksimal 10% dana konservasi dapat digunakan untuk keperluan operasional."
  },
  {
    id: 13,
    question: "Apa syarat minimal jumlah penduduk desa untuk mendapatkan dana konservasi?",
    options: ["500 jiwa", "1000 jiwa", "1500 jiwa", "Tidak ada syarat minimal"],
    correctAnswer: 3,
    explanation: "Tidak ada syarat minimal jumlah penduduk untuk mendapatkan dana konservasi."
  },
  {
    id: 14,
    question: "Siapa yang menentukan besaran dana konservasi untuk setiap desa?",
    options: ["Kepala Desa", "Bupati", "Menteri", "Tim evaluasi"],
    correctAnswer: 1,
    explanation: "Bupati berwenang menentukan besaran dana konservasi untuk setiap desa."
  },
  {
    id: 15,
    question: "Apa bentuk pertanggungjawaban penggunaan dana konservasi?",
    options: ["Laporan tertulis", "Dokumentasi", "Bukti pengeluaran", "Semua benar"],
    correctAnswer: 3,
    explanation: "Pertanggungjawaban meliputi laporan tertulis, dokumentasi, dan bukti pengeluaran."
  },
  {
    id: 16,
    question: "Kapan evaluasi penggunaan dana konservasi dilakukan?",
    options: ["Awal tahun", "Pertengahan tahun", "Akhir tahun", "Setiap triwulan"],
    correctAnswer: 2,
    explanation: "Evaluasi penggunaan dana konservasi dilakukan pada akhir tahun."
  },
  {
    id: 17,
    question: "Apa sanksi jika desa tidak menyampaikan laporan penggunaan dana?",
    options: ["Teguran tertulis", "Penundaan pencairan", "Penghentian dana", "Semua benar"],
    correctAnswer: 3,
    explanation: "Sanksi dapat berupa teguran tertulis, penundaan pencairan, hingga penghentian dana."
  },
  {
    id: 18,
    question: "Siapa yang bertanggung jawab atas kebenaran laporan penggunaan dana?",
    options: ["Kepala Desa", "Bendahara", "Tim pelaksana", "Semua benar"],
    correctAnswer: 0,
    explanation: "Kepala Desa bertanggung jawab penuh atas kebenaran laporan penggunaan dana."
  },
  {
    id: 19,
    question: "Apa yang harus dilakukan jika terjadi bencana alam di lokasi konservasi?",
    options: ["Menghentikan program", "Merevisi anggaran", "Melaporkan kejadian", "Semua benar"],
    correctAnswer: 3,
    explanation: "Semua tindakan tersebut harus dilakukan jika terjadi bencana alam."
  },
  {
    id: 20,
    question: "Bagaimana cara mengukur keberhasilan program konservasi?",
    options: ["Survei kepuasan", "Indikator lingkungan", "Laporan keuangan", "Semua benar"],
    correctAnswer: 1,
    explanation: "Keberhasilan program diukur melalui indikator lingkungan yang telah ditetapkan."
  },
  {
    id: 21,
    question: "Apa peran masyarakat dalam program konservasi?",
    options: ["Pelaksana", "Pengawas", "Penerima manfaat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Masyarakat berperan sebagai pelaksana, pengawas, dan penerima manfaat program."
  },
  {
    id: 22,
    question: "Berapa lama masa berlaku program konservasi?",
    options: ["1 tahun", "2 tahun", "3 tahun", "5 tahun"],
    correctAnswer: 2,
    explanation: "Program konservasi berlaku untuk periode 3 tahun."
  },
  {
    id: 23,
    question: "Apa yang harus dilakukan jika dana konservasi tidak mencukupi?",
    options: ["Menghentikan program", "Mengajukan tambahan", "Mengurangi kegiatan", "Mencari sponsor"],
    correctAnswer: 1,
    explanation: "Desa dapat mengajukan tambahan dana jika anggaran tidak mencukupi."
  },
  {
    id: 24,
    question: "Siapa yang melakukan audit terhadap penggunaan dana konservasi?",
    options: ["BPK", "Inspektorat", "Auditor independen", "Semua benar"],
    correctAnswer: 3,
    explanation: "Audit dapat dilakukan oleh BPK, Inspektorat, dan auditor independen."
  },
  {
    id: 25,
    question: "Apa syarat untuk perpanjangan program konservasi?",
    options: ["Laporan baik", "Hasil signifikan", "Dukungan masyarakat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Perpanjangan program memerlukan semua syarat tersebut."
  },
  {
    id: 26,
    question: "Bagaimana cara mengatasi konflik dalam pelaksanaan program?",
    options: ["Musyawarah", "Mediasi", "Arbitrase", "Semua benar"],
    correctAnswer: 0,
    explanation: "Konflik diselesaikan melalui musyawarah dengan melibatkan semua pihak."
  },
  {
    id: 27,
    question: "Apa yang harus dilakukan jika terjadi pergantian kepala desa?",
    options: ["Menghentikan program", "Serah terima", "Evaluasi ulang", "Semua benar"],
    correctAnswer: 1,
    explanation: "Harus dilakukan serah terima program kepada kepala desa yang baru."
  },
  {
    id: 28,
    question: "Siapa yang berhak mengusulkan perubahan program konservasi?",
    options: ["Kepala Desa", "BPD", "Masyarakat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Semua pihak berhak mengusulkan perubahan program konservasi."
  },
  {
    id: 29,
    question: "Apa dampak jika target program tidak tercapai?",
    options: ["Evaluasi program", "Pengurangan dana", "Penghentian program", "Semua benar"],
    correctAnswer: 3,
    explanation: "Kegagalan mencapai target dapat berakibat pada semua konsekuensi tersebut."
  },
  {
    id: 30,
    question: "Apa yang merupakan bagian dari tugas Kepala Desa dalam pembangunan di Desa?",
    options: ["Melakukan pencabutan hak masyarakat secara sewenang-wenang", "Memfasilitasi pembangunan infrastruktur dan sarana publik", "Menetapkan pajak secara berlebihan kepada warga Desa", "Menghentikan seluruh proyek pembangunan di Desa"],
    correctAnswer: 1,
    explanation: "Kepala Desa bertanggung jawab memfasilitasi pembangunan infrastruktur dan sarana publik di desa."
  },
  {
    id: 31,
    question: "Tugas utama Kepala Desa adalah untuk….",
    options: {
      a: "Memerintah secara dictatorial",
      b: "Mengurus pembangunan kota",
      c: "Membina kemasyarakatan di Desa",
      d: "Membangun infrastruktur modern"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa bertugas menyelenggarakan pemerintahan, pembangunan, pembinaan kemasyarakatan, dan pemberdayaan masyarakat di Desa."
  },
  {
    id: 32,
    question: "Dalam menjalankan tugasnya, Kepala Desa bertanggung jawab kepada….",
    options: {
      a: "Bupati/Walikota",
      b: "Camat",
      c: "Gubernur",
      d: "Menteri Dalam Negeri"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa bertanggung jawab kepada Bupati/Walikota melalui Camat."
  },
  {
    id: 33,
    question: "Masa jabatan Kepala Desa adalah….",
    options: {
      a: "3 tahun",
      b: "4 tahun",
      c: "5 tahun",
      d: "8 tahun"
    },
    correctAnswer: "d",
    explanation: "Masa jabatan Kepala Desa adalah 8 tahun dan dapat dipilih kembali untuk maksimal 2 kali masa jabatan."
  },
  {
    id: 34,
    question: "Kepala Desa dipilih secara….",
    options: {
      a: "Langsung oleh masyarakat",
      b: "Ditunjuk oleh Camat",
      c: "Dipilih oleh BPD",
      d: "Ditunjuk oleh Bupati"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa dipilih secara langsung oleh penduduk Desa yang memenuhi persyaratan."
  },
  {
    id: 35,
    question: "Salah satu wewenang Kepala Desa adalah….",
    options: {
      a: "Mengangkat Camat",
      b: "Menetapkan Peraturan Desa",
      c: "Membuat Undang-undang",
      d: "Menentukan kebijakan provinsi"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa berwenang menetapkan Peraturan Desa bersama BPD."
  },
  {
    id: 36,
    question: "Dalam pembangunan Desa, Kepala Desa wajib….",
    options: {
      a: "Mengabaikan aspirasi masyarakat",
      b: "Melibatkan partisipasi masyarakat",
      c: "Bekerja sendiri",
      d: "Menolak bantuan pemerintah"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa wajib melibatkan partisipasi masyarakat dalam pembangunan Desa."
  },
  {
    id: 37,
    question: "Laporan penyelenggaraan Pemerintahan Desa disampaikan kepada….",
    options: {
      a: "Masyarakat saja",
      b: "BPD saja",
      c: "Bupati/Walikota saja",
      d: "Bupati/Walikota dan BPD"
    },
    correctAnswer: "d",
    explanation: "Laporan penyelenggaraan Pemerintahan Desa disampaikan kepada Bupati/Walikota dan BPD."
  },
  {
    id: 38,
    question: "Kepala Desa dapat diberhentikan karena….",
    options: {
      a: "Menyelesaikan masa jabatan",
      b: "Mengembangkan Desa",
      c: "Melaksanakan tugas dengan baik",
      d: "Membangun infrastruktur"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa dapat diberhentikan karena telah menyelesaikan masa jabatannya."
  },
  {
    id: 39,
    question: "Dalam mengelola keuangan Desa, Kepala Desa harus….",
    options: {
      a: "Transparan dan akuntabel",
      b: "Tertutup dan rahasia",
      c: "Bebas dan tidak terkontrol",
      d: "Tanpa pertanggungjawaban"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa harus mengelola keuangan Desa secara transparan dan akuntabel."
  },
  {
    id: 40,
    question: "Kepala Desa dalam membuat kebijakan harus….",
    options: {
      a: "Sepihak",
      b: "Mempertimbangkan aspirasi masyarakat",
      c: "Mengabaikan aturan",
      d: "Tanpa musyawarah"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus mempertimbangkan aspirasi masyarakat dalam membuat kebijakan."
  },
  {
    id: 41,
    question: "Fungsi Kepala Desa dalam pemberdayaan masyarakat adalah….",
    options: {
      a: "Membatasi kegiatan masyarakat",
      b: "Mengabaikan potensi masyarakat",
      c: "Memfasilitasi kegiatan pemberdayaan",
      d: "Menghambat kreativitas masyarakat"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa berfungsi memfasilitasi kegiatan pemberdayaan masyarakat."
  },
  {
    id: 42,
    question: "Dalam menjalankan pemerintahan, Kepala Desa dibantu oleh….",
    options: {
      a: "Perangkat Desa",
      b: "Camat",
      c: "Bupati",
      d: "Gubernur"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa dibantu oleh Perangkat Desa dalam menjalankan pemerintahan."
  },
  {
    id: 43,
    question: "Kepala Desa dalam melaksanakan pembangunan harus….",
    options: {
      a: "Mengabaikan lingkungan",
      b: "Memperhatikan kelestarian lingkungan",
      c: "Merusak alam",
      d: "Mengeksploitasi sumber daya"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus memperhatikan kelestarian lingkungan dalam pembangunan."
  },
  {
    id: 44,
    question: "Kepala Desa dalam menyelesaikan perselisihan warga harus….",
    options: {
      a: "Berpihak pada yang kuat",
      b: "Mengabaikan masalah",
      c: "Bertindak adil dan bijaksana",
      d: "Memperkeruh suasana"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus bertindak adil dan bijaksana dalam menyelesaikan perselisihan."
  },
  {
    id: 45,
    question: "Apa yang dilakukan Kepala Desa dalam merencanakan pembangunan Desa?",
    options: {
      a: "Melakukan rencana tanpa konsultasi kepada siapa pun",
      b: "Mengabaikan kebutuhan masyarakat dalam pembangunan",
      c: "Melibatkan masyarakat dalam perencanaan pembangunan",
      d: "Menentukan pembangunan tanpa memperhatikan dampaknya"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus menyusun rencana pembangunan berdasarkan musyawarah dan partisipasi masyarakat."
  },
  {
    id: 46,
    question: "Apa salah satu kewajiban wajib bagi Kepala Desa dalam melaksanakan tugas mereka sesuai dengan Pasal 26?",
    options: {
      a: "Memberikan dan/atau menyebarkan informasi tertulis tentang pelaksanaan Pemerintahan Desa kepada masyarakat setempat setiap akhir tahun anggaran.",
      b: "Menyerahkan laporan pertanggungjawaban pelaksanaan Pemerintahan Desa pada akhir masa jabatan mereka di Forum Musyawarah Desa.",
      c: "Memberikan laporan pertanggungjawaban secara horizontal tentang pelaksanaan Pemerintahan Desa dalam bentuk lisan dan tertulis kepada Badan Permusyawaratan Desa setiap akhir tahun anggaran.",
      d: "Menjadi pengayom semua golongan masyarakat."
    },
    correctAnswer: "a",
    explanation: ""
  },
  {
    id: 47,
    question: "Bagaimana seharusnya Kepala Desa mengelola aset Desa?",
    options: {
      a: "Secara pribadi",
      b: "Untuk kepentingan kelompok",
      c: "Secara transparan dan bertanggung jawab",
      d: "Tanpa pencatatan"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus mengelola aset Desa secara transparan dan bertanggung jawab."
  },
  {
    id: 48,
    question: "Dalam pengambilan keputusan, Kepala Desa harus….",
    options: {
      a: "Memutuskan sendiri",
      b: "Bermusyawarah dengan masyarakat",
      c: "Mengikuti keinginan pribadi",
      d: "Mengabaikan aspirasi"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus bermusyawarah dengan masyarakat dalam pengambilan keputusan."
  },
  {
    id: 49,
    question: "Kepala Desa dalam pemberdayaan ekonomi harus….",
    options: {
      a: "Mengembangkan potensi lokal",
      b: "Membatasi usaha warga",
      c: "Menghambat perdagangan",
      d: "Menutup pasar desa"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa harus mengembangkan potensi lokal dalam pemberdayaan ekonomi."
  },
  {
    id: 50,
    question: "Dalam pelayanan publik, Kepala Desa wajib….",
    options: {
      a: "Membeda-bedakan warga",
      b: "Memberikan pelayanan yang sama",
      c: "Mengabaikan keluhan",
      d: "Mempersulit prosedur"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa wajib memberikan pelayanan yang sama kepada semua warga."
  },
  {
    id: 51,
    question: "Kepala Desa dalam mengelola dana desa harus….",
    options: {
      a: "Sesuai kepentingan pribadi",
      b: "Tanpa perencanaan",
      c: "Sesuai aturan dan transparan",
      d: "Bebas penggunaan"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus mengelola dana desa sesuai aturan dan transparan."
  },
  {
    id: 52,
    question: "Dalam pembinaan generasi muda, Kepala Desa berperan….",
    options: {
      a: "Membatasi aktivitas",
      b: "Memfasilitasi pengembangan",
      c: "Mengabaikan potensi",
      d: "Menghambat kreativitas"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa berperan memfasilitasi pengembangan generasi muda."
  },
  {
    id: 53,
    question: "Kepala Desa dalam menjaga keamanan harus….",
    options: {
      a: "Bekerja sendiri",
      b: "Melibatkan masyarakat",
      c: "Mengabaikan ancaman",
      d: "Menolak bantuan"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus melibatkan masyarakat dalam menjaga keamanan."
  },
  {
    id: 54,
    question: "Dalam pengembangan teknologi, Kepala Desa sebaiknya….",
    options: {
      a: "Menolak modernisasi",
      b: "Mengadopsi yang sesuai",
      c: "Mengabaikan kemajuan",
      d: "Menutup diri"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa sebaiknya mengadopsi teknologi yang sesuai dengan kebutuhan desa."
  },
  {
    id: 55,
    question: "Apa arti Forum Musyawarah Desa dalam proses pertanggungjawaban Kepala Desa?",
    options: {
      a: "Ini berfungsi sebagai platform transparansi",
      b: "Ini membatasi keterlibatan masyarakat",
      c: "Ini mempromosikan pemerintahan otoriter",
      d: "Ini merusak langkah-langkah pertanggungjawaban"
    },
    correctAnswer: "a",
    explanation: ""
  },
  {
    id: 56,
    question: "Berapa masa jabatan kepala desa setelah perubahan Undang-Undang Nomor 3 Tahun 2024?",
    options: ["4 tahun", "8 tahun", "10 tahun", "12 tahun"],
    correctAnswer: 1,
    explanation: "Setelah perubahan Undang-Undang, masa jabatan kepala desa menjadi 8 tahun."
  },
  {
    id: 57,
    question: "Berapa periode maksimal kepala desa dapat dipilih kembali setelah perubahan undang-undang?",
    options: ["1 periode", "2 periode", "3 periode", "4 periode"],
    correctAnswer: 1,
    explanation: "Kepala desa dapat dipilih kembali maksimal 2 periode setelah perubahan undang-undang."
  },
  {
    id: 58,
    question: "Alokasi Dana Desa setelah perubahan UU Desa harus minimal berapa persen dari total transfer ke daerah?",
    options: ["5%", "8%", "10%", "15%"],
    correctAnswer: 2,
    explanation: "Alokasi Dana Desa minimal 10% dari total transfer ke daerah sesuai dengan perubahan Undang-Undang."
  },
  {
    id: 59,
    question: "Apa yang dapat dilakukan Desa berdasarkan kewenangan yang lebih luas sesuai dengan UU Desa yang baru?",
    options: ["Mengelola sumber daya alam", "Mengelola bandara", "Mengelola pertambangan", "Mengelola perusahaan swasta"],
    correctAnswer: 0,
    explanation: "Desa dapat mengelola sumber daya alam berdasarkan kewenangan yang lebih luas dalam Undang-Undang baru."
  },
  {
    id: 60,
    question: "Apa status perangkat desa setelah perubahan UU Desa menjadi berdasarkan pegawai pemerintah dengan perjanjian kerja (PPPK)?",
    options: ["Pegawai PNS", "Pegawai BUMN", "Pegawai Swasta", "Pegawai PPPK"],
    correctAnswer: 3,
    explanation: "Status perangkat desa berubah menjadi pegawai pemerintah dengan perjanjian kerja (PPPK) setelah perubahan Undang-Undang."
  },
  {
    id: 61,
    question: "Peningkatan kelembagaan desa bertujuan untuk meningkatkan apa?",
    options: ["Partisipasi masyarakat dalam pembangunan desa", "Pengaruh pemerintah pusat", "Otonomi daerah", "Peran tentara dalam desa"],
    correctAnswer: 0,
    explanation: "Peningkatan kelembagaan desa bertujuan untuk meningkatkan partisipasi masyarakat dalam pembangunan desa."
  },
  {
    id: 62,
    question: "Apa yang diatur dalam UU Desa baru mengenai penguatan peran perempuan dalam pembangunan desa?",
    options: ["Pemberian beasiswa", "Pelarangan bekerja", "Pengecualian dalam pemilihan kepala desa", "Peningkatan peran"],
    correctAnswer: 3,
    explanation: "UU Desa baru mengatur penguatan peran perempuan dalam pembangunan desa dengan tujuan meningkatkan peran mereka."
  },
  {
    id: 63,
    question: "Apa yang dilakukan Badan Usaha Milik Desa (BUMDes) untuk meningkatkan perekonomian desa?",
    options: ["Menyulap uang", "Menjalankan bisnis", "Meminjam uang", "Menabung dana desa"],
    correctAnswer: 1,
    explanation: "BUMDes menjalankan bisnis untuk meningkatkan perekonomian desa sesuai dengan peraturan UU Desa."
  },
  {
    id: 64,
    question: "Berdasarkan UU Desa baru, siapakah yang memiliki kewenangan untuk membentuk Badan Usaha Milik Desa (BUMDes)?",
    options: ["Pemerintah Pusat", "Pemerintah Provinsi", "Kepala Desa", "Masyarakat Desa"],
    correctAnswer: 3,
    explanation: "Masyarakat desa memiliki kewenangan untuk membentuk BUMDes berdasarkan UU Desa baru."
  },
  {
    id: 65,
    question: "Apa yang diatur dalam UU Desa baru mengenai peningkatan kesejahteraan kepala desa dan perangkat desa?",
    options: ["Asuransi kesehatan", "Tunjangan pensiun", "Peningkatan gaji", "Izin libur tambahan"],
    correctAnswer: 2,
    explanation: "UU Desa baru mengatur peningkatan gaji untuk meningkatkan kesejahteraan kepala desa dan perangkat desa."
  },
  {
    id: 66,
    question: "Apa peran Perangkat Desa menurut Pasal 48?",
    options: ["Mendukung Gubernur", "Membantu Walikota", "Membantu Kepala Desa", "Memberi nasihat kepada Menteri"],
    correctAnswer: 2,
    explanation: "Peran Perangkat Desa adalah untuk membantu Kepala Desa dalam melaksanakan tugas dan wewenangnya."
  },
  {
    id: 67,
    question: "Bagaimana Perangkat Desa diangkat menurut Pasal 49?",
    options: ["Oleh Presiden", "Setelah berkonsultasi dengan Camat", "Melalui pemilihan umum", "Secara acak dipilih"],
    correctAnswer: 1,
    explanation: "Perangkat Desa diangkat oleh Kepala Desa setelah berkonsultasi dengan Camat atas nama Bupati/Walikota."
  },
  {
    id: 68,
    question: "Apa syarat kualifikasi Perangkat Desa sesuai Pasal 50?",
    options: ["Harus memiliki keyakinan agama tertentu", "Persyaratan pendidikan minimum", "Rentang usia", "Harus menjadi pemilik tanah"],
    correctAnswer: 2,
    explanation: "Kualifikasi Perangkat Desa termasuk rentang usia 20-42 tahun."
  },
  {
    id: 69,
    question: "Apa hak yang dimiliki oleh Perangkat Desa menurut Pasal 50A?",
    options: ["Tidak ada penghasilan tetap", "Tidak ada manfaat kesejahteraan sosial", "Manfaat pensiun", "Penghasilan bulanan dan manfaat jaminan sosial"],
    correctAnswer: 3,
    explanation: "Perangkat Desa memiliki hak untuk menerima penghasilan tetap, tunjangan, dan jaminan sosial."
  },
  {
    id: 70,
    question: "Kepada siapa Perangkat Desa melaporkan tugas mereka?",
    options: ["Kepala Desa", "Presiden", "Camat", "Jaksa Distrik"],
    correctAnswer: 0,
    explanation: "Perangkat Desa bertanggung jawab kepada Kepala Desa."
  },  
  {
    id: 71,
    question: "Bagaimana Perangkat Desa dipilih berdasarkan Pasal 50?",
    options: ["Undian", "Penunjukan langsung oleh Gubernur", "Setelah memenuhi kriteria tertentu", "Melalui pemungutan suara publik"],
    correctAnswer: 2,
    explanation: "Perangkat Desa dipilih dari warga Desa yang memenuhi kriteria tertentu."
  },
  {
    id: 72,
    question: "Apa rentang usia yang diperlukan untuk Perangkat Desa?",
    options: ["18-30 tahun", "25-40 tahun", "20-42 tahun", "30-50 tahun"],
    correctAnswer: 2,
    explanation: "Rentang usia yang diperlukan untuk menjadi Perangkat Desa adalah 20-42 tahun."
  },
  {
    id: 73,
    question: "Siapakah yang tidak dapat menjadi calon anggota Badan Permusyawaratan Desa?",
    options: ["Pegawai Negeri", "Perangkat Desa", "Petani", "Pedagang"],
    correctAnswer: 1,
    explanation: "Perangkat Desa tidak dapat menjadi calon anggota BPD karena berpotensi menimbulkan konflik kepentingan."
  },
  {
    id: 74,
    question: "Manfaat apa yang diterima oleh Perangkat Desa sesuai Pasal 50A?",
    options: ["Hanya penghasilan bulanan", "Tidak ada manfaat", "Penghasilan bulanan, kesejahteraan sosial, dan penerimaan lainnya yang sah", "Bonus tidak teratur"],
    correctAnswer: 2,
    explanation: "Perangkat Desa menerima penghasilan tetap, kesejahteraan sosial, dan penerimaan lainnya yang sah."
  },
  {
    id: 75,
    question: "Apa tujuan Perangkat Desa seperti yang disebutkan dalam teks?",
    options: ["Membantu Menteri", "Mendukung polisi daerah", "Membantu Kepala Desa", "Mengawasi urusan internasional"],
    correctAnswer: 2,
    explanation: "Tujuan utama Perangkat Desa adalah membantu Kepala Desa menjalankan tugas dan kebijakan."
  },
  {
    id: 76,
    question: "Siapa yang bertanggung jawab atas Perangkat Desa dalam tugas mereka?",
    options: ["Menteri", "Camat", "Kepala Desa", "Mereka sendiri"],
    correctAnswer: 2,
    explanation: "Perangkat Desa bertanggung jawab langsung kepada Kepala Desa."
  },
  {
    id: 77,
    question: "Kualifikasi pendidikan minimum apa yang diperlukan untuk Perangkat Desa?",
    options: ["Gelar sarjana", "Pendidikan sekolah menengah", "Tidak ada tingkat pendidikan tertentu", "Gelar master"],
    correctAnswer: 1,
    explanation: "Syarat pendidikan minimal adalah lulus sekolah menengah umum atau sederajat."
  },
  {
    id: 78,
    question: "Badan mana yang menyetujui penunjukan Perangkat Desa sesuai Pasal 49?",
    options: ["Kantor polisi setempat", "Sekretaris Distrik", "Camat atas nama Bupati/Walikota", "Dewan Desa"],
    correctAnswer: 2,
    explanation: "Penunjukan dilakukan oleh Kepala Desa dengan persetujuan Camat atas nama Bupati/Walikota."
  },
  {
    id: 79,
    question: "Berapa bagian yang terdiri dari Perangkat Desa menurut Pasal 48?",
    options: ["Tiga", "Empat", "Lima", "Enam"],
    correctAnswer: 0,
    explanation: "Perangkat Desa terdiri dari tiga unsur: sekretariat, pelaksana kewilayahan, dan pelaksana teknis."
  },
  {
    id: 80,
    question: "Apa yang dipastikan oleh Perangkat Desa dalam pelaksanaan?",
    options: ["Kebijakan nasional", "Perjanjian internasional", "Kebijakan Desa", "Undang-undang negara"],
    correctAnswer: 2,
    explanation: "Perangkat Desa memastikan pelaksanaan kebijakan Desa berjalan dengan baik."
  },
  {
    id: 81,
    question: "Berapa batas usia individu untuk diangkat sebagai Perangkat Desa?",
    options: ["18-35 tahun", "20-42 tahun", "30-50 tahun", "25-40 tahun"],
    correctAnswer: 1,
    explanation: "Batas usia yang ditetapkan adalah 20 hingga 42 tahun."
  },
  {
    id: 82,
    question: "Dalam kapasitas apa Perangkat Desa membantu Kepala Desa?",
    options: ["Tugas administratif dan teknis", "Manajemen keuangan saja", "Manajemen media sosial", "Masalah hukum"],
    correctAnswer: 0,
    explanation: "Perangkat Desa membantu dalam tugas administratif dan teknis."
  },
  {
    id: 83,
    question: "Apa syarat pendidikan minimal yang diperlukan untuk menjadi anggota Badan Permusyawaratan Desa?",
    options: ["SD", "SMP", "SMA", "S1"],
    correctAnswer: 1,
    explanation: "Syarat minimal pendidikan untuk menjadi anggota BPD adalah tamat SMP atau sederajat."
  },
  {
    id: 84,
    question: "Apa tanggung jawab utama Perangkat Desa?",
    options: ["Menangani hubungan internasional", "Membantu Gubernur", "Mendukung Kepala Desa", "Konservasi lingkungan"],
    correctAnswer: 2,
    explanation: "Perangkat Desa bertugas mendukung Kepala Desa dalam pelaksanaan kebijakan dan administrasi."
  },
  {
    id: 85,
    question: "Berapa umur minimal seseorang untuk menjadi calon anggota Badan Permusyawaratan Desa?",
    options: ["16 tahun", "18 tahun", "20 tahun", "22 tahun"],
    correctAnswer: 2,
    explanation: "Umur minimal untuk menjadi calon anggota BPD adalah 20 tahun."
  },
  {
    id: 86,
    question: "Siapa yang menetapkan bakal calon Kepala Desa?",
    options: ["Masyarakat Desa", "Panitia pemilihan Kepala Desa", "Badan Permusyawaratan Desa", "Bupati/Walikota"],
    correctAnswer: 1,
    explanation: "Panitia pemilihan Kepala Desa yang menetapkan bakal calon Kepala Desa berdasarkan Pasal 36 ayat (1)."
  },
  {
    id: 87,
    question: "Bagaimana cara calon Kepala Desa diumumkan kepada masyarakat Desa?",
    options: ["Di media sosial", "Di sekolah Desa", "Di tempat umum sesuai kondisi sosial budaya", "Di kantor Kepala Desa"],
    correctAnswer: 2,
    explanation: "Calon Kepala Desa diumumkan kepada masyarakat Desa di tempat umum sesuai dengan kondisi sosial budaya masyarakat Desa berdasarkan Pasal 36 ayat (2)."
  },
  {
    id: 88,
    question: "Apa yang harus dipenuhi oleh Calon Kepala Desa untuk melakukan kampanye?",
    options: ["Kebutuhan pribadi", "Syarat perundang-undangan", "Persetujuan tetangga", "Kondisi cuaca"],
    correctAnswer: 1,
    explanation: "Calon Kepala Desa harus memenuhi syarat perundang-undangan untuk melakukan kampanye berdasarkan Pasal 36 ayat (3)."
  },
  {
    id: 89,
    question: "Berapa lama Badan Permusyawaratan Desa memiliki waktu untuk menyampaikan nama calon Kepala Desa terpilih kepada Bupati/Walikota?",
    options: ["3 hari", "7 hari", "14 hari", "30 hari"],
    correctAnswer: 1,
    explanation: "Badan Permusyawaratan Desa memiliki waktu paling lama 7 hari untuk menyampaikan nama calon Kepala Desa terpilih kepada Bupati/Walikota berdasarkan Pasal 37 ayat (4)."
  },
  {
    id: 90,
    question: "Siapa yang mengesahkan calon Kepala Desa terpilih menjadi Kepala Desa?",
    options: ["Masyarakat Desa", "Panitia pemilihan", "Badan Permusyawaratan Desa", "Bupati/Walikota"],
    correctAnswer: 3,
    explanation: "Bupati/Walikota yang mengesahkan calon Kepala Desa terpilih menjadi Kepala Desa berdasarkan Pasal 37 ayat (5)."
  },
  {
    id: 91,
    question: "Apa yang harus dilakukan Bupati/Walikota dalam hal terjadi perselisihan hasil pemilihan Kepala Desa?",
    options: ["Memberikan hadiah kepada calon Kepala Desa", "Menyelesaikan perselisihan", "Memilih calon Kepala Desa baru", "Menyuruh panitia pemilihan mengadakan pemilihan ulang"],
    correctAnswer: 1,
    explanation: "Sesuai dengan Pasal 37 ayat (6), Bupati/Walikota memiliki kewajiban untuk menyelesaikan perselisihan hasil pemilihan Kepala Desa dalam jangka waktu yang ditentukan."
  },
  {
    id: 92,
    question: "Kapan calon Kepala Desa terpilih dilantik?",
    options: ["10 hari setelah keputusan Bupati/Walikota", "Paling lama 30 hari setelah keputusan Bupati/Walikota", "Paling lama 60 hari setelah keputusan Bupati/Walikota", "Tidak dijelaskan dalam Pasal 38"],
    correctAnswer: 1,
    explanation: "Menurut Pasal 38 ayat (1), calon Kepala Desa terpilih dilantik paling lama 30 hari setelah penerbitan keputusan."
  },
  {
    id: 93,
    question: "Apakah Kepala Desa terpilih harus bersumpah sebelum memangku jabatannya?",
    options: ["Ya", "Tidak", "Hanya jika diinginkan", "Opsional"],
    correctAnswer: 0,
    explanation: "Sesuai Pasal 38 ayat (2), Kepala Desa terpilih harus bersumpah/berjanji sebelum memangku jabatannya."
  },
  {
    id: 94,
    question: "Siapa yang menentukan calon Kepala Desa terpilih?",
    options: ["Badan Permusyawaratan Desa", "Bupati/Walikota", "Panitia pemilihan Kepala Desa", "Masyarakat Desa"],
    correctAnswer: 2,
    explanation: "Panitia pemilihan Kepala Desa yang menetapkan calon terpilih berdasarkan hasil pemungutan suara."
  },
  {
    id: 95,
    question: "Apa yang harus dilakukan Badan Permusyawaratan Desa setelah menerima laporan panitia pemilihan?",
    options: ["Melakukan penelitian lagi", "Menyampaikan nama calon Kepala Desa terpilih kepada masyarakat Desa", "Menyampaikan nama calon Kepala Desa terpilih kepada Bupati/Walikota", "Memilih Kepala Desa secara langsung"],
    correctAnswer: 2,
    explanation: "Badan Permusyawaratan Desa harus menyampaikan nama calon Kepala Desa terpilih kepada Bupati/Walikota sesuai Pasal 37 ayat (4)."
  },
  {
    id: 96,
    question: "Bagaimana calon Kepala Desa dapat memenangkan pemilihan?",
    options: ["Dengan memperoleh suara terbanyak", "Dengan memberikan uang kepada pemilih", "Dengan memperoleh dukungan asing", "Tidak dijelaskan dalam Pasal 37"],
    correctAnswer: 0,
    explanation: "Calon Kepala Desa memenangkan pemilihan dengan memperoleh suara terbanyak menurut Pasal 37 ayat (1)."
  },
  {
    id: 97,
    question: "Apa yang harus dilakukan Bupati/Walikota 30 hari setelah menerima hasil pemilihan?",
    options: ["Melarang pelantikan Kepala Desa", "Mengesahkan calon Kepala Desa terpilih menjadi Kepala Desa", "Menggelar pesta rakyat", "Menyampaikan laporan kepada masyarakat Desa"],
    correctAnswer: 1,
    explanation: "Bupati/Walikota harus mengesahkan calon Kepala Desa terpilih paling lama 30 hari setelah menerima hasil pemilihan (Pasal 37 ayat 5)."
  },
  {
    id: 98,
    question: "Apa yang harus dilakukan Bupati/Walikota jika terjadi perselisihan hasil pemilihan?",
    options: ["Menunda keputusan", "Menyelesaikan perselisihan dalam waktu yang ditentukan", "Menarik diri dari proses pemilihan", "Meminta bantuan kepada pihak berwenang"],
    correctAnswer: 1,
    explanation: "Jika terjadi perselisihan hasil pemilihan, Bupati/Walikota wajib menyelesaikannya sesuai Pasal 37 ayat (6)."
  },
  {
    id: 99,
    question: "Apakah panitia pemilihan Kepala Desa memiliki kewajiban menetapkan calon Kepala Desa terpilih?",
    options: ["Ya", "Tidak", "Hanya jika diminta", "Opsional"],
    correctAnswer: 0,
    explanation: "Panitia pemilihan wajib menetapkan calon Kepala Desa terpilih berdasarkan hasil pemungutan suara (Pasal 37 ayat 2)."
  },
  {
    id: 100,
    question: "Berapa waktu maksimal yang dimiliki Bupati/Walikota untuk mengesahkan calon Kepala Desa terpilih?",
    options: ["14 hari", "30 hari", "60 hari", "90 hari"],
    correctAnswer: 1,
    explanation: "Bupati/Walikota memiliki waktu maksimal 30 hari untuk mengesahkan calon Kepala Desa terpilih (Pasal 37 ayat 5)."
  },
  {
    id: 101,
    question: "Apa yang harus dilakukan Calon Kepala Desa setelah ditetapkan sebagai calon Kepala Desa oleh panitia pemilihan?",
    options: ["Melakukan umum di desa tetangga", "Mengajukan resign dari pekerjaan sebelumnya", "Melakukan kampanye sesuai aturan", "Menghilang dari publik"],
    correctAnswer: 2,
    explanation: "Calon Kepala Desa harus melakukan kampanye sesuai aturan setelah ditetapkan (Pasal 36 ayat 3)."
  },
  {
    id: 102,
    question: "Apakah Badan Permusyawaratan Desa memiliki waktu yang ditentukan untuk menyampaikan nama calon Kepala Desa terpilih?",
    options: ["Ya, paling lama 30 hari", "Tidak ada batas waktu", "14 hari sesudah pemilihan", "60 hari sejak pemungutan suara"],
    correctAnswer: 0,
    explanation: "Badan Permusyawaratan Desa harus menyampaikan nama calon paling lama 30 hari (Pasal 37 ayat 3)."
  },
  {
    id: 103,
    question: "Siapakah yang secara resmi mengesahkan calon Kepala Desa terpilih?",
    options: ["Panitia pemilihan Kepala Desa", "Bupati/Walikota", "Kementerian Dalam Negeri", "Presiden"],
    correctAnswer: 1,
    explanation: "Bupati/Walikota secara resmi mengesahkan calon Kepala Desa terpilih (Pasal 37 ayat 5)."
  },
  {
    id: 104,
    question: "Apakah Kepala Desa terpilih harus dilantik sebelum memangku jabatannya?",
    options: ["Ya", "Tidak", "Tergantung pada keinginan Kepala Desa terpilih", "Tidak disebutkan dalam Pasal 36"],
    correctAnswer: 0,
    explanation: "Kepala Desa harus dilantik sebelum memangku jabatannya sesuai Pasal 38 ayat (1)."
  },
  {
    id: 105,
    question: "Berapa lama waktu yang dimiliki Bupati/Walikota untuk menyelesaikan perselisihan hasil pemilihan Kepala Desa?",
    options: ["14 hari", "30 hari", "60 hari", "90 hari"],
    correctAnswer: 1,
    explanation: "Bupati/Walikota memiliki waktu 30 hari untuk menyelesaikan perselisihan hasil pemilihan sesuai Pasal 37 ayat (6)."
  }
  
].map(transformQuestion);