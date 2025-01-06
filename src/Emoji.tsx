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
    function travel() {
        
        if (situacao === "standby") {
            setSituacao("earth")
        }
        else if (situacao === "earth") {
            setSituacao("moon")
        }
        else if (situacao === "moon") {
            setSituacao("sun")
        }
        else if (situacao === "sun") {
            setSituacao("earth")
        }
    }
    return (
        <div className="emoji">
            <div className="planeta">{EMOJI.get(situacao)||"?"}</div>
            <div className="acoes">
                <button onClick={toEarth}>go to Earth</button>
                <button onClick={toMoon}>go to Moon</button>
                <button onClick={toSun}>go to Sun</button>
                <button onClick={travel}>travel</button>
            </div>
        </div>
    )
}