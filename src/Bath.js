import './Bath.css'

export default function Bath({size}) {
    return (
        <div className={`Bath ${size}`}>
            <h2>{size} Bath</h2>
        </div>
    )
}