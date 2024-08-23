import React from 'react'

// const List = () => {
//   return <div className='style'> Hello Anil </div>
// }

const App = () => {
  return (
    <>
      <List />
    </>
  )
}

// creating component using the React.createElement()
const List = () => React.createElement(`div`, {className: "style"}, `Hello Anil`);

export {App}