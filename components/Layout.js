import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    const { children } = props;
    return (
        <div className='relative flex flex-col min-h-screen bg-slate-800 text-white'> 
        <Header/>
        <main className='flex-1 flex flex-col p-4'>
            {children}
        </main>
        <Footer/>
        </div>
    )
}
export default Layout;