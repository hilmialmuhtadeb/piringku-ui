import React from 'react';

function ActivitiesModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const acticityInfos = [
    {
      type: 'Ringan',
      activities: [
        'Berjalan santai di rumah, kantor, atau pusat perbelanjaan',
        'Duduk bekerja di depan komputer, membaca, menulis, menyetir, mengoperasikan mesin dengan posisi duduk atau berdiri',
        'Berdiri melakukan pekerjaan rumah tangga ringan seperti mencuci piring, setrika, memasak, menyapu, mengepel lantai, menjahit',
        'Latihan peregangan dan pemanasan dengan lambat',
        'Membuat prakarya, bermain kartu, bermain video game, menggambar, melukis, bermain musikBermain billyard, memancing, memanah, menembak, golf, naik kuda'
      ]
    },
    {
      type: 'Sedang',
      activities: [
        'Berjalan cepat (kecepatan 5 km/jam) pada permukaan rata di dalam atau di luar rumah, di kelas, ke tempat kerja atau ke toko; dan jalan santai, jalan sewaktu istirahat kerja',
        'Pekerjaan tukang kayu, membawa dan menyusun balok kayu, membersihkan rumput dengan mesin pemotong rumput',
        'Memindahkan perabot ringan, berkebun, menanam pohon, mencuci mobil',
        'Bulutangkis rekreasional, bermain rangkap bola, dansa, tenis meja, bowling, bersepeda pada lintasan datar, volley non kompetitif, bermain skate board, ski air, berlayar'
      ]
    },
    {
      type: 'Berat',
      activities: [
        'Berjalan dengan sangat cepat (kecepatan lebih dari 5 km/jam), berjalan mendaki bukit, berjalan dengan membawa beban di punggung, naik gunung, jogging (kecepatan 8 km/jam) dan berlari',
        'Pekerjaan seperti mengangkut beban berat, menyekop pasir, memindahkan batu bata, menggali selokan, mencangkul',
        'Pekerjaan rumah seperti memindahkan perabot yang berat, menggendong anak, bermain aktif dengan anak',
        'Bersepeda lebih dari 15 Km per jam dengan lintasan mendaki, bermain basket, cross country, badminton kompetitif, volley kompetitif, sepak bola, tenis single, tinju.'
      ]
    }
  ]

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg z-10">
        <h1 className="text-2xl mb-2 font-bold text-center">Kategori Aktivitas</h1>
        {
          acticityInfos.map((item, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl mb-2 font-semibold">{item.type}</h2>
              <ul className="list-disc list-inside text-sm">
                {item.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          ))
        }
        <button
          className="bg-black text-white py-2 px-4 rounded-lg mt-4 -left w-full text-center"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ActivitiesModal;