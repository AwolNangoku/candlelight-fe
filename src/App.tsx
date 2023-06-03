import React from "react"
import AppRouter from "./navigation/app-router"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <AppRouter />
    </ChakraProvider>
  )
}

export default App
