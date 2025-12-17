import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}


const loadNextPage= async () =>{
    await loadUsersByPage(state.currentPage + 1);   

    //si no hay usuarios 
    if(users.length === 0) returns;
    
    //si hay usuarios incrementa current y duarda los users de esa pagina en state
    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage= async () =>{
    throw new Error('no implementado');
}

const onUserChanged= async () =>{
    throw new Error('no implementado');
}

const reloadPage= async () =>{
    throw new Error('no implementado');
}

export default{
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}

