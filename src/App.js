import React from "react";
import { ChatEngine} from "react-chat-engine";
import "./App.css"
import ChatFeed from "./components/ChatFeed";

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="aa459c71-67bf-4f64-8de8-89931a49fd68"
            userName="Pete"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App