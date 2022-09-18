import { ThemeContext } from '../../context/ThemeContext'
import { useState, useContext } from 'react'

function Login() {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="login">
      <></>
    </section>
  )
}

export default Login
