import logo from "../assets/images/logo.png";
export default function NavBar() {
  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      {/* <ul>
        <li>
          <img className="logo" src={logo} alt="" />
        </li>
        <li>
          <p>Sälja Bil</p>
        </li>
      </ul> */}
    </nav>
  );
}
