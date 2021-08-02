import logo from '../images/Logo.jpg';
import avatar from '../images/mini_avatar.jpg';

function MenuItem({ props, onClick }) {
    switch (props[0]) {
      case 'logo':
        return <img src = {logo} alt = 'logo icon'></img>;
      case 'item':
        return (
          <a className = 'menu__link main-text_style' href=''>
            <i className = {'icon ' + props[1] + ' menu__icon'} aria-hidden='true'></i>
            <div>{props[2].toUpperCase()}</div>
          </a>
        );
      case 'search':
        return <div></div>;
      case 'profile':
        return <div></div>;
      default:
        return;
    }
  }
  
  export default MenuItem;