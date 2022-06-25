import { MessageActions } from "./constants";
import { ActionType, MessageType } from "./types";

const useMessages = () => {

    //this hook is for generating a message based on realime database actions
    //this will take two arguments: the action performed and the message type, either SUCCESS or ERROR.
    const geFirebaseMessage = (actionType: ActionType, msgType: MessageType): string => {
        let message: string = '';
        MessageActions.map(actions => {
            message = msgType === 'SUCCESS' ? setSuccessMessage(actions[actionType].success) : setErrorMessage(actions[actionType].error)
        })
        return message
    }

    const setErrorMessage = (action: string | undefined): string => `An error occured while ${action} data, please try again.`

    const setSuccessMessage = (action: string): string => `Data has been successfully ${action}.`

    const getEmptyDataMessage = (ref: string) => `There is no data available in ${ref}, please try again.`


    return { geFirebaseMessage, getEmptyDataMessage }
}

export default useMessages