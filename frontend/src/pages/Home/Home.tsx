import { useGlobal } from "../../context/GlobalContext"
import { Link } from "react-router"
import PotionsGrid from "../../components/PotionsGrid/PotionsGrid"
import "./Home.css"

export default function Home() {

    const { potions } = useGlobal()

    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-title">Poções</h1>
                <Link to="/" className="back-btn">
                    <button>← Sair</button>
                </Link>
            </header>
            <main>
                <PotionsGrid potions={potions}/>
            </main>
        </div>
    )
}