import styles from './CocktailCard.module.css';

export default function CocktailCard({ cocktail, onClick }) {
  return (
    <article className={styles.card} onClick={() => onClick(cocktail.idDrink)}>
      <img src={`${cocktail.strDrinkThumb}/small`} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
    </article>
  );
}
