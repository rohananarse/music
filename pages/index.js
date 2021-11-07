import AboutMe from "../components/AboutMe"
import Contactus from "../components/Contactus.js"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"

export default function Home() {
  return (
    <Layout>
      <Services />
      <AboutMe />
      <Portfolio />
      <Contactus />
    </Layout>
  )
}
