'use client'

export default function Home() {
  return (
    <>
      <h1>Welcome to Main Home Page</h1>
      <button
        className="bg-amber-400 text-black p-3"
        onClick={() => alert("Button Click")}
      >
        Click Me
      </button>
    </>
  );
}
