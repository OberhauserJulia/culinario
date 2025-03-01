import React, { createContext, useState, useEffect, ReactNode } from 'react';  // ReactNode importieren
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../App'; // oder importiere db von wo es initialisiert wird

export type IngredientType = {
  image: string | null;
  name: string;
  amount: number;
  unit: string;
};

export type PreparationStepType = {
  stepNumber: number;
  description: string;
  ingredients: IngredientType[];
};

export type RecipeType = {
  name: string;
  image: string | null;
  note?: string;
  source?: string;
  ingredients: IngredientType[];
  preparationSteps: PreparationStepType[];
};

type RecipeContextType = {
  recipes: RecipeType[];
  addRecipe: (recipe: RecipeType) => void;
};

// Typisierung der Props mit ReactNode
export const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  addRecipe: () => {},
});

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const querySnapshot = await getDocs(collection(db, 'recipes'));
      const recipesData = querySnapshot.docs.map(doc => doc.data() as RecipeType);
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  const addRecipe = async (recipe: RecipeType) => {
    try {
      const docRef = await addDoc(collection(db, 'recipes'), recipe);
      setRecipes((currentRecipes) => [...currentRecipes, recipe]);
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};