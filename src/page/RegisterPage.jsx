
import { UserForm } from '../components/UserForm';
import { useState } from 'react';

export const RegisterPage = ({ hanlderAddUser, inititalUserForm}) => {

    const [userSelected, setuserSelected] = useState(inititalUserForm)
  return (
    <div className="container my-4">
        <h4>Editar usuario</h4>
        <div className="row">
            <div className="col">
                <UserForm userSelected={userSelected} hanlderAddUser={hanlderAddUser} inititalUserForm={inititalUserForm}  />
            </div>
        </div>
    </div>
  )
}
