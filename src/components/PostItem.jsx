import React, {useState} from 'react'
import style from "../assets/css/postitem.module.css";
import MakeLink from "./MakeLink";
import cloud from '../images/cloud.svg';
import file from '../images/file.svg';

function PostItem({info}){
    let item = [];
    let people = [];
    let str;
    if (info.hasOwnProperty("header")) {
        if (info.hasOwnProperty("people")) {
            people.push(<MakeLink info={info.people}/>);
            info.header[0] == " " ? 
            item.push(<div className = {style.header_info}><div>{people}{info.header}</div><i className = 'icon-more-horizontal header_info__other' aria-hidden='true'></i></div>) 
            : item.push(<div className = {style.header_info}><div>{info.header}{people}</div><i className = 'icon-more-horizontal header_info__other' aria-hidden='true'></i></div>);
        }
        else{
            item.push(<div className = {style.header_info}>{info.header}<i className = 'icon-more-horizontal header_info__other' aria-hidden='true'></i></div>);
        }
    }
    item.push(
        <div className = {style.user_info}>
            <img src={info.avatar} alt=''/>
            <div className={style.user_info__desc}>
             <span className={style.user_info__name}>{info.name}</span>
             <span className={style.user_info__position}>{info.position}</span>
            </div>
        </div>);
   
    if (info.hasOwnProperty("post_text")) {
        if (info.post_text.length > 330) {
            item.push(<div className={style.post_text}><div className={style.post_text_large}>{info.post_text.substr(0,330)}</div><a className={style.post_text__link} href = '' onClick={onClickReadMore}>Read more</a></div>);
            function onClickReadMore () {
                alert("something");
               // item.pop();
                item.push(<div className={style.post_text}>{info.post_text}</div>);
            }
        }
        else{
            item.push(<div className={style.post_text}>{info.post_text}</div>);
        }
    }

    if (info.hasOwnProperty("post_img")) {
        item.push(<img className={style.post_img} src={info.post_img} alt=''/>);
    }

    if (info.hasOwnProperty("post_files")) {
        for (let i = 0; i < info.post_files.length; i++) {
            item.push(
                <div className={style.post_file}>
                  <img className={style.post_file__file_pic} src={file} alt=''/>
                  <div className={style.post_file__file_info}>
                    <span className={style.post_file__file_name}>
                      {info.post_files[i].file_name}
                    </span>
                    <span className={style.post_file__file_desc}>
                        {info.post_files[i].file_desc}
                    </span>
                  </div>
                  <img className={style.post_file__cloud} src={cloud} alt=''/>
                </div>
              );
        }
    }

    item.push(
        <div className={style.post_footer}>
            <button className={style.post_footer__button}>
                <i className = '' aria-hidden='true'></i>
                <span className={style.post_footer__text}>{info.likes}</span>
            </button>
            <button className={style.post_footer__button}>
                <span className={style.post_footer__text}>{info.comments}</span>
            </button>
            <button className={style.post_footer__button}>
                <span className={style.post_footer__text}>
                    SHARE
                </span>
            </button>
        </div>);



    return <div className = {style.newpost_item}>{item}</div>;
    
}

export default PostItem;