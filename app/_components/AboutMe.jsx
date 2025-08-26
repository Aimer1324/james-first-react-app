import Image from 'next/image';
import './AboutMe.css';

export function AboutMe() {
  return (
    <div id="about-me">
      <h1>About Me</h1>

      <div id="who-am-i">
        <div id="image">
          <Image src="/tennisabout.jpg" alt="About me" width={250} height={250} />
        </div>
        <div id="text">
          <h2>Who am I?</h2>

          <p>
            Hello, my name is James! I am a computer science major at UCI. Some of my hobbies include playing tennis and
            badminton, as well as practicing piano and doing some archery here and there.
          </p>
        </div>
      </div>
    </div>
  );
}
