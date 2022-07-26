import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import LikesContext from '../../store/likes-conext';

function MainNavigation() {
    const likesCtx = useContext(LikesContext);

    return <header className={classes.header}>
        <div className={classes.logo} >Daiting</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Members</Link>
                </li>
                <li>
                    <Link to='/new-member'>Add New Member</Link>
                </li>
                <li>
                    <Link to='/likes'>
                        My Likes
                        <span className={classes.badge}>{likesCtx.totalLikes}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;