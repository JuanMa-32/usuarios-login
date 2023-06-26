import { Navigate, Route, Routes } from "react-router-dom"
import UsersPage from "../page/UsersPage"
import { NavBar } from "../components/NavBar"
import { RegisterPage } from '../page/RegisterPage';
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({login,hanlderLogout}) => {
  const {
    users,
    userSelected,
    inititalUserForm,
    visibleFrom,

    handlerDeleteUser,
    hanlderUpdate,
    hanlderAddUser,
    handlerOpenForm,
    handlerCloseForm
  } = useUsers();
  return (
   <>
    <NavBar hanlderLogout={hanlderLogout}></NavBar>
   <Routes>
    <Route path="users" element={<UsersPage
    users={users}
    userSelected={userSelected}
    inititalUserForm={inititalUserForm}
    visibleFrom={visibleFrom}
    hanlderAddUser={hanlderAddUser}
    handlerDeleteUser={handlerDeleteUser}
    hanlderUpdate={hanlderUpdate}
    handlerOpenForm={handlerOpenForm}
    handlerCloseForm={handlerCloseForm}
    />}/>
    <Route path="users/register" element={<RegisterPage hanlderAddUser={hanlderAddUser} inititalUserForm={inititalUserForm}/>}/>
    <Route path="/" element={<Navigate to="/users"/>}/>
   </Routes>
   </>
  )
}
