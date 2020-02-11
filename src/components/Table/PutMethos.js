import React,{ useState }  from 'react';
import axios from "axios";

export default function StickyHeadTable() {

    const [users, setUsers] = useState([]);



        axios.put(`https://jsonplaceholder.typicode.com/users/1`,{
            name: "David",
            email:"Cab@gmail.com",
            phone:"929292"

        }).then(res =>{
            const infoRes = res;
            setUsers(infoRes)
            console.log(infoRes);
        });


    return (
     <div>
         <p>PUEDE TARDAR UN POCO CARGANDO LA RESPUESTA POR FAVOR ESPERE O CHEQUEE LA CONSOLA</p>
         <br></br>
         <p>Respose: {JSON.stringify(users)} check console logs</p>
     </div>
    );
}