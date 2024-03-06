import * as React from "react"
const Chess = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={80}
    height={80}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M60 0H4a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z"
      style={{
        fill: "#a67c52",
      }}
    />
    <path
      d="M4 4h56v56H4z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M20 4h-8v8h8V4zm16 0h-8v8h8V4zm16 0h-8v8h8V4zM4 12v8h8v-8H4zm24 8v-8h-8v8h8zm16 0v-8h-8v8h8zm16 0v-8h-8v8h8zm-40 0h-8v8h8v-8zm16 8v-8h-8v8h8zm8-8v8h8v-8h-8zM4 28v8h8v-8H4zm24 0h-8v8h8v-8zm8 8h8v-8h-8v8zm24 0v-8h-8v8h8zm-40 0h-8v8h8v-8zm8 0v8h8v-8h-8zm16 8h8v-8h-8v8zM4 44v8h8v-8H4zm16 0v8h8v-8h-8zm16 0v8h8v-8h-8zm24 8v-8h-8v8h8zm-48 8h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#666",
      }}
    />
  </svg>
)
export default Chess
