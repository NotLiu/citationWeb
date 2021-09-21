import React from "react";
import axios from "axios";
import Select from "react-select";

export default function Leaderboards() {
  const [boardType, setBoardType] = React.useState("Total");
  const [leaderboardList, setLeaderboardList] = React.useState([]);
  const boards = [
    { value: "Level_One", label: "Level One" },
    { value: "Level_Two", label: "Level Two" },
    { value: "Level_Three", label: "Level Three" },
    { value: "Total", label: "Total Score" },
  ];

  function handleQuery(query) {
    console.log(query);
    axios
      .get(query, {
        proxy: {
          host: "localhost",
          port: 8080,
        },
      })
      .then(function (res) {
        console.log(res.data);
        console.log(res.data.board);
        let board = res.data.board;
        board = board.map((item, index) => {
          return (
            <li key={index} className="boardItem">
              <span className="boardName">{item.netID}</span>
              <span className="boardScore">{item.score}</span>
            </li>
          );
        });
        setLeaderboardList(board);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function handleBoardType(e) {
    setBoardType(e.value);
    handleQuery("/api/" + boardType);
  }

  return (
    <div>
      <div className="pageDiv" id="image-banner-leader" />
      <div id="aboutPage">
        <div id="leaderText">
          <h1 className="header">LEADERBOARDS</h1>
          <Select
            options={boards}
            onChange={handleBoardType}
            className="dropdown"
          ></Select>
          <span className="aboutTextAlignL">
            <h3 className="aboutTextAlignL">{boardType}</h3>
            <ul id="dataList">{leaderboardList}</ul>
          </span>
        </div>
      </div>
    </div>
  );
}
