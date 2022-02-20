import { increment, decrement, incrementByAmount } from '../stores/counter'
import { useDispatch } from 'react-redux'

function CounterActions() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
      <button onClick={() => dispatch(increment())}>Artır (+)</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        4 Arttir (+)
      </button>
    </div>
  )
}
export default CounterActions
