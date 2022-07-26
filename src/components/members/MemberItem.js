import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MemberItem.module.css';
import LikesContext from '../../store/likes-conext';

function MemberItem(props) {
  const likesCtx = useContext(LikesContext);

  const itemIsLike = likesCtx.itemIsLike(props.id);
  function toggleLikeStatusHandle() {
      if(itemIsLike) {
        likesCtx.removeLike(props.id);
      } else {
        likesCtx.addLike({
          id: props.id,
          fullname: props.fullname,
          description: props.description,
          image: props.image,
          address: props.address,
        });
      }
  }
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.fullname}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleLikeStatusHandle}>
          {itemIsLike ? 'Remove from Likes' : 'To Likes'}
        </button>
      </div>
      </Card>
    </li>
  );
}

export default MemberItem;