import ChatBox from "./ChatBox";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

// Okay so all I need to do now is to wait for the chatbot's response
// Thus, the workflow is to type a message, then send a fetch request to the server based on the msg
// then get a response back and append the chatList state with a property that determines the origin of the chat

function Window({ socket }) {
  // const [newChat, setNewChat] = useState("");
  const [chatList, setChatList] = useState([{ msg: "sample chat", id: 1 }]);
  const [messageCount, setMessageCount] = useState(2);

  socket.on("message", text => {
    setChatList([...chatList, { msg: text, id: messageCount }]);
    setMessageCount(messageCount + 1);
  });

  console.log(chatList);

  function submitClickHandler(event, message) {
    event.preventDefault();

    console.log("this is the message you just typed", message);
    // setNewChat(message);
    // console.log("this is the newChat state variable", newChat);
    
    socket.emit("message", message);

    setChatList([...chatList, { msg: message, id: messageCount }]);
    setMessageCount(messageCount + 1);
  }

  return (
    <div className="window">  
      <ChatBox submitClickHandler={submitClickHandler} />
      <ChatDisplay chatList={chatList} />
    </div>
  );
}

export default Window;