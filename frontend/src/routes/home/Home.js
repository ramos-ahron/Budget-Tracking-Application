import { Link } from "react-router-dom";
import ImageFiller from 'react-image-filler';
import "./home.css"

function Home() {
    return (
        <div className="Home">
            <div className="left">
                <h1>AutoBudget</h1>
                <h2>Create your budget here!</h2>
                <h3>description?</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <ImageFiller />
            </div>
        </div>
    );
}

export default Home;