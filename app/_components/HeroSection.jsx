import Image from 'next/image';

export function HeroSection() {
  return (
    <div
      style={{
        // width: '100vw',
        height: '100vh',
        // backgroundImage: 'url("/tester.jpg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: '-2rem',
        // width: '100vw',
        // zIndex: '-1',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '15rem',
          alignItems: 'center',
          padding: '1rem 2rem',
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
