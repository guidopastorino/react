import React, { useState } from 'react'

const Forms = () => {

  const [user, setUser] = useState({
    nombre: '',
    apellido: ''
  })


  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const sendData = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <>
      <form>
        <input 
          style={{padding: '5px'}}
          placeholder='Nombre'
          type='text'
          name='nombre'
          onChange={handleInputChange}
        />
        <input 
          style={{padding: '5px'}}
          placeholder='Apellido'
          type='text'
          name='apellido'
          onChange={handleInputChange}
        />
        <button type='submit' onClick={sendData}>Enviar datos</button>
      </form>
      <hr />

      {`${user.nombre} ${user.apellido}`}
    </>
  )
}

export default Forms