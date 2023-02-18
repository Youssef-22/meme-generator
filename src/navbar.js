import react from "react"
import logo from "./memeimag/meme-logo.png"
export default function Header(){
    return(
        <header className="nav">
            <img className="logo" src={logo}/>
            <h2 className="title">Meme Generator</h2>
        </header>
    )
}