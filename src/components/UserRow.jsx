import React from 'react'

export const UserRow = ({user,hanlderDelete,hanlderUpdate}) => {


    return (<tr >
        <td>{user.id}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td><button type='button' className='btn btn-secondary btn-sm' onClick={() => hanlderUpdate(user)}>Update</button></td>
        <td><button type='button' className='btn btn-danger btn-sm'onClick={() =>  hanlderDelete(user.id)}>Delete</button></td>
    </tr>

    )
}