import style from './LoginPage.module.scss'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthInput } from '../../components'
import { useAuth } from '../../context/AuthContext';//暫時引用
import { useState } from 'react'
//import { login } from '../../apis/user'
import Swal from 'sweetalert2'
import { useEffect } from 'react';

const LoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const { login, isAuthenticated, user } = useAuth();
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  // error在其他使用到authinput的元件也會使用到，可以掛共用
  const [error, setError] = useState(true)

  const handleClick = async (e) => {
    if (!account.trim() || !password.trim()) {
      Swal.fire({
        title: '請先登入帳號',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
        position: 'top',
      });
      return
    }
    // error在其他使用到authinput的元件也會使用到，可以掛共用
    const [error, setError] = useState(false)

    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      if (!account.trim() || !password.trim()) {
        Swal.fire({
          title: '請先登入帳號',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
          position: 'top',
        });
        return
      }
      const { data, success, isUser, errInfo } = await login({ account, password })

      if (success && isUser) {
        const token = data.data.token
        console.log(token)
        localStorage.setItem('token', token)

        if (success) {
          // localStorage.setItem('token', token)
          // token得待在成功條件裡
          //const token = data.data.data.token

          //localStorage.setItem('token', token)

          Swal.fire({
            title: '登入成功',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            position: 'top',
          });
          setError(false)
          navigate('/setting')
          return

        } else {
          Swal.fire({
            title: '登入失敗',
            icon: 'error',
            showConfirmButton: false,
            timer: 1000,
            position: 'top',
          });
          setMessage(errInfo)
          setError(true)
          return

        }
      };
      useEffect(() => {
        if (isAuthenticated) {
          navigate(`/${user?.id}/`);
        }
      }, [navigate, isAuthenticated, user]);

      return (
        <div className={style.container}>
          <Logo className={style.logo} />
          <h3 className={style.title}>登入Alphitter</h3>
          <form className={style.form} onSubmit={handleLoginSubmit}>
            <AuthInput label='帳號' id="account" type="text" placeholder="請輸入帳號" value={account} onChange={(accountValue) => setAccount(accountValue)} maxLength={50} isError={error} message={message} />

            <AuthInput label='密碼' id="password" type="password" placeholder="請輸入密碼" value={password} onChange={(passwordValue) => setPassword(passwordValue)} isError={error} />
            <button className={style.button} type="submit" >登入</button>
          </form >
          <div className={style.linkGroup}>
            <Link to='/register' className={style.link}>註冊</Link>
            ・
            <Link to='/admin' className={style.link}>後台登入</Link>
          </div>
        </div>
      )
    }
    export default LoginPage
