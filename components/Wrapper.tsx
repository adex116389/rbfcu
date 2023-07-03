/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Loading } from "./Loading";

interface WrapperProps {
  children?: React.ReactNode;
  loading?: boolean;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText?: string;
  title?: string;
  subTitle?: string;
  icon?: React.SVGProps<SVGSVGElement>;
  showError?: boolean;
  hideBtn?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  loading,
  onSubmit,
  buttonText,
  title,
  subTitle,
  icon,
  showError,
  hideBtn,
}) => {
  const is767 = useMediaQuery(`(max-width: 767px)`);

  return (
    <>
    <Head>
        <title>RВFСU Online</title>
        <link href="/favicon.ico" />
      </Head>
    <span>
      {/* <Loading /> */}
      <span className="ng-star-inserted">
        <div id="rb-container">
          <span>
            <div
              className="d-block main-head-hldr main-head-blue-back"
              style={{
                background: "#002d74",
                backgroundColor: "#043672",
                padding: is767 ? "1rem" : "1.5rem 1rem 1rem",
              }}
            >
              <div
                _ngcontent-aym-c225=""
                className="rb-container main-head-content"
              >
                <a
                  className="navbar-brand rbfcu-logo-cntr"
                  style={{
                    ...(is767
                      ? {
                          textAlign: "center",
                          margin: "0 auto",
                          display: "block",
                        }
                      : {}),
                  }}
                >
                  <img
                    src="/images/rbfcu-logo.svg"
                    alt="RВFСU"
                    className="rbfcu-logo animated zoomIn"
                    style={{
                      height: "2.5em",
                      fontSize: "1.25rem",
                      ...(is767
                        ? {
                            verticalAlign: "bottom",
                            height: "1.563em",
                            width: "6.438em",
                          }
                        : {}),
                    }}
                  />
                </a>
                <span>
                  <a
                    className="fr head-contact-us pointer"
                    style={{
                      backgroundImage:
                        "url(/images/white-phone-header.8a484898163483972d21.svg)",
                      backgroundPosition: "98% 44%",
                      backgroundRepeat: "no-repeat",
                      paddingRight: "1.8em",
                      marginTop: "0.8em",
                      fontSize: "1em",
                      paddingTop: "0.5em",
                      color: "#fff",
                      outline: "none",
                      ...(is767
                        ? {
                            display: `none`,
                          }
                        : {}),
                    }}
                  >
                    Contact or Find Us
                  </a>
                </span>
              </div>
            </div>
          </span>
          <div
            className="rb-container pt3 pb4 login-cntr"
            style={{
              ...(is767 ? { padding: `0 1.5rem` } : {}),
            }}
          >
            <div className="row justify-content-md-center">
              <div
                className={`${
                  title ? `w-100` : `w-60`
                } login-hldr ng-star-inserted`}
              >
                {showError ? (
                  <div className="ng-star-inserted">
                    <div className="container err-cntr des-error ng-star-inserted">
                      <img
                        src="/images/flag-red-circle.svg"
                        alt="error red flag"
                        className="dib v-base-mid pl3 pt1"
                      />
                      <p>
                        Your username and/or password do not match. Please try
                        again.
                      </p>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                ) : null}

                <div
                  className={title ? "" : "w-80 center"}
                  style={{
                    ...(title && !is767
                      ? { width: "40%", margin: "0 auto" }
                      : {}),
                  }}
                >
                  {title ? null : (
                    <div className="tc mt4">
                      <p className="f3">{title || `Access Online Banking`}</p>
                    </div>
                  )}
                  <form
                    method="POST"
                    className="pt5 login-form-hldr ng-pristine ng-invalid ng-touched"
                  >
                    {title ? (
                      <div className="tc pt3 mb2">
                        <p className="f3 fw4">{title}</p>
                        <>{icon ? icon : null}</>
                        <p className="fw4 f5 mt3">
                          {subTitle ? subTitle : null}
                        </p>
                      </div>
                    ) : null}
                    <fieldset>{children}</fieldset>
                    {hideBtn ? null : (
                      <div className="mt4 mb3">
                        {title ? (
                          <button
                            type="submit"
                            className="rb-btn rb-btn-blue items-center forgot-btn signup-forgot-btn"
                            disabled={loading}
                            onClick={onSubmit}
                            style={{
                              ...(!is767
                                ? {
                                    width: "100%",
                                    fontSize: "1.12em",
                                    display: "inline-block",
                                  }
                                : {
                                    width: "100%",
                                    height: "2.5em",
                                    margin: "0.5em 0",
                                  }),
                            }}
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            type="submit"
                            mat-button=""
                            data-qa="login-submit-button"
                            className={`mat-focus-indicator btn-block signin-btn br2 bn rb-semi-white rb-bg-btn-blue ttc mat-button mat-button-base ${
                              loading ? `mat-button-disabled` : ``
                            }`}
                            disabled={loading}
                            onClick={onSubmit}
                          >
                            <span className="mat-button-wrapper">
                              {buttonText || `Next`}
                            </span>
                            <span className="mat-ripple mat-button-ripple" />
                            <span className="mat-button-focus-overlay" />
                          </button>
                        )}
                      </div>
                    )}
                  </form>
                </div>
                {!title ? (
                  <div className="w-100 tc">
                    <button
                      mat-button=""
                      type="button"
                      className="mat-focus-indicator trouble-btn br2 bn rb-btn-close-blue pt2 pb2 ttc b mat-button mat-button-base"
                    >
                      <span className="mat-button-wrapper">
                        Having trouble signing in?
                      </span>
                      <span className="mat-ripple mat-button-ripple" />
                      <span className="mat-button-focus-overlay" />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </span>
      <span>
        <footer
          className="page-footer pl0 pr0 pb5"
          style={{
            color: "#666",
            display: "block",
            margin: "0",
            border: "0",
            font: "inherit",
            verticalAlign: "baseline",
          }}
        >
          <div
            className="footer-cntr mt5 rb-container"
            style={{ ...(is767 ? { marginTop: `2em` } : {}) }}
          >
            <div className="row">
              <div
                className="footer-cntr-space w-100"
                style={{ width: "100%", padding: "1.375em 0" }}
              >
                <ul
                  className="ma0 pl0 di f7"
                  style={{
                    listStyle: "none",
                    padding: "0",
                    border: "0",
                    font: "inherit",
                    verticalAlign: "baseline",
                    ...(is767 ? { float: "left", padding: "0 2rem" } : {}),
                  }}
                >
                  <li
                    className="dib pr5 pl0 v-base-mid"
                    style={{
                      margin: "0",
                      border: "0",
                      font: "inherit",
                      ...(is767 ? { paddingRight: `.5em` } : {}),
                    }}
                  >
                    <button
                      mat-button=""
                      className="mat-focus-indicator rb-grey-1 bg-transparent input-reset btn-as-link mat-button mat-button-base"
                      style={{
                        padding: "0",
                        fontSize: "12px",
                        fontWeight: "400",
                        boxSizing: "border-box",
                        position: "relative",
                        userSelect: "none",
                        cursor: "pointer",
                        outline: "none",
                        border: "none",
                        WebkitTapHighlightColor: "transparent",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        verticalAlign: "baseline",
                        textAlign: "center",
                        margin: "0",
                        minWidth: "64px",
                        lineHeight: "36px",
                        borderRadius: "4px",
                        overflow: "visible",
                        ...(is767
                          ? {
                              lineHeight: `1.5`,
                            }
                          : {}),
                      }}
                    >
                      <span
                        className="mat-button-wrapper"
                        style={{
                          margin: "0",
                          padding: "0",
                          border: "0",
                          font: "inherit",
                          verticalAlign: "baseline",
                        }}
                      >
                        Privacy Policy
                      </span>
                      <span
                        className="mat-ripple mat-button-ripple"
                        style={{
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "absolute",
                          pointerEvents: "none",
                          borderRadius: "inherit",
                        }}
                      />
                      <span
                        className="mat-button-focus-overlay"
                        style={{
                          opacity: "0",
                          transition:
                            "opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "absolute",
                          pointerEvents: "none",
                          borderRadius: "inherit",
                        }}
                      />
                    </button>
                  </li>
                  <li
                    className="dib pr5 v-base-mid"
                    style={{
                      margin: "0",
                      border: "0",
                      font: "inherit",
                      ...(is767 ? { paddingRight: `.5em` } : {}),
                    }}
                  >
                    <button
                      mat-button=""
                      className="mat-focus-indicator rb-grey-1 bg-transparent input-reset btn-as-link mat-button mat-button-base"
                      style={{
                        padding: "0",
                        fontSize: "12px",
                        fontWeight: "400",
                        boxSizing: "border-box",
                        position: "relative",
                        userSelect: "none",
                        cursor: "pointer",
                        outline: "none",
                        border: "none",
                        WebkitTapHighlightColor: "transparent",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        verticalAlign: "baseline",
                        textAlign: "center",
                        margin: "0",
                        minWidth: "64px",
                        lineHeight: "36px",
                        borderRadius: "4px",
                        overflow: "visible",
                        ...(is767
                          ? {
                              lineHeight: `1.5`,
                            }
                          : {}),
                      }}
                    >
                      <span
                        className="mat-button-wrapper"
                        style={{
                          margin: "0",
                          padding: "0",
                          border: "0",
                          font: "inherit",
                          verticalAlign: "baseline",
                        }}
                      >
                        User Agreement
                      </span>
                      <span
                        className="mat-ripple mat-button-ripple"
                        style={{
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "absolute",
                          pointerEvents: "none",
                          borderRadius: "inherit",
                        }}
                      />
                      <span
                        className="mat-button-focus-overlay"
                        style={{
                          opacity: "0",
                          transition:
                            "opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "absolute",
                          pointerEvents: "none",
                          borderRadius: "inherit",
                        }}
                      />
                    </button>
                  </li>
                  <li
                    className="dib pr5 v-base-mid"
                    style={{
                      margin: "0",
                      border: "0",
                      font: "inherit",
                      ...(is767 ? { paddingRight: `.5em` } : {}),
                    }}
                  >
                    <button
                      mat-button=""
                      className="mat-focus-indicator rb-grey-1 bg-transparent input-reset btn-as-link mat-button mat-button-base"
                      style={{
                        padding: "0",
                        fontSize: "12px",
                        fontWeight: "400",
                        boxSizing: "border-box",
                        position: "relative",
                        userSelect: "none",
                        cursor: "pointer",
                        outline: "none",
                        border: "none",
                        WebkitTapHighlightColor: "transparent",
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        verticalAlign: "baseline",
                        textAlign: "center",
                        margin: "0",
                        minWidth: "64px",
                        lineHeight: "36px",
                        borderRadius: "4px",
                        overflow: "visible",
                        ...(is767
                          ? {
                              lineHeight: `1.5`,
                            }
                          : {}),
                      }}
                    >
                      <span
                        className="mat-button-wrapper"
                        style={{
                          margin: "0",
                          padding: "0",
                          border: "0",
                          font: "inherit",
                          verticalAlign: "baseline",
                        }}
                      >
                        Security
                      </span>
                      <span
                        className="mat-ripple mat-button-ripple"
                        style={{
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "absolute",
                          pointerEvents: "none",
                          borderRadius: "inherit",
                        }}
                      />
                      <span
                        className="mat-button-focus-overlay"
                        style={{
                          opacity: "0",
                          transition:
                            "opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "absolute",
                          pointerEvents: "none",
                          borderRadius: "inherit",
                        }}
                      />
                    </button>
                  </li>
                  {/**/}
                  <li
                    className="dib footer-links-item rb-grey-1"
                    style={{
                      paddingRight: "0",
                      float: "right",
                      ...(is767 ? { display: `none` } : {}),
                    }}
                  >
                    <span>
                      <a
                        className="fr head-contact-us pointer"
                        style={{
                          color: "#666",
                          margin: "0",
                          backgroundImage:
                            "url(/images/white-phone-header.8a484898163483972d21.svg)",
                          backgroundPosition: "98% 44%",
                          backgroundRepeat: "no-repeat",
                          paddingRight: "1.8em",
                          // marginTop: "0.8em",
                          fontSize: "12px",
                          paddingTop: "0.5em",
                          outline: "none",
                        }}
                      >
                        Contact or Find Us
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="w-100 db border-line"
            style={{
              boxShadow: "0 0 2px 0 rgb(0 0 0 / 50%)",
              borderTop: "1px solid #dee2e6",
            }}
          />
          <div id="seg-profile" />
          <div
            className="rb-container footer-copy"
            style={{ ...(is767 ? { paddingLeft: "2rem" } : {}) }}
          >
            <div className="row">
              <p
                className="db w-100 rb-grey-1 f6"
                style={{ padding: "1.375em 0", fontSize: ".875em" }}
              >
                © RаndоIрh-Вrооks FеdеrаI Сrеdit Uniоn <span>{new Date().getFullYear()}.</span>
              </p>
              <p
                className="db w-100 footer-ada-text rb-grey-1 f6 pb2"
                style={{ ...(is767 ? { lineHeight: `20px` } : {}) }}
              >
                If you are using a screen reader and are having problems using
                this website, please call{" "}
                <a href="tel:1-800-580-3300" className="underline">
                  1-800-580-3300
                </a>{" "}
                for assistance.
              </p>
              <div
                className="copyright pt2 rb-grey-1"
                style={{ ...(is767 ? { textAlign: `left` } : {}) }}
              >
                <img
                  src="/images/NCUA-logo-gray.svg"
                  alt="FеdеrаIIу lnsurеd bу NСUА"
                  className="pr2 v-mid"
                />
                <span className="f6">FеdеrаIIу lnsurеd bу NСUА.</span>
                <span
                  className="ehl-text f6"
                  style={{
                    ...(is767 ? { display: "block", textAlign: "right" } : {}),
                  }}
                >
                  {" "}
                  ЕquаI Ноusing Lеndеr.{" "}
                  <img
                    src="/images/EHL-logo-gray.svg"
                    alt="ЕquаI Ноusing Lеndеr"
                    className="v-mid"
                  />
                </span>
              </div>
            </div>
          </div>
          {/**/}
        </footer>
      </span>
    </span>
    </>
  );
};
