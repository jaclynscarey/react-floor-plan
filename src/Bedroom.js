import './Bedroom.css'

export default function Bedroom({bedNum}) {
    return(
        <div className="Bedroom" id={`bed-${bedNum}`}>
            <h2>Bedroom {bedNum}</h2>
        </div>
    )
}