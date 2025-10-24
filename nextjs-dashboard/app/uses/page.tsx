import styles from "./tools.module.scss";

export default function Page() {
  return (<div className={styles.toolsPage}>
  <h1 className="glowy big">Uses</h1>
  <p>(See <a href="https://uses.tech/">uses.tech</a> for everyone else's uses pages!)</p>

    <h2>Physical</h2>
    <ul>
      <li>Keyboard: <a href="https://drop.com/buy/massdrop-x-mito-laser-alt-keyboard">Massdrop x MiTo Laser ALT Mechanical Keyboard</a></li>
      <li>Switches: <a href="https://zealpc.net/products/zilent?variant=5894832324646">Aqua Zilent, 67g</a></li>
      <li>Mouse: <a href="https://www.lenovo.com/us/en/p/accessories-and-software/keyboards-and-mice/mice/4y51c33792">Lenovo Go Wireless Vertical Mouse</a></li>
      <li>Chair: <a href="https://www.steelcase.com/products/office-chairs/leap/">Steelcase Leap</a></li>
      <li>Bags: various, <a href="https://www.timbuk2.com/">Timbuk2</a></li>
    </ul>
    <h2>Development environment</h2>
    <ul>
      <li>OS: Windows 11 (grudgingly)</li>
      <li>Browser: Firefox</li>
      <li>Editor: Visual Studio Code</li>
      <li>Editor theme: <a href="https://github.com/nextlevelbanana/vscode-pico8-theme">Pico-8</a></li>
      <li>Font: <a href="https://github.com/microsoft/cascadia-code">Cascadia Code</a></li>
    </ul>
  <h2>Apps</h2>
  <ul>
    <li>Email: <a href="https://fastmail.com">Fastmail</a></li>
    <li>Notes: <a href="https://joplinapp.org/">Joplin</a></li>
    <li>Music: <a href="https://tidal.com">Tidal</a></li>
    <li>Transit: <a href="https://transitapp.com/">Transit</a></li>
    <li>Graphics: <a href="https://www.aseprite.org/">Aseprite</a></li>
    <li>Print layout: <a href="https://affinity.serif.com/en-us/publisher/">Affinity Publisher</a></li>
    <li>Password manager: [redacted]</li>
  </ul>
  </div>);
}