import React, { Fragment } from 'react'
import './stickySection.scss'
const StickySection = () => {
  return (
   <Fragment>
    <header class="et-header">
  <div class="et-header__left">
    <a href="" class="et-header__logo">Ettrics</a>
  </div>
</header>

<section class="et-hero-tabs">
  <h1>STICKY SLIDER NAV V2</h1>
  <h3>Sliding content with sticky tab nav</h3>
  <div class="et-hero-tabs-container">
    <a class="et-hero-tab" href="#tab-es6">ES6</a>
    <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
    <a class="et-hero-tab" href="#tab-react">React</a>
    <a class="et-hero-tab" href="#tab-angular">Angular</a>
    <a class="et-hero-tab" href="#tab-other">Other</a>
    <span class="et-hero-tab-slider"></span>
  </div>
</section>

<main class="et-main">
  <section class="et-slide" id="tab-es6">
    <h1>ES6</h1>
    <h3>something about es6</h3>
  </section>
  <section class="et-slide" id="tab-flexbox">
    <h1>Flexbox</h1>
    <h3>something about flexbox</h3>
  </section>
  <section class="et-slide" id="tab-react">
    <h1>React</h1>
    <h3>something about react</h3>
  </section>
  <section class="et-slide" id="tab-angular">
    <h1>Angular</h1>
    <h3>something about angular</h3>
  </section>
  <section class="et-slide" id="tab-other">
    <h1>Other</h1>
    <h3>something about other</h3>
  </section>
</main>
   </Fragment>
  )
}

export default StickySection