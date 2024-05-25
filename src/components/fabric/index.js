import './index.css';
import Label from '../Label';
export default function Fabric() {
    return (
        <div className="fabric-area">
            <div className='fabric-heading-line'>
                <h3 className='fabric-heading'>Fabric</h3>
                <h3 className='fabric-heading'>-</h3>
            </div>
            <div className='fabric-options'>
                <Label name="Cotton"/>
                <Label name="Linen"/>
                <Label name="Wool"/>
                <Label name="Silk"/>
                <Label name="Cashmere"/>
            </div>
        </div>
    )
}