import React, { useEffect, useState } from "react";
import {
  getBatDeaths,
  getBooksRead,
  getCheatersCaught,
  getHiddenLevelsFound,
  getPlayerCount,
  getPlayerWins,
  getTableFlips,
  getTotalCitations,
  getTotalCoffee,
} from "../api/api";

export default function Leaderboards() {
  const [batDeaths, setBatDeaths] = useState(0);
  const [booksRead, setBooksRead] = useState(0);
  const [cheatersCaught, setCheatersCaught] = useState(0);
  const [hiddenLevelsFound, setHiddenLevelsFound] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [tableFlips, setTableFlips] = useState(0);
  const [totalCitations, setTotalCitations] = useState(0);
  const [totalCoffee, setTotalCoffee] = useState(0);
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
    setPlayerCount(getPlayerCount());
    setBatDeaths(getBatDeaths());
    setBooksRead(getBooksRead());
    setCheatersCaught(getCheatersCaught());
    setHiddenLevelsFound(getHiddenLevelsFound());
    setPlayerWins(getPlayerWins());
    setTableFlips(getTableFlips());
    setTotalCitations(getTotalCitations());
    setTotalCoffee(getTotalCoffee());
  }, []);

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
              Number of Plays: <span className="statItemR">{playerCount}</span>
            </li>
            <li className="statItem">
              Number of Player Wins:
              <span className="statItemR"> {playerWins}</span>
            </li>
            <li className="statItem">
              Number of Table Flips:
              <span className="statItemR"> {tableFlips}</span>
            </li>
            <li className="statItem">
              Number of Total Citations:
              <span className="statItemR"> {totalCitations}</span>
            </li>
            <li className="statItem">
              Number of Hidden Levels Found:
              <span className="statItemR"> {hiddenLevelsFound}</span>
            </li>
            <li className="statItem">
              Number of Cheaters Caught:
              <span className="statItemR"> {cheatersCaught}</span>
            </li>
            <li className="statItem">
              Number of Bat Deaths:
              <span className="statItemR"> {batDeaths}</span>
            </li>
            <li className="statItem">
              Number of Books Read:
              <span className="statItemR"> {booksRead}</span>
            </li>
            <li className="statItem">
              Number of Total Coffees Poured:
              <span className="statItemR"> {totalCoffee}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
