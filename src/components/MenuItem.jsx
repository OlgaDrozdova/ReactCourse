function MenuItem(props) {
  return (
    <div className = 'menu__item menu__item-line'>
      <a className="menu__link main-text_style" href="">
        <i className={"icon " + props.icon + " menu__icon"}  aria-hidden="true"></i>
        <div>{props.title.toUpperCase()}</div>
      </a>
    </div>
  );
}

export default MenuItem;
