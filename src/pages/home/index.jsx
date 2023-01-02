import Layout from "../../common/components/Layout";
import "../home/styles/styles.css";
import { Fragment } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { PRODUCTS_PAGE_PATH } from "../router";
import queryString from "query-string";

const HomePage = () => {
  const getProductsUrlWithSearch = (category) => {
    return queryString.stringifyUrl({
      url: PRODUCTS_PAGE_PATH,
      query: { category },
    });
  };

  return (
    <Fragment>
      <Layout>
        <div className="title">
          <Link to="/">
            <img src={Logo} alt="imagen del logo" />
          </Link>
        </div>
        <h2>Creamos el espacio de Tus Sueños</h2>

        <div className="imagenes">
          <div className="techo">
            <p>Diseños de Techos en Yeso</p>
            <Link to={getProductsUrlWithSearch("techo")}>
              <img
                src={process.env.PUBLIC_URL + "/images/products/techo-1.png"}
                alt="imagen de techo"
              />
            </Link>
          </div>

          <div className="pared">
            <p>Diseños de Paredes en 3D</p>
            <Link to={getProductsUrlWithSearch("pared")}>
              <img
                src={process.env.PUBLIC_URL + "/images/products/pared-1.png"}
                alt="imagen de pared"
              />
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default HomePage;
