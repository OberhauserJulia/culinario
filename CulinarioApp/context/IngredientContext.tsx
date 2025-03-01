import React, { createContext, useState, useEffect, ReactNode } from 'react';  // ReactNode importieren
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../App';  // oder importiere db von wo es initialisiert wird
import defaultIngredients from '../data/ingredients.json';

export type IngredientType = {
  id: string;
  name: string;
  image: string;
};

type IngredientContextType = {
  ingredients: IngredientType[];
  addIngredient: (ingredient: Omit<IngredientType, 'id'>) => void;
};

// Typisierung der Props mit ReactNode
export const IngredientContext = createContext<IngredientContextType>({
  ingredients: [],
  addIngredient: () => {},
});

interface IngredientProviderProps {
  children: ReactNode;
}

export const IngredientProvider: React.FC<IngredientProviderProps> = ({ children }) => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const querySnapshot = await getDocs(collection(db, 'ingredients'));
      const firebaseIngredients = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IngredientType[];

      setIngredients([
        ...defaultIngredients.map(ingredient => ({ ...ingredient, id: ingredient.id.toString() })),
        ...firebaseIngredients
      ]);
    };

    fetchIngredients();
  }, []);

  const addIngredient = async (ingredient: Omit<IngredientType, 'id'>) => {
    const docRef = await addDoc(collection(db, 'ingredients'), ingredient);
    setIngredients((prev) => [...prev, { id: docRef.id, ...ingredient }]);
  };

  return (
    <IngredientContext.Provider value={{ ingredients, addIngredient }}>
      {children}
    </IngredientContext.Provider>
  );
};