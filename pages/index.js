import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import "../core.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3
} from "@fortawesome/free-brands-svg-icons";

export default () => (
  <div className="article-layout">
    <Head title="Home" />
    <Nav />

    <header className="line has-background-primary" />

    <section className="profile section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-fifths">
            <h1 className="title is-size-1">Hi, I'm Jason Cook</h1>
            <p className="subtitle">I'm an aspirant web developer</p>
          </div>
          <div className="column is-2">
            <figure className="image image is-128x128">
              <img
                className="is-rounded"
                src="https://avatars0.githubusercontent.com/u/414285?s=300&v=4"
              />
            </figure>
          </div>
          <div className="column has-text-grey-light has-text-right-in-desktop">
            <p className="has-text-weight-light">Cape Cod, Massachusetts</p>
            <p className="has-text-weight-light">+1 (774) 810-6361</p>
            <p className="has-text-weight-light">the.root.user@gmail.com</p>

            <div className="social-icon">
              <a
                href="https://fb.me/thejasoncook"
                className="facebook"
                title="Facebook"
              >
                /thejasoncook{" "}
                <svg viewBox="0 0 512 512" height="2rem" width="2rem">
                  <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
                </svg>
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://twitter.com/THErootUSER"
                className="twitter"
                title="Twitter"
              >
                @THErootUSER{" "}
                <svg viewBox="0 0 512 512" height="2rem" width="2rem">
                  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" />
                </svg>
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jase-codes/"
                className="linkedin"
                title="Linkedin"
              >
                /in/jase-codes{" "}
                <svg viewBox="0 0 512 512" height="2rem" width="2rem">
                  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                </svg>
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/sysRoot"
                className="github"
                title="Github"
              >
                /sysRoot{" "}
                <svg viewBox="0 0 512 512" height="2rem" width="2rem">
                  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="hr" />

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="summary">
              <div className="title is-size-5 has-text-primary has-text-weight-bold">
                SUMMARY
              </div>
              <div className="wrapper">
                I am a full stack web development student at Lambda school,
                where I have learned HTML5, CSS (As well as LESS and
                self-learning SASS), JavaScript and the modular React Library.
                <br /> This site is written in React using Next.JS, a dynamic
                server-side rendered framework for React.
                <br /> Having to master React is one of the toughest things I've
                ever done, and I'm proud to say I am getting the hang of it.
                <br /> We will also be learning Python and some C, as well as
                some backend technologies.
              </div>
            </div>

            <div className="experience">
              <div className="title is-size-5 has-text-primary has-text-weight-bold">
                EXPERIENCE
              </div>

              <div className="item">
                <div className="is-size-5">
                  <b>Lambda School,</b>{" "}
                  <span className="has-text-weight-semi-bold">
                    Student — <i>Full Stack Web Developer</i>
                  </span>
                </div>
                <div className="is-size-7">SEPT 2018 - PRESENT</div>
                <div>
                  <ul style={{ listStyle: "disc", marginLeft: "1em" }}>
                    <li>Participate in modular code learning exercises</li>
                    <li>Learn many different methods of learning</li>
                    <li>Complete weekly Sprints</li>
                    <li>
                      Actively use learned technologies to expand and expound
                      with each subsequent lesson
                    </li>
                    <li>Learn to work in teams</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="education">
              <div className="title is-size-5 has-text-primary has-text-weight-bold">
                EDUCATION
              </div>
              <div className="item">
                <div className="is-size-5">
                  <b>CCC College Adult Education</b>,{" "}
                  <span className="has-text-weight-semi-bold">
                    General Study — <i>HiSET Diploma</i>
                  </span>
                </div>
                <div className="is-size-7">2017</div>
                <div>
                  HiSET Diploma from Cape Cod Community College, for completing
                  a high school equivalency program
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="projects">
            <div className="atom-spinner">
                <div className="spinner-inner">
                  <div className="spinner-line" />
                  <div className="spinner-line" />
                  <div className="spinner-line" />
                  <div className="spinner-line" />
                  <div className="spinner-line" />
                  <div className="spinner-line" />
                  <div className="spinner-circle">&#9679;</div>
                </div>
              </div>
              
              {/* <div className="title is-size-5 has-text-primary has-text-weight-bold">PROJECTS</div>

                    <div className="item">
                        <div className="is-size-5"><b>Resume/Portfolio</b> — <i>Presentational</i></div>
                        <div className="is-size-7">React, Bulma, Next.js, FontAwesome</div>
                    </div> */}
            </div>

            <div className="skills">
              <div className="title is-size-5 has-text-primary has-text-weight-bold">
                SKILLS
              </div>
              <div className="wrapper">
                <div className="item">
                  <div>
                    <FontAwesomeIcon size="lg" icon={faHtml5} /> HTML5
                  </div>
                  <progress
                    className="progress is-primary is-small"
                    value="90"
                    max="100"
                  >
                    90%
                  </progress>
                </div>

                <div className="item">
                  <div>
                    <FontAwesomeIcon size="lg" icon={faCss3} /> CSS3
                  </div>
                  <progress
                    className="progress is-primary is-small"
                    value="45"
                    max="100"
                  >
                    45%
                  </progress>
                </div>

                <div className="item">
                  <div>
                    <FontAwesomeIcon size="lg" icon={faJs} /> JavaScript
                  </div>
                  <progress
                    className="progress is-primary is-small"
                    value="65"
                    max="100"
                  >
                    65%
                  </progress>
                </div>

                <div className="item">
                  <div>
                    <FontAwesomeIcon size="lg" icon={faReact} /> React
                  </div>
                  <progress
                    className="progress is-primary is-small"
                    value="50"
                    max="100"
                  >
                    50%
                  </progress>
                </div>
              </div>
            </div>
            <div className="languages">
              <div className="title is-size-5 has-text-primary has-text-weight-bold">
                LANGUAGES
              </div>
              <div className="wrapper">English, JavaScript</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="content has-text-centered">
        Copyright © 2019 by Jason Cook
        <div>
          Icons made by{" "}
          <a
            href="https://www.freepik.com/?__hstc=57440181.c7bb5a5f6a0d6815c3f71e4dfeb314cd.1559845218330.1559845218330.1559847523178.2&__hssc=57440181.2.1559847523178&__hsfp=165344926"
            title="Freepik"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>{" "}
          and <a href="https://fontawesome.com">FontAwesome</a>
        </div>
      </div>
    </footer>

    <footer className="line has-background-primary" />
  </div>
);
