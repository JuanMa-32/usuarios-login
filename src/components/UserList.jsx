import { UserRow } from "./UserRow"

export const UserList = ({users = [],hanlderDelete,hanlderUpdate}) => {
   

  return (
    <table className='table table-dark table-hover'>
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>email</th>
                <th>update</th>
                <th>eliminar</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user =>  
                    <UserRow key={user.id} user={user} hanlderDelete={hanlderDelete} hanlderUpdate={hanlderUpdate}  />
                )
            }
        </tbody>
    </table>
  )
}
