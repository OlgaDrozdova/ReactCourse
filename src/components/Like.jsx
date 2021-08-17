import style from "../assets/css/postitem.module.css";
import "../assets/sass/main.sass";


function Like(info) {
    return (
      <button className={"button__like  " + info.icon} onClick={info.onClick}>
        <span className={style.post_footer__text}>{info.likes}</span>
      </button>
    );
  }
  
  export default Like;