import style from "../assets/css/footer.module.css";

function FooterItem(item) {
    return (<li>
            <a className = {style.footer__link} href = '' >{item.item}</a>
        </li>);
    }
    
    export default FooterItem;