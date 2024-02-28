// pages/map/index.js
import Head from 'next/head'
import { getRandomCoordinates } from '../../utils'

const MapPage = () => {
  const randomRegion = getRandomRegion() // どれか一つの地方をランダムに選択
  const randomPrefecture = getRandomPrefectureInRegion(randomRegion) // 選択された地方から都道府県をランダムに選択
  const randomPrefectureLocation = prefectureCoordinates[randomPrefecture]

  return (
    <div>
      <Head>
        <title>Google Map in Next.js</title>
        <meta name='description' content='Displaying Google Map in Next.js' />
      </Head>

      <main>
        {/* <iframe> コードを直接埋め込む */}
        <iframe
          width='600'
          height='450'
          frameBorder='0'
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${randomPrefectureLocation.lat},${randomPrefectureLocation.lng}`}
          allowFullScreen
        ></iframe>
      </main>
    </div>
  )
}

// ランダムに地方を選択する関数
const getRandomRegion = () => {
  const regions = Object.keys(prefecturesByRegion)
  return regions[Math.floor(Math.random() * regions.length)]
}

// 選択された地方からランダムに都道府県を選択する関数
const getRandomPrefectureInRegion = region => {
  const prefecturesInRegion = prefecturesByRegion[region]
  return prefecturesInRegion[
    Math.floor(Math.random() * prefecturesInRegion.length)
  ]
}

export default MapPage
