import styles from '../styles/Home.module.scss';
import AboutComponent from './component/AboutComponent';
import CreateProjectsComponent from './component/CreateProjectsComponent';
import FooterComponent from './component/FooterComponent';
import ContactComponent from './component/ContactComponent';

export default function Home() {
  return (
    <>
      <AboutComponent ></AboutComponent>
      <CreateProjectsComponent></CreateProjectsComponent>
      <ContactComponent></ContactComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}
