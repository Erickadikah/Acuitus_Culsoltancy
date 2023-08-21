import React from 'react'

export default function NewsLetterSection() {
    const styles = {
        backgroundColor: "#1b1b1b",
        padding: "100px 10px",
        display: "grid",
        placeContent: "center"
    }
  return (
    <section style={styles}>
        <div className="container">
            <h1 className="text-center text-info">Create a Custom package</h1>
            <p className="text-white text-center">Didn’t find what you need? Don’t hesitate. We are always open for tweaks and suggestions.</p>
            <form action="">
                <label htmlFor="userEmail">Email</label>
                <input type="text" className="form-control" name="userEmail" id="userEmail"  placeholder='Enter email adress'/>
                <button type="submit" className="btn btn-primary d-grid" style={{margin: "10px auto"}}>Talk to us</button>
            </form>
        </div>
    </section>
  )
}
