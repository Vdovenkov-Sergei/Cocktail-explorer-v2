import { createContext, useContext, useEffect, useState } from 'react';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const CocktailContext = createContext();

export function CocktailProvider({ children }) {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState(sessionStorage.getItem('lastSearch') || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchTerm) fetchCocktails(searchTerm);
  }, [searchTerm]);


  const fetchCocktails = async (term) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}search.php?&s=${term}`);
      const data = await response.json();
      if (data.drinks) {
        setCocktails(data.drinks);
        sessionStorage.setItem('lastSearch', term);
      } else {
        setCocktails([]);
        setError('No cocktails found.');
      }
    } catch (e) {
      setError('Something went wrong. Try again later.');
    }
    setLoading(false);
  };

  return (
    <CocktailContext.Provider value={{ cocktails, searchTerm, setSearchTerm, fetchCocktails, loading, error }}>
      {children}
    </CocktailContext.Provider>
  );
}

export function useCocktails() {
  return useContext(CocktailContext);
}