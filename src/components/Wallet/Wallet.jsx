import { useState } from "react"

export const Wallet = () => {
  const [buttonText, setButtonText] = useState('Connect Wallet')
  const [accountInfo, setAccountInfo] = useState(null)

  const handleWalletConnection = () => {
    if(window.ethereum && window.ethereum.isMetaMask) {
      // Metamask installed
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        setAccountInfo(result[0])
      })
      .catch(error => {
        setButtonText(error.message)
      })
    } else {
      // Metamask is not installed
      setButtonText("No tienes acceso a MetaMask")
    }
  }

  return (
    <button onClick={handleWalletConnection}>{buttonText} {accountInfo}</button>
  )
}