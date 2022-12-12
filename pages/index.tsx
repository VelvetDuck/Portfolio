import styles from '../styles/Home.module.scss';
import AboutComponent from './component/AboutComponent';
import CreateProjectsComponent from './component/CreateProjectsComponent';
import FooterComponent from './component/FooterComponent';

export default function Home() {
  return (
    <>
      <AboutComponent></AboutComponent>
      <CreateProjectsComponent></CreateProjectsComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}
