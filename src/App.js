import React from "react";
import { ChatEngine} from "react-chat-engine";
import "./App.css"
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./LoginForm";

const App = () => {
    //if there is no username(not logged in)
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="aa459c71-67bf-4f64-8de8-89931a49fd68"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App