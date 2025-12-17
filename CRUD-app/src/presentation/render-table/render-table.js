import usersStore from '../../users/store/users-store';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>        
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append ( tableHeaders, tableBody );
}

export const renderTable = ( element ) => {

    const users = usersStore.getUsers();

    //esto indica que se ingrezo por primera vez
    //si no existe la tabla renderizada, se crea
    if (!table) {
        table = createTable();
        element.append( table );

        // TODO: agregar listener
    }
}