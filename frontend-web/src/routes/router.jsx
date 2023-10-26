import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import Pedidos from '../pages/Pedidos';
import Clientes from '../pages/Clientes';
import Produtos from '../pages/Produtos';
import Relatorios from '../pages/Relatorios';
import PaginaErro from '../pages/PaginaErro';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/pedidos', element: <Pedidos /> },
            { path: '/clientes', element: <Clientes /> },
            { path: '/produtos', element: <Produtos /> },
            { path: '/relatorios', element: <Relatorios /> },
        ]
    }
]);

export default router;