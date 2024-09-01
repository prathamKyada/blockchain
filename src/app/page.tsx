"use client";
import { ContractContext } from "@/context/contextProvider";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const {
    registerFunc,
    getCharityFunc,
    updateCharityData,
    donateToCharityFunc,
    getDonationHistoryFunc,
  } = useContext(ContractContext);

  const handleRegisterCharity = async () => {
    await registerFunc("Harsh", "Des for char");
  };
  const handleGetCharity = async () => {
    await getCharityFunc();
  };

  const handleUpdataCharityData = async () => {
    await updateCharityData("Noman", "sdfsd sdfs d dsf sdf sd f");
  };

  const handleGetDonationHistory = async () => {
    await getDonationHistoryFunc();
  };

  const donateToCharityFunction = async () => {
    await donateToCharityFunc(1);
  };

  return (
    <>
      <button onClick={handleRegisterCharity}>register</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={handleGetCharity}>get</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={handleUpdataCharityData}>update</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={donateToCharityFunction}>donet 1 matic</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={handleGetDonationHistory}>History</button>
    </>
  );
}
