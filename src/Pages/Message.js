import React from 'react';
import {
  Link,
} from 'react-router-dom';
const Message = () => (
  <div>
    <h1>Message</h1>
  <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/messages">Messages</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/Contact">Contact</Link> </li>
            </ul>
        </div>
        
  </div>
);

export default Message;