function NewPostButtons(props){
    return(
      <a className = 'menu__link newpost__buttons' href=''>
        <img src = {props.img}></img>
      </a>
      );
  }
  
  export default NewPostButtons;