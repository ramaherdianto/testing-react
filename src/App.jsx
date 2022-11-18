import { useState } from 'react';
import { FaFacebookF, FaGithubAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div className='App flex flex-col justify-center items-center'>
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
            </div>

            <div className='max-w-md mt-20'>
                <Card>
                    <Card.Title>Hello React</Card.Title>
                    <Card.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Excepturi tempore provident magni et odio quae
                        accusantium illo architecto, blanditiis quas eveniet
                        dolor delectus dolorum reiciendis minima corrupti modi,
                        consequuntur beatae explicabo. Atque delectus quibusdam
                        doloremque totam necessitatibus ipsum voluptatibus
                        repudiandae officia minus, rerum rem molestiae!
                    </Card.Body>
                    <Card.Footer>
                        <Button>Learn more</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
