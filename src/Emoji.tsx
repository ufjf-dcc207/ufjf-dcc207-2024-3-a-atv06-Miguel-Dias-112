import "./Emoji.css"
const EMOJI = new Map<string, string>([
    ["earth", "🌍"],
    ["moon", "🌕"],
    ["sun", "☀️"],
])
export default function Emoji() {
    let situacao = ""
    function toEarth() {
        situacao = "earth"
    }
    function toMoon() {
        situacao = "moon"
    }
    function toSun() {
        situacao = "sun"
    }
    
    return (
        <div className="emoji">
            <div className="planeta">{EMOJI.get(situacao)||"🚀"}</div>
            <div className="acoes">
                <button onClick={toEarth}>go to Earth</button>
                <button onClick={toMoon}>go to Moon</button>
                <button onClick={toSun}>go to Sun</button>
            </div>
        </div>
    )
}