import Image from 'next/image';

export function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#a7c3e8',
        height: '15rem',
        position: 'relative',
        width: '100%',
        bottom: '0',
        left: '0',
        zIndex: '1000',
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
        gap: '9rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '16rem',
          justifyContent: 'center',
          paddingLeft: '1rem',
        }}
      >
        <div>
          <h2 style={{ fontSize: '3rem' }}>Footer</h2>
        </div>
        <div>
          <p>This is gonna be the footer</p>
          <p>How do I spread it to the whole width of the page?</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Image src="/mylogo.jpg" alt="My Logo" width={170} height={170} />
      </div>
    </div>
  );
}
