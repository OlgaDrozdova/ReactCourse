import moscow_un from '../images/moscow_un.jpg';
import digital from '../images/digital.jpg';
import interaction from '../images/interaction.jpg';
import des_art from '../images/des_art.jpg';
import advice_art from '../images/advice_art.jpg';
import use_art from '../images/use_art.jpg';
import RightBlockItem from './RightBlockItem';

function MainBlockRight(){
    let rightGroupItemInfo = [
        {
          header: ["my groups","Edit list"],
          items_university: [
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
            }
          ]
        },
        {
            header: "Followed hashtags",
            items_hash: ["#work", "#business", "#hr", "#userinterface", "#digital","#userexperience","#ux", "#ui", "#freelance"]
        },
        {
            header: "Trending articles",
            items_articals: [
                {
                  item_pic: des_art,
                  item_desc: "How I make cool designs?",
                  item_view: "6,340 viewers"
                },
                {
                  item_pic: advice_art,
                  item_desc: "Advices for young HR-manage",
                  item_view: "8,123 viewers"
                },
                {
                  item_pic: use_art,
                  item_desc: "A little about usability testing",
                  item_view: "3,912 viewers"
                }
              ],
        }
    ];

    let items = [];
    for(let i = 0; i < rightGroupItemInfo.length; i++){
        items.push(<RightBlockItem info={rightGroupItemInfo[i]}/>);
    }
    return items;

}

export default MainBlockRight;