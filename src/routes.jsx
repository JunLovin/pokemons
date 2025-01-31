import App from './App'
import DefaultError from './Errors/DefaultError'

const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <DefaultError/>
    },
]

export default routes;