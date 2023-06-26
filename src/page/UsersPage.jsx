import { LoginPage } from '../auth/pages/LoginPage';
import { NavBar } from '../components/NavBar';
import { UserList } from '../components/UserList'
import { UserModalForm } from '../components/UserModalForm';



function UsersPage({
  users,
  userSelected,
  inititalUserForm,
  visibleFrom,

  handlerDeleteUser,
  hanlderUpdate,
  hanlderAddUser,
  handlerOpenForm,
  handlerCloseForm
}) {

  //aca recibo todo lo de mi hook 
 


  return (
    <>
     
      {!visibleFrom || <UserModalForm
        userSelected={userSelected}
        inititalUserForm={inititalUserForm}
        hanlderAddUser={hanlderAddUser}
        handlerCloseForm={handlerCloseForm}
      />
      }

      <div className='container my-4'>
        <h2>Usarios APP </h2>

        <div className='row'>




          <div className='col'>
            {visibleFrom || <button className='btn btn-primary my-2' onClick={handlerOpenForm}>
              Nuevo usuario
            </button>}

            {users.length === 0 ? <div className='alert alert-warning'>No hay usuarios en el sistema</div>
              : <UserList users={users} hanlderDelete={handlerDeleteUser} hanlderUpdate={hanlderUpdate} />}

          </div>
        </div>
      </div>
     
    </>
  )
}

export default UsersPage
