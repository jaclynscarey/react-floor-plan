import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';
import './FloorPlan.css'

export default function FloorPlan() {
    return (
        <div className="FloorPlan">
        <Bedroom bedNum={1} />
        <Kitchen />
        <Bath size={'Full'} />
        <Bedroom bedNum={2} />
        <LivingRoom />
        <Bath size={'Half'} />
        <Bedroom bedNum={3}/>
        </div>
    )
}