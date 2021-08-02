import MenuItem from './MenuItem';
import icomoon from '../icomoon/style.css';

function Menu(){
  return <ul className = 'menu'>
    <li className = 'menu__item menu__logo-item'><a className = 'menu__link' href=''><MenuItem props={['logo']}></MenuItem></a></li>
    <li className = 'menu__item'><MenuItem props={['item', 'icon-rss', 'feed']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['item', 'icon-users', 'network']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['item', 'icon-briefcase', 'jobs']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['item', 'icon-message-square', 'chat']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['item', 'icon-bell', 'notices']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['search']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['profile']}></MenuItem></li>
    <li className = 'menu__item'><MenuItem props={['item', 'icon-more-horizontal', 'other']}></MenuItem></li>
  </ul>
}

export default Menu;