import React from 'react';
import axios from "axios";

export default function StickyHeadTable() {

    var infoRes;

    if (infoRes == null){
        infoRes = '200';
    }

        axios.delete(`https://jsonplaceholder.typicode.com/users/1`).then(function(res){
              console.log(res.data);
              infoRes = res.data;
        });


    return (
     <div>
         <h1>Respose: {infoRes}</h1>
     </div>
    );
}
