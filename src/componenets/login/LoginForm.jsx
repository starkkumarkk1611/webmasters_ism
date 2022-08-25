import React, { useState } from "react";
import VirtualKeyboard from "./VirtualKeyboard";
import "./keyboard.css";
export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <div className="keyboard">
        <VirtualKeyboard />
      </div>
    </>
  );
}
