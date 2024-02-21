import { Link } from 'react-router-dom'
export default function Home() {
    return(
        <div className="container">
            <h1>Home</h1>
            <Link to="/dashboard/login">Login</Link>
            <br />
            <Link to="/dashboard/signup">Signup</Link>
            
        </div>
    )
}