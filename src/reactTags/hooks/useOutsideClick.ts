import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: any) => {
    const ref = useRef<any>();

    useEffect(() => {
        const handleClick = (event: any) => {
            if (ref.current && !ref.current.contains(event.target) && !document.getElementById('input')?.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [callback, ref]);

    return ref;
};
