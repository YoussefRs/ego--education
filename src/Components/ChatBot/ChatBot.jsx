import React, { useEffect } from 'react';
import './ChatBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';

function ChatBot() {

  return (
    <>
        <button class="chatbot__button">
            <span class="material-symbols-outlined"><FontAwesomeIcon icon={faComment} style={{fontSize : 30}}/> </span>
            <span class="material-symbols-outlined">close</span>
        </button>
        <div class="chatbot">
            <div class="chatbot__header">
                <h3 class="chatbox__title">Chatbot</h3>
                <span class="material-symbols-outlined">close</span>
            </div>
            <ul class="chatbot__box">
                <li class="chatbot__chat incoming">
                <span class="material-symbols-outlined">smart_toy</span>
                <p>Hi there. How can I help you today?</p>
                </li>
                <li class="chatbot__chat outgoing">
                <p>...</p>
                </li>
            </ul>
            <div class="chatbot__input-box">
                <textarea
                class="chatbot__textarea"
                placeholder="Enter a message..."
                required
                ></textarea>
                <span id="send-btn" class="material-symbols-outlined">send</span>
            </div>
        </div>
    </>
  )
}

export default ChatBot
