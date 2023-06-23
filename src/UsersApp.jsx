
import { useAuth } from "./auth/hooks/useAuth"
import { LoginPage } from "./auth/pages/LoginPage"
import UsersPage from "./page/UsersPage"




function UsersApp() {
  
  const {login,hanlderLogin,hanlderLogout} = useAuth();
  return (
    <>
    {login.isAuth
    ?<UsersPage hanlderLogout={hanlderLogout}/> :
    <LoginPage hanlderLogin={hanlderLogin}  />
    }
    </>
  )
  
}

export default UsersApp
