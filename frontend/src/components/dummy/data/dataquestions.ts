export const dataquestions = [
  {
    id: 1,
    title: "Soal 1: SELECT Dasar",
    description: "Tampilkan SEMUA data dari tabel karyawan",
    difficulty: "Easy",
    hint: "Gunakan SELECT * untuk menampilkan semua kolom",
    expectedQuery: "SELECT * FROM karyawan",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized === "select * from karyawan" ||
        normalized === "select * from karyawan;";
    }
  },
  {
    id: 2,
    title: "Soal 2: SELECT Kolom Tertentu",
    description: "Tampilkan hanya kolom nama dan email dari tabel karyawan",
    difficulty: "Easy",
    hint: "Sebutkan nama kolom yang ingin ditampilkan setelah SELECT",
    expectedQuery: "SELECT nama, email FROM karyawan",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("select") &&
        normalized.includes("nama") &&
        normalized.includes("email") &&
        normalized.includes("from karyawan");
    }
  },
  {
    id: 3,
    title: "Soal 3: WHERE Sederhana",
    description: "Tampilkan semua karyawan yang bekerja di departemen_id = 1",
    difficulty: "Easy",
    hint: "Gunakan WHERE untuk filter berdasarkan kondisi",
    expectedQuery: "SELECT * FROM karyawan WHERE departemen_id = 1",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where departemen_id = 1");
    }
  },
  {
    id: 4,
    title: "Soal 4: WHERE dengan Kondisi String",
    description: "Tampilkan semua karyawan dengan status 'Aktif'",
    difficulty: "Easy",
    hint: "String harus diapit dengan tanda kutip tunggal",
    expectedQuery: "SELECT * FROM karyawan WHERE status = 'Aktif'",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where status = 'aktif'");
    }
  },
  {
    id: 5,
    title: "Soal 5: LIKE Pattern Matching",
    description: "Tampilkan karyawan yang namanya mengandung kata 'Dewi'",
    difficulty: "Medium",
    hint: "Gunakan LIKE dengan % sebagai wildcard",
    expectedQuery: "SELECT * FROM karyawan WHERE nama LIKE '%Dewi%'",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where nama like '%dewi%'");
    }
  },
  {
    id: 6,
    title: "Soal 6: LIKE dengan Pattern Awal",
    description: "Tampilkan karyawan yang namanya dimulai dengan huruf 'R'",
    difficulty: "Medium",
    hint: "Gunakan LIKE 'R%' untuk mencari yang dimulai dengan R",
    expectedQuery: "SELECT * FROM karyawan WHERE nama LIKE 'R%'",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where nama like 'r%'");
    }
  },
  {
    id: 7,
    title: "Soal 7: IS NULL",
    description: "Tampilkan karyawan yang tidak memiliki email (email IS NULL)",
    difficulty: "Medium",
    hint: "Gunakan IS NULL untuk mencari nilai NULL",
    expectedQuery: "SELECT * FROM karyawan WHERE email IS NULL",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where email is null");
    }
  },
  {
    id: 8,
    title: "Soal 8: IS NOT NULL",
    description: "Tampilkan karyawan yang memiliki departemen (departemen_id IS NOT NULL)",
    difficulty: "Medium",
    hint: "Gunakan IS NOT NULL untuk mencari nilai yang tidak NULL",
    expectedQuery: "SELECT * FROM karyawan WHERE departemen_id IS NOT NULL",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where departemen_id is not null");
    }
  },
  {
    id: 9,
    title: "Soal 9: NOT Operator",
    description: "Tampilkan karyawan yang status-nya BUKAN 'Aktif'",
    difficulty: "Medium",
    hint: "Gunakan NOT atau != untuk negasi",
    expectedQuery: "SELECT * FROM karyawan WHERE status != 'Aktif'",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        (normalized.includes("where status != 'aktif'") ||
          normalized.includes("where status <> 'aktif'") ||
          normalized.includes("where not status = 'aktif'"));
    }
  },
  {
    id: 10,
    title: "Soal 10: AND Operator",
    description: "Tampilkan karyawan yang status-nya 'Aktif' DAN gaji lebih dari 9000000",
    difficulty: "Medium",
    hint: "Gunakan AND untuk menggabungkan dua kondisi",
    expectedQuery: "SELECT * FROM karyawan WHERE status = 'Aktif' AND gaji > 9000000",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where") &&
        normalized.includes("status = 'aktif'") &&
        normalized.includes("and") &&
        normalized.includes("gaji > 9000000");
    }
  },
  {
    id: 11,
    title: "Soal 11: OR Operator",
    description: "Tampilkan karyawan yang bekerja di departemen_id 1 ATAU departemen_id 2",
    difficulty: "Medium",
    hint: "Gunakan OR untuk kondisi alternatif",
    expectedQuery: "SELECT * FROM karyawan WHERE departemen_id = 1 OR departemen_id = 2",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where") &&
        ((normalized.includes("departemen_id = 1") &&
          normalized.includes("or") &&
          normalized.includes("departemen_id = 2")) ||
          normalized.includes("departemen_id in (1, 2)"));
    }
  },
  {
    id: 12,
    title: "Soal 12: Kombinasi AND dan OR",
    description: "Tampilkan karyawan yang (status = 'Aktif' DAN gaji > 8000000) ATAU departemen_id = 3",
    difficulty: "Hard",
    hint: "Gunakan tanda kurung untuk mengelompokkan kondisi",
    expectedQuery: "SELECT * FROM karyawan WHERE (status = 'Aktif' AND gaji > 8000000) OR departemen_id = 3",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where") &&
        normalized.includes("status = 'aktif'") &&
        normalized.includes("and") &&
        normalized.includes("gaji > 8000000") &&
        normalized.includes("or") &&
        normalized.includes("departemen_id = 3");
    }
  },
  {
    id: 13,
    title: "Soal 13: LIKE dan AND",
    description: "Tampilkan karyawan yang email-nya mengandung 'company.com' DAN status 'Aktif'",
    difficulty: "Hard",
    hint: "Kombinasikan LIKE dengan AND",
    expectedQuery: "SELECT * FROM karyawan WHERE email LIKE '%company.com%' AND status = 'Aktif'",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where") &&
        normalized.includes("email like '%company.com%'") &&
        normalized.includes("and") &&
        normalized.includes("status = 'aktif'");
    }
  },
  {
    id: 14,
    title: "Soal 14: IS NULL dan OR",
    description: "Tampilkan karyawan yang tidak punya email ATAU tidak punya departemen",
    difficulty: "Hard",
    hint: "Kombinasikan IS NULL dengan OR",
    expectedQuery: "SELECT * FROM karyawan WHERE email IS NULL OR departemen_id IS NULL",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where") &&
        normalized.includes("email is null") &&
        normalized.includes("or") &&
        normalized.includes("departemen_id is null");
    }
  },
  {
    id: 15,
    title: "Soal 15: Kompleks - Multiple Conditions",
    description: "Tampilkan karyawan yang: nama mengandung 'i', status BUKAN 'Resign', memiliki email (NOT NULL), dan (gaji > 7000000 ATAU departemen_id = 2)",
    difficulty: "Hard",
    hint: "Gunakan kombinasi LIKE, NOT, IS NOT NULL, AND, OR dengan tanda kurung",
    expectedQuery: "SELECT * FROM karyawan WHERE nama LIKE '%i%' AND status != 'Resign' AND email IS NOT NULL AND (gaji > 7000000 OR departemen_id = 2)",
    validateAnswer: (query) => {
      const normalized = query.toLowerCase().replace(/\s+/g, ' ').trim();
      return normalized.includes("from karyawan") &&
        normalized.includes("where") &&
        normalized.includes("nama like '%i%'") &&
        normalized.includes("status != 'resign'") &&
        normalized.includes("email is not null") &&
        normalized.includes("gaji > 7000000") &&
        normalized.includes("or") &&
        normalized.includes("departemen_id = 2");
    }
  }
];