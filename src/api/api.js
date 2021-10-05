import { db } from "./index";
import { ref, get } from "@firebase/database";
import { Database, onValue } from "firebase/database";

export const getAll = async () => {
  const dataRef = ref(db);
  await get(dataRef).then((data) => {
    data.forEach((item) => console.log(item.val()));
  });
};

export const getCount = async () => {
  const dataRef = ref(db);

  return await get(dataRef).then((data) => {
    return data.size;
  });
};

export const getBatDeaths = async () => {
  const dataRef = ref(db, "meta/bat_deaths");
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    return data;
  });
};
