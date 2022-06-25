import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import useMessages from '../../utils/useMessages';
import database from './firebase';

const useRealtimeList = <T>(listRef: string) => {
    const [data, setData] = useState<Array<T> | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);
    const { getEmptyDataMessage } = useMessages();

    useEffect(() => {
        onValue(ref(database, listRef), (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val() as Array<T>)
                setLoading(false)
            }
            else {
                setLoading(false)
                setError(getEmptyDataMessage(listRef))
            }
        }, (error: Error) => setError(error.message))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listRef])

    return { data, loading, error }

}

export default useRealtimeList