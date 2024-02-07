import { useEffect, useState } from "react"
import "./home.css"

export default function Home (){
    const [buttonPosition, setButtonPosition] = useState({ x: window.innerWidth-100, y: window.innerHeight-100 });

    const handleNoClick = () => {
        const newX = Math.random() * (window.innerWidth - 100); // Adjust 100 according to button width
        const newY = Math.random() * (window.innerHeight - 100); // Adjust 100 according to button height
        setButtonPosition({ x: newX, y: newY });
    };
    const handleYesClick = () => {
        window.alert("Thank you so much! I Love You!");
    }

    return(
        <div>
            <h1>Will You be my Valentine?</h1>
            <button className="button" onClick={handleYesClick}>Yes</button>
            <button
            style={{ position: "absolute", top: buttonPosition.y, left: buttonPosition.x }} 
            onClick={handleNoClick}>
                No
            </button>
        </div>
    )
}
