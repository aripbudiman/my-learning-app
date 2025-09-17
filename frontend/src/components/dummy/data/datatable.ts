export const datatable =[
    {
        name: 'karyawan',
        columns: ['id_karyawan', 'nama', 'email', 'departemen_id', 'gaji', 'tanggal_masuk', 'status'],
        data: [
            [1, 'Budi Santoso', 'budi@company.com', 1, 8500000, '2020-01-15', 'Aktif'],
            [2, 'Siti Rahma', 'siti@company.com', 2, 12000000, '2019-03-20', 'Aktif'],
            [3, 'Ahmad Wijaya', null, 1, 9000000, '2021-06-10', 'Aktif'],
            [4, 'Maya Putri', 'maya@company.com', 3, 7500000, '2022-02-01', 'Cuti'],
            [5, 'Rudi Hermawan', 'rudi@company.com', null, 6500000, '2023-01-05', 'Aktif'],
            [6, 'Lisa Dewi', 'lisa@company.com', 2, 11000000, '2018-09-12', 'Resign'],
            [7, 'Eko Prasetyo', null, 1, 8000000, '2021-11-20', 'Aktif'],
            [8, 'Nina Sari', 'nina@company.com', 3, null, '2023-05-15', 'Aktif'],
            [9, 'Doni Setiawan', 'doni@company.com', 2, 10500000, '2020-07-08', 'Aktif'],
            [10, 'Rina Marlina', null, null, 7000000, '2022-10-01', 'Aktif']
        ]
    },
    {
        name: 'departemen',
        columns: ['id_departemen', 'nama_departemen', 'lokasi', 'manager'],
        data: [
            [1, 'IT', 'Jakarta', 'Budi Santoso'],
            [2, 'Finance', 'Jakarta', 'Siti Rahma'],
            [3, 'HR', 'Bandung', 'Maya Putri'],
            [4, 'Marketing', 'Surabaya', null]
        ]
    },
    {
        name: 'proyek',
        columns: ['id_proyek', 'nama_proyek', 'karyawan_id', 'status_proyek', 'deadline'],
        data: [
            [101, 'Website Redesign', 1, 'Selesai', '2023-12-01'],
            [102, 'Mobile App', 3, 'Berjalan', '2024-03-15'],
            [103, 'System Integration', 1, 'Berjalan', null],
            [104, 'Data Migration', 7, 'Tertunda', '2024-02-28'],
            [105, 'Cloud Migration', null, 'Planning', '2024-06-30'],
            [106, 'Security Audit', 2, 'Selesai', '2023-11-15'],
            [107, 'Budget Analysis', 9, 'Berjalan', '2024-01-31'],
            [108, 'Recruitment System', 4, null, '2024-04-01']
        ]
    }
];