import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Theme
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">Deuteranomaly </Dropdown.Item>
        <Dropdown.Item href="#/action-3">Protanomaly</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Protanopia and Deuteranopia</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Dark Theme</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;