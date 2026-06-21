import './AdminPotionsGrid.css'
import AdminPotionCard from "../AdminPotionCard/AdminPotionCard";
import type Potion from "../../interfaces/PotionInterface";

interface AdminPotionsGrid {
    potions: Potion[];
    setShowCreateCard: (value: boolean) => void;
    setShowEditCard: (potion: Potion) => void;
    setShowDeleteCard: (potion: Potion) => void;
}

export default function AdminPotionsGrid({ potions, setShowCreateCard, setShowEditCard, setShowDeleteCard }: AdminPotionsGrid) {
    return (
        <div className="potions-grid">
            <div className="add-card" onClick={() => setShowCreateCard(true)}>
                <p className="add-potion-sign">+</p>
                <button className="add-potion-btn">Listar nova poção</button>
            </div>
            {potions.map((potion) => (
                <AdminPotionCard key={potion.name} potion={potion} setShowEditCard={setShowEditCard} setShowDeleteCard={setShowDeleteCard} />
            ))}
        </div>
    )
}