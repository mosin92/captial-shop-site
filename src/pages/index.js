import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/Header"
import HomePage from "../components/HomePage"
import '../style/app.css'
export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
    </>
  )
}
