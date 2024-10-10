type ExpendableButtonProps = {
    isOpen: boolean;
    toggle: () => void;
}

const ExpendableButton = ({ isOpen, toggle }: ExpendableButtonProps) => {
    return (
        <button onClick={toggle} style={{ padding: '5px' }}>
            {isOpen ? '👇' : '👉'}
        </button>
    );
};

export default ExpendableButton;