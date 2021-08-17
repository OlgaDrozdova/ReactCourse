import MakeLink from "./MakeLink";
import style from "../assets/css/postitem.module.css";

function MainBlockLeftHeader(info) {
  return (
    <>
      {info.header[0] == " " ? (
        <div className={style.header_info}>
          <div>
            <MakeLink info={info.people} />
            {info.header}
          </div>
          <i
            className="icon-more-horizontal header_info__other"
            aria-hidden="true"
          ></i>
        </div>
      ) : (
        <div className={style.header_info}>
          <div>
            {info.header}
            <MakeLink info={info.people} />
          </div>
          <i
            className="icon-more-horizontal header_info__other"
            aria-hidden="true"
          ></i>
        </div>
      )}
    </>
  );
}

export default MainBlockLeftHeader;
