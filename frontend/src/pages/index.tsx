import { Inter } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import MainState from "@/components/MainState";
import SearchState from "@/components/SearchState";

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
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
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
  );
}
