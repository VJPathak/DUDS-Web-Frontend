import './index.css';
import Label from '../Label';
export default function Collection() {
    return (
        <div className="collection-area">
            <div className='collection-heading-line'>
                <h3 className='collection-heading'>Collection</h3>
                <h3 className='collection-heading'>-</h3>
            </div>
            <div className='collection-options'>
                <Label name="In Stock"/>
                <Label name="Out Of Stock"/>
            </div>
        </div>
    )
}