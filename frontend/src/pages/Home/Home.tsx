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
                <section className="shop-about">
                    <div className="shop-info">
                        <h2 className="shop-subtitle">Desde 1867</h2>
                        <h1 className="shop-name">Poções e Soluções</h1>
                        <p className="shop-description">
                            Annabelle Merigold possui uma loja de poções bem-sucedida, localizada no Beco da Última Saída, chamada <strong>“Poções e Soluções”</strong>. Nossa história começou em <strong>1867</strong> com a tradição de criar misturas mágicas da mais alta qualidade para bruxos e bruxas de todo o mundo.
                        </p>
                    </div>
                    <div className="shop-gallery">
                        <div className="gallery-card">
                            <span className="gallery-placeholder">📷 Foto Histórica 1</span>
                        </div>
                        <div className="gallery-card">
                            <span className="gallery-placeholder">📷 Foto Histórica 2</span>
                        </div>
                    </div>
                </section>
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