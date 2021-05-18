import React from 'react'

const PageEdit = (props) => {
  const { page } = props
  return(
    <>
      <div>
        <h1>Edit Page Form</h1>
        <form action={`/pages/${page.id}`} method='post'>
        <input type="hidden" name="_method" value="patch" />
          <p>Title</p>
          <input defaultValue={page.title} name="page[title]"/>
          <p>Description</p>
          <textarea defaultValue={page.description} name="page[description]"/>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
  
}


export default PageEdit
