import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © Your Website 2021</span>
          </div>
        </div>
      </footer>
     
     {/* Scroll to Top Button*/}
<a className="scroll-to-top rounded" href="#page-top">
  <i className="fas fa-angle-up" />
</a>

    </div>
  )
}
