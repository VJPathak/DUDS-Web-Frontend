
export default function ColorLabel({col,name}){
    return(
        <label className='label-container'>
            <input type='radio' name='test' className='input-option' />
            <span className='cover-option'></span>
            <span
                style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: name,
                    background : name,
                    paddingLeft:'20px',
                    marginRight: '5px'
                }}
            ></span>
            {name}
        </label>
    )
}