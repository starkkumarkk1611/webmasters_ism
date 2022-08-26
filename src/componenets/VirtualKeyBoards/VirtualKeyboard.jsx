import React, { useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

// import "./styles.css";

export default function VirtualKeyboard() {
  const [input, setInput] = useState("");
  const [password, setpassword] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboardRef = useRef(null);

  const displayOSK = (event) => {
    console.log(keyboardRef.current);
    keyboardRef.current.style.display = "flex";
  };
  const hideOSK = () => {
    console.log("hide");
    keyboardRef.current.style.display = "none";
  };

  useEffect(() => {
    [...window.document.getElementsByTagName("input")].forEach((input) => {
      input.addEventListener("focus", displayOSK);
    });
    window.addEventListener("click", function(e) {
      console.log(e.target.tagName);
      if (
        !keyboardRef.current.contains(e.target) &&
        !(e.target.tagName.toLowerCase() === "input")
      )
        hideOSK();
    });

    return () => {
      document.getElementsByName("input").forEach((input) => {
        input.removeEventListener();
      });
    };
  }, []);

  const onChange = (input) => {
    setInput(input);
    setpassword(password);
    // console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.current.setInput(input);
  };
  const onChangePassword = (event) => {
    console.log(password);
    const password = event.target.value;
    setpassword(password);
    console.log(password);
    keyboardRef.current.setpassword(password);
  };

  return (
    <div id="virtual-Keyboard">
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      {/* <input
        value={password}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangePassword}
      /> */}

      <div
        id="osk-keyboard"
        ref={keyboardRef}
        style={{ display: "none" }}
        onClick={displayOSK}
      >
        <Keyboard
          layoutName={layout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
}
