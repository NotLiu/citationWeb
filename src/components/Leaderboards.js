import React from "react";
import axios from "axios";
import Select from "react-select";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTOankLa189x7qD_b8iIxETPefX_a-yeU",
  authDomain: "citation-34f48.firebaseapp.com",
  databaseURL: "https://citation-34f48-default-rtdb.firebaseio.com",
  projectId: "citation-34f48",
  storageBucket: "citation-34f48.appspot.com",
  messagingSenderId: "1082271308226",
  appId: "1:1082271308226:web:20420b71130671e1601e5b",
  measurementId: "G-H7VLSVWSN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Leaderboards({
  boardType,
  setBoardType,
  leaderboardList,
  setLeaderboardList,
}) {
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
      <div id="aboutPage">
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

        <div id="aboutText">
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
