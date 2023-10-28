import logo from './logo.svg';
import './App.css';
import Navigation from './NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
      <body>
        <h3>Log in!</h3>
        <div>
          <input type = 'text' placeholder='Username'></input>
          <input type = 'text' placeholder='Password'></input>
          
        </div>
        <div>
         <button type='Submit'>Log in</button>
        </div>
      </body>
    </div>
  );
}

export default App;
