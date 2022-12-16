import { useState } from 'react';
import { useRef } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { Input } from './components/Input';
import useJoke from './hooks/useJoke';

function App() {
    const nameRef = useRef('');
    const [name, setName] = useState('');
    const joke = useJoke(name);

    const generateJoke = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };

    return (
        <div className='App bg-violet-600 min-h-screen px-40 flex flex-col justify-center items-center'>
            <Card>
                <Card.Title>Joke</Card.Title>
                <Card.Body>
                    <p className='mb-4'>{joke.value}</p>

                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button className='bg-violet-600' onClick={generateJoke}>
                        Generate a Joke
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default App;
