import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">

        <img src={heroImg} alt="Profile" className="profile-img" />

        <h1>About Me</h1>
        <hr />

        <section>
          <h2>Personal Information</h2>

          <div className="info">
            <div>
              <strong>Full Name</strong>
              <p>Diana Sto.Tomas Teves</p>
            </div>

            <div>
              <strong>Course & Year</strong>
              <p>BS Information Systems - 3rd Year</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Brief Introduction</h2>

          <p>
            Good day, Sir Elmer! I am <strong>Diana S. Teves</strong>, but my
            friends usually call me <strong>Ayanad</strong>. I am 20 years old
            and I live in Cavite. I started as an ACT student and I am now
            continuing my studies in BSIS. Honestly, I did not expect that I
            would have the opportunity to continue my studies, but I am thankful
            that I was given this chance.
          </p>
        </section>

        <section>
          <h2>Fun Fact About Me</h2>

          <ul>
            <li>
              I enjoy spending time with my friends at coffee shops, and we also
              love cooking and eating together during our free time.
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Reflection</h2>

          <p>
            Throughout this course, I learned the importance of building a
            strong foundation before creating applications. We started by
            setting up our GitHub accounts, configuring Git, and learning basic
            Git commands such as clone, add, commit, push, branch, merge,
            rebase, and stash. At first, these commands were confusing, but
            after doing different activities and exercises, I became more
            familiar with how version control works and why it is important when
            working on projects. We also explored emerging technologies and
            discussed how modern tools continue to improve the way applications
            are developed. Now that we have started learning React, I can see
            how the concepts from our previous lessons connect to building
            modern and interactive web applications. Although there are still
            many things to learn, I believe these skills will help me become
            more prepared for future projects and for my career in the field of
            Information Systems.
          </p>
        </section>

      </div>
    </div>
  );
}

export default App;

