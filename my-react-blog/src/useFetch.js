import { useState, useEffect } from 'react';

const useFetch = (url, sorted = false) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok) throw Error("not fetched");
            return res.json(); 
        })
        .then (data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch( err => {
            if(err.name !== "AbortError") {
                setIsPending(false);
                setError(err.message);
            }            
        });
        return () => abortCont.abort();
    },[url,sorted]);

    return { data, isPending, error };
}

export default useFetch;