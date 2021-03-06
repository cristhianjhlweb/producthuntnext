import Head from "next/head";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import { Fragment } from "react";

import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

const CrearCuenta = () => {
  return (
    <div>
      <Layout>
        <Fragment>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Crear Cuenta
          </h1>
          <Formulario>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
              />
            </Campo>
            <Campo>
              <label htmlFor="email">Correo Electronico</label>
              <input
                type="text"
                id="email"
                placeholder="Tu email"
                name="email"
              />
            </Campo>
            <Campo>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Contraseña"
                name="password"
              />
            </Campo>
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </Fragment>
      </Layout>
    </div>
  );
};

export default CrearCuenta;
