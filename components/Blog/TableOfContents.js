import React, { useEffect } from "react"

const getHeadings = () => {
  const headings = document.querySelectorAll("h2")
  console.log(headings)
}

const TableOfContents = () => {
  useEffect(() => getHeadings(), [])

  return <div>TOC component under development</div>
}

export default TableOfContents
