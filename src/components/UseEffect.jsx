import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from './Button';

// const UseEffect = () => {
//     const [online, setOnline] = useState(false);

//     useEffect(() => {
//         console.log(online ? 'Online' : 'Offline');
//     });

// `useEffect(() => {
//     console.log(online ? 'I am Online Now.' : 'I am Offline Now.');
// }, [online]);`

function updateScrollPosition() {
    const windowScrolling = window.scrollY;
    console.log(`Window Scroll Position ${windowScrolling}`);
    setScrollPosition(windowScrolling);
}

// useEffect(() => {
//     window.addEventListener('scroll', updateScrollPosition);
// }, []);
// useEffect(() => {
//     console.log('Attaching');
//     window.addEventListener('scroll', updateScrollPosition);

//     return () => {
//         console.log('Dettaching');
//         window.removeEventListener('scroll', updateScrollPosition);
//     };
// });
//     return (
<div className='my-10'>
    <Button
        onClick={() => setOnline((online) => !online)}
        className='bg-slate-700'
        text={online ? 'Set Online' : 'set Offline'}
    />
</div>;
//     );
// };

// export default UseEffect;
