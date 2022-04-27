import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc } from 'react-feather'
import Link from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'
import coinMarketLogo from '../../assets/images/CoinMarketCap_logo.png'
import coinGecko from '../../assets/images/CoinGecko_logo.png'

import smallIcon from '../../assets/images/newlogo.png'
import darkLogo from '../../assets/images/logo-dark-mode.png'
import lightLogo from '../../assets/images/logo-light-mode.png'

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()
  return (
    <>
      <div className="main-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g id="menu_ico" transform="translate(-33 -41)">
            <rect id="Icon-container" width="24" height="24" transform="translate(33 41)" fill="#fff" opacity="0" />
            <path id="menu-ico" d="M2,5V7H22V5Zm0,6v2H22V11Zm0,6v2H22V17Z" transform="translate(33 41)" fill="#fff" />
          </g>
        </svg>
        <img className="small-icon" src={smallIcon} alt="" /> {''}
        <img className="dark-logo" src={darkLogo} alt="" /> {''}
        <img className="light-logo" src={lightLogo} alt="" /> {''}
      </div>
      <aside>
        <Toggle isActive={isDark} toggle={toggleDarkMode} />
        {/* className={!isActive ? 'active' : ''}  */}
        {/* <div className="logo-container" onClick={test}>
        <button type="button" className="logo">
          <img src={logo} alt="" />{' '}
        </button>
      </div> */}
        <div className="scroll">
          <ul>
            <li>
              <Link to={'/swap'} className="active">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="swap_ico" transform="translate(-33 -117)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 117)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="swap_ico-2"
                        data-name="swap_ico"
                        d="M6,3,2.8,7H5v9a4,4,0,0,0,8,0V8a2,2,0,0,1,4,0v9H14.8L18,21l3.2-4H19V8a4,4,0,0,0-8,0v8a2,2,0,0,1-4,0V7H9.2Z"
                        transform="translate(33.199 117)"
                        fill="#fff"
                        stroke="rgba(0,0,0,0)"
                        strokeWidth="1"
                      />
                    </g>
                  </svg>
                </div>
                <span>Swap</span>
              </Link>
            </li>
            <li>
              <Link to={'/Coming'}>
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="Group_76" data-name="Group 76" transform="translate(-33 -165)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 165)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="staking_ico"
                        d="M10.5,1A3.483,3.483,0,0,0,7.516,6.307,7.171,7.171,0,0,0,2.34,11.061,1,1,0,1,0,2,13a6.564,6.564,0,0,0,1.074,3.443l.787,4.721A1,1,0,0,0,4.848,22h2.3a1,1,0,0,0,.986-.836l.119-.715A10.041,10.041,0,0,0,11.5,21a12.7,12.7,0,0,0,2.021-.162l.406.676a1,1,0,0,0,.857.486H17a1,1,0,0,0,.98-1.2l-.3-1.5A7.749,7.749,0,0,0,20.074,17h1.146a1,1,0,0,0,.969-.758l.586-2.344a1,1,0,0,0-.654-1.191l-1.428-.477A7.768,7.768,0,0,0,19.4,9.865,13.163,13.163,0,0,0,20,6l-5.574.619c-.312-.094-.637-.181-.973-.256A3.488,3.488,0,0,0,10.5,1Zm0,2A1.5,1.5,0,1,1,9,4.5,1.5,1.5,0,0,1,10.5,3ZM10,8a13.27,13.27,0,0,1,3.846.533l.393.119.408-.045,3.107-.346c-.073.337-.162.677-.266,1.016l-.309,1,.648.824a5.82,5.82,0,0,1,.967,1.75l.313.957.955.318.549.182L20.438,15H18.984l-.592.914a5.8,5.8,0,0,1-1.781,1.705l-1.162.734.27,1.348.061.3h-.428l-.115-.191-.7-1.16-1.336.213A10.731,10.731,0,0,1,11.5,19a8.033,8.033,0,0,1-2.6-.443l-2.23-.76L6.307,20H5.693l-.646-3.885-.066-.393-.211-.338A4.59,4.59,0,0,1,4,13C4,12.95,4.163,8,10,8Zm6,4a1,1,0,1,0,1,1A1,1,0,0,0,16,12Z"
                        transform="translate(33 166)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Staking</span>
              </Link>
            </li>
            <li>
              <Link to={'/Coming'}>
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="wallet_ico" transform="translate(-33 -207)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 207)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="wallet_ico-2"
                        data-name="wallet_ico"
                        d="M17,3a4,4,0,1,0,4,4A4,4,0,0,0,17,3Zm0,2a2,2,0,1,1-2,2A2,2,0,0,1,17,5ZM6,11a2.972,2.972,0,0,0-.832.131L1,12.107v7.2L5,18l8.156,2.854a2.469,2.469,0,0,0,1.979-.152l7.328-3.918-1.178-2.516-7.164,3.613-.633-.186.52-1.268a2,2,0,0,0-1.025-2.652L7.115,11.221A2.98,2.98,0,0,0,6,11Zm0,2a1,1,0,0,1,.35.066l5.832,2.541-.014.031-.014.031-.518,1.268-.451,1.107L5.66,16.111l-.639-.223-.643.209L3,16.551V13.693l2.623-.615.053-.012.049-.014A1.128,1.128,0,0,1,6,13Z"
                        transform="translate(33.537 207)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>My wallet</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://shibnobi.com/">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="shinja_ico" transform="translate(-33 -263)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 263)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="shinja_ico-2"
                        data-name="shinja_ico"
                        d="M12.739,3a8.187,8.187,0,0,0-8.261,8.111,23.85,23.85,0,0,0,.29,2.815A4.669,4.669,0,0,0,3.4,15.2,8.613,8.613,0,0,0,2,20.348a.826.826,0,1,0,1.652,0,7.369,7.369,0,0,1,.826-3.753V22a.826.826,0,1,0,1.652,0V18.092c1.446,2.578,4.095,4.734,6.609,4.734,3.015,0,6.23-3.1,7.323-6.31l.019,0A19.613,19.613,0,0,0,21,11.111,8.187,8.187,0,0,0,12.739,3Zm0,6.609s5.783.064,5.783,3.3c0,1.7-1.652,1.652-2.065,1.652-2.065,0-2.065-.826-3.717-.826s-1.652.826-3.717.826c-.15,0-2.065,0-2.065-1.652C6.957,9.672,12.739,9.609,12.739,9.609Zm-2.478,1.652a.826.826,0,1,0,.826.826A.826.826,0,0,0,10.261,11.261Zm4.957,0a.826.826,0,1,0,.826.826A.826.826,0,0,0,15.217,11.261Z"
                        transform="translate(34 262)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Shibnobi Website</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/ShibnobiCommunity">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="telegram_ico" transform="translate(-33 -313)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 313)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="telegram_ico-2"
                        data-name="telegram_ico"
                        d="M20.572,3.012a2.24,2.24,0,0,0-1.057.16c-.45.177-7.5,3.143-14.074,5.91L3.27,10a1.7,1.7,0,0,0,.012,3.293l3.666,1.469C7.264,15.709,8,17.917,8.186,18.5c.11.348.388,1.225,1.09,1.43a1.385,1.385,0,0,0,.447.074,1.507,1.507,0,0,0,.918-.326l2.33-1.971,2.83,2.617A2.2,2.2,0,0,0,17.262,21a1.976,1.976,0,0,0,1.854-1.584c.083-.427,2.813-14.129,2.813-14.127a1.824,1.824,0,0,0-.479-1.912A1.59,1.59,0,0,0,20.572,3.012Zm-.662,2.16c-.377,1.89-2.432,12.206-2.744,13.693l-4.137-3.826-2.807,2.377L11,14.375s5.363-5.428,5.686-5.744c.26-.253.314-.342.314-.43a.181.181,0,0,0-.2-.2.923.923,0,0,0-.385.176c-1.143.713-6.012,3.486-8.408,4.85L4.531,11.637l1.688-.709C10.518,9.118,18.174,5.894,19.91,5.172Z"
                        transform="translate(32.996 312.999)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Telegram</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Shib_nobi">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="twitter_ico" transform="translate(-33 -357)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 357)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="twitter_ico-2"
                        data-name="twitter_ico"
                        d="M22,4a13.158,13.158,0,0,1-3.265,1.276c-.027.007-.049.016-.075.023A4.5,4.5,0,0,0,11,8.5c0,.131-.011.372,0,.5A9.885,9.885,0,0,1,3.265,5a6.089,6.089,0,0,0-.286,2.032c0,1.4,1.1,2.777,2.8,3.63a4.1,4.1,0,0,1-1.02.139A2.686,2.686,0,0,1,3,10.183v.051c0,1.958,2.078,3.291,3.926,3.662a3.583,3.583,0,0,1-1.5.243c-.26,0-1.18-.119-1.426-.165.514,1.6,2.368,2.507,4.135,2.539C6.753,17.6,5.794,18,2.964,18H2a12.121,12.121,0,0,0,6.347,2C15.777,20,20,14.337,20,9c0-.086,0-.266,0-.447,0-.018,0-.035,0-.053s-.008-.053-.008-.08c0-.136-.006-.263-.009-.329A8.217,8.217,0,0,0,22,6a8.07,8.07,0,0,1-2.32.636A6.057,6.057,0,0,0,22,4ZM18,9a9.034,9.034,0,0,1-8.466,8.943A12.037,12.037,0,0,0,11,16.662S8,14,7.775,10.522A11,11,0,0,0,11,11h2V8.5h0a2.5,2.5,0,0,1,5,0Z"
                        transform="translate(33 357.001)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Twitter</span>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/Shibnobi">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="facebook_ico" transform="translate(-33 -398)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 398)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="facebook_ico-2"
                        data-name="facebook_ico"
                        d="M5,3A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5a2,2,0,0,0-2-2ZM5,5H19l0,14H14.414V15.035h2.365l.352-2.725h-2.7V10.574c0-.788.22-1.32,1.35-1.32h1.428V6.822a20.013,20.013,0,0,0-2.092-.1,3.273,3.273,0,0,0-3.494,3.59v2.006H9.277v2.725h2.344V19H5Z"
                        transform="translate(33 398)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Shibnobi">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="instagram_ico" transform="translate(-33 -442)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 442)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="instagram_ico-2"
                        data-name="instagram_ico"
                        d="M8,3A5.006,5.006,0,0,0,3,8v8a5.006,5.006,0,0,0,5,5h8a5.006,5.006,0,0,0,5-5V8a5.006,5.006,0,0,0-5-5ZM8,5h8a3,3,0,0,1,3,3v8a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5Zm9,1a1,1,0,1,0,1,1A1,1,0,0,0,17,6ZM12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,2a3,3,0,1,1-3,3A3,3,0,0,1,12,9Z"
                        transform="translate(33 442)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="twitch_ico" transform="translate(-33 -498)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 498)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="twitch_ico-2"
                        data-name="twitch_ico"
                        d="M5.2,2,2,6.4V19.1H6.75v2.85H9.6l2.85-2.85h3.8L21,14.35V2Zm.6,1.9H19.1v8.55L16.25,15.3H11.5L8.65,18.15V15.3H5.8Zm4.75,2.85V11.5h1.9V6.75Zm4.75,0V11.5h1.9V6.75Z"
                        transform="translate(34 498)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Twich</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="discord_ico" transform="translate(-33 -554)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 554)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="discord_ico-2"
                        data-name="discord_ico"
                        d="M7.575,3.387a1.81,1.81,0,0,0-.864.108A10.674,10.674,0,0,0,3.836,5.082l-.025.02-.023.02a4.4,4.4,0,0,0-.949,1.5,18.53,18.53,0,0,0-.864,2.328A21.562,21.562,0,0,0,1,15a1.317,1.317,0,0,0,.17.644A5.861,5.861,0,0,0,4.3,18.086a8.558,8.558,0,0,0,2.609.593c.018,0,.062.007.064.007a1.218,1.218,0,0,0,1.122-.648l.838-1.585a11.516,11.516,0,0,0,4.125-.014l.843,1.6a1.216,1.216,0,0,0,1.123.65l.059-.005a8.566,8.566,0,0,0,2.614-.595,5.862,5.862,0,0,0,3.124-2.44A1.308,1.308,0,0,0,20.991,15a21.5,21.5,0,0,0-.978-6.047,18.432,18.432,0,0,0-.87-2.336,4.463,4.463,0,0,0-.962-1.51l-.023-.02-.023-.02a10.528,10.528,0,0,0-2.857-1.571,1.818,1.818,0,0,0-1.677.2,1.773,1.773,0,0,0-.609,1.155H9A1.779,1.779,0,0,0,8.392,3.7,1.817,1.817,0,0,0,7.575,3.387Zm-.215,1.8A1.49,1.49,0,0,0,8.837,6.669h4.314A1.494,1.494,0,0,0,14.63,5.192h0a9.149,9.149,0,0,1,2.327,1.265,5.438,5.438,0,0,1,.534.919,16.812,16.812,0,0,1,.781,2.1,20.193,20.193,0,0,1,.875,5.362,4.352,4.352,0,0,1-2.1,1.548,6.819,6.819,0,0,1-1.745.41l-.421-.8c.312-.092.622-.181.951-.293a.909.909,0,1,0-.582-1.722c-3.48,1.177-5.193,1.178-8.492.005A.908.908,0,1,0,6.149,15.7c.331.118.644.213.958.309l-.415.786a6.823,6.823,0,0,1-1.745-.41,4.347,4.347,0,0,1-2.1-1.546A20.256,20.256,0,0,1,3.714,9.48a16.911,16.911,0,0,1,.776-2.1,5.662,5.662,0,0,1,.524-.909A9.292,9.292,0,0,1,7.361,5.192Zm.944,4.2c-.753,0-1.363.812-1.363,1.814s.61,1.814,1.363,1.814,1.363-.812,1.363-1.814C9.651,10.2,9.061,9.291,8.3,9.391Zm5.413.014c-.753,0-1.363.814-1.363,1.817s.61,1.817,1.363,1.817,1.363-.814,1.363-1.817-.61-1.817-1.363-1.817Z"
                        transform="translate(34.005 554.395)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Discord</span>
              </a>
            </li>
            <li>
              <a href="">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="reddit_ico" transform="translate(-33 -596)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 596)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="reddit_ico-2"
                        data-name="reddit_ico"
                        d="M13.938,3a1.642,1.642,0,0,0-1.107.443,2.71,2.71,0,0,0-.664,1.066,9.25,9.25,0,0,0-.429,2.934A12.074,12.074,0,0,0,6.092,8.964a2.447,2.447,0,0,0-3.4,3.515l.111.111a5.331,5.331,0,0,0-.374,1.924,6.321,6.321,0,0,0,2.906,5.065,11.834,11.834,0,0,0,6.836,2.02A11.834,11.834,0,0,0,19,19.578a6.321,6.321,0,0,0,2.906-5.065,5.331,5.331,0,0,0-.374-1.924l.111-.111a2.447,2.447,0,0,0-3.4-3.515,12.1,12.1,0,0,0-5.618-1.522A8.739,8.739,0,0,1,13,4.813a1.916,1.916,0,0,1,.443-.733.661.661,0,0,1,.5-.194.623.623,0,0,1,.457.18c.154.125.334.329.567.567a3.237,3.237,0,0,0,2.117,1,2.193,2.193,0,1,0,0-.872A2.1,2.1,0,0,1,15.6,4.024a7.432,7.432,0,0,0-.637-.65A1.626,1.626,0,0,0,13.938,3Zm5.314.886a1.328,1.328,0,1,1-1.328,1.328A1.322,1.322,0,0,1,19.252,3.886ZM12.167,8.314a10.99,10.99,0,0,1,6.324,1.854,5.417,5.417,0,0,1,2.532,4.345,5.417,5.417,0,0,1-2.532,4.345,10.99,10.99,0,0,1-6.324,1.854,10.99,10.99,0,0,1-6.324-1.854,5.417,5.417,0,0,1-2.532-4.345,5.417,5.417,0,0,1,2.532-4.345A10.99,10.99,0,0,1,12.167,8.314Zm-7.749.858a1.531,1.531,0,0,1,.9.291A7.453,7.453,0,0,0,3.2,11.732a1.522,1.522,0,0,1,.111-2.09A1.558,1.558,0,0,1,4.418,9.172Zm15.5,0a1.558,1.558,0,0,1,1.107.471,1.522,1.522,0,0,1,.111,2.09,7.453,7.453,0,0,0-2.117-2.269A1.531,1.531,0,0,1,19.916,9.172ZM8.624,11.414A1.771,1.771,0,1,0,10.4,13.185,1.777,1.777,0,0,0,8.624,11.414Zm7.085,0a1.771,1.771,0,1,0,1.771,1.771A1.777,1.777,0,0,0,15.71,11.414ZM8.624,12.3a.886.886,0,1,1-.886.886A.879.879,0,0,1,8.624,12.3Zm7.085,0a.886.886,0,1,1-.886.886A.879.879,0,0,1,15.71,12.3Zm.512,4.359a.52.52,0,0,0-.387.263,3.1,3.1,0,0,1-.816.692,5.2,5.2,0,0,1-2.851.747,5.2,5.2,0,0,1-2.851-.747,3.1,3.1,0,0,1-.816-.692.438.438,0,1,0-.72.5,3.889,3.889,0,0,0,1.052.941,6.164,6.164,0,0,0,3.335.886A6.164,6.164,0,0,0,15.5,18.36a3.889,3.889,0,0,0,1.052-.941.443.443,0,0,0-.332-.761Z"
                        transform="translate(33.032 595)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Reddit</span>
              </a>
            </li>

            {/* 
          
          <li>
            <Link to={'/Coming'}>
              <div className="img-container">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.0625 0C0.930085 0 0 0.930085 0 2.0625V12V12.5625V12.9375C0 14.0699 0.930085 15 2.0625 15H11.8125C11.887 15.0011 11.961 14.9873 12.0302 14.9595C12.0994 14.9317 12.1623 14.8904 12.2154 14.8381C12.2685 14.7858 12.3107 14.7234 12.3394 14.6546C12.3682 14.5858 12.383 14.512 12.383 14.4375C12.383 14.363 12.3682 14.2892 12.3394 14.2204C12.3107 14.1516 12.2685 14.0892 12.2154 14.0369C12.1623 13.9846 12.0994 13.9433 12.0302 13.9155C11.961 13.8877 11.887 13.8739 11.8125 13.875H2.0625C1.60246 13.875 1.22896 13.5571 1.14404 13.125H11.8125C11.9617 13.125 12.1047 13.0657 12.2102 12.9602C12.3157 12.8547 12.375 12.7117 12.375 12.5625V2.0625C12.375 0.930085 11.4449 0 10.3125 0H2.0625ZM2.0625 1.125H10.3125C10.8368 1.125 11.25 1.53817 11.25 2.0625V12H1.125V2.0625C1.125 1.53817 1.53817 1.125 2.0625 1.125ZM3.1875 4.5C3.11296 4.49895 3.03896 4.51272 2.96979 4.54051C2.90062 4.56831 2.83766 4.60957 2.78458 4.66191C2.7315 4.71425 2.68935 4.77661 2.66058 4.84538C2.6318 4.91415 2.61699 4.98796 2.61699 5.0625C2.61699 5.13705 2.6318 5.21085 2.66058 5.27962C2.68935 5.34839 2.7315 5.41075 2.78458 5.46309C2.83766 5.51543 2.90062 5.55669 2.96979 5.58449C3.03896 5.61228 3.11296 5.62605 3.1875 5.625H9.1875C9.26204 5.62605 9.33604 5.61228 9.40521 5.58449C9.47438 5.55669 9.53734 5.51543 9.59042 5.46309C9.6435 5.41075 9.68565 5.34839 9.71442 5.27962C9.7432 5.21085 9.75801 5.13705 9.75801 5.0625C9.75801 4.98796 9.7432 4.91415 9.71442 4.84538C9.68565 4.77661 9.6435 4.71425 9.59042 4.66191C9.53734 4.60957 9.47438 4.56831 9.40521 4.54051C9.33604 4.51272 9.26204 4.49895 9.1875 4.5H3.1875ZM3.1875 7.125C3.11296 7.12395 3.03896 7.13772 2.96979 7.16551C2.90062 7.19331 2.83766 7.23457 2.78458 7.28691C2.7315 7.33925 2.68935 7.40161 2.66058 7.47038C2.6318 7.53915 2.61699 7.61296 2.61699 7.6875C2.61699 7.76205 2.6318 7.83585 2.66058 7.90462C2.68935 7.97339 2.7315 8.03575 2.78458 8.08809C2.83766 8.14043 2.90062 8.18169 2.96979 8.20949C3.03896 8.23728 3.11296 8.25105 3.1875 8.25H8.0625C8.13704 8.25105 8.21104 8.23728 8.28021 8.20949C8.34938 8.18169 8.41234 8.14043 8.46542 8.08809C8.5185 8.03575 8.56065 7.97339 8.58943 7.90462C8.6182 7.83585 8.63301 7.76205 8.63301 7.6875C8.63301 7.61296 8.6182 7.53915 8.58943 7.47038C8.56065 7.40161 8.5185 7.33925 8.46542 7.28691C8.41234 7.23457 8.34938 7.19331 8.28021 7.16551C8.21104 7.13772 8.13704 7.12395 8.0625 7.125H3.1875Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <span>Learning Hub</span>
            </Link>
          </li>
          <li>
            <a href="https://shibnobi.zendesk.com/hc/en-us">
              <div className="img-container">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.5 0C3.36452 0 0 3.36453 0 7.5C0 11.6355 3.36452 15 7.5 15C11.6355 15 15 11.6355 15 7.5C15 3.36453 11.6355 0 7.5 0ZM7.5 1.125C11.0275 1.125 13.875 3.97252 13.875 7.5C13.875 11.0275 11.0275 13.875 7.5 13.875C3.97252 13.875 1.125 11.0275 1.125 7.5C1.125 3.97252 3.97252 1.125 7.5 1.125ZM7.5 3.75C7.30109 3.75 7.11032 3.82902 6.96967 3.96967C6.82902 4.11032 6.75 4.30109 6.75 4.5C6.75 4.69891 6.82902 4.88968 6.96967 5.03033C7.11032 5.17098 7.30109 5.25 7.5 5.25C7.69891 5.25 7.88968 5.17098 8.03033 5.03033C8.17098 4.88968 8.25 4.69891 8.25 4.5C8.25 4.30109 8.17098 4.11032 8.03033 3.96967C7.88968 3.82902 7.69891 3.75 7.5 3.75ZM7.49121 6.36694C7.34215 6.36927 7.20012 6.43067 7.0963 6.53765C6.99248 6.64463 6.93536 6.78844 6.9375 6.9375V11.0625C6.93645 11.137 6.95022 11.211 6.97801 11.2802C7.00581 11.3494 7.04707 11.4123 7.09941 11.4654C7.15175 11.5185 7.21411 11.5607 7.28288 11.5894C7.35165 11.6182 7.42545 11.633 7.5 11.633C7.57455 11.633 7.64835 11.6182 7.71712 11.5894C7.78589 11.5607 7.84825 11.5185 7.90059 11.4654C7.95293 11.4123 7.99419 11.3494 8.02199 11.2802C8.04978 11.211 8.06355 11.137 8.0625 11.0625V6.9375C8.06358 6.86221 8.04954 6.78747 8.0212 6.71771C7.99286 6.64796 7.95081 6.5846 7.89753 6.53139C7.84426 6.47818 7.78084 6.43621 7.71105 6.40796C7.64125 6.37971 7.5665 6.36577 7.49121 6.36694V6.36694Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <span>FAQs</span>
            </a>
          </li> */}
          </ul>
          <ul>
            <li>
              <a href="">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="shinja_ico" transform="translate(-33 -263)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 263)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="shinja_ico-2"
                        data-name="shinja_ico"
                        d="M12.739,3a8.187,8.187,0,0,0-8.261,8.111,23.85,23.85,0,0,0,.29,2.815A4.669,4.669,0,0,0,3.4,15.2,8.613,8.613,0,0,0,2,20.348a.826.826,0,1,0,1.652,0,7.369,7.369,0,0,1,.826-3.753V22a.826.826,0,1,0,1.652,0V18.092c1.446,2.578,4.095,4.734,6.609,4.734,3.015,0,6.23-3.1,7.323-6.31l.019,0A19.613,19.613,0,0,0,21,11.111,8.187,8.187,0,0,0,12.739,3Zm0,6.609s5.783.064,5.783,3.3c0,1.7-1.652,1.652-2.065,1.652-2.065,0-2.065-.826-3.717-.826s-1.652.826-3.717.826c-.15,0-2.065,0-2.065-1.652C6.957,9.672,12.739,9.609,12.739,9.609Zm-2.478,1.652a.826.826,0,1,0,.826.826A.826.826,0,0,0,10.261,11.261Zm4.957,0a.826.826,0,1,0,.826.826A.826.826,0,0,0,15.217,11.261Z"
                        transform="translate(34 262)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>Shinja Academy</span>
              </a>
            </li>
            <li>
              <a href="https://shibnobi.zendesk.com/hc/en-us">
                <div className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="faq_ico" transform="translate(-33 -728)">
                      <rect
                        id="Icon-container"
                        width="24"
                        height="24"
                        transform="translate(33 728)"
                        fill="#fff"
                        opacity="0"
                      />
                      <path
                        id="faq_ico-2"
                        data-name="faq_ico"
                        d="M9,3A2.015,2.015,0,0,0,7,5V19a2.015,2.015,0,0,0,2,2H19a2.015,2.015,0,0,0,2-2V5a2.015,2.015,0,0,0-2-2ZM3,4V20H5V4ZM9,5H19V19H9Zm5,2a3,3,0,0,0-2.232.957A3.042,3.042,0,0,0,11,10h2a1.086,1.086,0,0,1,.256-.707A.885.885,0,0,1,14,9a.9.9,0,0,1,.75.283A1.067,1.067,0,0,1,15,10c0,.565-.271.9-.756,1.463A3.806,3.806,0,0,0,13,14h2c0-.335.241-.633.756-1.227A4.191,4.191,0,0,0,17,10a3.045,3.045,0,0,0-.771-2.062A3.01,3.01,0,0,0,14,7Zm-1,8v2h2V15Z"
                        transform="translate(33 728)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <span>FAQs</span>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="https://coinmarketcap.com/currencies/shibnobi/">
                <div className="img-container">
                  <img src={coinMarketLogo} alt="" />
                  {''}
                </div>
                <span>CoinMarketCap</span>
              </a>
            </li>
            <li>
              <a href="https://www.coingecko.com/en/coins/shibnobi">
                <div className="img-container">
                  <img src={coinGecko} alt="" />
                  {''}
                </div>
                <span>CoinGecko</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="top-right-header">
        <div className="mydropdown">
          <a href="javascript:void()" className="btn btn-default">
            Pools
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 9L12 15 18 9" />
            </svg>
          </a>
          <div className="dropdown">
            <ul>
              <li className="">
                <a href="{}" className="main-link">
                  <span> Pools </span>
                </a>
              </li>
              <li className="active">
                <a href="" className="main-link">
                  <span> Tokens </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mydropdown ml-fix">
          <a href="javascript:void()" className="btn btn-default">
            BSC
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 9L12 15 18 9" />
            </svg>
          </a>
          <div className="dropdown">
            <h4>Select a network</h4>
            <ul>
              <li className="">
                <a href="{}" className="main-link">
                  <a href="https://www.dojoswap.ninja/">Ethereum</a>
                </a>
              </li>
              <li className="active">
                <a href="https://www.dojoswap.ninja/bsc" className="main-link">
                  <span> Bsc </span>
                  <span className="active">&nbsp;</span>
                </a>
              </li>
              <li className="">
                <a href="https://www.dojoswap.ninja/polygon" className="main-link">
                  <span> Polygon </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button type="button">
          {!isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}
export default withRouter(SideNav)
