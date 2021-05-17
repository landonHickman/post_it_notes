import React from 'react'


const Pages = (props) => {
  const pages = props.pages

  const renderPages = () => {
    return pages.map( (page) => {
      return(
        <div>
          <h1>Note</h1>
          <h3>{page.title}</h3>
          <p>{page.description}</p>
          {/* <p>{page.id}</p> */}
          <div>
          <a href={`/pages/${page.id}`}>Show Page</a>
          </div>
          <div>
          <a href={`/pages/${page.id}/edit`}>Edit Page</a>
          </div>
          <div>
          <a href={`/pages/${page.id}`} data-method="delete">Delete Page</a>
          </div>

        </div>
      )
    })
  }
  return (
    <div>
      <h1>Post It</h1>
      <a href='/pages/new'>Create a New Page</a>
      {renderPages()}
    </div>
  )
}



export default Pages