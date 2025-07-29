import Image from 'next/image';

export function AboutMe() {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h2
          style={{
            fontSize: '3.5rem',
            fontWeight: '600',
            color: '#333333',
            letterSpacing: '0.05em',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            paddingBottom: '0.5rem',
          }}
        >
          About Me
        </h2>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          gap: '4.5rem',
          height: '70vh',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            border: '3px solid black',
            overflow: 'hidden',
            background: 'rgba(62, 4, 79, 0.2)',
            backdropFilter: 'blur(2px)',
            borderRadius: '1rem',
          }}
        >
          <Image src="/tennisabout.jpg" alt="About me" width={250} height={250} />
        </div>
        <div
          style={{
            border: '3px solid black',
            borderRadius: '1rem',
            background: 'rgba(155, 21, 196, 0.2)',
            backdropFilter: 'blur(2px)',
            maxWidth: '20rem',
            height: '20rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 14px',
          }}
        >
          <div
            style={{
              padding: '0 4px',
            }}
          >
            <h2 style={{ fontSize: '2rem' }}>Who am I?</h2>
          </div>
          <div
            style={{
              padding: '0 4px',
            }}
          >
            <p>
              Hello, my name is James! I am a computer science major at UCI. Some of my hobbies include playing tennis
              and badminton, as well as practicing piano and doing some archery here and there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
