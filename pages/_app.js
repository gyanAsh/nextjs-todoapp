import AuthState from '../context/AuthState'
import Layout from '../layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>  
      <Layout>  
      <Component {...pageProps} />
      </Layout>
    </AuthState>
  ) 
}

export default MyApp
