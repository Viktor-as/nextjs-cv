import React from "react";
import Link from "next/link";

export default function Header(props) {
  return (
    <>
      <h1>Headeris</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </>
  );
}
