import { Link, useNavigate } from "react-router"
import "./LoginPage.css"
import { useGlobal } from "../../context/GlobalContext"

export default function LoginPage() {

    const { setUser } = useGlobal()
    const navigate = useNavigate()

    function userLogin() {
        setUser('user');
        navigate('/Home', { replace: true });
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Poções e Soluções</h1>
                <p className="login-subtitle">Escolha seu tipo de acesso para continuar</p>
                <div className="button-group">
                    <button className="login-btn secondary">Admin</button>
                    <button className="login-btn primary" onClick={userLogin}>Usuário</button>
                </div>
            </div>
        </div>
    )
};