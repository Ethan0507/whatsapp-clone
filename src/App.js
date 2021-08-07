import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App; 