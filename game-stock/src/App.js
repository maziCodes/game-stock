// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar';
import Stocks from './Components/StocksGallery/Stocks';

function App() {
  return (
    <main>
      <NavBar/>
      <section>
        <Header />
      </section>
      <section>
        <Stocks />
      </section>
    </main>
  );
}

export default App;
