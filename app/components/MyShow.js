"use client";

import React from "react";
import Link from "next/link";
import useData from "./lib/useData";

export default function MyShow() {
  const show = useData("show");

  return (
    <div>
      <p>
        <Link href="/">Go back</Link>
      </p>

      <h1>{show.name}</h1>
      <p>{show.genres.join(", ")}</p>

      {show?._embedded?.images && (
        <>
          <h2>Images</h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              overflowY: "auto",
            }}
          >
            {show._embedded.images.map((image) => (
              <img
                key={image.id}
                src={image?.resolutions?.medium?.url}
                alt=""
                style={{ flex: "0 0 auto" }}
              />
            ))}
          </div>
        </>
      )}

      {show?._embedded?.cast && (
        <>
          <h2>Main Cast</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {show._embedded.cast.map((member) => (
              <div
                key={member.id}
                style={{
                  width: "224px",
                  backgroundColor: "#efefef",
                }}
              >
                {member?.person.image?.medium && (
                  <img
                    src={member?.person.image?.medium}
                    alt={member.person.name}
                    style={{ width: "100%" }}
                  />
                )}

                <div style={{ padding: "0.75rem 1rem" }}>
                  <strong>{member.person.name}</strong>
                  <div>{member.character.name}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
