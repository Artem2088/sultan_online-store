import React, { createContext } from "react";
import ICard from "../components/types/types";

const StoreContext = createContext<ICard[]>([]);

export default StoreContext;
