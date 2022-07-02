const Link =  window.ReactRouterDOM.Link;

export default function Nav() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/vote">Vote</Link>
            </nav>
        </>
    )
}