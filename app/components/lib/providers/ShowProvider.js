"use client";

import React from "react";
import APIContext from "../APIContext";

const fetchShow = async (id) => {
  const req = await fetch(`http://localhost:3000/api/shows/${id}`, {
    cache: "no-store",
  });
  const results = await req.json();

  return results;
};

const ShowProvider = async ({ children, id }) => {
  const show = await fetchShow(id);

  return <APIContext.Provider value={{ show }}>{children}</APIContext.Provider>;
};

export default ShowProvider;
