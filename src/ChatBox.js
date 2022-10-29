import { useState } from "react";

function ChatBox({ submitClickHandler }) {
  const [message, setMessage] = useState("");

  return (
    <div className="chatbox">
      <form>
        <label> Type your messages here: </label>
        <input 
          type="text"
          required
          value={message}
          onChange={(e) => { setMessage(e.target.value) }}
        />
        <button onClick={(event) => {
          submitClickHandler(event, message);
          setMessage("");
        }}
          id="send-message" className="button is-success is-fullwidth is-normal"
        > 
          Send 
        </button>
      </form>
    </div>
  );
}

export default ChatBox;