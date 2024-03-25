import React from 'react'
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
  }
  return (
    <>
        <img className='ErrorPage' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>
        <div className='ErrorContent'>
        <h1>...Oops!! Qualcosa è andato storto! </h1>
        <p>Non siamo riusciti a trovare questa pagina!</p>
        <button onClick={handleClick}> Torna alla home </button>
        </div>
    </>
  )
}

export default ErrorPage