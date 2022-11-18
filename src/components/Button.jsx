const Button = (props) => {
    const { className = 'bg-blue-500', text, children } = props;

    return (
        <>
            <button
                {...props}
                className={`${className} flex gap-x-2 items-center text-white px-4 py-2 rounded`}
            >
                {text || children}
            </button>
        </>
    );
};

export default Button;
