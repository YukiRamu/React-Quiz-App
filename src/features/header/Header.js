import React from 'react';
import "./Header.scss";
import { useSelector } from "react-redux";
import { userInfoSelector } from "../userForm/userSlice";
import { selectCategory } from '../userForm/categorySlice';

const Header = () => {

  //redux 
  const userInfo = useSelector(userInfoSelector);
  const category = useSelector(selectCategory);

  return (
    <>
      <header>
        <h1>Hi {userInfo.username}!</h1>
        <h2>Topic is {category.topic}</h2>
      </header>
    </>
  );
};

export default Header;
