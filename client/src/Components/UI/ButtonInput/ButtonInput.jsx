import './ButtonInput.css';

function ButtonInput({ buttonType, buttonContent, onClick }) {
    return (
        <button className="buttonInput" type={buttonType} onClick={onClick}>{buttonContent}</button>
    )
}

export default ButtonInput;