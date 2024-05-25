import './index.css';
import Label from '../Label';
export default function Size(){
    return(
        <div className="size-area">
            
            <div className='size-heading-line'>
                <h3 className='size-heading'>Size</h3>
                <h3 className='size-heading'>-</h3>
            </div>
            <div className='size-options'>
                <Label name= "XS/US(0-4)"/>
                <Label name= "S/US(4-6)"/>
                <Label name= "M/US(6-10)"/>
                <Label name= "L/US(10-14)"/>
                <Label name= "XL/US(12-16)"/>
            </div>
        
        </div>
    )
}