
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function notFoundPage() {
    return (
        <Layout title="page not found">
            <div>
                404 page
                <h1>Nothing here</h1>
                <Link href='/'>
                    <a>Go back</a>
                </Link>
            </div>
        </Layout>
    )
}
