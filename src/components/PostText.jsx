import { useState } from "react";
import style from "../assets/css/postitem.module.css";

function PostText(info) {
    const [more, less] = useState(true);
  if (info.full_text.length < 330) {
    return <div className={style.post_text}>{info.full_text}</div>;
  }
  return (
    <div className={style.post_text}>
      {more == true ? (
          <>
        <div className={style.post_text_mini}>
          {info.full_text.substr(0, 330)}
        </div>
        <a className={style.post_text__link}  onClick={() =>{less(!more);}}>
        Read more
      </a></>
      ) : (
          <>
        <div className={style.post_text_large}>{info.full_text}</div>
        <a className={style.post_text__link}  onClick={() =>{less(!more);}}>
        Read less
      </a></>
      )}
    </div>
  );
}

export default PostText;
