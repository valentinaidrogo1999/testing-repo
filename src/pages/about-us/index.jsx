import Layout from "../../common/components/Layout";
import Logo from "../../../src/assets/images/logo.svg";
import "../about-us/styles.css";

const AboutUsPage = () => {
  return (
    <Layout>
      <div className="title">
        <img src={Logo} alt="imagen del logo" />
      </div>

      <div className="parrafo">
        <p>
          DECORACIONES SIGLO 21, es un Negocio que inspira aquellas personas que
          son amantes de los diseños a Base de yeso,Tenemos una amplia variedad
          de productos con una excelente calidad y lo mejor ¡Son realizados 100%
          con Yeso!, para darle un toque fantastico a tu hogar o incluso para tu
          Negocio. No dudes en Escribirnos y cotizar con nosotros. <br />
          ¡COTIZA AHORA!
        </p>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
