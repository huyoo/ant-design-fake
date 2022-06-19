import login from "./login";
import {createContext, useContext} from "react";

const stores = {
  login
};

const storesContext = createContext(stores);

export const useStores = () => useContext<any>(storesContext);

export default stores;
