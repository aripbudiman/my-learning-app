module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', // fitur baru
      'fix', // perbaikan bug
      'docs', // dokumentasi
      'style', // gaya kode
      'refactor', // perubahan struktur kode
      'perf', // perbaikan kinerja
      'test', // pengujian
      'build', // perubahan build
      'ci', // integrasi kontinu
      'chore', // perawatan
      'revert', // pembatalan perubahan
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};