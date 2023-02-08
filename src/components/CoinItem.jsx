import React from "react";

const CoinItem = (props) => {
  return (
    <div className="xl:container mx-auto">
      <div className="flex justify-between items-center hover:scale-[1.02] transition-all duration-300 ease-in-out bg-[#26272b] shadow-md shadow-black rounded-lg my-8 mx-4 py-3 px-4">
        <p>{props.coins.market_cap_rank}</p>
        <div className="flex items-center">
          <img
            className="h-[40px] mr-2 w-auto"
            src={props.coins.image}
            alt=""
          />
          <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>$ {props.coins.current_price.toLocaleString()}</p>
        <p> {props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className="sm:flex hidden">
          $ {props.coins.total_volume.toLocaleString()}
        </p>
        <p className="sm:flex hidden">
          $ {props.coins.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CoinItem;
