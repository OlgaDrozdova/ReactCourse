import NewPostButtons from './NewPostButtons';
import film from '../images/film.png';
import image from '../images/image.png';
import paperclip from '../images/paperclip.png';
import send from '../images/send.png';



function NewPost(){
  let buttons = [paperclip, image, film, send]
  return <div className = 'newpost'>
    <div className = 'newpost__caption main-text_style'>NEW POST</div>
    <div className = 'newpost__message'>
      <input className="newpost__input" type="search" placeholder="What’s on your mind?"/>
      <div>
        {buttons.map((item) =><NewPostButtons img={item} />)}
      </div>
    </div>
  </div>
}

export default NewPost;