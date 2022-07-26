import { useContext } from 'react';
import LikesContext from '../store/likes-conext';
import MemberList from '../components/members/MemberList';

function Likes() {
    const likesCtx = useContext(LikesContext);

    let content;

    if (likesCtx.totalLikes === 0) {
        content = <p>You got no likes yet</p>
    } else {
        content = <MemberList members={likesCtx.likes} />
    }

    return <section>
        <h1>My Likes</h1>
        {content}
    </section>;
}

export default Likes;