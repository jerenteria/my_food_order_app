import './Input.css';

const Input = (props) => {
    return (
        <div className="input">
            <label htmlFor={props.input.id} className="amount-input-style">{props.label}</label>
            <input {...props.input}/>
        </div>
    );
};


export default Input;