import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Footer from 'components/Footer';

export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
