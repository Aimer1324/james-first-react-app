import './HeroSection.css';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div id="hero-section">
      <div id="hero-box">
        <h2>James Hong Phan - Personal Website</h2>
        <div id="description">
          <p>
            Second Year Student at the University of Irvine, California. Currently pursuing a major in Computer Science.
            Expected Graduation is June 2028. I am currently completing my second year of university, with hopes of
            gaining some experience in the field of computer science, with a specialization in cybersecurity and
            networking. This website is a personal project that I began in the Summer of 2025, and is something that I
            will keep expanding and improving upon as I progress further and further into my career. It is a project
            designed with React, JavaScript, and HTML.
          </p>
          <Image src="/ucilogo1.jpg" alt="UCI Logo" width={250} height={250} />
        </div>
      </div>
    </div>
  );
}
