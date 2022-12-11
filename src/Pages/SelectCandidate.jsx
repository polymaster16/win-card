import { useState } from "react";

function SelectCandidate() {
  const [count, setCount] = useState(0);
  function sub() {
    const url =
      "https://play.google.com/store/apps/details?id=com.google.android.dialer&hl=en&gl=US";
    window.open(url);
    console.log("sub clicked");
  }

  return (
    <div className="container container-sm">
      {count}
      {count >= 11 && setCount(11)}
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-primary m-2"
      >
        Add
      </button>

      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-danger mx-3"
      >
        Subtract
      </button>

      <button onClick={() => sub()} className="btn btn-success mx-3">
        Open app
      </button>

      <button
        onClick={() => window.open("tel:+237677139797")}
        className="btn btn-secondary mx-3"
      >
        Call
      </button>
    </div>
  );
}

export default SelectCandidate;
