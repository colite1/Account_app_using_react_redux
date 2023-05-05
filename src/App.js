import { useSelector } from 'react-redux';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
function App() {
  const amount = useSelector(store=>store.account.amount);
  const points = useSelector(store=>store.bonus.points);
  const account = useSelector(store=>store.account);
  return (
    <div className="App">
      <h4>Account App Based On React-Redux</h4>
      {account.pending ? <p>Loading...</p> : account.error ? <p>{account.error}</p> : <h3>Current Amount : {amount} </h3>}
      <h3>Total Bonus : {points} </h3>
      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
