import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Powered by{' '}
        <a
          href="https://www.thecocktaildb.com/"
          target="_blank"
          rel="noreferrer"
        >
          TheCocktailDB
        </a>
        <i className="fas fa-cocktail"></i>
      </p>
    </footer>
  );
}
