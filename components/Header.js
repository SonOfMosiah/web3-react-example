import React, { useState, useEffect } from "react";
import { ethers } from 'ethers'
import Link from 'next/link'
import isNil from 'lodash/isNil'
import get from 'lodash/get'
import includes from 'lodash/includes'
import filter from 'lodash/filter'
import Image from 'next/image'


import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import log from 'ololog'

import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { setCurrentAccount, openModal } from '../redux/action/global'

import { injected } from './wallet/connectors'
import { analyticsEvent } from '../helpers/google/analytics'

import SelectWallet from './modal/selectWallet'

function Header(props) {
  log.yellow("enter header function")
  const router = useRouter()
  const {
    header,
    transparent,
    openModal,
    currentAccount,
    setCurrentAccount,
  } = props
  const [menu, setMenu] = useState([])
  const [mobileActive, setMobileActive] = useState(false)
  const [dropdown, setDropdown] = useState({})
  const [mode, setMode] = useState('dark')
  const {library, chainId, account, activate, active } = useWeb3React()
  const trackEvent = (category, action, label, nonInteraction) => {
    analyticsEvent(category, action, label, nonInteraction)
    setMobileActive(false)
  }
  
  const onSelectMode = (mode) => {
    log.yellow("Enter onSelectMode")
    setMode(mode)
      if (typeof window !== 'undefined') {
        if (mode === 'light') { 
          document.body.classList.add('light-mode')
          window.localStorage.setItem('theme', mode);
        } else { 
          document.body.classList.remove('light-mode')
          window.localStorage.setItem('theme', 'dark');
        }
      }
  }
  const setNetwork = async (account, chainId) => {
    log.yellow("Enter setNetwork")
    // const network = networkName(chainId)
      if (chainId === 1 || chainId === 3 || chainId === 137) {
        try {
          const provider = ethers.getDefaultProvider(0x1, {
            alchemy: process.env.ALCHEMY_KEY //network['ethereum'].endpoint
          })
          const ens = await provider.lookupAddress(account)
          if (!isNil(ens)) {
            setCurrentAccount({
              account: ens,
              provider: chainId
            })
          } else {
            setCurrentAccount({
              account: account,
              provider: chainId
            })
          }
        } catch (e) {
          log.red.error(e)
        }
      } else {
        setCurrentAccount({
          account: account,
          provider: chainId
        })
      }
  }
  const checkIfWalletIsConnected = async () => {
    log.yellow("Enter checkIfWalletIsConnected")
    try {
      if (account) {
        setNetwork(account, chainId)
      } else {
        if(process.env.NODE_ENV === 'development') {
          await activate(injected)
        } else {
          setCurrentAccount('')
        }
      }
    } catch (error) {
      log.red(error)
    }
  }

  const printHi = () => {
    console.log("hi")
  }

  const connectWalletButton = async () => {
    log.yellow("enter connectWalletButton")
    log.yellow("currentAccount:", currentAccount)
    return (
      <button onClick={connectWalletHandler} className="btn btn-light">
        Connect Wallet
      </button>
    )
  }

  const connectWalletHandler = async () => {
    log.yellow("enter connectWalletHandler")
    const { ethereum } = window

      if (!ethereum) {
        alert('Please install MetaMask')
        return;
      } else {
        log.green("Wallet exists! We're ready to go!")
      }
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

        if (accounts.length !== 0) {
          const account = accounts[0]
          log.yellow("Found an authorized account: ", account)
          await checkEns(accounts[0])
          if (!isNil(currentAccount)){
            setCurrentAccount(accounts[0])
          }
        } else {
          log.red("No authorized account found")
        }
    } catch (error) {
      log.red.error(error)
    }
   }

  const openModalWallet = () => {
    log.bright.yellow("enter openModalWallet")
    openModal({
      title: "Select Wallet",
      size: 'md',
      component: <SelectWallet />
    })
  }

  const checkEns = async (account) => {
    log.yellow("enter checkEns")
    log.bright.yellow("currentAccount:", account)
    const provider = ethers.getDefaultProvider(0x1, {
      etherscan: process.env.ETHERSCAN_KEY,
      infura: {
        projectId: process.env.INFURA_PROJECT_ID,
        projectSecret: process.env.INFURA_PROJECT_SECRET,
      },
      alchemy: process.env.ALCHEMY_KEY
    })
    let ens
    try {
      ens = await provider.lookupAddress(account)
      log.yellow("ens:", ens)
      if (!isNil(ens)) {
        setCurrentAccount(ens)
      }
    } catch (e) {
      log.red.error(e)
    }
  }

  useEffect(() => {
    log.yellow("enter useEffect")
    setMenu(get(filter(header, { sys: { id: '6tWiIlcoVZ5cbA9h7Zcweb' } }), '[0].fields.link', ''))
    setDropdown({})
  }, [header])
  useEffect(() => {
    log.yellow("enter useEffect")
    checkIfWalletIsConnected()
  }, [account, chainId])
  useEffect(() => {
    log.yellow("enter useEffect")
    if (typeof window !== 'undefined') {
      let localTheme = window.localStorage.getItem('theme')
      onSelectMode(localTheme)
    }
  }, [])

  return (
    <header className={`header d-flex align-items-center justify-content-between w-100 ${transparent && 'header-transparent'} ${mobileActive ? 'active' : ''}`}>
      <div className='navbar-toggle' onClick={() => setMobileActive(true)}>
        <i className='far fa-bars' />
      </div>
        <Link href="/Home" className="d-flex">
          <a className='navbar-brand navbar-brand-mobile' onClick={() => setMobileActive(false)}>
            <Image src={"/Assets/personal-website-logo.png md:h-20 md:w-20 w-10 h-10 relative"} className="img-fluid logo" alt="brand" layout="fill"/>
          </a>
        </Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent w-100">
          <Link href="/Home" className="d-flex">
            <a className='navbar-brand' onClick={() => setMobileActive(false)}>
              <Image src={"/Assets/personal-website-logo.png md:h-20 md:w-20 w-10 h-10 relative"} className="img-fluid logo" alt="brand" layout="fill" />
            </a>
          </Link>

          {/* Start Menu Code */}
          <ul className='nav mr-2 mr-md-auto align-items-center'>
          {menu.length > 0 && menu.map(link => {
            if(get(link, 'fields.link', []).length > 0) {
              return (
                <li className='nav-item dropdown mx-3 mx-md-0' key={link.sys.id}>
                  <a className='nav-link p-0 cursor-pointer text-size-sm' onClick={() => setDropdown({ [link.sys.id]: !dropdown[link.sys.id] })}>{link.fields.text}</a>
                  <div className={`dropdown-menu shadow-lg border-0 ${get(dropdown, [link.sys.id], '') === true ? 'show' : ''}`}>
                    {link.fields.link.map(linkInner =>
                      <Link className='nav-link' href={linkInner.fields.url} as={linkInner.fields.url}>
                        <a className='dropdown-item d-flex align-items-center justify-content-start text-size-sm pl-3' onClick={() => trackEvent(`Nav: ${linkInner.fields.text}`)}>{linkInner.fields.text}</a>
                      </Link>  
                    )}
                  </div>
                </li>
              )
            } else {
              return (
                <li className={`nav-item mx-3 mx-md-0 ${includes(router.asPath, link.fields.url) && 'nav-item-active'}`} key={`${link.sys.id}+${link.fields.url}`}>
                  <Link href={link.fields.url} as={link.fields.url}>
                    <a className='nav-link p-0 text-size-sm' onClick={() => trackEvent(`Nav: ${link.fields.text}`)}>{link.fields.text}</a>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
        {/* End Menu Code */}

        {/* Start Navbar Code */}
        <ul className='nav nav-sub mr-2 align-items-center'>

          {/* Start Add Token Code */}
          {/* {!active && (currentAccount.provider !== 'solana') && <li className='nav-item nav-item-tooltip p-0 ml-2 mr-4' onClick={openModalWallet}>
            <img src='/Assets/personal-website-logo.png' className='img-fluid' style={{ height: '30px', marginTop: '-2px' }} />
            <span className='nav-tooltip'>
              Add ALTA to your MetaMask wallet.
            </span>
          </li>} */}
          {/* End Add Token Code */}

        {/* Start Home Link */}
        <li className='nav-item mt-2 mt-md-0 cursor-pointer'>
          <Link className="nav-link" href="/Home">
            <a><AiOutlineHome style={{ marginBottom: "2px" }} />
              <div/>
              Home
            </a>
          </Link>
        </li>
        {/* End Home Link */}

        {/* Start About Link */}
        <li className='nav-item mt-2 mt-md-0 cursor-pointer'>
          <Link className="nav-link" href="/About">
            <a><AiOutlineUser style={{ marginBottom: "2px" }} />
              <div/>
              About
            </a>
          </Link>
        </li>
        {/* End About Link */}

       {/* Start Projects Link */}
       <li className='nav-item mt-2 mt-md-0 cursor-pointer'>
        <Link className="nav-link" href="/Projects">
          <a>
            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
            <div/>
            Projects
          </a>
        </Link>
       </li>
        {/* End Projects Link */}

       {/* Start Resume Link */}
       <li className='nav-item mt-2 mt-md-0 cursor-pointer'>
        <Link className="nav-link" href="Resume">
          <a>
            <CgFileDocument style={{ marginBottom: "2px" }} /> 
            <div/>
            Resume
          </a>
        </Link>
       </li>
        {/* End Resume Link */}

        </ul>
        {/* End Navbar Code */}

        {/* Start connect wallet code */}
        {active && get(currentAccount, 'account', '').length > 0 && <li className='nav-item nav-account nav-item-active'>
          <a className='nav-link p-0 text-size-sm'>
            <span className='text-capitalize font-weight-regular mr-3'>{currentAccount.provider}</span>
            <br className='d-block d-md-none' />{currentAccount.account}
          </a>
        </li>}
        {!active && <li className='nav-item'>
          <a className='nav-link p-0 cursor-pointer text-size-sm' onClick={connectWalletHandler}>
            Connect Wallet
          </a>
        </li>}
        {/* End connect wallet code */}

        <div className='btn-group btn-group-sm'>
          <a onClick={() => setMobileActive(false)}><button type='button' className='btn btn-sm btn-outline-light px-3 d-block d-md-none'><i className='far fa-times' /></button></a>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = state => ({
  currentAccount: state.global.currentAccount,
  currentNetwork: state.global.currentNetwork
})

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  setCurrentAccount: (currentAccount) => dispatch(setCurrentAccount(currentAccount))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
