import React from "react"

import Layout from "../components/Layout"

const index = () => {
  return (
    <Layout>
      <div className="cGrid px-72 grid grid-cols-2">
        <h1 className="red col-span-2 text-4xl text-blue font-bold">
          Kerby Norwelle A. Cantos
        </h1>
        <p className="red text text-xl col-span-2">
          Computer Engineer | Web Developer
        </p>

        <div className="col-span-2 text-white">hehe</div>
        <div className="col-span-2 text-white">hehe</div>

        <div id="left-column">
          <div id="contacts">
            <div className="flex items-center gap-2 mb-1">
              <ion-icon name="call-outline"></ion-icon>
              <p className="font-bold text-sm">0999 367 4781</p>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <ion-icon name="mail-outline"></ion-icon>
              <a
                href="mailto:krbycnts@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue font-bold text-sm"
              >
                krby.cnts@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <ion-icon name="location-outline"></ion-icon>
              <p className="font-bold text-sm">Oriental Mindoro, Philippines</p>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <ion-icon name="globe-outline"></ion-icon>
              <a
                href="https://kerbethecoder.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue font-bold text-sm"
              >
                kerbethecoder.netlify.app
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ion-icon name="logo-linkedin"></ion-icon>
              <a
                href="https://www.linkedin.com/in/krbycnts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue font-bold text-sm"
              >
                linkedin.com/in/krbycnts/
              </a>
            </div>
          </div>

          <div className="col-span-2 text-white">hehe</div>
          <div className="col-span-2 text-white">hehe</div>

          <div id="skills">
            <h2 className="text-lg font-bold text-blue">SKILLS</h2>
            <p className="font-bold">Programming Languages</p>
            <p className="text-dimBlack mb-1">HTML, JavaScript, CSS</p>
            <p className="font-bold">Frameworks & Libraries</p>
            <p className="text-dimBlack mb-1">
              VueJs, React, Gatsby, Tailwind CSS, Bootstrap, NestJs
            </p>
            <p className="font-bold">Tools & Platforms</p>
            <p className="text-dimBlack">Git, GitHub, Figma, Netlify, Vercel</p>
          </div>
          <div className="col-span-2 text-white">hehe</div>
          <div id="education">
            <h2 className="text-lg font-bold text-blue">EDUCATION</h2>
            <p className="font-bold">
              College, Bachelor of Science in Computer Engineering
            </p>
            <p className="text-dimBlack">Divine Word College of Calapan</p>
            <p className="mb-1">2019 &#8212; 2023</p>
            <p className="font-bold">Senior High School, STEM</p>
            <p className="text-dimBlack">Holy Infant Academy</p>
            <p className="mb-1">2017 &#8212; 2019</p>
            <p className="font-bold">Junior High School, Science Class</p>
            <p className="text-dimBlack">Holy Infant Academy</p>
            <p className="mb-1">2013 &#8212; 2017</p>
            <p className="font-bold">Elementary</p>
            <p className="text-dimBlack">Holy Infant Academy</p>
            <p>2007 &#8212; 2013</p>
          </div>

          <div className="col-span-2 text-white">hehe</div>

          <div id="reference">
            <h2 className="text-lg font-bold text-blue">REFERENCE</h2>
            <p className="font-bold">Engr. Reynel I. Albo, MIT, PCpE</p>
            <p className="text-dimBlack">Professor, DWCC</p>
            <p className="mb-1">0930 521 4249</p>
            <p className="font-bold">Kim Lian Lopez</p>
            <p className="text-dimBlack">
              Senior Web Developer,{" "}
              <a
                href="https://bookbrush.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue"
              >
                BookBrush
              </a>
            </p>
            <p className="mb-1">0995 536 8313</p>
            <p className="font-bold">Engr. Jerwin R. Ordillano</p>
            <p className="text-dimBlack">Associate Frontend Developer</p>
            <a
              href="mailto:jawe.1276@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue"
            >
              jawe.1276@gmail.com
            </a>
          </div>

          <div className="col-span-2 text-white">hehe</div>

          <div id="certifications">
            <h2 className="text-lg font-bold text-blue">CERTIFICATIONS</h2>
            <p className="font-bold">Responsive Web Design</p>
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue"
            >
              FreeCodeCamp.org
            </a>
            <p className="font-bold mt-1">
              JavaScript Algorithms & Data Structures
            </p>
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue"
            >
              FreeCodeCamp.org
            </a>
          </div>
        </div>

        <div id="right-column">
          <div className="col-span-2 text-white">hehe</div>
          <div className="col-span-2 text-white">hehe</div>
          <div className="col-span-2 text-white">hehe</div>

          <div id="profile">
            <h2 className="text-lg font-bold text-blue">PROFILE</h2>
            <p>
              Computer Engineer working in both front-end and back-end
              development, creating user-friendly web apps for enhanced
              experiences. Ready to thrive in an innovative tech environment.
            </p>
          </div>

          <div className="col-span-2 text-white">hehe</div>

          <div id="experience">
            <h2 className="text-lg font-bold text-blue">EXPERIENCE</h2>
            <p className="font-bold">
              Digital Payment System{" "}
              <em className="text-xs font-normal">
                August 2022 &#8212; April 2023
              </em>
            </p>
            <p>Thesis Project</p>
            <ul className="mb-2">
              <li>
                Collaborated with a team of developers to design and implement a
                digital payment system for our school, marking my first foray
                into full-stack web development.
              </li>
              <li>
                Overcame numerous technical challenges, demonstrating
                problem-solving and adaptability.
              </li>
              <li>
                Gained hands-on experience in both front-end and back-end web
                development.
              </li>
              <li>
                Worked effectively with team members to ensure project success.
              </li>
            </ul>
            <p className="font-bold">
              On-the-Job Training{" "}
              <em className="text-xs font-normal">
                June 2022 &#8212; August 2022
              </em>
            </p>
            <p>Under Senior Web Developer of BookBrush</p>
            <ul className="mb-2">
              <li>
                Played a pivotal role in front-end web development, working on a
                web component to be implemented.
              </li>
              <li>
                Participated in code modification and conversion of legacy code,
                gaining a deep understanding of developer challenges and best
                practices.
              </li>
            </ul>
            <p className="font-bold">
              Videographer & Video Editor{" "}
              <em className="text-xs font-normal">
                August 2021 &#8212; October 2021
              </em>
            </p>
            <p>Digital Campaign Team</p>
            <ul className="mb-2">
              <li>
                Successfully produced and edited videos to fulfill campaign
                objectives for a local politician, showcasing my creativity, and
                attention to detail.
              </li>
              <li>
                Developed strong collaborative skills within a corporate-like
                environment, fostering effective teamwork and adaptability.
              </li>
            </ul>
            <p className="font-bold">
              Basic Retail Inventory System{" "}
              <em className="text-xs font-normal">2021</em>
            </p>
            <p>School Project</p>
            <ul>
              <li>
                Designed and developed a retail inventory system as a school
                project.
              </li>
              <li>
                Applied strong logic and coding skills to create a functional
                system, demonstrating proficiency in programming.
              </li>
              <li>
                Utilized SQL to manage and retrieve data, expanding database
                expertise.
              </li>
              <li>
                Established the foundation of my programming / coding journey.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
