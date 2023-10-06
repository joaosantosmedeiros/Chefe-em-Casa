import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        <Link to="https://www.facebook.com"><img src="/facebook.svg" data-testid="facebook" height={"30px"} alt="" /></Link>
        <Link to="https://www.instagram.com"><img src="/instagram.svg" data-testid="whatsapp" height={"30px"} alt="" /></Link>
        <Link to="https://web.whatsapp.com"><img src="/whatsapp.svg" data-testid="instagram" height={"30px"} alt="" /></Link>
      </div>
      <p>Copyright © 2023 ChefeEmCasa inc. All rights Reserved</p>
    </footer>
    );
  }