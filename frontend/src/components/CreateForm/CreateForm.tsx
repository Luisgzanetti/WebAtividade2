import './CreateForm.css'

interface CreateFormProps {
    setForm: (value: boolean) => void;
}

export default function CreateForm({ setForm }: CreateFormProps) {

    function cancel() {
        setForm(false);
    }

    function salvar() {
        setForm(false);
    }

    return (
        <div className='overlay'>
            <form className="form-card">
                <p className='form-title'>Listar Nova Poção</p>
                <input className="form-input" placeholder="Nome" required />
                <input className="form-input" placeholder="URL da imagem" required />
                <textarea className="form-input text-area" placeholder="Descrição" required />
                <input className="form-input" placeholder="Preço" type="number" min="0" step="1" required />
                <div className="card-actions">
                    <button className="card-action-btn edit" onClick={salvar}>Salvar</button>
                    <button className="card-action-btn cancel" onClick={cancel}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}