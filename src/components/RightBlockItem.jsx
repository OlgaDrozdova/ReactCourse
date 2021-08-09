import style from "../assets/css/rightblock.module.css";


function RightBlockItem({info}){
    return (
    <div className = {style.right_block}>
        <div>{info.header}</div>
    </div>);

}

export default RightBlockItem;