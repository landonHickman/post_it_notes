import React from 'react'

const Page = (props) => {
  const { page } = props //used to shorten
  return(
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      <a href="/pages">Back to Main Page</a>
    </div>
  )
}

export default Page