import style from "../assets/css/postitem.module.css";
import share from "../images/share.svg";
import like from "../images/like.svg";
import comment from "../images/comment.svg";
import MainBlockLeftHeader from "./MainBlockLeftHeader";
import PostText from "./PostText";
import PostFile from "./PostFile";
import Like from "./Like";
import { useState } from "react";

function PostItem(info) {
  let checkLike = localStorage.getItem(info.id + "check");
  let countLike = localStorage.getItem(info.id + "like");
  let postText = localStorage.getItem(info.id + "text");

  const [like, setLike] = useState(JSON.parse(checkLike));
  const [liked, unLiked] = useState(JSON.parse(countLike));
  //const [text, fullText] = useState(JSON.parse(postText).substr(0, 330));
//   const [text, fullText] = useState(true);

  const onClick = () => {
    setLike(!like);
    if (like == true) {
      localStorage[info.id + "check"] = !like;
      localStorage[info.id + "like"] = liked - 1;
      unLiked(liked - 1);
    } else {
      localStorage[info.id + "check"] = !like;
      localStorage[info.id + "like"] = liked + 1;
      unLiked(liked + 1);
    }
  };

//   const readMore = () =>{
//     //return <><div>{fullText(JSON.parse(postText))}</div></>;
//     fullText(!text);
    
//   }
  return (
    <div className={style.newpost_item}>
      {info.hasOwnProperty("people") ? (
        <MainBlockLeftHeader header={info.header} people={info.people} />
      ) : (
        <div className={style.header_info}>
          {info.header}
          <i
            className="icon-more-horizontal header_info__other"
            aria-hidden="true"
          ></i>
        </div>
      )}
      <div className={style.user_info}>
        <img src={info.avatar} alt="" />
        <div className={style.user_info__desc}>
          <span className={style.user_info__name}>{info.name}</span>
          <span className={style.user_info__position}>{info.position}</span>
        </div>
      </div>
      {info.hasOwnProperty("post_text") ? (
        <PostText full_text={JSON.parse(postText)}/>
      ) : (
        <></>
      )}
      {info.hasOwnProperty("post_img") ? (
        <img className={style.post_img} src={info.post_img} alt="" />
      ) : (
        <></>
      )}
      {info.hasOwnProperty("post_files") ? (
        info.post_files.map((item) => <PostFile {...item} />)
      ) : (
        <></>
      )}
      <div className={style.post_footer}>
        <Like
          likes={liked}
          onClick={onClick}
          icon={like ? "icon-thumbs-up" : "icon-thumbs-up-1"}
        />
        <div className={style.post_footer__button}>
          <img className={style.post_like} src={comment} alt="" />
          <span className={style.post_footer__text}>{info.comments}</span>
        </div>
        <div className={style.post_footer__button}>
          <img className={style.post_like} src={share} alt="" />
          <span className={style.post_footer__text}>SHARE</span>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
