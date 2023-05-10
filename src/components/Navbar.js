import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <ul className='nav-menu'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/post'>Post</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
