import { useEffect } from 'react';
import styles from './CocktailModal.module.css';

function getIngredients(cocktail) {
  return Array.from({ length: 15 }, (_, i) => {
    const ing = cocktail[`strIngredient${i + 1}`];
    const meas = cocktail[`strMeasure${i + 1}`];
    return ing ? <li key={i}><p>{ing}{meas ? `, ${meas}` : ''}</p></li> : null;
  });
}

export default function CocktailModal({ cocktail, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);

  return (
    <dialog
      open
      className={styles.modal}
      onClick={(e) => e.target.tagName === 'DIALOG' && onClose()}
    >
      <div className={styles.content}>
        <h2>{cocktail.strDrink}</h2>
        <div className={styles.mainInfo}>
          <img
            src={`${cocktail.strDrinkThumb}/medium`}
            alt={cocktail.strDrink}
          />
          <div className={styles.textInfo}>
            <p><strong>Category:</strong> {cocktail.strCategory}, {cocktail.strAlcoholic}</p>
            <p><strong>Glass:</strong> {cocktail.strGlass}</p>
            <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
            <p><strong>Ingredients:</strong></p>
            <ul className={styles.ingredientList}>{getIngredients(cocktail)}</ul>
          </div>
        </div>
      </div>
    </dialog>
  );
}
