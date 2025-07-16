import Link from 'next/link';


export function NavBar() {
    return (
        <div style={{backgroundColor: 'lightgreen', padding: '0 10px'}}>
            My Nav Bar

            <Link href="/" style={{padding: '0 10px'}}>
                Home
            </Link>
            <Link href="/new-page" style={{padding: '0 10px'}}>
                New Page
            </Link>
        </div>
    )
}