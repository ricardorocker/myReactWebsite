import styles from "./Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>Ricardo S. Rocker</div>
      <div className={styles.sub_title}>FRONT-END DEVELOPER</div>
      <div className={styles.description}>
        <p>
          Desde jan/21 atuo como desenvolvedor front-end remoto, criando,
          otimizando e resolvendo bugs, utilizando Angular, Bootstrap, Dbeaver e
          Azure DevOps, participando de reuniões diárias e semanais via
          Microsoft Teams.
        </p>
        <p>
          Até 2020 atuava na área de controladoria e planejamento estratégico,
          analisando dados contábeis/financeiros e criando
          relatórios/apresentações para a tomada de decisão da diretoria e
          conselhos.
        </p>
      </div>
      <div className={styles.logos}>
        <a href="https://github.com/ricardorocker" target="blanck">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5583991222886&amp;text=Ol%C3%A1%2C%20vim%20pelo%20ricardorocker.com"
          target="blanck">
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/ricardo-s-rocker/" target="blanck">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Home;
