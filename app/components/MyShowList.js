"use client";

import React from "react";
import Link from "next/link";
import useData from "./lib/useData";

export default function MyShowList() {
  const shows = useData("shows");

  return (
    <div className="row">
      {shows.length === 0 && <p className="col-xs-12">No results found.</p>}

      {shows.length > 0 &&
        shows.map(({ show }) => (
          <Link
            key={show.id}
            href={`/shows/${show.id}`}
            className="col-xs-12 col-sm-4 col-md-3 col-lg-2"
            style={{
              display: "block",
              textDecoration: "none",
            }}
          >
            {!show?.image?.medium && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#efefef",
                  width: "100%",
                  aspectRatio: "3/5",
                  objectFit: "cover",
                }}
              >
                {show.name}
              </div>
            )}

            {show?.image?.medium && (
              <img
                src={show.image.medium}
                alt={show.name}
                style={{
                  width: "100%",
                  aspectRatio: "3/5",
                  objectFit: "cover",
                  marginBottom: "1rem",
                }}
              />
            )}
          </Link>
        ))}
    </div>
  );
}
