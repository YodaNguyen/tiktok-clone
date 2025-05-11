import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Fragment} from 'react'

import {publicRoutes} from './routes/index.js'
import DefaultLayout from './components/Layout/DefaultLayout/index.js'
import HeaderOnly from './components/Layout/HeaderOnly/index.js'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = route.layout
                        if (Layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component

                        return <Route key={index} path={route.path} element={<Layout><Page></Page></Layout>}></Route>
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App