import React, {Component} from "react"
export default class Nav extends Component{
    render() {
        return(
        <nav className="navBar">
            <ul>
                <li>Home</li>
                <li>Next Page</li>
                <li>Last Page</li>
                <li>Create New Account</li>
            </ul>
        </nav>)
    }
}