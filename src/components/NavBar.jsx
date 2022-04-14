import logo from "../assets/images/logo.png";
export default function NavBar() {
  return (
    <nav>
      <div className="contact">
        <a href="tel:+46704654229">
          <i class="fa-solid fa-phone-flip" />
          {" "}+4670 465 42 29
        </a>
        <a href="mailto:Kalasyahimo@hotmail.com">
          <i class="fa-solid fa-envelope" />
          {" "}Kalasyahimo@hotmail.com
        </a>
      </div>
      <img className="logo" src={logo} alt="" />
    </nav>
  );
}
