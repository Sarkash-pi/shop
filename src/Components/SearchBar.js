import React from 'react'

export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..."/>
      <p>
        <input type="checkbox"/>
        {' '}
        Only show product in stocks
      </p>
    </form>
  )
}