import React from "react"

function Form1(){
    return (
        <form>
            <label htmlFor="fullname">Enter your Full Name:</label>
            <input type="text" id="fullname"/>
            <br/>
            <label htmlFor="email">Enter your email address:</label>
            <input type="text" id="email" name="email"/>

            <p>What topics are you interested in?</p>
            <label><input type="checkbox" name="topics" value="html"/>HTML</label>
            <label><input type="checkbox" name="topics" value="css"/>CSS</label>
            <label><input type="checkbox" name="topics" value="javascript"/>Javascript</label>

            <p>How often do you code?</p>
            <label><input type="radio" name="frequency" value="daily"/>Daily</label>
            <label><input type="radio" name="frequency" value="weekly"/>Weekly</label>
            <label><input type="radio" name="frequency" value="monthly"/>Monthly</label>
            <br/>
            <br/>
            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" row="4" cols="40"></textarea>
            <br/>
            <br/>
            <label htmlFor="language">Preferred language:</label>
            <select id="language" name="language">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">Javascript</option>
            </select>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form1;