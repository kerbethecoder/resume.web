import React from "react"

const Layout = ({ children }) => {
  return (
    <section className="h-screen p-10">
      <p className="text-dimBlack">top layer</p>
      {children}
      <p className="text-dimBlack">bottom layer</p>
    </section>
  )
}

export default Layout
