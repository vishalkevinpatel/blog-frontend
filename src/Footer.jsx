import { useState, useEffect } from "react";

export function Footer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <footer id="footers">
      <div className="d-flex justify-content-center">
        <p>Copyright 2049</p>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click!</button>
      </div>
    </footer>
  );
}
