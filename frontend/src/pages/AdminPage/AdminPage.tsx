import './AdminPage.css';
import { useGlobal } from "../../context/GlobalContext"
import { useNavigate, Navigate } from "react-router";
import AdminPotionsGrid from "../../components/AdminPotionsGrid/AdminPotionsGrid";
import { useState } from 'react';
import CreateForm from '../../components/CreateForm/CreateForm';
import EditForm from '../../components/EditForm/EditForm';
import type Potion from "../../interfaces/PotionInterface";
import DeleteCard from '../../components/DeleteCard/DeleteCard';

export default function AdminPage() {

    const { user, potions, setUser, setPotions } = useGlobal();
    const navigate = useNavigate();

    if (user != 'admin') {
        return <Navigate to="/" replace />
    }

    function logout() {
        setUser('');
        navigate('/', { replace: true });
    }

    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editPotion, setEditPotion] = useState<Potion | null>(null);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [deletePotion, setDeletePotion] = useState<Potion | null>(null);

    function showCreateCard() {
        setShowCreateForm(true);
    }

    function showEditCard(potion: Potion) {
        setEditPotion(potion);
        setShowEditForm(true);
    }

    function showDeleteCard(potion: Potion) {
        setDeletePotion(potion);
        setShowDeleteForm(true);
    }

    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-title">Página de Administração</h1>
                <button className="back-btn" onClick={logout}>← Sair</button>
            </header>
            <main>
                <AdminPotionsGrid potions={potions} setShowCreateCard={setShowCreateForm} setShowEditCard={showEditCard} setShowDeleteCard={showDeleteCard} />
                {showCreateForm && <CreateForm setForm={setShowCreateForm} />}
                {showEditForm && editPotion && <EditForm potion={editPotion} setForm={setShowEditForm} />}
                {showDeleteForm && deletePotion && <DeleteCard potion={deletePotion} setForm={setShowDeleteForm} />}
            </main>
        </div>
    )
}