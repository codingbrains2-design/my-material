import React from "react";

import { useNavigate} from 'react-router-dom' 

const HeaderTop = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mainHeader">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
            alt=""
          />
        </div>
        <ul className="headerContents">
          <li onClick={() => {navigate('/home')}}>Home</li>
          <li onClick={() => {navigate('/about')}}>about</li>
          <li onClick={() => {navigate('/service')}}>services</li>
          <li onClick={() => {navigate('/apitest')}}>API</li>
        </ul>
   
      </div>
    </div>
  );
};

export default HeaderTop;
