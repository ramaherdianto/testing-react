import { useState } from 'react';
import { FaFacebookF, FaGithubAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Api from './components/Api';
import Button from './components/Button';
import Card from './components/Card';
import { Input } from './components/Input';
import { Todo } from './components/Todo';

function App() {
    return (
        <div className='App bg-violet-600 min-h-screen flex flex-col justify-center items-center'>
            {/* <Todo /> */}
            {/* <UseEffect /> */}
            <Api />
        </div>
    );
}

export default App;
