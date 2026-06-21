import type Potion from '../../interfaces/PotionInterface'
import './DeleteCard.css'
import { deletePotion } from '../../services/api';
import { useGlobal } from '../../context/GlobalContext';

interface DeleteCardProps {
    potion: Potion;
    setForm: (value: boolean) => void;
}

export default function DeleteCard({ potion, setForm }: DeleteCardProps) {
    const { setPotions } = useGlobal();

    function cancel() {
        setForm(false);
    }

    async function deleteP() {
        try {
            const response = await deletePotion(potion);
            if (response.ok) {
                setPotions((prevPotions) =>
                    prevPotions.filter((p) => p.id !== potion.id)
                );
            } else {
                console.error("Failed to delete potion:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting potion:", error);
        }
        setForm(false);
    }

    return (
        <div className='overlay'>
            <div className="delete-card">
                <p className='delete-title'>Tem certeza de que deseja excluir a poção?</p>
                <div className="card-actions">
                    <button className="card-action-btn edit" onClick={deleteP}>Sim</button>
                    <button className="card-action-btn cancel" onClick={cancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}