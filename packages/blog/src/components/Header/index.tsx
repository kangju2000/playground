import React from "react"
import { header } from "./index.css";

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className={header}>
      <h1>{title}</h1>
    </header>
  );
}
