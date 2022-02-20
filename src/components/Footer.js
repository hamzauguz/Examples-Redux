import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, setDarkMode } from '../stores/site'
import { logout } from '../stores/auth'

function Footer() {
  const dispatch = useDispatch()
  const { dark, language } = useSelector((state) => state.site)
  const languages = ['tr', 'en']
  const { user } = useSelector((state) => state.auth)

  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang))
  }

  

  return (
    <div>
      footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang === language ? 'active' : ''}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? 'Light Moda Geç' : 'Dark Moda Geç'}
        </button>
      </div>
      {user && (
        <div>
          <button onClick={() => dispatch(logout())}>Çıkış Yap</button>
        </div>
      )}
    </div>
  )
}
export default Footer
