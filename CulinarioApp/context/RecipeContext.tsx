import React, { createContext, useState, useEffect, ReactNode } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export type RecipeType = {
  id?: string;
  name: string;
  image: string | null;
  ovensettings?: string;
  source?: string;
  ingredients: IngredientType[];
  preparationSteps: PreparationStepType[];
};

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

type RecipeContextType = {
  recipes: RecipeType[];
  addRecipe: (recipe: RecipeType) => void;
};

export const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  addRecipe: () => {},
});

interface RecipeProviderProps {
  children: ReactNode;
}

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Firebase Auth-Status überwachen
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchRecipes(user.uid);
      } else {
        setUserId(null);
        setRecipes([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchRecipes = async (userId: string) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users", userId, "recipes"));
      const recipesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as RecipeType[];
      setRecipes(recipesData);
    } catch (error) {
      console.error("Fehler beim Abrufen der Rezepte: ", error);
    }
  };

  const addRecipe = async (recipe: RecipeType) => {
    if (!userId) return;
    try {
      const docRef = await addDoc(collection(db, "users", userId, "recipes"), recipe);
      setRecipes((currentRecipes) => [...currentRecipes, { ...recipe, id: docRef.id }]);
    } catch (error) {
      console.error("Fehler beim Speichern des Rezepts: ", error);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};