import React, { createContext, useState, useEffect, ReactNode } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { ingredients } from "../data/ingredients";

export type IngredientType = {
  id: string;
  name: string;
  image: string;
};

type IngredientContextType = {
  ingredients: IngredientType[];
  addIngredient: (ingredient: Omit<IngredientType, "id">) => void;
};

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
      try {
        const querySnapshot = await getDocs(collection(db, "ingredients"));
        const firebaseIngredients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IngredientType[];

        setIngredients([...ingredients, ...firebaseIngredients]);
      } catch (error) {
        console.error("Fehler beim Laden der Zutaten:", error);
      }
    };

    fetchIngredients();
  }, []);

  const addIngredient = async (ingredient: Omit<IngredientType, "id">) => {
    try {
      const docRef = await addDoc(collection(db, "ingredients"), ingredient);
      setIngredients((prev) => [...prev, { id: docRef.id, ...ingredient }]);
    } catch (error) {
      console.error("Fehler beim Hinzufügen einer Zutat:", error);
    }
  };

  return (
    <IngredientContext.Provider value={{ ingredients, addIngredient }}>
      {children}
    </IngredientContext.Provider>
  );
};