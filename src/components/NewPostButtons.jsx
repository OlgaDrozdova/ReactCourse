import React from 'react';

function NewPostButtons({ props }){
    if (props == null) return null;
    return(
      <a className = 'menu__link' href=''>
        <img src = {props[0]}></img>
      </a>
      );
  }
  
  export default NewPostButtons;