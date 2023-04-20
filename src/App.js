import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifting Up State</h1>
      
        {!user && <><section style={{border: '2px solid red', width: '100%', padding: '16px'}}>
        <SignUp setUser={setUser} />
        </section>

        <section style={{border: '2px solid yellow', width: '100%', padding: '16px'}}>
        <Login setUser={setUser} />
        </section></>}
      
        {user && <section style={{border: '2px solid blue', width: '100%', padding: '16px'}}>
        <Dashboard user={user} setUser={setUser} />
        </section>}

      </header>
    </div>
  );
}


