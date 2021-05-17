import React from 'react'

const PageNew = (props) => {
  return(
    <>
      <div>
        <h1>New Page Form</h1>
        <form action='/pages' method='post'>
          <p>Title</p>
          <input name="page[title]"/>
          <p>Description</p>
          <textarea name="page[description]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
  
}


export default PageNew
