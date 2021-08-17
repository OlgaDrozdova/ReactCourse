import { useState } from "react";
import style from "../assets/css/postitem.module.css";


//   if (info.post_text.length > 330) {
//     return (
//       <div className={style.post_text}>
//         <div className={style.post_text_large}>
//           {info.post_text.substr(0, 330)}
//         </div>
//         <a className={style.post_text__link} href="" onClick={onClickReadMore}>
//           Read more
//         </a>
//       </div>
//     );
//   } else {
//     return <div className={style.post_text}>{info.post_text}</div>;
//   }

//     const [text, fullText] = useState(info.post_text.substr(0, 330));
//     let foo = false;

//     const setFullText = () => {
//       setState(!liked)
//       !liked ? blockInfo.likes++ : blockInfo.likes--
//     };

//     if (info.hasOwnProperty("post_text")) {
//       if (info.post_text.length > 330) {
//         item.push(
//           <div className={style.post_text}>
//             <div className={style.post_text_large}>
//               {info.post_text.substr(0, 330)}
//             </div>
//             <a
//               className={style.post_text__link}
//               href=""
//               onClick={onClickReadMore}
//             >
//               Read more
//             </a>
//           </div>
//         );
//         function onClickReadMore() {
//           alert("something");
//           // item.pop();
//           item.push(<div className={style.post_text}>{info.post_text}</div>);
//         }
//       } else {
//         item.push(<div className={style.post_text}>{info.post_text}</div>);
//       }
//     }
//     return  (
//         {if (info.post_text.length > 330) {}}
// );
//ДОПИЛИТЬ USESTATE
function PostText(info) {
    return <div className={style.post_text}>{info.post_text}</div>;
}

export default PostText;
