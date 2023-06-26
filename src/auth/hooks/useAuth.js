import { useReducer } from "react"
import Swal from "sweetalert2"
import { loginReducer } from './../pages/reducers/loginReducer';
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}
export const useAuth = () => {
    const [login, dispach] = useReducer(loginReducer, initialLogin)
    const navigate =useNavigate()

    const hanlderLogin = (userLogin) => {
        if (userLogin.username === 'admin' && userLogin.password === '123') {
            const user = { username: 'admin' }
            dispach({
                type: 'login',
                payload: user,
            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user: user,
            }))
            navigate('/users')
        } else {
            Swal.fire('error l', 'error ', 'error')
        }
    }

    const hanlderLogout = () => {
        dispach(
            {
                type: 'logout'
            }
        )
        sessionStorage.removeItem('login')
    }

    return {
   login,
   hanlderLogin,
   hanlderLogout
    }
}
