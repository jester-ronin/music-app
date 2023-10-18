import './footer.css'

function Footer() {
    return (
      <footer className="py-4">
        <div id='content' className="container">
          <div className="row">
            <div className="col-12 text-center">
              &copy; {new Date().getFullYear()} Your Website Name
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;