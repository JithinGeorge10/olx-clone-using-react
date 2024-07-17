import React, { useContext, useEffect, useState } from 'react'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../authContext';
import { getUserData } from '../../utils/firestore';
function Header() {
  const { user } = useContext(AuthContext)
  console.log(user)
  const [userName, setUser] = useState()
  useEffect(() => {

    (async function () {
      try {
        const userData = await getUserData(user.uid)
        console.log(userData)
        setUser(userData.username)
      } catch (error) {
        alert(error.message)
      }
    })()

  }, [])


  const signOut = async () => {
    await userSignOut()
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
          <span>Hi, {userName}</span>

          <hr />
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
