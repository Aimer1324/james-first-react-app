export function AboutMe() {
  return (
    <div
      style={{
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '4.5rem',
        height: '25rem',
        alignItems: 'center',
        backgroundImage: 'url("/tester.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          border: '3px solid black',
          padding: '25px',
          background: 'rgba(62, 4, 79, 0.2)',
          backdropFilter: 'blur(2px)',
          borderRadius: '1rem',
        }}
      >
        <img src="/tennisabout.jpg" alt="About me" height={200} padding="10px" />
      </div>
      <div
        style={{
          border: '3px solid black',
          borderRadius: '1rem',
          background: 'rgba(62, 4, 79, 0.2)',
          backdropFilter: 'blur(2px)',
          maxWidth: '15rem',
          height: '20rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: '0 10px',
        }}
      >
        <div
          style={{
            border: '2px solid black',
            padding: '0 4px',
          }}
        >
          <h2>Who am I?</h2>
        </div>
        <div
          style={{
            border: '2px solid black',
            padding: '0 4px',
          }}
        >
          <p>
            Hello, my name is James! I am a computer science major at UCI. Some of my hobbies include playing tennis and
            badminton, as well as practicing piano and doing some archery here and there.
          </p>
        </div>
      </div>
    </div>
  );
}
