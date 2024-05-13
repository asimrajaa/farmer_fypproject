import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const Chat_Chatpage = (props) => {
  const chatProps = useMultiChatLogic(
    '968d0978-6481-4391-b809-6a47c4a5a99f',
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