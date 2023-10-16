import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div className="flex justify-center items-center flex-col h-screen">
    <h1 className="font-bold text-2xl">404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">
      <button className="border border-solid border-black px-5 py-2.5 rounded-xl mt-5 hover:border-blue hover:rounded-full hover:underline hover:underline-offset-2">
        Let's go back home bud.
      </button>
    </Link>
  </div>
)

export default NotFoundPage
