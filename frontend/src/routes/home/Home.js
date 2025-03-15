import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
        <div className="Home">
            <div className="left">
                <h1>AutoBudget</h1>
                <h2>Create your budget here!</h2>
                <h3>description?</h3>

                {/* Link styled as a button */}
                <Link to="/dashboard" className="button3">Get Started</Link>

                {/* Sign Up button */}
                <Link to="/signUp" className="button3">Sign Up</Link>

                {/* Settings button (fixed) */}
                <Link to="/settings" className="button3">Settings</Link>

            </div>
        </div>
    );
}

export default Home;
