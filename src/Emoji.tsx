import "./Emoji.css"
import { useState } from "react"
const EMOJI = new Map<string, string>([
    ["earth", "🌍"],
    ["moon", "🌕"],
    ["sun", "☀️"],
    ["standby", "🚀"]
])
export default function Emoji() {
    const [situacao, setSituacao] = useState("standby");

    function toEarth() {
        setSituacao("earth")
    }
    function toMoon() {
        setSituacao("moon")
    }
    function toSun() {
        setSituacao("sun")
    }
    
    return (
        <div className="emoji">
            <div className="planeta">{EMOJI.get(situacao)||"?"}</div>
            <div className="acoes">
                <button onClick={toEarth}>go to Earth</button>
                <button onClick={toMoon}>go to Moon</button>
                <button onClick={toSun}>go to Sun</button>
            </div>
        </div>
    )
}