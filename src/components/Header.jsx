import "./Header.css"
import logo from '../images/logo.png' 
export function Header(){
    return(
        <header>
            <img src={logo} alt="logo" />
        </header>
    )
}