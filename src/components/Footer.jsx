import logo from "../assets/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container flex flex-col md:flex-row md:justify-between items-center text-center md:items-start md:text-left mx-auto px-4 text-white space-y-6 ">
        <div className="flex items-center justify-between ">
          {/* brand logo */}
          <img style={{color: 'white'}} src={logo} alt="Logo" className="h-6 " />
        </div>
        <div className="text-gray-400 leading-8 font-semibold">
          <h3 className="font-bold text-white">Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div className="text-gray-400 leading-8 font-semibold">
          <h3 className="font-bold text-white">Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>

        <div className="text-gray-400 leading-8 font-semibold">
          <h3 className="font-bold text-white">Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        {/* social links */}
        <div className="flex flex-row gap-4 mt-4">
          <a href="#">
            <img src="/src/images/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/src/images/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/src/images/icon-pinterest.svg" alt="Pinterest" />
          </a>
          <a href="#">
            <img src="/src/images/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
