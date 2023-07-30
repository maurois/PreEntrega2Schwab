import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Products from './pages/Products';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Product from './components/Product';
import Category from './components/Category';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/todos' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/category/:id' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
