import { useState } from "react";

export default function Comments({ tweet, onLike }) {

    const [comments, setComment] = useState(tweet.comments)

    function handlesLikeClick(){
        onLike( tweet.id, tweet.likes + 1 );
    }

    return (<>
        <button onClick={handlesLikeClick} >Likes { tweet.likes }</button>
        <ul>
            {comments.map((comment, index)=><li key={index+1}>
                {comment.comment}
            </li>)}
        </ul>
    </>);
}