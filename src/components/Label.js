
export default function Label({name}) {
    return (
        <label className='label-container'>
            <input type='radio' name='test' className='input-option' />
            <span className='cover-option'></span>
            {name}
        </label>
    )
}