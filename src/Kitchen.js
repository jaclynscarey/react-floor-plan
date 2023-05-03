import Oven from './Oven';
import Sink from './Sink';
import './Kitchen.css';

export default function Kitchen() {
    return (
        <div className="Kitchen">
            <h2>Kitchen</h2>
            <Oven />
            <Sink />
        </div>
    )
}