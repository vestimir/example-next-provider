"use client";

import React from "react";
import APIContext from "../APIContext";

const searchShows = async (query) => {
  const req = await fetch(`http://localhost:3000/api/shows?query=${query}`, {
    cache: "no-store",
  });
  const results = await req.json();

  return results;
};

const ShowsResultsProvider = async ({ children, query }) => {
  const shows = await searchShows(query);

  return (
    <APIContext.Provider value={{ shows }}>{children}</APIContext.Provider>
  );
};

export default ShowsResultsProvider;
