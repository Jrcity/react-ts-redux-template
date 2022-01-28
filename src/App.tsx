import React from 'react'
import { FC } from "react";
import {  useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitch';
//components

const App: FC<{}> = () => {
  const {theme} =  useSelector((state:any) => state.theme)
 

  document.fgColor = theme.primary;
  document.bgColor = theme.background
  
  return (
     <div>
       <h1>Display</h1>
       <ThemeSwitcher />
       
     </div> 
  );
};

export default App;
