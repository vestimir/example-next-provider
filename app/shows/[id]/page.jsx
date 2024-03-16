import React from "react";
import ShowProvider from "../../components/lib/providers/ShowProvider";
import MyShow from "../../components/MyShow";

export default function Page({ params: { id } }) {
  return (
    <main className="container">
      <ShowProvider id={id}>
        <MyShow />
      </ShowProvider>
    </main>
  );
}
