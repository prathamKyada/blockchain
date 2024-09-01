import { smartContractAddress, contractABI , myTokenABI } from "../context/contants"
import { ethers } from "ethers";

export function toWei(amount , decimal=18){
  const toWei = ethers.utils.parseUnits(amount,decimal);
  return toWei.toString();
}

export function toEth(amount , decimal=18){
  const toEth = ethers.utils.formatUnits(amount,decimal);
  return toEth.toString();
}
  
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) {
      return console.log("INSTALL METAMASk");
    }

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      return console.log("INSTALL METAMASk");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectingWithContract = async () => {
  try {
    if (!window.ethereum) {
      console.log("MetaMask not detected. Please install MetaMask.");
      return null; 
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(smartContractAddress, contractABI, signer)
    // console.log("Contract = ",contract);
    return contract;
  } catch (error) {
    console.log("Error connecting with contract:", error);
    return null; 
  }
};

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(address, myTokenABI, signer)
    return tokenContract;
  }

}