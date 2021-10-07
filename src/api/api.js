import { db } from "./index";
import { ref, get } from "@firebase/database";
import { onValue } from "firebase/database";

export const getAll = async () => {
  const dataRef = ref(db);
  await get(dataRef).then((data) => {
    data.forEach((item) => console.log(item.val()));
  });
};

export const getBatDeaths = () => {
  const dataRef = ref(db, "meta/player stats/bat deaths");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getBooksRead = () => {
  const dataRef = ref(db, "meta/player stats/books read");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getCheatersCaught = () => {
  const dataRef = ref(db, "meta/player stats/cheaters caught");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getHiddenLevelsFound = () => {
  const dataRef = ref(db, "meta/player stats/hidden levels found");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getPlayerCount = () => {
  const dataRef = ref(db, "meta/player stats/player count");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getPlayerWins = () => {
  const dataRef = ref(db, "meta/player stats/player wins");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getTableFlips = () => {
  const dataRef = ref(db, "meta/player stats/table flips");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getTotalCitations = () => {
  const dataRef = ref(db, "meta/player stats/total citations");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};

export const getTotalCoffee = () => {
  const dataRef = ref(db, "meta/player stats/total coffee poured");
  let data = null;
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  console.log(data);
  return data;
};
