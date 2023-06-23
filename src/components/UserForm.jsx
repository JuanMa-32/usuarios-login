import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const UserForm = ({ userSelected, hanlderAddUser, inititalUserForm,handlerCloseForm }) => {

  //contiene el estado del formulario nombre,email,password
  const [userForm, setuserForm] = useState(inititalUserForm)

  //hacemos una destructuracion con cada campo del userForm
  const { id, userName, password, email } = userForm

  //uso un useEffect para cuadno se modifique userSelected se modifique el valor del formulario
  useEffect(() => {
    setuserForm({ ...userSelected })
  }, [userSelected])


  const onInputChange = ({ target }) => {
    //target hace referencia al elemento HTML que desencadeno el evento.
    const { name, value } = target;
    setuserForm({
      ...userForm,
      [name]: value,
    })
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (!userName || !password || !email) {

      Swal.fire(
        'Error',
        'Hay campos obligatorios que completar',
        'error'
      )
      return;
    }
    //Envio el usuario cargado 
    hanlderAddUser(userForm)
    //seteo el initialUserForm para limpiar el form una vez que se cargaron los datos
    setuserForm(inititalUserForm)

  }

  return (
    <form onSubmit={onSubmit}>

      <input className='form-control my-3 w-75' placeholder='UserName' name='userName' value={userName}
        onChange={onInputChange} // se dispara cuando el valor de un elemento de entrada (input) o de selección (select) ha cambiado. 
      />
      <input type="password" className='form-control my-3 w-75' placeholder='password' name='password' value={password}
        onChange={onInputChange}
      />
      <input className='form-control my-3 w-75' placeholder='email' name='email' value={email}
        onChange={onInputChange}
      />
      <input type='hidden' name="id" value={id} />
      <button type='submit' className='btn btn-primary'>
        {id > 0 ? 'Editar' : 'Crear'}
      </button>
      <button className='btn btn-primary mx-2' type='button' onClick={handlerCloseForm}>
          Cerrar
          </button>

    </form>
  )
}
