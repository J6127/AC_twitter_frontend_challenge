import LikeCard from '../LikeCard/LikeCard';
import { useGetLikeQuery } from '../../hooks/QueryHook';
import Skeleton from 'react-loading-skeleton';

const LikeList = ({ userId }) => {
    const { data, isLoading } = useGetLikeQuery(userId)
    if (isLoading) {
        return <Skeleton />
    }

    if (data.length === 0) {
        return <h4>這邊還沒有喜歡的回覆。要追加什麼嗎?</h4>;
    }
    console.log(data)
    return !isLoading ? data?.map((like) =>
        <LikeCard
            like={like}
            key={like.id}
            tweetId={like.TweetId}
            userId={like.UserId}
            type="like" />) : null;
}

export default LikeList;
