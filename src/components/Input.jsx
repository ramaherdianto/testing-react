import React, { useEffect } from 'react';
import { useRef } from 'react';

export const Input = ({ isFocused = false, type = 'text', ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            {...props}
            className='border-2 p-3 w-full transition duration-300 text-slate-500 focus:ring focus:ring-blue-200 focus:outline-none border-slate-300 rounded-lg'
            type={type}
        />
    );
};
