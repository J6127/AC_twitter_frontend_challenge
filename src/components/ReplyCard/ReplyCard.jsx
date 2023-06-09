import { ReactComponent as Avatar } from '../../assets/icon/img.svg'
import style from './ReplyCard.module.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('zh-tw');
//要算時間用-先保留試著用Day.js
function getTime(createdAt) {
    const currentTime = dayjs();
    const createdTime = dayjs(createdAt);

    if (currentTime.diff(createdTime, 'hour') < 24) {
        return createdTime.fromNow();//day.js的套件
    } else {
        return createdTime.format('YYYY/MM/DD');
    }
}

const ReplyCard = ({reply}) => {
    const {
        User: { name, account } = {},
        comment,
        createdAt,
    } = reply;

    return(
        <div className={style.tweetCardContainer}>
                    <div className={style.tweetCard}>
                        <div className={style.avatar}> <Avatar /></div>
                        <div className={style.contentContainer}>
                            <div className={style.nameAndUserId}>
                                <span className={style.name}>{name}</span>
                                <span className={style.userIdTime}>@{account}・{getTime(createdAt)}</span>
                            </div>
                            <div className={style.replyContainer}>
                                <div className={style.reply}>回覆</div>
                                <div className={style.replyId}>@{account}</div> </div>
                            <div className={style.tweet}>
                                {comment}
                            </div>

                        </div>
                    </div>
                    </div>

            )

    

}
export default ReplyCard;
