import style from 'Navbar.module.scss';
//import useState from 'react';
//import { useNavigate } from 'react-router-dom';
//import NavBarItem from '';
//import Modal
//import SVG
import {ReactComponent as ACLogo} from '../../assets/icon/logo.png';
import { ReactComponent as HomeIcon } from '../../assets/icon/outlinedhome.png';
//import { ReactComponent as HomeIconActive } from '../../assets/icon/home.png';
//import { ReactComponent as UserIcon } from '../../assets/icon/outlineduser.png';

const Navbars = () => {
    return(
        <div className={style.NavbarContainer}>
        <ACLogo/>
        <div className={style.NavbarItem}><HomeIcon/>首頁</div>

        </div>

    )
}
export default Navbars;





/*先全部註解確認版面後再跑
//已登入的使用者
const checkIfLoggedIn=()=>{
const authToken = localStorage.getItem('authToken');
return authToken !== null;    
}

//登出頁面
const handleLogout=(e)=>{
    preventDefault(e);
    localStorage.removeItem('authToken');
    Navigate('/LoginPage');

};

//Navbar
const Navbar ()=>{
    //function
    const navigate=useNavigate();
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    return(
       <nav className={styles.NavbarContainer}>
       <ACLogo/>
       <div className={styles.NavBarItem}>
        <NavBarItem
        path='/'
        text="首頁"
        icon=HomeIcon={isActive}
        />
        <NavBarItem
        path='/'
        text="個人資料"
        icon=
        />
        <NavBarItem
        path='/'
        text="設定"
        icon=
        />
        </div>
        <button className={styles.button}>推文</button>
        </nav>
        /*{isLoggedIn? (<div className={styles.logout} onClick={handleLogout}>登出
        </div>) :(
            <div className={styles.logout}>登入</div>
        )
   
    )
}*/
