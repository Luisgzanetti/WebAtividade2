import './AdminPotionCard.css'
import type Potion from "../../interfaces/PotionInterface";

interface AdminPotionsCardProps {
    potion: Potion;
    setShowEditCard: (potion: Potion) => void;
    setShowDeleteCard: (potion: Potion) => void;
}

export default function AdminPotionCard({ potion, setShowEditCard, setShowDeleteCard }: AdminPotionsCardProps) {

    function editPotion() {
        setShowEditCard(potion);
    }

    function deletePotion() {
        setShowDeleteCard(potion);
    }

    return (
        <div className="card">
            <p className="name">{potion.name}</p>
            <img src={potion.photo} alt={potion.name} className="potion-img"></img>
            <p className="potion-description">{potion.description}</p>
            <p className='potion-price-admin'>Preço: {potion.price}</p>
            <div className="card-actions">
                <button className="card-action-btn edit" onClick={editPotion}>Editar</button>
                <button className="card-action-btn delete" onClick={deletePotion}>Excluir</button>
            </div>
        </div>
    )
}