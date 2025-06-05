import {createContext, useContext, useEffect, useState } from "react";
const SeriesContext = createContext();

function SeriesProvider ({children}) {
    return <SeriesContext.Provider value={}>{children}</SeriesContext.Provider>
}

function useSeries (){
    return useContext(SeriesContext);
}

export {SeriesProvider, useSeries}