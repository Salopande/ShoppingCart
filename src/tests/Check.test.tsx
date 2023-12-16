import { fireEvent, render,screen  } from "@testing-library/react"
import Check from "../components/Check"
import React from "react"
import '@testing-library/jest-dom'

test('should render text box',()=>{
    render(<Check/>)
    let inputs= screen.getByTestId("test")
    expect(inputs).toBeInTheDocument()
   
})