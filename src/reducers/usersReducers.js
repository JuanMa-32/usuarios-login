//recibe el estado actual (state) y una accion (action) 
//que es un objeto que describe que tipo de cambio se debe realizar en el estado.
export const usersReducers = (state=[],action) => {

    switch(action.type){//el type es la accion a realizar
        case 'addUser':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                    id: new Date().getTime(),
                }
            ];
        case 'deleteUser':
            return[
                ...state.filter(user=>user.id !== action.payload)
            ]  
        case 'updateUser':
            return  state.map(u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload
                    };
                }
                return u;
            })    
        case 'loadingUsuarios':
            return action.payload;
            
        default:
            return state;    
    }
}
