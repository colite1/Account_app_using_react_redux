import { useDispatch, useSelector } from 'react-redux';
import {incrementBonus} from '../actions';
function Bonus() {
  const amount = useSelector(store=>store.account.amount);
  const points = useSelector(store=>store.bonus.points)
  const dispatch = useDispatch()
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point :${points}</h3>
        <h3>Amount : ${amount}</h3>

        <button onClick={()=> dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
