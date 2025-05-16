import SearchBar from '../SearchBar/SearchBar';
import { useCocktails } from '../../context/CocktailContext';
import styles from './Header.css';

export default function Header() {
  const { cocktails } = useCocktails();

  return (
    <header className={styles.header}>
      <h1>
        <i className="fas fa-glass-martini-alt"></i> Explore Cocktails
      </h1>
      <SearchBar />
      <p className={styles.resultCount}>
        {cocktails.length ? `${cocktails.length} cocktails found.` : 'Ready to search...'}
      </p>
    </header>
  );
}
