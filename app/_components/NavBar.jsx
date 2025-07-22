import Link from 'next/link';

export function NavBar() {
  return (
    <div
      style={{
        backgroundColor: 'lightgreen',
        padding: '0 6rem',
        height: '5rem',
        position: 'absolute',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div>your friendly neighbourhood software geek at your service</div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '15rem',
            background: 'red',
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/new-page">New Page</Link>
        </div>
      </div>
    </div>
  );
}
