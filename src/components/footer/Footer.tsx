import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com"><img src="/facebook.svg" height={"30px"} alt="" /></a>
        <a href="https://www.instagram.com"><img src="/instagram.svg" height={"30px"} alt="" /></a>
        <a href="https://web.whatsapp.com"><img src="/whatsapp.svg" height={"30px"} alt="" /></a>
      </div>
      <p>Copyright © 2023 ChefeEmCasa inc. All rights Reserved</p>
    </footer>
    );
  }