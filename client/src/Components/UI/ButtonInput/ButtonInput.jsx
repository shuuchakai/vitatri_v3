import './ButtonInput.css';

function ButtonInput({ buttonType, buttonContent }) {
    return (
        <button className="buttonInput" type={buttonType}>{buttonContent}</button>
    )
}

export default ButtonInput