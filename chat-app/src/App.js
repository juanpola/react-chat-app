import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
        height='100'
        projectID='602dffec-1b1a-4107-8648-79dbbf5e5c8d'
        userName='Juan Polanco'
        userSecret='Juanjoc1214!'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />

    );
}

export default App;
