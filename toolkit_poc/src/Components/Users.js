import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { userData,getuser } from '../redux/userSlice';
function Users() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userData('Hello World'));
    },[dispatch]);
    return (
        <div>
            Users Page
        </div>
    )
}

export default Users;