import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <div className="Home">
            <div className="left">
                <h1>AutoBudget</h1>
                <h2>Create your budget here!</h2>
                <h3>description?</h3>
                <Link to="/dashboard">Get Started</Link>
                <Link to="/signUp" className="button">Sign Up</Link>
                
                <Link to="/settings"> 
                    <button className="settings-btn">Settings</button> 
                </Link>

            </div>
        </div>
    );
}

export default Home;