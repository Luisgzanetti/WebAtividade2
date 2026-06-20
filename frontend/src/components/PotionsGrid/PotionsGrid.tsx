import './PotionsGrid.css'
import type Potion from "../../interfaces/PotionInterface";
import PotionCard from "../PotionCard/PotionCard";

type PotionsGridProps = {
    potions: Potion[];
};

export default function PotionsGrid({ potions }: PotionsGridProps) {
    return (
        <div className="potions-grid">
            {potions.map((potion, index) => (
                <PotionCard key={index} {...potion} />
            ))}
        </div>
    );
}