import React from 'react'
import { Header, Features, Testimonial, Pricing, Footer } from './index'

function Home() {
    return (
        <div className='bg-gray-100 dark:bg-slate-900'>
            <div className='hero'>
                <Header />
            </div>
            <main>
                <Features />
                <Testimonial />
                <Pricing />
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Home
