import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type Potion from "../interfaces/PotionInterface";

interface GlobalContextType {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    potions: Potion[];
    setPotions: React.Dispatch<React.SetStateAction<Potion[]>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState('');
    const [potions, setPotions] = useState<Potion[]>([
        {
            name: '🧪 Poção Blue Sky',
            description: 'Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.',
            photo: 'https://i.ibb.co/ZzS7xb2/rsz-sky.png',
            price: 300,
        },
        {
            name: '🔮 Poção do Perfume Misterioso',
            description: 'Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.',
            photo: 'https://i.ibb.co/pyhZJXf/rsz-lilas.png',
            price: 200,
        },
        {
            name: '🌲 Poção de Pinus',
            description: 'Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.',
            photo: 'https://i.ibb.co/DkzdL1q/rsz-pinus.png',
            price: 3000,
        },
    ]);

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