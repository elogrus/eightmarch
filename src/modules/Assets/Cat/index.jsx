import * as React from "react"
const Cat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#ecf0f1" d="M5 10c0 1.6 1.343 3 3 3s3-1.4 3-3H5z" />
    <g fill="#f39c12">
      <path d="m23 1.94-9 3 6.595 7.463zM1 1.94l9 3-6.595 7.463z" />
      <path d="M22 13a10 9 0 1 1-20 0 10 9 0 1 1 20 0z" />
    </g>
    <g fill="#f1c40f">
      <path d="M21 12.956a9 8 0 1 1-18 0 9 8 0 1 1 18 0z" />
      <path d="m3 3.94 9 3-6.595 7.463zM21 3.94l-9 3 6.595 7.463z" />
    </g>
    <g fill="#e67e22">
      <path d="M11 14v2c0 1.1-.895 2-2 2s-2-.9-2-2H6c0 1.6 1.343 3 3 3s3-1.4 3-3v-2h-1zM13 14v2c0 1.1.895 2 2 2s2-.9 2-2h1c0 1.6-1.343 3-3 3s-3-1.4-3-3v-2h1z" />
      <path d="M0 11.531v.781l6 2.313-6-.031v.718l6.031.032h.063L0 17.688v.781L9 15l-9-3.469zM24 11.5v.8l-6 2.3h6v.7H17.906L24 17.6v.8L15 15l9-3.5z" />
    </g>
    <path
      fill="#ecf0f1"
      d="M8 8c-1.657 0-3 1.3-3 3 0 1.6 1.343 3 3 3s3-1.4 3-3c0-1.7-1.343-3-3-3z"
    />
    <path
      fill="#2c3e50"
      d="M8 9c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2z"
    />
    <path
      fill="#ecf0f1"
      d="M8 9c-.552 0-1 .4-1 1 0 .5.448 1 1 1s1-.5 1-1c0-.6-.448-1-1-1zM16 8c-1.657 0-3 1.3-3 3 0 1.6 1.343 3 3 3s3-1.4 3-3c0-1.7-1.343-3-3-3z"
    />
    <path
      fill="#2c3e50"
      d="M16 9c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2z"
    />
    <path
      fill="#ecf0f1"
      d="M16 9c-.552 0-1 .4-1 1 0 .5.448 1 1 1s1-.5 1-1c0-.6-.448-1-1-1z"
    />
    <path
      fill="#c0392b"
      d="M10.219 13c-.276 0-.5.2-.5.5 0 .1.034.2.125.3.045.1.096.1.156.1l1.531 1.6.094.1c.092.1.222.2.375.2s.283-.1.375-.2l.094-.1L14 13.9c.06 0 .111 0 .156-.1.091-.1.125-.2.125-.3 0-.3-.224-.5-.5-.5h-3.562z"
    />
  </svg>
)
export default Cat
