import { useState } from 'react';
import type Potion from '../../interfaces/PotionInterface';
import { useGlobal } from '../../context/GlobalContext';
import './EditForm.css'

interface EditFormProps {
    potion: Potion;
    setForm: (value: boolean) => void;
}

export default function EditForm({ potion, setForm }: EditFormProps) {
    const { setPotions } = useGlobal();

    const [formData, setFormData] = useState<Potion>({
        name: potion.name,
        photo: potion.photo,
        description: potion.description,
        price: potion.price,
    });

    function cancel() {
        setForm(false);
    }

    function salvar(e: React.FormEvent) {
        e.preventDefault();
        setPotions((prevPotions) =>
            prevPotions.map((p) => (p.name === potion.name ? formData : p))
        );
        setForm(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value,
        }));
    };

    return (
        <div className='overlay'>
            <form className="form-card" onSubmit={salvar}>
                <p className='form-title'>Editar Poção</p>
                <input
                    className="form-input"
                    placeholder="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    placeholder="URL da imagem"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    required
                />
                <textarea
                    className="form-input text-area"
                    placeholder="Descrição"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    placeholder="Preço"
                    type="number"
                    min="0"
                    step="1"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <div className="card-actions">
                    <button className="card-action-btn edit" type="submit">Salvar</button>
                    <button className="card-action-btn cancel" type="button" onClick={cancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}