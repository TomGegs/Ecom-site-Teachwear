import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ProductPage } from './pages/ProductPage';

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductPage />} />
            </Routes>
        </>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
