import React from 'react';
import { useDispatch } from 'react-redux';
import { ClearButton } from '../theme/index';
import { logOut } from '../store/user';

let LogOutButton = (props) => {
  let dispatch = useDispatch();  
  let logOutUser = ()=>{
    dispatch(
      logOut()
    )
  }
  
  return(
    <ClearButton className={props.className} onClick={logOutUser} style={{ top: '13px', position: 'relative' }}>LogOut</ClearButton>
  )
}

export default LogOutButton;