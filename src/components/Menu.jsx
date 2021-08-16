import MenuItem from './MenuItem';
import icomoon from '../icomoon/style.css';
import logo from '../images/Logo.png';
import avatar from '../images/mini_avatar.jpg';

function Menu(){
  let item = [
    {icon: 'icon-rss', title:'feed'},
    {icon: 'icon-users', title:'network'},
    {icon: 'icon-briefcase', title:'jobs'},
    {icon: 'icon-message-square', title:'chat'},
    {icon: 'icon-bell', title:'notices'}
  ];

  return <div className = 'menu'>
    <div className = 'menu__item menu__logo-item'>
      <a className = 'menu__link' href=''>
        <img src = {logo} alt = 'logo icon'></img>
      </a>
    </div>
    {item.map((item ) =><MenuItem icon= {item.icon} title={item.title} />)}
    <div className="search_block">
      <span className="icon icon-search search_icon"/>
      <input className="search_block__input" type="search" placeholder="Search"/>
    </div>
    <div className="profile_block">
      <img className="profile_block__avatar" src={avatar} alt=""/>
        <div className="profile_block__desc">
          <div className="profile_block__desc-row">
            <div className="main-text_style">D.KARGAEV</div>
            <div className="profile_block__lightgray-text">YOU</div>
          </div>
          <div className="profile_block__desc-row">
            <div className="profile_block__gray-text">367 views today</div>
            <div className="profile_block__green-text">+32</div>
            <i className="icon icon-arrow-up-right icon-arrow"/>
          </div>
        </div>
    </div>
    <div className = 'menu__item menu__other-item'><MenuItem icon= 'icon-more-horizontal' title='other'/></div>
  </div>
}

export default Menu;