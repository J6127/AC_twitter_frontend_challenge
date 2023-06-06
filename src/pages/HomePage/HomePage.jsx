import RecommendList from'../../components/RecommendList/RecommendList';
import Navbar from '../../components/Navbars/Navbars';
import Header from '../../components/Headers/Headers';
import Main from '../../components/Main/Main';
import style from './HomePage.module.scss'


export default function HomePage (){
 return(
   <div className={style.homeContainer}>
    <div className={style.homeColumn}>
    <div className={style.leftColumn}><Navbar/></div>
    <div className={style.middleColumn}><Header/>
      <Main/></div>
    <div className={style.rightColumn}><RecommendList/></div>
    </div>
    </div>
 )
}
