import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hidey">
      <Head>
        <title>Instagram Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>This is the INSTAGRAM</h1> */}
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  )
}

export default Home
