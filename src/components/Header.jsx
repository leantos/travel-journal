import { Assets } from "./assets"

export function Header(){
    return(
        <>
            <header className="header">
                <img className="globe" src={Assets().earth} alt="globe"/>
                <h1>my travel journal</h1>
            </header>
        </>
    )
}