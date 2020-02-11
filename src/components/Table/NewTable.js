import React, { useState, useEffect } from "react";
import axios from "axios";

const TableNew = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const pedido = res.data;
            setUsers(pedido);
        });
    }, []);


    localStorage.setItem("userList", JSON.stringify(users));

    return (
        <div></div>
    );
};

export default TableNew;