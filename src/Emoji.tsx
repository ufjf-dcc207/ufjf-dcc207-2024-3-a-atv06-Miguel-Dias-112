import Atributo from "./Atributo";
import "./Emoji.css"
import { useState } from "react"
const EMOJI = new Map<string, string>([
    ["Feliz", "😀"],
    ["Doente", "🤢"],
    ["Morto", "💀"],
    ["standby", '😐 ']
])
export default function Emoji() {
    const [situacao, setSituacao] = useState("standby");

    function toFeliz() {
        setSituacao("Feliz")
    }
    function toDoente() {
        setSituacao("Doente")
    }
    function toMorto() {
        setSituacao("Morto")
    }
    function travel() {
        
        if (situacao === "standby") {
            setSituacao("Feliz")
        }
        else if (situacao === "Feliz") {
            setSituacao("Doente")
        }
        else if (situacao === "Doente") {
            setSituacao("Morto")
        }
        else if (situacao === "Morto") {
            setSituacao("Feliz")
        }
    }
    return (
        <div className="emoji">
            <div className="planeta">{EMOJI.get(situacao)||"?"}</div>
            <div className="atribuoos"> 
                <Atributo icone={"❤️"}/>
                <Atributo icone={"🍔"}/>
                <Atributo icone={"💦"}/>
                <Atributo icone={"⚡"}/>
            </div>
            <div className="acoes">
                <button onClick={toFeliz}>go to Feliz</button>
                <button onClick={toDoente}>go to Doente</button>
                <button onClick={toMorto}>go to Morto</button>
                <button onClick={travel}>ciclo</button>
            </div>
           
           
        </div>
    )
}