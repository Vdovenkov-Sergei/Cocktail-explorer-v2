import Header from './components/Header/Header';
import CocktailList from './components/CocktailList/CocktailList';
import Footer from './components/Footer/Footer';
import { CocktailProvider } from './context/CocktailContext';
import './App.css';

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