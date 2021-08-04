import React from 'react'

const AppContainer = ({children}) => {
  return (
    <div className="w-full flex flex-1 flex-col justify-center items-center h-screen bg-indigo-900">
      <div className="lg:w-96 md:h-phone bg-white overflow-scroll">
        {children}
      </div>
    </div>
  )
}

export default AppContainer
