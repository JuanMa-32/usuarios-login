import { useReducer, useState } from 'react'
import { usersReducers } from './../reducers/usersReducers';
import Swal from 'sweetalert2';
const userInitial = [
    {
        id: 1,
        userName: 'juan',
        password: '123123',
        email: 'juan@juan.com'
    }
];
const inititalUserForm = {
    id: 0,
    userName: '',
    password: '',
    email: '',
}

export const useUsers = () => {
    //users: es el estado actual
    //dispatch: es una funcion que se usa para enviar una accion al reducer y actualizar el estado
    //usersReducers: especifica como se debe actualizar el estado en respuesta a las acciones
    //userInitial: es el valor inicial del estado
    const [users, dispatch] = useReducer(usersReducers, userInitial)
    const [userSelected, setuserSelected] = useState(inititalUserForm)

    const [visibleFrom, setvisibleFrom] = useState(false);

    const hanlderAddUser = (user) => {
        //console.log(user);
        let type;
        if (user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser'
        }

        dispatch({
            type: type,
            payload: user
        });
        Swal.fire(
           (user.id===0 ?  'Usuario creado!' : 'Usuario Actualizado!'),
            (user.id === 0 ? 'El usuario ha sido registrado!!' : 'Perfil actualizado!'),
            'success'
          )
          handlerCloseForm();
    }

    const handlerDeleteUser = (id) => {
        //console.log(id);
       

        Swal.fire({
            title: 'esta seguro que eliminara el usuario?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'deleteUser',
                    payload: id,
                })
              Swal.fire(
                'Deleted!',
                'El usuario fue eliminado.',
                'success'
              )
            }
          })
    }

    const hanlderUpdate = (user) => {
        setvisibleFrom(true);
        setuserSelected({ ...user })
    }

   const handlerOpenForm = () => {
        setvisibleFrom(true);
    }
    const handlerCloseForm = () => {
        setvisibleFrom(false)
        setuserSelected(inititalUserForm)
    }
    return {
        users,
        userSelected,
        inititalUserForm,
        visibleFrom,

        handlerDeleteUser,
        hanlderUpdate,
        hanlderAddUser,
        handlerOpenForm,
        handlerCloseForm

    }
}
