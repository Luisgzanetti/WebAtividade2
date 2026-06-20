import { Link } from "react-router"
import "./LoginPage.css"

export default function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Poções e Soluções</h1>
                <p className="login-subtitle">Escolha seu tipo de acesso para continuar</p>
                <div className="button-group">
                    <button className="login-btn secondary">Admin</button>
                    <Link to={'/Home'}>
                        <button className="login-btn primary">Usuário</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};