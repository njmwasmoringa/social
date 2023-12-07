import Comments from "./comments";

export default function Tweets({ tweets, onLike }) {

    return (<ul>
        {tweets.map((tweet, index) => <li key={index + 1}>
            {tweet.tweet}

            <Comments {...{tweet, onLike}}  />

        </li>)}
    </ul>);
}