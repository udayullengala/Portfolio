const Footer = () => {
  return (
    <footer className="py-4 border-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="logo-initials font-mono me-3">UU</div>
              <span className="text-muted">Uday Ullengala</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-center text-md-end">
              <p className="text-muted small mb-0">© {new Date().getFullYear()} Uday Ullengala. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
