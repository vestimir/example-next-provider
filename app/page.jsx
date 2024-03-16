import React from "react";
import ShowsResultsProvider from "./components/lib/providers/ShowResultsProvider";
import MyShowList from "./components/MyShowList";

export default function Page({ searchParams: { query } }) {
  return (
    <main className="container">
      <h1>Search TV shows</h1>

      <form action="" role="group">
        <input
          type="text"
          name="query"
          placeholder="Enter name..."
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Show results</h3>

      {!query && <p>Enter name of a show.</p>}

      {query && (
        <ShowsResultsProvider query={query}>
          <MyShowList />
        </ShowsResultsProvider>
      )}
    </main>
  );
}
