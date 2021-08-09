function MenuItem({ props }) {
  if (props == null) return null;
  return (
      <a className = 'menu__link main-text_style' href=''>
        <i className = {'icon ' + props[0] + ' menu__icon'} aria-hidden='true'></i>
        <div>{props[1].toUpperCase()}</div>
      </a>);
  }
  
  export default MenuItem;