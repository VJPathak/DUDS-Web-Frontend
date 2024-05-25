import './index.css';
import ColorLabel from '../ColorLabel';
export default function Color() {
    return (
        <div className="color-area">
            <div className='color-heading-line'>
                <h3 className='color-heading'>Color</h3>
                <h3 className='color-heading'>-</h3>
            </div>
            <div className='color-options'>
                <ColorLabel name="Black"/>
                <ColorLabel name="Red"/>
                <ColorLabel name="Green"/>
                <ColorLabel name="Yellow"/>
                <ColorLabel name="Dark Blue"/>
                <ColorLabel name="Purple"/>
                <ColorLabel name="Pink"/>
                <ColorLabel name="Light Blue"/>
                <ColorLabel name="Orange"/>
                <ColorLabel name="White"/>
            </div>
        </div>
    )
}