import { useGlobal } from "../../context/GlobalContext"
import { Link, Navigate, useNavigate } from "react-router"
import PotionsGrid from "../../components/PotionsGrid/PotionsGrid"
import "./Home.css"

export default function Home() {

    const { potions, user, setUser } = useGlobal()
    const navigate = useNavigate()

    if (user != 'user') {
        navigate('/', { replace: true });
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
            <main>
                <PotionsGrid potions={potions} />
            </main>
        </div>
    )
}