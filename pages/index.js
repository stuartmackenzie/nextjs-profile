import {
  getSettings,
  getHero,
  getAbout,
  getServices,
  getProjects,
  getVideos
} from "../lib/cms";

import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Videos from "../components/Videos/Videos";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home({
  settings,
  hero,
  about,
  services,
  projects,
  videos
}) {
  return (
    <Layout settings={settings}>
      <Hero item={hero} />
      <About item={about} />
      <Services items={services} />
      <Projects items={projects} />
      <Videos items={videos} />
      <Contact settings={settings} />
      <Footer settings={settings} />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await getSettings();
  const hero = await getHero();
  const about = await getAbout();
  const services = await getServices();
  const projects = await getProjects();
  const videos = await getVideos();

  return {
    props: {
      settings,
      hero,
      about,
      services,
      projects,
      videos
    }
  };
}
