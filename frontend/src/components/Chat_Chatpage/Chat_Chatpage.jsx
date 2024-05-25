import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const Chat_Chatpage = (props) => {
  const chatProps = useMultiChatLogic(
    
    'c194e0cd-d05d-4463-bcd6-8225ce539d04',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{height: '100vh'}}>
      <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
      <MultiChatSocket {...chatProps} />
    </div>
  );
  };
  export default Chat_Chatpage;