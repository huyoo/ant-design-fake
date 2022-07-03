import login from "./login";
import {Context, createContext, useContext} from "react";

export interface StoreType {
  login: typeof login
}

const stores = {
  login,
};

const storesContext: Context<StoreType> = createContext(stores);

export const useStores = () => useContext<StoreType>(storesContext);

export default stores;
