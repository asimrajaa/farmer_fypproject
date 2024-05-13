import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const Chat_Chatpage = (props) => {
  const chatProps = useMultiChatLogic(
    '0446f7cb-3442-4165-96a5-c1690eeb49e4',
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