
import { Link, useNavigate } from "react-router-dom"
import { StyledLanding } from "../styles/landing.styled";


function LandingPage() {
    const navigate = useNavigate()

    const handleAuth = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) {
            console.log("cant")
            navigate("/login")
            return;
        }

        navigate("/home/public")
    }
    return (
        <StyledLanding>
            <header>
                <nav>
                    <h1 className="logoLan">Flash</h1>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </nav>
            </header>
            <section>
                <div className="top">
                    <h2>Flash X Memories</h2>
                    <p>Reminisce on your past memories with family, loved ones</p>
                    <button onClick={handleAuth}>Get Started</button>
                </div>
                <div className="boxLan">
                    <div className="box2 boxi"></div>
                    <div className="box4 boxi"></div>
                    <div className="box5 boxi"></div>
                </div>
            </section>
        </StyledLanding>

    );


}
export default LandingPage;