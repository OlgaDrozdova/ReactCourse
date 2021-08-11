import style from "../assets/css/rightblock.module.css";

function University(info){
    return (
        <a href = '' className = {style.university_block__item}>
            <img alt='' src={info.pic} className = {style.university_block__item_pic} />
            <div className = {style.university_block__desc}>{info.desc}</div>
        </a>
    ); 
}

export default University;