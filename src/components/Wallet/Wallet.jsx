import { useState } from "react"
import styles from './Wallet.module.css'

export const Wallet = () => {
  const [buttonText, setButtonText] = useState('Connect Wallet')
  const [accountInfo, setAccountInfo] = useState(null)

  const handleWalletConnection = () => {
    if(window.ethereum && window.ethereum.isMetaMask) {
      // Metamask installed
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        setButtonText("Wallet Connected =>")
        setAccountInfo(result[0])
      })
      .catch(error => {
        setButtonText(error.message)
      })
    } else {
      // Metamask is not installed
      setButtonText("You don't have MetaMask")
    }
  }

  return (
    <button className={styles.btn} onClick={handleWalletConnection}>{buttonText} {accountInfo}</button>
  )
}