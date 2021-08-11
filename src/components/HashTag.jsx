import style from "../assets/css/rightblock.module.css";

function HashTag(info){
    return (
        <a href = '' className = {style.hashtag__item}>{'#' + info.item}</a>
    ); 
}

export default HashTag;