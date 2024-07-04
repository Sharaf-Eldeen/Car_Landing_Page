import "./NavigationBar.css";
export default function NavigationBar() {
  return (
    <div className="Nav">
      <div className="Nav-Logo">EV-olution</div>
      <ul className="Nav-Menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="Nav-Contact">Contact</li>
      </ul>
    </div>
  );
}
