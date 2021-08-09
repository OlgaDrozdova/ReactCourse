import MenuItem from './MenuItem';
import icomoon from '../icomoon/style.css';
import logo from '../images/Logo.png';
import avatar from '../images/mini_avatar.jpg';

function Menu(){
  return <ul className = 'menu'>
    <li className = 'menu__item menu__logo-item'>
      <a className = 'menu__link' href=''>
        <img src = {logo} alt = 'logo icon'></img>
      </a>
    </li>
    <li className = 'menu__item'><MenuItem props={['icon-rss', 'feed']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['icon-users', 'network']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['icon-briefcase', 'jobs']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['icon-message-square', 'chat']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['icon-bell', 'notices']}></MenuItem></li>
    <li className = 'menu__item'>SEARCH</li>
    <li className = 'menu__item'>PROFILE</li>
    <li className = 'menu__item menu__other-item'><MenuItem props={['icon-more-horizontal', 'other']}></MenuItem></li>
  </ul>
}

export default Menu;