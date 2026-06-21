import type Potion from '../../interfaces/PotionInterface'
import './DeleteCard.css'

interface DeleteCardProps {
    potion: Potion;
    setForm: (value: boolean) => void;
}

export default function DeleteCard({ potion, setForm }: DeleteCardProps) {

    function cancel() {
        setForm(false);
    }

    function deletePotion() {
        setForm(false);
    }

    return (
        <div className='overlay'>
            <div className="delete-card">
                <p className='delete-title'>Tem certeza de que deseja excluir a poção?</p>
                <div className="card-actions">
                    <button className="card-action-btn edit" onClick={deletePotion}>Sim</button>
                    <button className="card-action-btn cancel" onClick={cancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}