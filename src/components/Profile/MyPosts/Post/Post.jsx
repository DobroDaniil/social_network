import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
                  <img src='https://img.icons8.com/doodle/344/name.png'/>
      {props.message}
      <div>
      <span>Like</span> {props.likesCount}
      </div>
              </div>
}

export default Post;