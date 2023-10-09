import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import MainState from "@/components/MainState";
import SearchState from "@/components/SearchState";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchState, setSearchState] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const searchRef = useRef<any>(null);

  useEffect(() => {
    if (searchState) {
      searchRef.current.focus();
    }
  }, [searchState]);

  return (
    <>
      <Head>
        <title>Monosemantic Search</title>
        <meta
          name="description"
          content="An implementation of the data from the Towards Monosemanticity: Decomposing Language Models With Dictionary Learning paper."
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        {searchState ? (
          <SearchState
            searchRef={searchRef}
            search={search}
            setSearch={setSearch}
            setSearchState={setSearchState}
          />
        ) : (
          <MainState
            search={search}
            searchRef={searchRef}
            setSearch={setSearch}
            setSearchState={setSearchState}
          />
        )}
      </main>
    </>
  );
}
