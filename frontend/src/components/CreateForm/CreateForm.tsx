import { useState } from 'react';
import { useGlobal } from '../../context/GlobalContext';
import { addPotion } from '../../services/api';
import './CreateForm.css'

interface CreateFormProps {
    setForm: (value: boolean) => void;
}

export default function CreateForm({ setForm }: CreateFormProps) {
    const { setPotions } = useGlobal();

    const [formData, setFormData] = useState({
        name: '',
        photo: '',
        description: '',
        price: 0,
    });

    function cancel() {
        setForm(false);
    }

    async function salvar(e: React.FormEvent) {
        e.preventDefault();
        try {
            const response = await addPotion(formData);
            if (response.ok) {
                const newPotion = await response.json();
                setPotions((prev) => [...prev, newPotion]);
            } else {
                console.error('Failed to create potion:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating potion:', error);
        }
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
                <p className='form-title'>Listar Nova Poção</p>
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
                    value={formData.price || ''}
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