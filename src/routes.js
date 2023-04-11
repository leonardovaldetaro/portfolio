import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Form from 'pages/Contatos';
import Footer from 'components/Footer';

export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="contatos" element={<Form />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
