/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  UseFormRegister,
  FieldValues,
  UseFormResetField,
} from "react-hook-form";
import ReactInputMask from "react-input-mask";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  boxStyle?: React.CSSProperties | undefined;
  label: string;
  name: string;
  resetField: UseFormResetField<FieldValues>;
  placeholder?: string;
  error?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: any;
  mask?: string;
  curValue?: string;
}

export const Input: React.FC<InputProps> = ({
  boxStyle,
  label,
  name,
  resetField,
  placeholder,
  error,
  register = () => ({}),
  registerOptions,
  curValue,
  mask,
  ...props
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <>
      <div
        className={
          isInputFocus
            ? `mat-form-field login-form-fields my-form-field ng-tns-c69-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-star-inserted ng-touched ng-dirty mat-form-field-invalid ng-invalid mat-form-field-should-float mat-focused`
            : `mat-form-field login-form-fields my-form-field ng-tns-c69-0 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder ng-untouched ng-pristine ng-star-inserted`
        }
        style={{
          display: "block",
          lineHeight: "2.5em",
          position: "relative",
          textAlign: "left",
          ...boxStyle,
        }}
      >
        <div
          className="mat-form-field-wrapper ng-tns-c69-0"
          style={{ position: "relative" }}
        >
          <div
            className="mat-form-field-flex ng-tns-c69-0"
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            {/**/}
            {/**/}
            <div
              className="mat-form-field-infix ng-tns-c69-0"
              style={{
                display: "block",
                position: "relative",
                flex: "auto",
                minWidth: "0",
                width: "180px",
              }}
            >
              {mask ? (
                <ReactInputMask
                  mask={mask}
                  onFocus={() => setIsInputFocus(true)}
                  {...register(name, {
                    onBlur: () => setIsInputFocus(false),
                    ...registerOptions,
                  })}
                >
                  {
                    // @ts-ignore
                    () => (
                      <input
                        id={`${name}Field`}
                        name="username"
                        maxLength={20}
                        autoComplete="new-username"
                        data-qa="login-username-input"
                        className="mat-input-element mat-form-field-autofill-control form-control ml-0 w-100 login-user fs-block ng-tns-c69-0 ng-untouched ng-pristine cdk-text-field-autofill-monitored ng-invalid"
                        data-placeholder="Username"
                        aria-required="true"
                        style={{
                          font: "inherit",
                          background: "transparent",
                          color: "currentColor",
                          border: "none",
                          outline: "none",
                          padding: "0",
                          margin: "0",
                          width: "100%",
                          maxWidth: "100%",
                          verticalAlign: "bottom",
                          textAlign: "inherit",
                        }}
                        {...register(name, {
                          onBlur: () => setIsInputFocus(false),
                          ...registerOptions,
                        })}
                        {...props}
                      />
                    )
                  }
                </ReactInputMask>
              ) : (
                <input
                  id={`${name}Field`}
                  name="username"
                  maxLength={20}
                  autoComplete="new-username"
                  data-qa="login-username-input"
                  className="mat-input-element mat-form-field-autofill-control form-control ml-0 w-100 login-user fs-block ng-tns-c69-0 ng-untouched ng-pristine cdk-text-field-autofill-monitored ng-invalid"
                  data-placeholder="Username"
                  aria-required="true"
                  style={{
                    font: "inherit",
                    background: "transparent",
                    color: "currentColor",
                    border: "none",
                    outline: "none",
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    maxWidth: "100%",
                    verticalAlign: "bottom",
                    textAlign: "inherit",
                  }}
                  onFocus={() => setIsInputFocus(true)}
                  {...register(name, {
                    onBlur: () => setIsInputFocus(false),
                    ...registerOptions,
                  })}
                  {...props}
                />
              )}

              <span
                className="mat-form-field-label-wrapper ng-tns-c69-0"
                style={{
                  position: "absolute",
                  left: "0",
                  boxSizing: "content-box",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: "none",
                  margin: "0",
                  padding: "0",
                  border: "0",
                  font: "inherit",
                  verticalAlign: "baseline",
                  textAlign: "left",
                }}
              >
                <label
                  className="mat-form-field-label ng-tns-c69-0 mat-empty mat-form-field-empty ng-star-inserted"
                  id="mat-form-field-label-1"
                  htmlFor={`${name}Field`}
                  aria-owns={`${name}Field`}
                  style={{
                    color: error ? "#cf0a00" : "#495057",
                    transform: "perspective(100px)",
                    display: "block",
                    position: "absolute",
                    left: "0",
                    font: "inherit",
                    pointerEvents: "none",
                    width: "100%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    transformOrigin: "0 0",
                    transition:
                      "transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1)",
                    margin: "0",
                    padding: "0",
                    border: "0",
                    verticalAlign: "baseline",
                    ...(isInputFocus || curValue
                      ? {
                          transform:
                            "translateY(-1.28125em) scale(.75) perspective(100px) translateZ(0.001px)",
                          width: "133.3333333333%",
                        }
                      : {}),
                  }}
                >
                  <span className="ng-tns-c69-0 ng-star-inserted">{label}</span>
                  {/**/}
                  {/**/}
                  {/**/}
                  <span
                    aria-hidden="true"
                    className="mat-placeholder-required mat-form-field-required-marker ng-tns-c69-0 ng-star-inserted"
                    style={{
                      display: `none`,
                    }}
                  >
                    {" "}
                    *
                  </span>
                  {/**/}
                </label>
                {/**/}
              </span>
            </div>
            {curValue ? (
              <div
                className="mat-form-field-suffix ng-tns-c69-0 ng-star-inserted"
                onClick={() => resetField(name)}
              >
                <span className="ng-tns-c69-0 ng-star-inserted">
                  <img
                    _ngcontent-kjf-c227=""
                    src="/images/dark-gray-round-close-x.svg"
                    alt="clear fieldset"
                  />
                </span>
                {/**/}
              </div>
            ) : null}
            {/**/}
          </div>
          <div
            className="mat-form-field-underline ng-tns-c69-0 ng-star-inserted"
            style={{
              height: "1px",
              position: "absolute",
              width: "100%",
              pointerEvents: "none",
              transform: "scale3d(1, 1.0001, 1)",
              margin: "0",
              border: "0",
              font: "inherit",
              verticalAlign: "baseline",
            }}
          >
            <span
              className={`mat-form-field-ripple ng-tns-c69-0`}
              style={{
                backgroundColor: error ? "#cf0a00" : "#ced4da",
                height: isInputFocus ? `2px` : "1px",
                opacity: "1",
                transform: "none",
                transition:
                  "transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)",
                top: "0",
                overflow: "hidden",
                position: "absolute",
                left: "0",
                width: "100%",
                transformOrigin: "50%",
                margin: "0",
                padding: "0",
                border: "0",
                font: "inherit",
                verticalAlign: "baseline",
              }}
            />
          </div>
          {/**/}
          <div
            className="mat-form-field-subscript-wrapper ng-tns-c69-0"
            style={{
              position: "absolute",
              boxSizing: "border-box",
              width: "100%",
              overflow: "hidden",
              margin: "0",
              border: "0",
              font: "inherit",
              verticalAlign: "baseline",
            }}
          >
            {/**/}
            <div
              className="mat-form-field-hint-wrapper ng-tns-c69-0 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
              style={{
                opacity: "1",
                transform: "translateY(0%)",
                display: "flex",
                margin: "0",
                border: "0",
                font: "inherit",
                verticalAlign: "baseline",
              }}
            >
              {/**/}
              <div
                className="mat-form-field-hint-spacer ng-tns-c69-0"
                style={{
                  flex: "1 0 1em",
                  margin: "0",
                  border: "0",
                  font: "inherit",
                  verticalAlign: "baseline",
                }}
              />
            </div>
            {/**/}
          </div>
        </div>
      </div>
      {error ? (
        <div
          _ngcontent-otu-c234=""
          className="f6 rb-red-2 mb2 ng-star-inserted"
        >
          <img
            _ngcontent-otu-c234=""
            src="/images/orange-warning-icon.svg"
            className="error-flag mr1"
          />
          <span _ngcontent-otu-c234="" className="ng-star-inserted">
            {error}
          </span>
          {/**/}
          {/**/}
          {/**/}
        </div>
      ) : null}
    </>
  );
};
