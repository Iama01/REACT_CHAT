/* eslint-disable react/prop-types */
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('78149cee-fc08-48e0-ad76-43993d4729b3',props.user.username, props.user.secret);
    return ( 
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />   
    </div>
    )
} 

export default ChatsPage