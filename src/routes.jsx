import { Routes, Route } from 'react-router-dom';
import YourShopComponent from './pages/Loja/Loja';
import ShoppingCart from './pages/Carrinholoja/Carrinholoja';
import ProductPage from './pages/Produtopagina/Produtopagina';
import Home from './pages/Paginaprincipal/Home';
import LoginPage from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import Contato from './pages/Contato/contato';
import Sobrenos from './pages/Sobrenos/sobrenos';
import App from './pages/Receitas/receitas';


export default function MyRoutes() {
    return (
    <Routes>
    <Route path="/" element={<YourShopComponent />} />
    <Route path="/loja" element={<YourShopComponent />} />
    <Route path="/carrinho" element={<ShoppingCart />} />
    <Route path="/produtopagina" element={<ProductPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/sobrenos" element={<Sobrenos />} />
    <Route path="/receitas" element={<App />} />
    </Routes>
    );
    }