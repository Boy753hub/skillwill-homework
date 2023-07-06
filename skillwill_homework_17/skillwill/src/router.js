import Main from "./pages/main"
import Facts from "./pages/facts"
import About from './pages/about'
import LinkLayouts from "./layouts/linkLayouts"
import ErrorPage from "./pages/errorPage"
import FactsLayout from "./layouts/factsLayout"

const router = [
   
    {
        element: <LinkLayouts/>,
        path: '/',
        children: [
            {
                element: <Main/>,
                index: true
            },
            {
                element: <About/>,
                path: 'about'
            },
            {
                element: <FactsLayout/>,
                path: 'facts',
                children:[
                    {
                        element: <Facts/>,
                        path: ':id'
                    },
                ]
            },

        ]
    },
    {
        element: <ErrorPage/>,
        path: '*'
    }
]

export default router