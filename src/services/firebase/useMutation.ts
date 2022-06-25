import { set, ref } from 'firebase/database';
import { useState } from 'react';
import database from './firebase';
import { v4 as uuidv4 } from 'uuid'
import useMessages from '../../utils/useMessages';

const useMutation = <T>(dataRef: string) => {

    const { geFirebaseMessage } = useMessages();
    const [error, setError] = useState<Error | null>(null)
    const [responseMessage, setResponseMessage] = useState<string | null>(null)

    const writeData = (data: T) => {
        set(ref(database, `${dataRef}/${uuidv4()}`), data).then(() => setResponseMessage(geFirebaseMessage('CREATE', 'SUCCESS'))
        ).catch((error: Error) => {
            setResponseMessage(geFirebaseMessage('CREATE', 'ERROR'))
            setError(error)
        })
    }

    const updateData = () => {

    }

    const deleteData = () => {

    }


    return { writeData, updateData, deleteData, responseMessage, error }

}

export default useMutation