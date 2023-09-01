import axios from 'axios'
import React, { useEffect } from 'react'
import Spinner from '../components/Spinner'

const Recommend = () => {
  const [weight, setWeight] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [age, setAge] = React.useState(0)
  const [sex, setSex] = React.useState('L')
  const [activity, setActivity] = React.useState('ringan')
  const [food, setFood] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const getRecommendationFoods = async () => {
    setFood(null)
    setIsLoading(true)
    
    const data = {
      berat_badan: weight,
      tinggi_badan: height,
      umur: age,
      jenis_kelamin: sex,
      aktivitas_fisik: activity
    }

    setTimeout(async () => {
      const res = await axios.post('http://localhost:8000/recommend-foods/', data)
      setFood(res.data)
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    console.log(food)
  }, [food])

  return (
    <div className='max-w-screen-xl mx-auto my-8 grid grid-cols-7 gap-x-8'>
      <div className='col-span-4'>
        <h1 className='font-black text-2xl mb-1'>Rekomendasi Makanan</h1>
        <p>Kami akan memberikan rekomendasi makanan berdasarkan Angka Kebutuhan Gizi harian kamu.</p>
        <div className="my-8 w-64">
          <div className="mb-4">
            <label className='block mb-1 font-medium'>Berat Badan</label>
            <div className="flex items-center gap-x-2">
              <input type="number" className='py-2 px-4 rounded' min={0} value={weight} onChange={e => setWeight(e.target.value)} />
              <span>Kilogram</span>
            </div>
          </div>
          <div className="mb-4">
            <label className='block mb-1 font-medium'>Tinggi Badan</label>
            <div className="flex items-center gap-x-2">
              <input type="number" className='py-2 px-4 rounded' min={0} value={height} onChange={e => setHeight(e.target.value)} />
              <span>Centimeter</span>
            </div>
          </div>
          <div className="mb-4">
            <label className='block mb-1 font-medium'>Usia</label>
            <div className="flex items-center gap-x-2">
              <input type="number" className='py-2 px-4 rounded' min={0} value={age} onChange={e => setAge(e.target.value)} />
              <span>Tahun</span>
            </div>
          </div>
          <div className="mb-4">
            <label className='block mb-1 font-medium'>Jenis Kelamin</label>
            <select className='w-full rounded' onChange={e => setSex(e.target.value)}>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          <div className="mb-4">
            <label className='block mb-1 font-medium'>Aktivitas Fisik</label>
            <select className='w-full rounded' onChange={e => setActivity(e.target.value)}>
              <option value="ringan">Ringan</option>
              <option value="sedang">Sedang</option>
              <option value="berat">Berat</option>
            </select>
          </div>
          <div className="my-8">
            <button
              className='p-4 rounded bg-emerald-600 hover:bg-emerald-800 text-white font-bold w-full border-0'
              onClick={getRecommendationFoods}
            >Dapatkan Rekomendasi</button>
          </div>
        </div>
      </div>
      { food && (
        <div className='col-span-3'>
          <h2 className='font-bold text-xl'>Rekomendasi Komposisi Makanan</h2>
          <table className="table-auto my-4 w-full bg-gray-100">
            <thead>
              <tr>
                <th className='border border-gray-400 px-4 py-2'>Nama</th>
                <th className='border border-gray-400 px-4 py-2'>Kategori</th>
                <th className='border border-gray-400 px-4 py-2'>Berat</th>
              </tr>
            </thead>
            <tbody>
              {food.recommended_foods.map((item, index) => (
                <tr key={index}>
                  <td className='border border-gray-400 px-4 py-2'>{item.Makanan}</td>
                  <td className='border border-gray-400 px-4 py-2'>{item.Kategori}</td>
                  <td className='border border-gray-400 px-4 py-2'>{item.Berat} gram</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Komposisi makanan tersebut merupakan porsi yang disarankan untuk ada dalam piring anda. Jumlah kalori pada piring tersebut sebesar <span className='italic font-bold'>{food.total_energy_recommended} kkal</span>.</p>
        </div>
      )}
      { isLoading && (
        <div className='col-span-3'>
          <div className='w-full h-full flex justify-center items-center'>
            <Spinner />
          </div>
        </div>
      )}
    </div>
  )
}

export default Recommend