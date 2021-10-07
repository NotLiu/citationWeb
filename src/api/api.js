import { db } from "./index";
import { ref, get } from "@firebase/database";
// import { onValue } from "firebase/database";

export const getAll = async () => {
  const dataRef = ref(db);
  await get(dataRef).then((data) => {
    data.forEach((item) => console.log(item.val()));
  });
};

export const getBatDeaths = async () => {
  const dataRef = ref(db, "meta/player stats/bat deaths");
  return await get(dataRef).then((data) => {
    return data.val();
  });
  // onValue(dataRef, (snapshot) => {
  //   console.log(snapshot);
  //   console.log(snapshot.val());
  //   data = snapshot.val();
  // });
  // return data;
};

export const getBooksRead = async () => {
  const dataRef = ref(db, "meta/player stats/books read");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getCheatersCaught = async () => {
  const dataRef = ref(db, "meta/player stats/cheaters caught");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getHiddenLevelsFound = async () => {
  const dataRef = ref(db, "meta/player stats/hidden levels found");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getPlayerCount = async () => {
  const dataRef = ref(db, "meta/player stats/player count");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getPlayerWins = async () => {
  const dataRef = ref(db, "meta/player stats/player wins");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getTableFlips = async () => {
  const dataRef = ref(db, "meta/player stats/table flips");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getTotalCitations = async () => {
  const dataRef = ref(db, "meta/player stats/total citations");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};

export const getTotalCoffee = async () => {
  const dataRef = ref(db, "meta/player stats/total coffee poured");
  return await get(dataRef).then((data) => {
    return data.val();
  });
};
