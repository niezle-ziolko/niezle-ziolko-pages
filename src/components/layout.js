import * as React from "react"

import "./layout.css"

const Layout = props => {
  return (
      <div>
        <main>{props.children}</main>
      </div>
  )
}

export default Layout
