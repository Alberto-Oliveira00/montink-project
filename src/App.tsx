import { Header } from './components/Header';
import { ProductPage } from './components/ProductPage';
import { product } from './data/productData';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <ProductPage product={product} />
      </div>
    </>
  );
}

export default App;