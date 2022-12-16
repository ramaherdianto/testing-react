import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useJoke(name) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.chucknorris.io/jokes/random?name=${name}`
                );
                setJoke(data);
            } catch (err) {
                console.log('Something went wrong.', err);
            }
        };

        getJoke();
    }, [name]);

    return joke;
}
