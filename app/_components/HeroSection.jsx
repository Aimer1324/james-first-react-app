import './HeroSection.css';

export function HeroSection() {
  return (
    <div id="hero-section" style={{ height: '100vh' }}>
      <div id="hero-box" style={{ height: '15rem' }}>
        <div id="title" style={{ height: '4rem' }}>
          <h2 style={{ fontSize: '2rem' }}>James Hong Phan - Personal Website</h2>
        </div>
        <div id="description" style={{ height: '8rem' }}>
          <div>Second Year Student at the University of Irvine, California.</div>
          <div>Currently pursuing a major in Computer Science</div>
          <div>Expected Graduation - 2028</div>
        </div>
      </div>
    </div>
  );
}
