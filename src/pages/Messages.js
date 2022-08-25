import React from 'react'
import NavBar from "../componenets/headers/NavBar"
import Footer from "../componenets/footer/Footer"
import Messages_cmp from "../componenets/Messages/Messages_cmp"

export default function Messages() {
    return (
        <>
            <NavBar />
            <Messages_cmp />
            <Footer />
        </>
    )
}