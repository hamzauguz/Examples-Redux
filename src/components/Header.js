import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'

function Header() {
  const { dark, language } = useSelector((state) => state.site)
  return (
    <div>
      header
      <nav>
        <NavLink to="/" exact={true} activeClassName="active">
          anasayfa
        </NavLink>
        <NavLink to="/about" exact={true} activeClassName="active">
          Hakkında
        </NavLink>
        <NavLink to="/profile" exact={true} activeClassName="active">
          Profil
        </NavLink>
      </nav>
      <div>
        Dark mod = {dark ? 'evett' : 'hayırr'} <br />
        Mevcut dil = {language}
      </div>
    </div>
  )
}
export default Header
