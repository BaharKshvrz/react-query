import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductCount from './components/ProductCount';
import Products from './components/Products';
import './index.css';
import ProductPage from './pages/ProductPage';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className='products'>
          <ProductCount />
          <Products />
        </div>
        <Routes>
          <Route index path="product/:id" element={<ProductPage/>} />
        </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
