import style from "../assets/css/postitem.module.css";
import cloud from "../images/cloud.svg";
import file from "../images/file.svg";

function PostText(info) {
  return (
    <div className={style.post_file}>
      <img className={style.post_file__file_pic} src={file} alt="" />
      <div className={style.post_file__file_info}>
        <span className={style.post_file__file_name}>
          {info.file_name}
        </span>
        <span className={style.post_file__file_desc}>
          {info.file_desc}
        </span>
      </div>
      <img className={style.post_file__cloud} src={cloud} alt="" />
    </div>
  );
}

export default PostText;
