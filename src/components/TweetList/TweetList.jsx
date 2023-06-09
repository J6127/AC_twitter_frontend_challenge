//import TweetContext from '../Tab/Tab';
import { useEffect, useState } from 'react';
import TweetCard from '../TweetCard/TweetCard';
import { getUserTweets } from '../../apis/user';

//import style from '';
//假設有Authcontext(還沒寫)

const TweetList =({ userId })=>{
    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        const fetchTweets = async () => {
            const data = await getUserTweets(userId);
            console.log(data); //測試
            if (data) {
                setTweets(data);
            }
        }
        fetchTweets();
    }, [ userId]); 

    return tweets.map(tweet => <TweetCard tweet={tweet} type="tweet"/>)
}

export default TweetList;

/*const TweetList =({tweetsContext})=>{

    return (
        <div className="tweetList">
            {tweetsContext.sort((a,b)=> b.timeStamp- a.timeStamp).map((tweet)=>(
                <TweetCard key={tweet.id} tweet={tweet}/>
            ))}
        </div>
    );
};
export default TweetList;*/