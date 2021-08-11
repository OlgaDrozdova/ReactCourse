import style from "../assets/css/rightblock.module.css";

function Article(info){
    return (
        <div className = {style.article__item}>
            <img alt='' src={info.pic} className = {style.article__pic}/>
            <div className = {style.article__item_desc}>
                <span className = {style.article_block__desc}>{info.desc}</span>
                <span className = {style.university_block__view}>{info.view}</span> 
            </div>
        </div>
    );  
}

export default Article;