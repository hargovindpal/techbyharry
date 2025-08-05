import React from 'react'
function Layout({left, right}) {
  return (
    <>

    <div className="container-fluid">
      <div className="row">
        <aside className="col-12 col-md-3 mb-3">
          {left}
        </aside>
        <main className="col-12 col-md-9">
          {right}
        </main>
      </div>
    </div>

      
    </>
  )
}

export default Layout
