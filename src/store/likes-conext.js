import { createContext, memo, useState } from "react";

const LikesContext = createContext({
    likes: [],
    totalLikes: 0,
    addLike: (likeMember) => {},
    removeLike: (memberId) => {},
    itemIsLike: (memberId) => {}
});

export function LikesContextProvider(props) {
    const [userLikes, setUserLikes] = useState([]);

function addLikeHandler(likeMember)
{
    setUserLikes((prevUserLikes) => {
        return prevUserLikes.concat(likeMember);
    });
}

function removeLikeHandler(memberId) {
    setUserLikes(prevUserLikes => {
        return prevUserLikes.filter(member => member.id !== memberId);
    });
}

function itemIsLikeHandler(memberId) {
    return userLikes.some(member => member.id === memberId);
}


    const context = {
        likes: userLikes,
        totalLikes: userLikes.length,
        addLike: addLikeHandler,
        removeLike: removeLikeHandler,
        itemIsLike: itemIsLikeHandler
    };
    return <LikesContext.Provider value={context}>
        {props.children}
    </LikesContext.Provider>

}

export default LikesContext;