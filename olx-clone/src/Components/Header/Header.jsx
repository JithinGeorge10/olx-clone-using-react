import React, { useContext, useEffect, useState } from 'react'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../authContext';
import { getUserData, userSignOut } from '../../utils/firestore';
import { useNavigate } from 'react-router-dom';
function Header() {
  const user = useContext(AuthContext)
  const [userName, setUser] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    (async function () {
      try {
        const userData = await getUserData(user.uid)
        setUser(userData.username)
      } catch (error) {
        alert(error.message)
      }
    })()
  }, [])

  const userLogin = async () => {
    navigate('/login')
  }
  const userLogout = async () => {
    await userSignOut()
    navigate('/')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input placeholder='India' type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>



        <div className="loginPage">
          {userName ? (<>
            <span>Hi, {userName}</span>
            <br />
            <button onClick={userLogout}>Logout</button>
          </>) : (<button onClick={userLogin}>Login</button>)}
        </div>




        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
