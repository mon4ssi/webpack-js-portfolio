import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Loading } from './components/Loading'
import OpenGraphImage from './assets/images/opengraph.png'

const url = new URL(window.location)

const About = React.lazy(() => import('@/components/About'))

const App = () => {
    return (
        <>
            <Helmet>
                <meta property="og:url" content={url.href} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Random Portfolio using ReactJS" />
                <meta property="og:description" content="A Random Profile Generator using ReactJS and the information of the randomuser.me API" />
                <meta property="og:image" content={OpenGraphImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={url.domain} />
                <meta property="twitter:url" content={url.href} />
                <meta name="twitter:title" content="Random Portfolio using ReactJS" />
                <meta name="twitter:description" content="A Random Profile Generator using ReactJS and the information of the randomuser.me API" />
                <meta name="twitter:image" content={OpenGraphImage} />
            </Helmet>

            <Suspense fallback={<Loading message={'loading...'} />}>
                <About />
            </Suspense>
        </>
    )
}

export default App
