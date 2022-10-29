function ChatDisplay({ chatList }) {
  console.log(chatList, "this is the ChatDisplay function");
  // console.log(chatList.map(chat => console.log(chat.id, chat.msg, "this is the chatList map func")));

  return (
    <div className="chatDisplay">
      {
        chatList?.map(chat => (
          <div className="message" key={chat.id}>
            <h3> {chat.msg} </h3>
          </div>
        ))
      }
    </div>
  )
}

export default ChatDisplay;