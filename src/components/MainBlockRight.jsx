import moscow_un from '../images/moscow_un.jpg';
import digital from '../images/digital.jpg';
import interaction from '../images/interaction.jpg';
import des_art from '../images/des_art.jpg';
import advice_art from '../images/advice_art.jpg';
import use_art from '../images/use_art.jpg';
import style from "../assets/css/rightblock.module.css";
import University from './University';
import HashTag from './HashTag';
import Article from './Article';
import background from '../images/background.jpg';
import main_avatar from '../images/main_avatar.jpg';
import logo_gold from '../images/logo_gold.png';

function MainBlockRight(){
    let itemsUniversity = [
            {
              item_pic: moscow_un,
              item_desc: "Moscow State Linguistical University"
            },
            {
              item_pic: digital,
              item_desc: "Digital freelancers group"
            },
            {
              item_pic: interaction,
              item_desc: "Interaction design association"
            },
            {
              item_pic: interaction,
              item_desc: "Interaction design association"
            },
            {
              item_pic: interaction,
              item_desc: "Interaction design association"
            }
          ];

    let itemsHash = ["work", "business", "hr", "userinterface", "digital","userexperience","ux", "ui", "freelance"];
        
    let itemsArticals = [
                {
                  item_pic: des_art,
                  item_desc: "How I make cool designs?",
                  item_view: "6,340 viewers"
                },
                {
                  item_pic: advice_art,
                  item_desc: "Advices for young HR-manager",
                  item_view: "8,123 viewers"
                },
                {
                  item_pic: use_art,
                  item_desc: "A little about usability testing",
                  item_view: "3,912 viewers"
                }
              ];

    return (
        <div>
            <div className = {style.user_block}>
                <img src={background} alt='' />
                <img src={main_avatar} alt='' className = {style.user_block__avatar}/>
                <div className = {style.user_block__name}>
                    <span>Dmitry Kargaev</span> 
                    <img src={logo_gold} alt='' className = {style.user_block__logo_gold}/>
                </div>
                <span className = {style.user_block__text}>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</span>
            </div>
            <div className = {style.new_articale}>
                <button className = {style.new_artical__button}>write new article</button>
            </div>
            <div className = {style.right_block}>
                <div className = {style.right_block__header}>
                    <a href = '' className = {style.link}>my groups</a>
                    <a href = '' className = {style.link}>Edit list</a>  
                </div>
                <div className = {style.university_block}>
                    {itemsUniversity.length > 3 ? itemsUniversity.slice(0, 3).map((item) => <University pic= {item.item_pic} desc={item.item_desc}/>) : itemsUniversity.map((item) => <University pic= {item.item_pic} desc={item.item_desc}/>)} 
                </div>
                <div className = {style.right_block__footer}> 
                    {itemsUniversity.length > 3 ? <a href = '' className = {style.link}>show all({itemsUniversity.length})</a> : <></>}
                </div>
            </div>
            <div className = {style.right_block}>
                <div className = {style.right_block__header}>
                    <a href = '' className = {style.link}>Followed hashtags</a>
                </div>
                <div className = {style.hashtag__block}>
                    {itemsHash.map((item) => <HashTag item = {item}/>)} 
                </div>
            </div>
            <div className = {style.right_block}>
                <div className = {style.right_block__header}>
                    <a href = '' className = {style.link}>Trending articles</a>
                </div>
                <div className = {style.article__block}>
                    {itemsArticals.map((item) => <Article pic= {item.item_pic} desc={item.item_desc} view= {item.item_view}/>)} 
                </div>
            </div>
        </div>
    );

}

export default MainBlockRight;