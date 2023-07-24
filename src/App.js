
import './App.css';
import Income from './Components/Income';
import Balance from './Components/Balance';
import Header from './Components/Header';
import History from './Components/History';
import Transaction from './Components/Transaction';
import { Globalprovider } from './Components/Globalstate';

function App() {
  return (
    <Globalprovider>
    <div className="App">
      <Header/>
      <div className='container'>
      <Balance/>
      </div>
      <Income/>
      <History/>
      <Transaction/>
    </div>
    </Globalprovider>
  );
}

export default App;
