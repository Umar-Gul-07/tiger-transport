import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({ children }) {

    return (
        <>
            <Header />
            <main>
            {children}
            </main>
            <Footer />

        </>
    )
}

export default Base