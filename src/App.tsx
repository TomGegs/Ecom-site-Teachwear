import { HashRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home';
import { ProductPage } from './pages/ProductPage';
=======
import Header from './components/Header';
>>>>>>> bbe35762337c35be39c9398f0d81ea830b40fe09

export function App() {
    return (
        <>
<<<<<<< HEAD
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<ProductPage />} />
            </Routes>
=======
            {/* <Preloader /> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
>>>>>>> bbe35762337c35be39c9398f0d81ea830b40fe09
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
