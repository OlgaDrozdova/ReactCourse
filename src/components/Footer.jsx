import FooterItem from "./FooterItem";
import style from "../assets/css/footer.module.css";
import logo from "../images/Logo_footer.png";

function Footer() {
  let link = [
    "About",
    "Careers",
    "Advertising",
    "Small Business",
    "Talent Solutions",
    "Marketing Solutions",
    "Sales Solutions",
    "Safery Center",
    "Community Guidelines",
    "Privacy & Terms",
    "Mobile App",
  ];
  return (
    <div className={style.footer}>
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className={style.footer__nav}>
        <span className={style.footer__list_title}>Navigation</span>
        <ul className={style.footer__list}>
          {link.map((item) => (
            <FooterItem item={item} />
          ))}
        </ul>
      </div>
      <div className={style.footer__access}>
        <span className={style.footer__list_title_access}>Fast access</span>
        <div>
             <button className={style.footer__access_button}>
          Questions?
          <i className="icon-help-circle" aria-hidden="true"></i>
        </button>
        <button className={style.footer__access_button}>
          Settings
          <i className="icon-settings" aria-hidden="true"></i>
        </button>
        </div>
      </div>
      <div className={style.footer__lang}>
        <span className={style.footer__list_title_access}>Language</span>
        {/* оптмизировать добавление */}
        <select className={style.footer__language_selector}>
          <option>English</option>
          <option>Russian</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
