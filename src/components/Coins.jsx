import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";

const Coins = (props) => {
  return (
    <div className="xl:container mx-auto  px-8">
      <div>
        <div className="flex justify-between items-center bg-[#26272b] rounded-lg mx-4 my-8 py-3 px-4 font-bold">
          <p>#</p>
          <p className="-ml-16">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="sm:flex hidden">Volume</p>
          <p className="sm:flex hidden">Mkt Cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} key={coins.id} element={<Coin />}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
//element={<Coin />}
