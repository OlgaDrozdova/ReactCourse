import NewPostButtons from './NewPostButtons';
import film from '../images/film.png';
import image from '../images/image.png';
import paperclip from '../images/paperclip.png';
import send from '../images/send.png';



function NewPost(){
  return <div className = 'newpost'>
    <div className = 'newpost__caption main-text_style'>NEW POST</div>
    <div className = 'newpost__message'>
      <span>What’s on your mind?</span>
      <div>
        <NewPostButtons props={[paperclip]}></NewPostButtons>
        <NewPostButtons props={[image]}></NewPostButtons>
        <NewPostButtons props={[film]}></NewPostButtons>
        <NewPostButtons props={[send]}></NewPostButtons>
      </div>
    </div>
  </div>
}

export default NewPost;