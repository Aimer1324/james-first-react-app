import Image from 'next/image';

export function AboutMe() {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '3.5rem',
          fontWeight: '600',
          color: '#333333',
          letterSpacing: '0.05em',
          margin: '0',
          textTransform: 'uppercase',
        }}
      >
        About Me
      </h2>

      <div
        style={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          gap: '2rem',
          marginTop: '2rem',
          marginBottom: '10rem',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(6px)',
            borderRadius: '1rem',
            boxShadow: '4px 4px 4px #a7c3e8',
            minWidth: '250px',
          }}
        >
          <Image src="/tennisabout.jpg" alt="About me" width={250} height={250} />
        </div>
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(6px)',
            borderRadius: '1rem',
            boxShadow: '4px 4px 4px #a7c3e8',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '1rem',
            height: '250px',
          }}
        >
          <h2 style={{ fontSize: '2rem', margin: '0' }}>Who am I?</h2>

          <p>
            Hello, my name is James! I am a computer science major at UCI. Some of my hobbies include playing tennis and
            badminton, as well as practicing piano and doing some archery here and there.
          </p>
        </div>
      </div>
    </div>
  );
}
