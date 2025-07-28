import Link from 'next/link';

export function NavBar() {
  return (
    <div
      style={{
        backgroundColor: '#a7c3e8',
        padding: '0 3rem',
        height: '5rem',
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        zIndex: '1000',
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
            justifyContent: 'end',
            gap: '0.5rem',
            width: '15rem',
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/new-page">New Page</Link>
        </div>
      </div>
    </div>
  );
}
