import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

export function App() {
    return (
        <>
            {/* <Preloader /> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
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
