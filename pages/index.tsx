import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  )
}