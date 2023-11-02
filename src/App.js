import { CartProvider } from './CartContext';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import StickyAddToCart from './components/StickyAddToCart';
import ContentPage from './containers';

function App() {
  return (
    <div className="wrapper">
      <CartProvider>
        <Header/>
        <ContentPage/>
        <Footer/>
        <StickyAddToCart/>
      </CartProvider>
    </div>
  );
}

export default App;
