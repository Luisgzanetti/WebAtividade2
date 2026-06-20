import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type Potion from "../interfaces/PotionInterface";
import { getPotions } from "../services/api";

interface GlobalContextType {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    potions: Potion[];
    setPotions: React.Dispatch<React.SetStateAction<Potion[]>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState('');
    const [potions, setPotions] = useState<Potion[]>([]);

    useEffect(() => {
        getPotions().then((potions) => {
            setPotions(potions);
        });
    }, []);

    return (
        <GlobalContext.Provider value={{ user, setUser, potions, setPotions }}>
            {children}
        </GlobalContext.Provider>
    )
};

export function useGlobal() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
}