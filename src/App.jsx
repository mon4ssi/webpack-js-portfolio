import React, { Suspense } from 'react'
import Loading from './components/Loading'

const About = React.lazy(() => import('@/components/About'))

const App = () => {
    return (
        <Suspense fallback={<Loading message={'loading...'} />}>
            <About />
        </Suspense>
    )
}

export default App
