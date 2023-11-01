import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import StickyAddToCart from './components/StickyAddToCart';
import ContentPage from './containers';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <ContentPage/>
      <Footer/>
      {/* <StickyAddToCart/> */}
    </div>
  );
}

export default App;
