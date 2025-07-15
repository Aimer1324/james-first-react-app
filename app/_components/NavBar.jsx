import Link from 'next/link';


export function NavBar() {
    return (
        <div>
            My Nav Bar
            <Link href="/">
                Home
            </Link>
            <Link href="/new-page">
                New Page
            </Link>
        </div>
    )
}