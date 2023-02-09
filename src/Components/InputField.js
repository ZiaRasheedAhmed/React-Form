import React from 'react';


const InputField = ({ placeholderText, inputvalue, setInputValue, stylename, handler}) => {
    return (
        <div>
            <input title='name' type="text" onChange={handler} className={stylename} placeholder={placeholderText} value={inputvalue}  required />
        </div>
    );
}

export default InputField;