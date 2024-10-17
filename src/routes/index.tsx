import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";
import Header from "../components/Header";

const Home: LazyExoticComponent<any> = lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(import('../pages/Home')), 1500);
}));
const About: LazyExoticComponent<any> = lazy(() => import('../pages/About'));
const Curs: LazyExoticComponent<any> = lazy(() => import('../pages/Curs'));
const News: LazyExoticComponent<any> = lazy(() => import('../pages/News'));

const Routers = () => {
    return (
        <>
            {useRoutes([
                {
                    path: '/',
                    element: <Suspense><Home /></Suspense>
                },
                {
                    path: '/about',
                    element: <Suspense><About /></Suspense>,
                },
                {
                    path: '/curs',
                    element: <Suspense><Curs /></Suspense>,
                },
                {
                    path: '/news',
                    element: <Suspense><News /></Suspense>,
                },
            ])}
        </>
    );
}

export default Routers;
