import Artist from "@/components/artist"
import Drone from "@/components/drone"
import Flyout from "@/components/flyout"
import ShowcaseBlog from "@/components/ShowcaseBlog"
import Stats from "@/components/stats"
import Team from "@/components/team"
import AboutMe from "../components/AboutMe"
import Contactus from "../components/Contactus"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"

export default function Home() {
  return (
    <Layout>
      <Services />
      <AboutMe />
      {/* <Portfolio /> */}
      <Stats />
      <Drone />
      <Flyout />
      <Artist />
      {/* <ShowcaseBlog /> */}
      <Contactus />
      <Team />
    </Layout>
  )
}
