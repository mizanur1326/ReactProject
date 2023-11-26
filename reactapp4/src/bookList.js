import React from "react";
import Book from "./book";

export default function BookList() {
  const list = [
    { isbn: 100, title: "The Day", author: "ABC" },
    { isbn: 101, title: "The Night", author: "DEF" },
    { isbn: 102, title: "The Day-Night", author: "GHI" },
  ];
//   return (
//     <>
//       <h1>Book Info</h1>
//       <ul>
//         {list.map((item, i) => (
//           <li key={i}>ISBN : {item.isbn} Title : {item.title} Author Name : {item.author} Index{i}</li>

//         ))}
//       </ul>
//     </>
//   );


    return(
        <ul>
            {list.map((item,i)=><Book ISBN={item.isbn} title={item.title} author={item.author} key={i   }/>)}
        </ul>
    )
}
