import { useState } from 'react'
import Head from 'next/head'

const MapPage = () => {
  const [query, setQuery] = useState('Tokyo+Station')
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
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${query}`}
          allowFullScreen
        ></iframe>
      </main>
    </div>
  )
}

export default MapPage
