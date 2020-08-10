import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
import Hero from '../components/hero'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import FaixaParcerias from '../components/faixa_parcerias'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section6 from '../components/section6'
import Section7 from '../components/section7'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
    <div>
      <SEO title="AYO" />
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <FaixaParcerias/>
      <Section3/>
      <Section4/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
)

export default IndexPage

/*
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
*/