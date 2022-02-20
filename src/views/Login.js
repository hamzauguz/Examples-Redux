import { useDispatch } from 'react-redux'
import { login } from '../stores/auth'
import { useHistory } from 'react-router-dom'
function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleLogin = () => {
    //istek atacaksınız
    //data..

    const dummyData = {
      id: 1,
      name: 'Tayfun',
      token: 'fdsfs24323432432',
    }
    dispatch(login(dummyData))
    history.push('/')
  }

  return (
    <div style={{ background: 'lightblue' }}>
      <h3>Giriş yap</h3>
      <button onClick={handleLogin}>Giriş yapmak için tıklayın...</button>
    </div>
  )
}
export default Login
