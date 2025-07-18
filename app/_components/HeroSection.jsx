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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '15rem',
          alignItems: 'center',
          border: '10px solid black',
          padding: '0 5rem',
          margin: '0 6rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', height: '4rem', marginTop: '10px' }}>
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
          <div>Expected Graduation: 2028</div>
        </div>
      </div>
    </div>
  );
}
