export function HeroSection() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '50rem',
        backgroundImage: 'url("/tester.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          display: 'absolute',
          width: '100vw',
          left: '-2rem',
          height: '50rem',
          backgroundImage: 'url("/tester.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '15rem',
          alignItems: 'center',
          padding: '1 2rem',
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(6px)',
          borderRadius: '1rem',
          boxShadow: '4px 4px 4px #a7c3e8',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '4rem',
            marginTop: '10px',
          }}
        >
          <h2>James Hong Phan - Personal Website</h2>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8rem',
          }}
        >
          <div>Second Year Student at the University of Irvine, California.</div>
          <div>Currently pursuing a major in Computer Science</div>
          <div>Expected Graduation - 2028</div>
        </div>
      </div>
    </div>
  );
}
