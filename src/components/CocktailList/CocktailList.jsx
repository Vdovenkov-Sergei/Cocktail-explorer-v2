import { useState, useEffect } from 'react';
import { useCocktails } from '../../context/CocktailContext';
import CocktailCard from '../CocktailCard/CocktailCard';
import CocktailModal from '../CocktailModal/CocktailModal';
import IdleAnimation from '../IdleAnimation/IdleAnimation';
import styles from './CocktailList.module.css';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default function CocktailList() {
  const { cocktails, loading, error } = useCocktails();
  const [selectedId, setSelectedId] = useState(null);
  const [modalCocktail, setModalCocktail] = useState(null);

  useEffect(() => {
    if (selectedId) fetchDetail(selectedId);
  }, [selectedId]);

  async function fetchDetail(id) {
    const res = await fetch(`${API_URL}lookup.php?i=${id}`);
    const data = await res.json();
    setModalCocktail(data.drinks?.[0] || null);
  }

  function closeModal() {
    setModalCocktail(null);
    setSelectedId(null);
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && cocktails.length === 0 && <IdleAnimation />}
      <div className={styles.list}>
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            onClick={setSelectedId}
          />
        ))}
      </div>
      {modalCocktail && (
        <CocktailModal cocktail={modalCocktail} onClose={closeModal} />
      )}
    </div>
  );
}
