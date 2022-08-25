import React from 'react'
import NavBar from "../componenets/headers/NavBar"
import Footer from "../componenets/footer/Footer"
import MessagesCmp from "../componenets/Messages/MessagesCmp"

export default function Messages() {
    return (
        <>
            <NavBar />
            <MessagesCmp />
            <Footer />
        </>
    )
}