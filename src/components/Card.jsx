const Card = ({ children }) => {
    return (
        <>
            <div className='shadow rounded-lg overflow-hidden w-[500px] bg-white'>{children}</div>
        </>
    );
};

const Title = ({ children }) => {
    return (
        <>
            <div className='p-4 border-b'>
                <h1 className='text-2xl font-semibold'>{children}</h1>
            </div>
        </>
    );
};

const Body = ({ children }) => {
    return (
        <>
            <div className='leading-relaxed p-4'>{children}</div>
        </>
    );
};

const Footer = ({ children }) => {
    return (
        <>
            <div className='bg-slate-100 p-4'>{children}</div>
        </>
    );
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
