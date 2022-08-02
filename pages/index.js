import Head from 'next/head'
import { useEffect } from 'react';
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard';
import { useAuth } from '../context/AuthContext'

const Home=()=> {
  const { currentUser } = useAuth();
  useEffect(() => {
    console.log(currentUser);
  },[currentUser])
  return (
    < >
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {!currentUser && <Login />}
    {currentUser && <UserDashboard/>}
  </>
  )
}
export default Home;