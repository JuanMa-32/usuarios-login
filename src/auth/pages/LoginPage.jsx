import { useState } from "react"
import Swal from 'sweetalert2'

const initialLoginForm = {
    username:'',
    password:''
}
export const LoginPage = ({hanlderLogin}) => {

    const [loginForm, setLoginForm] = useState(initialLoginForm)
    const {username,password} = loginForm;

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setLoginForm(
            {
                ...loginForm,
                [name]:value
            }
        )
    }
    const onSubmit = (event) => {
        event.preventDefault();
        hanlderLogin({username,password})
        if(username === 'admin' && password ==='123'){

        }else{
            Swal.fire('error l','error ','error')
        }
    }
    return (
        <div className="modal" style={ {display: 'block'} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>

                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                        <input type="text" className="form-control my-3 w-75" value={username} 
                        placeholder="username" name="username" onChange={onInputChange}/>
                        <input type="password" className="form-control my-3 w-75"value={password} 
                        placeholder="password" name="password" onChange={onInputChange}/>
                        </div>
                        <div className="modal-footer">

                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
