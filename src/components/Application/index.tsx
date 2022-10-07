import React from "react";

const Application = () => {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All Fields are mandatory</p>
            <img src={"https://www.google.com/search?q=gmail&rlz=1C1GCEU_enIN1020IN1020&sxsrf=ALiCzsaXFYmuAe27gmSGnCgnl7Yd3kZ6KA:1664692870188&tbm=isch&source=iu&ictx=1&vet=1&fir=PKm1ZvExQjI7zM%252CxJatxXNU1IXPgM%252C%252Fm%252F02q_bk&usg=AI4_-kRQN8BJmZaDEvA8iAJsOUjqYgtSaQ&sa=X&ved=2ahUKEwiT3r-Z-MD6AhVK7TgGHVZrB5IQ_B16BAhKEAI#imgrc=PKm1ZvExQjI7zM"} alt={"A person with google"} />
            <div>
                <span title={"Close"}>X</span>
            </div>
            <div data-testid={"custom-element"}>
                Custom HTML Element
            </div>
            <form>
                <div>
                    <label htmlFor={"name"}>Name</label>
                    <input
                        type={"text"}
                        id={"name"}
                        placeholder={"Fullname"}
                        value={"Prashant"}
                        onChange={() => {}}
                    />
                </div>
                <div>
                    <label htmlFor={"bio"}>Bio</label>
                    <textarea id={"bio"} name={"bio"}  />
                </div>
                <div>
                    <label htmlFor={"job-location"}>Name</label>
                    <select id={"job-location"}>
                        <option value={""}>Select a country</option>
                        <option value={"US"}>United States</option>
                        <option value={"IN"}>India</option>
                        <option value={"CA"}>Canada</option>
                        <option value={"GB"}>United Kingdom</option>
                        <option value={"AU"}>Australia</option>
                    </select>
                </div>

                <div>
                    <label>
                        <input type={"checkbox"} id={"terms"}  /> I agree to the terms and conditions
                    </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Application;