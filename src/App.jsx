import React, { useState } from "react";


const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    })
    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        // const value = event.target.value
        // const name = event.target.name

        const { value, name } = event.target

        setFullName((preVal) => {
            console.log(preVal)

            return {
                ...preVal,
                [name]: value,
            }
            // if (name === "fName") {
            //     return {
            //         fname: value,
            //         lname: preVal.lname,
            //     }
            // } else if (name === "lName") {
            //     return {
            //         fname: preVal.lname,
            //         lname: value,
            //     }
            // }
        })
    }
    const onSubmits = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <form onSubmit={onSubmits}>
                <div>
                    <h1> Hello {fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phone}</p>
                    <input
                        type="text"
                        placeholder="Enter ur First Name"
                        name="fname"
                        onChange={inputEvent}
                        value={fullName.fname} required
                    />
                    <input
                        type="text"
                        placeholder="Enter ur Last Name"
                        name="lname"
                        onChange={inputEvent}
                        value={fullName.lname} required
                    />
                    <input
                        type="email"
                        placeholder="Enter ur email"
                        name="email"
                        onChange={inputEvent}
                        value={fullName.email}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Enter ur number"
                        name="phone"
                        onChange={inputEvent}
                        value={fullName.phone}
                        required
                    />

                    <button type="submit">Click Me</button>
                </div>
            </form>
        </>
    )

}

export default App