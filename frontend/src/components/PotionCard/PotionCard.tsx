import './PotionCard.css'
import type Potion from "../../interfaces/PotionInterface";

export default function PotionCard(potion: Potion) {

    return (
        <div className="card">
            <p className="name">{potion.name}</p>
            <img src={potion.photo} alt={potion.name} className="potion-img"></img>
            <p className="potion-description">{potion.description}</p>
            <p className="potion-price">{potion.price}</p>
        </div>
    )
}