import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './footer'
import Showcase from './Showcase'
import { useRouter } from 'next/router'

export default function Layout({ title, keyword, description, children }) {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
                <meta keyword="description" content={keyword}></meta>
            </Head>

            <Header />
            <div>

                {router.pathname === "/" && <Showcase />}
                {children}
                <Footer />
            </div>
        </div>
    )
}

Layout.default = {
    title: ' Music Event'
}