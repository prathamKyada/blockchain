"use client";
import React, { createContext, useEffect, useState } from "react";
import {
  connectingWithContract,
  connectWallet,
  toEth,
  toWei,
} from "../Utilites/apiFeatures";
export const ContractContext = createContext();

function ContextProvider({ children }) {
  const [address, setaddress] = useState();
  const [contract, setContract] = useState();

  const initFunc = async () => {
    const address = await connectWallet();
    setaddress(address);
    const contract = await connectingWithContract();
    setContract(contract);
    console.log("Asddres ==> ", address);
    console.log("Contract => ", contract);
  };

  const registerFunc = async (name1, des) => {
    console.log("Reg ===> ", name1, " :dess => ", des);

    const contract = await connectingWithContract();
    const res = await contract.registerCharity(name1, des);
    console.log("res => ", res);
  };
  // registerFunc()
  const getCharityFunc = async () => {
    console.log("Address ======> ", address);

    const contract = await connectingWithContract();
    const res = await contract.charities(address);
    console.log("res => ", res);
  };

  const updateCharityData = async (name, dis) => {
    const contract = await connectingWithContract();
    const res = await contract.updateCharityDetails(name, dis);
    console.log("res => ", res);
  };

  const donateToCharityFunc = async (amount) => {
    const contract = await connectingWithContract();
    const donetAmount = toWei(amount.toString());
    console.log("amount ==> ", amount, " Address => ", donetAmount);
    const res = await contract.donateToCharity(address, { value: donetAmount });
    console.log("res => ", res);
  };

  const getDonationHistoryFunc = async () => {
    const contract = await connectingWithContract();
    console.log("address ===>", address , " Contrxt == " , contract);
    const res = await contract.getDonationHistory('0xCDd9D6Fc881e19dfC92eb40bBA7ccbfd1F10a262');
    console.log("address ===>" , res);

    return res;
  };

  useEffect(() => {
    initFunc();
  }, []);

  return (
    <ContractContext.Provider
      value={{
        registerFunc,
        getCharityFunc,
        updateCharityData,
        donateToCharityFunc,
        getDonationHistoryFunc,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}

export default ContextProvider;