import React, { useState } from "react"

export default function color() {
    const[color, setColor] = useState("black")
    const[colorInput, setColorInput] = useState("black")
    const[text, setText] = useState("Color Me!")
    const[textInput, setTextInput] = useState("Color Me!")

    function handleChange() {
        setColor( color === "black" ? )
    }

    // handleSubmit() {
    //     this.setState({ 
    //         color: this.state.colorInput,
    //         text: this.state.textInput
    //     })
    // }

    
        return (
            <div className="color-wrapper">
                <h3 style={{ color: color }}>{handleChange}</h3>
                <input type="text" name="colorInput" value={this.state.colorInput} onChange={this.handleChange} />
                <input type="text" name="textInput" value={this.state.textInput} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }


// color: "black",
//             colorInput: "black",
//             text: "Color Me!",
//             textInput: "Color Me!"