import Image from 'next/image';

export function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#a7c3e8',
        height: '15rem',
        position: 'absolute',
        width: '100%',
        bottom: '0',
        left: '0',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '16rem',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ fontSize: '3rem', margin: '0' }}>Footer</h2>
          <p>This is gonna be the footer</p>
          <p>How do I spread it to the whole width of the page?</p>
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
    </div>
  );
}
