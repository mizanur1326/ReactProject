import React from 'react'
import Topbar from '../components/Topbar'
import { Outlet } from 'react-router-dom'
import Leftbar from '../components/Leftbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <Leftbar></Leftbar>
      {/* <!-- End of Sidebar --> */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">

            {/* Topbar */}
            <Topbar></Topbar>
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
            <Outlet></Outlet>
            </div>
            {/* /.container-fluid */}

          </div>
          {/* End of Main Content */}

          {/* Footer */}
          <Footer></Footer>
          {/* End of Footer */}

        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}

    </div>
  )
}
