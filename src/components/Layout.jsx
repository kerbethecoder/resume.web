import React from "react"

const Layout = ({ children }) => {
  return (
    <section className="h-screen p-10">
      {children}
      <div className="xdivider mt-20" />
      <p className="text-dimBlack text-sm text-center pt-5">
        This website is just to practice and showcase my front-end skills.
      </p>
      <p className="text-dimBlack font-bold text-xs text-center pb-5">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
    </section>
  )
}

export default Layout
