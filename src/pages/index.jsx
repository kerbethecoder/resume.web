import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  skills,
  education,
  reference,
  certifications,
  experience,
} from "../data/constants"

const index = () => {
  const EMAIL_REGEX = /^\S+@\S+\.\S+$/

  return (
    <Layout>
      <Seo />
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:px-72">
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
            {Object.keys(skills).map((category, index) => (
              <div key={index}>
                <p className="font-bold">{category}</p>
                <p className="text-dimBlack mb-1">
                  {skills[category].join(", ")}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-2 text-white">hehe</div>

          <div id="education">
            <h2 className="text-lg font-bold text-blue">EDUCATION</h2>
            {Object.keys(education).map((educ, index) => (
              <div key={index}>
                <p className="font-bold">{education[educ].title}</p>
                <p className="text-dimBlack">{education[educ].school}</p>
                <p
                  className="mb-1"
                  dangerouslySetInnerHTML={{ __html: education[educ].period }}
                ></p>
              </div>
            ))}
          </div>

          <div className="col-span-2 text-white">hehe</div>

          <div id="reference">
            <h2 className="text-lg font-bold text-blue">REFERENCE</h2>
            {Object.keys(reference).map((ref, index) => (
              <div key={index}>
                <p className="font-bold">{reference[ref].name}</p>
                <p className="text-dimBlack">
                  {reference[ref].position}
                  {reference[ref].link ? <span>, </span> : null}
                  {reference[ref].link ? (
                    <a
                      href={reference[ref].link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue"
                    >
                      {reference[ref].link.title}
                    </a>
                  ) : null}
                </p>
                <p className="mb-1">
                  {EMAIL_REGEX.test(reference[ref].contact) ? (
                    <a
                      href={`mailto:${reference[ref].contact}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue"
                    >
                      {reference[ref].contact}
                    </a>
                  ) : (
                    reference[ref].contact
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-2 text-white">hehe</div>

          <div id="certications">
            <h2 className="text-lg font-bold text-blue">CERTIFICATIONS</h2>
            {Object.keys(certifications).map((certs, index) => (
              <div key={index}>
                <p className="font-bold">{certifications[certs].title}</p>
                <a
                  href={certifications[certs].issuer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-blue"
                >
                  {certifications[certs].issuer.name}
                </a>
              </div>
            ))}
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
            {Object.keys(experience).map((exp, index) => (
              <div key={index}>
                <p className="font-bold">
                  {experience[exp].title}{" "}
                  <em
                    className="text-xs font-normal"
                    dangerouslySetInnerHTML={{
                      __html: experience[exp].duration,
                    }}
                  ></em>
                </p>
                <p>{experience[exp].work}</p>
                <ul className="mb-2">
                  {experience[exp].gains.map((gain, gainIndex) => (
                    <li key={gainIndex}>{gain}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
