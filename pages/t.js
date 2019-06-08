import Link from "next/link";
import React, { Component } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import "../t.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import anime from "animejs";

class T extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.animate();
  }
  animate = () => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: function(el, i) {
          return 70 * (i + 1);
        }
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: function(el, i, l) {
          return 80 * (l - i);
        }
      })
      .add({
        targets: ".ml1",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  };

  render() {
    return (
      <div className="article-layout">
        <Head title="Home" />
        <Nav />
        <header className="line has-background-primary" />

        <section className="section">
          <div className="container container-flex">
            <h1 className="ml1">
              <span className="text-wrapper">
                <span className="line line1" />
                <span className="letters">
                  <span className="letter">J</span>
                  <span className="letter">a</span>
                  <span className="letter">v</span>
                  <span className="letter">a</span>
                  <span className="letter">S</span>
                  <span className="letter">c</span>
                  <span className="letter">.</span>
                  <span className="letter">r</span>
                  <span className="letter">i</span>
                  <span className="letter">p</span>
                  <span className="letter">/t/</span>{" "}
                  <span className="letter">
                    <FontAwesomeIcon size="1x" icon={faJs} />
                  </span>
                </span>
                <span className="line line2" />
              </span>
            </h1>
          </div>
        </section>
        <footer className="line has-background-primary" />
      </div>
    );
  }
}

export default T;
