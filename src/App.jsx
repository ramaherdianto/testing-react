import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { FaFacebookF, FaGithubAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App flex flex-col justify-center items-center'>
            <div>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src='/vite.svg' className='logo' alt='Vite logo' />
                </a>
                <a href='https://reactjs.org' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button
                    className='py-3 px-8 bg-sky-400 text-white rounded-[30px]'
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <button className='py-3 px-5 bg-sky-400 text-white'>
                Tailwind CSS
            </button>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>

            <div className='flex mt-7 gap-2'>
                <Button
                    type='button'
                    onClick={() => console.log('Ragister dengan Facebook')}
                >
                    <FaFacebookF className='w-5 h-5 stroke-1' />
                    Facebook
                </Button>
                <Button
                    className='bg-red-500'
                    type='submit'
                    onClick={() => console.log('Login dengan Email')}
                >
                    <GrMail />
                    Email
                </Button>
                <Button
                    className='bg-transparent border border-slate-700 text-black'
                    type='button'
                    onClick={() => console.log('Ragister dengan Github')}
                >
                    <FaGithubAlt className='w-5 h-5 stroke-1' />
                    Github
                </Button>
                {/* <button className="bg-red-400 text-white px-4 py-2 rounded">Gmail</button>
        <button className="bg-slate-700 text-white px-4 py-2 rounded">Github</button> */}
            </div>
        </div>
    );
}

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

export default App;
