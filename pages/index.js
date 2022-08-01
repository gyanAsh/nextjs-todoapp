import Head from 'next/head'
import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'

const Home=()=> {
  const { currentUser } = useAuth();

  return (
    < >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login />}
    </>
  )
}
export default Home;