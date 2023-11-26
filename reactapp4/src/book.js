import React from 'react'

export default function Book(props) {
  return (
    <>
        <li>
            <span>ISBN: {props.isbn} Title: {props.title}</span>
            <p>Author: {props.author}</p>
        </li>
    </>
  )
}
