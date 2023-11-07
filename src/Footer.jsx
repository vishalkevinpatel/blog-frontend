import { useState, useEffect } from "react";

export function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer>
      <p>Copyright 2049</p>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </footer>
  );
}
