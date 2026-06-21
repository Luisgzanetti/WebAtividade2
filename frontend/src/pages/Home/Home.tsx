import { useGlobal } from "../../context/GlobalContext"
import { Navigate, useNavigate } from "react-router"
import PotionsGrid from "../../components/PotionsGrid/PotionsGrid"
import "./Home.css"
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Home() {

    const { potions, user, setUser } = useGlobal()
    const navigate = useNavigate()

    if (user != 'user') {
        return <Navigate to="/" replace />
    }

    function logout() {
        setUser('');
        navigate('/', { replace: true });
    }

    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-title">Poções</h1>
                <button className="back-btn" onClick={logout}>← Sair</button>
            </header>
            <main className="home-main">
                <PotionsGrid potions={potions} />
            </main>
            <footer className="footer">
                <p className="footer-title">Informações de Contato</p>
                <div className="info-line">
                    <AiFillInstagram /><p>@pocoesesolucoes</p>
                </div>
                <div className="info-line">
                    <AiOutlineWhatsApp /><p> 99 99999-9999</p>
                </div>
            </footer>
        </div>
    )
}