import React from 'react'


const Pages = (props) => {
  const pages = props.pages

  const renderPages = () => {
    return pages.map( (page) => {
      return(
        <div>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
      )
    })
  }
  return (
    <div>
      {renderPages()}
    </div>
  )
}



export default Pages