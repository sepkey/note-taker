import React from "react";
import NotePiece from "./NotePiece";
import { useSelector } from "react-redux";

const Content = () => {
  const items = useSelector((state) => state.items);
  const searchQuery = useSelector((state) => state.searchQuery);
  let filteredItems = [...items];

  if (searchQuery) {
    filteredItems = filteredItems.filter(
      (item) => item.note.toLowerCase().indexOf(searchQuery) > -1
    );
  }

  // if (searchQuery) {
  //   filteredItems = filteredItems.filter((item) =>
  //     item.note.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }

  return (
    <main className="content">
      {filteredItems.length > 0
        ? filteredItems.map((note) => <NotePiece key={note.id} note={note} />)
        : "nothing to show"}
    </main>
  );
};

export default Content;
