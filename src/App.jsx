import Header from './components/Header';
import CocktailList from './components/CocktailList';
import Footer from './components/Footer';
import { CocktailProvider } from './context/CocktailContext';
import './style.css';

export default function App() {
  return (
    <CocktailProvider>
      <Header />
      <main>
        <CocktailList />
      </main>
      <Footer />
    </CocktailProvider>
  );
}