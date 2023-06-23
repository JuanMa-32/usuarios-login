

export const NavBar = ({hanlderLogout}) => {
  return (
    <header>
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
               
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
               
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
              
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
             
                Products
              </a>
            </li>
            <li>
            <button type="button" className="btn btn-light text-dark me-2" onClick={hanlderLogout}>logout</button>
             </li>
          </ul>
        </div>
      </div>
    </div>
   
         
          
    
  </header>
  )
}
