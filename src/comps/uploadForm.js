import React from 'react';

const uploadForm = () =>{

    const changeHandler = (e) =>{
        console.log('changed');
    }

return (
    <form>
        <input type = "file" onChange = {changeHandler}/>
    </form>
)

}
export  default uploadForm;