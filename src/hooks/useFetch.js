import { useState } from 'react';

export const useFetch = (callback) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setLoading(true);
            await callback(...args);
        } catch(e) {
            setError(e.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return [fetching, loading, error]
}