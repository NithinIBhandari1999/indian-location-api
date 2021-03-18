import Link from "next/link";

const NavBar = () => {
    return (
        <div style={{ backgroundColor: '#000000' }}>
            <div className="container">
                <nav className="navbar navbar-expand-lg px-0">
                    <Link href="/" >
                        <a className="navbar-brand text-white font-weight-bold" >Indian Location API</a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;