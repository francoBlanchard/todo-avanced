import { localhostUserToModel } from "../mappers/localhost-User.mapper";

/**
 * 
 * @param {Number} page
 * @returns {Promise<Users[]>}
 */
export const loadUsersByPage = async (page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    //Significa que el servidor mandó el objeto con paginación. Entonces, extraemos solo el arreglo de usuarios y lo guardamos en usersData 
    const usersData = data.data ? data.data : data;
    const users = usersData.map(userLike => localhostUserToModel(userLike)); 

    console.log(users);
    return users;
}