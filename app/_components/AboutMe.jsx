import Image from 'next/image';
import './AboutMe.css';

export function AboutMe() {
  return (
    <div id="about-me">
      <h2>About Me</h2>

      <div id="who-am-i">
        <div id="image">
          <Image src="/tennisabout.jpg" alt="About me" width={250} height={250} />
        </div>
        <div id="text">
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
