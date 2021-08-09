import style from "../assets/css/makelink.module.css";

function MakeLink({info}){
    let a =[];
    if (info.length > 1){
        for(let i = 0; i < info.length; i++){
            if(i == info.length-1){
                a.push(<a href = '' className = {style.link}>{info[i]}</a>);
            }
            else{
                info[i]== info.slice(-2)[0] ? a.push(<span><a href = '' className = {style.link}>{info[i]}</a> and </span>) : a.push(<span><a href = '' className = {style.link}>{info[i]}</a>, </span>);
            }
        }
        return a;
    }
    return <a href = '' className = {style.link}>{info}</a>;
}

export default MakeLink;