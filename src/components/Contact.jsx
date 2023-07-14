import React from 'react';
import line from '../assets/Line.svg';

function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#00242C] text-[#D9D9D9] px-5 py-10 md:px-20 md:pb-40 border-t"
    >
      <div className="flex justify-between">
        <p className="py-4 flex items-center gap-2 text-[#E5FBFF]">
          <img src={line} alt="" /> Contact me
        </p>
        <h1
          className="text-4xl md:text-8xl font-normal leading-none text-transparent bg-clip-text"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #004757 0%, rgba(0, 36, 44, 0.00) 100%)',
          }}
        >
          Contact Me
        </h1>
      </div>
      <h1 className="text-6xl mb-5">Get In Touch</h1>
      <p
        style={{ fontFamily: 'Manrope, sans-serif' }}
        className="text-2xl mb-5"
      >
        Feel free to reach out to me by clicking the button below, and let's
        connect!
      </p>
      <a
        href="mailto:dosuroseline@gmail.com"
        class="border-b hover:border hover:p-2 hover:font-medium"
      >
        Say Hello
      </a>
    </div>
  );
}

export default Contact;
