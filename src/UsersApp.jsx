
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth/hooks/useAuth"
import { LoginPage } from "./auth/pages/LoginPage"
import UsersPage from "./page/UsersPage"
import { UserRoutes } from "./routes/UserRoutes";




function UsersApp() {

  const { login, hanlderLogin, hanlderLogout } = useAuth();
  return (
    <Routes>
      {login.isAuth
        ? (
          <Route path='/*' element={<UserRoutes hanlderLogout={hanlderLogout} ></UserRoutes>} ></Route>
        ) :
        <>
          <Route path='/login' element={<LoginPage hanlderLogin={hanlderLogin} />} />
          <Route path='/*' element={<Navigate to = "/login"/>} />

        </>

      }
    </Routes>


  )

}

export default UsersApp
