import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="coin-container max-w-[740px] mx-auto my-4 py-3 px-4 flex flex-col bg-[#26272b] shadow-md shadow-[#18191b] rounded-lg">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="my-2 ">
            <span className="rank-btn border-[1px] divide-solid border-[#6900ff]  shadow-md shadow-[#6900ff] bg-[#6900ff] rounded-lg p-1">
              Rank # {coin.market_cap_rank}
            </span>
          </div>
          <div className=" grid grid-cols-2">
            <div className="flex items-center my-4">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p className="pr-4">{coin.name}</p>
              {coin.symbol ? (
                <p className="pr-4">{coin.symbol.toUpperCase()}/USD</p>
              ) : null}
            </div>
            <div className="flex items-center justify-center">
              {coin.market_data?.current_price ? (
                <h1>$ {coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats grid grid-cols-2 gap-8 w-full">
            <div className="left">
              <div className=" flex justify-between border-b-[1px] divide-solid border-b-[#808080] my-2 pb-2">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p className="text-[#d3d3d3]">
                    $ {coin.market_data.low_24h.usd.toLocaleString()}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-between border-b-[1px] divide-solid border-b-[#808080] my-2 pb-2">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>$ {coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div className="flex justify-between border-b-[1px] divide-solid border-b-[#808080] my-2 pb-2">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="flex justify-between border-b-[1px] divide-solid border-b-[#808080] my-2 pb-2">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
