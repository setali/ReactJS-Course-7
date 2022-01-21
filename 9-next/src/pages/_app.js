import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NextNprogress from 'nextjs-progressbar'
// import random from 'lodash/random'
import '../styles/global.css'

function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
  }, [])

  return (
    <div>
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {loading && 'Loading .....'}
      Random: {random(1, 100)}
      <Component {...pageProps} />
    </div>
  )
}
