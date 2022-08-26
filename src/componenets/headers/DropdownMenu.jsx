import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        Theme
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://rajvidg.github.io/DarkTheme/">Deuteranomaly </Dropdown.Item>
        <Dropdown.Item href="https://rajvidg.github.io/ColorBlind/">Protanomaly</Dropdown.Item>
        <Dropdown.Item href="https://rajvidg.github.io/CB1/">Protanopia and Deuteranopia</Dropdown.Item>
        <Dropdown.Item href="https://rajvidg.github.io/CB2/">Dark Theme</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;