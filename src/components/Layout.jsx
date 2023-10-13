import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col font-bold">
      <p>top layer</p>
      {children}
    </div>
  )
}

export default Layout
