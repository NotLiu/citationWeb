import React, { useEffect, useState } from "react";
import { getCount, getBatDeaths } from "../api/api";

export default function Leaderboards() {
  const [numPlays, setNumPlays] = useState(0);
  // const boards = [
  //   { value: "Level_One", label: "Level One" },
  //   { value: "Level_Two", label: "Level Two" },
  //   { value: "Level_Three", label: "Level Three" },
  //   { value: "Total", label: "Total Score" },
  // ];

  // function handleQuery(query) {
  //   console.log(query);
  //   axios
  //     .get(query, {
  //       proxy: {
  //         host: "localhost",
  //         port: 8080,
  //       },
  //     })
  //     .then(function (res) {
  //       console.log(res.data);
  //       console.log(res.data.board);
  //       let board = res.data.board;
  //       board = board.map((item, index) => {
  //         return (
  //           <li key={index} className="boardItem">
  //             <span className="boardName">{item.netID}</span>
  //             <span className="boardScore">{item.score}</span>
  //           </li>
  //         );
  //       });
  //       setLeaderboardList(board);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // }

  // function handleBoardType(e) {
  //   setBoardType(e.value);
  //   handleQuery("/api/" + boardType);
  // }

  useEffect(() => {
    // get number of plays to display
    getCount().then((count) => {
      setNumPlays(count);
    });
    getBatDeaths().then((deaths) => {
      console.log(deaths);
    });
  });

  return (
    <div>
      <div className="aboutPage">
        <picture>
          <source
            media="(max-width:499px)"
            srcSet="./img/borders2-long.png"
            alt="text border"
          ></source>
          <source
            media="(min-width:500px)"
            srcSet="./img/borders2.png"
            alt="text border"
          ></source>
          <img id="leaderboardImg" src="./img/borders2.png" alt="text border" />
        </picture>

        <div className="aboutText">
          <h1 className="header">STATISTICS</h1>
          {/* <Select
            options={boards}
            onChange={handleBoardType}
            className="dropdown"
          ></Select> */}
          <ul className="aboutTextAlignL">
            <li className="statItem">
              Number of Plays: <span className="statItemR">{numPlays}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
