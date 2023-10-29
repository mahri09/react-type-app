import React, { useState, useRef, useEffect } from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 32},
    {name: 'Michael', age:20}
];

const UserSearch : React.FC = () =>{
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age:number} | undefined>();


    const handleClick=()=>{
        const foundUser = users.find((user)=>{
            return user.name.toLowerCase() === name.toLowerCase();
        });
        setUser(foundUser);
    }

    useEffect(()=>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <h3>User Search</h3>        
            <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)} /> 
            <button onClick={handleClick}>Find User</button> 
            <div>
                <span>{user && user.name} </span>
                <span>{user && user.age}</span>
            </div>
        </div>
    )
};


export default UserSearch;