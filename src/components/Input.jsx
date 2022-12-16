import React from 'react';
import { forwardRef } from 'react';

export const Input = forwardRef(({ type = 'text', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className='border-2 p-3 w-full transition duration-300 text-slate-500 focus:ring focus:ring-blue-200 focus:outline-none border-slate-300 rounded-lg'
            type={type}
        />
    );
});
