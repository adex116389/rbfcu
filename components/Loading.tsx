import React from "react";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".rb-preloader[_ngcontent-aeh-c48]   .preloader-wrapper.big[_ngcontent-aeh-c48]{width:100px;height:100px}.view[_ngcontent-aeh-c48]{background-image:url(/images/rbfcu-spin-logo.9ca9e732e2523b2e9859.svg);background-repeat:no-repeat;background-size:50px;background-position:50% 26.5em}.mat-progress-spinner[_ngcontent-aeh-c48]   svg[_ngcontent-aeh-c48], .rb-preloader[_ngcontent-aeh-c48]{width:7.813em!important;height:7.813em!important}.rb-preloader[_ngcontent-aeh-c48]   .preloader-wrapper[_ngcontent-aeh-c48]   .mat-progress-spinner[_ngcontent-aeh-c48]   svg[_ngcontent-aeh-c48]   path[_ngcontent-aeh-c48]{transition:stroke .3s;stroke-width:4px!important;fill:transparent;stroke:#1c5db1!important}  .mat-progress-spinner{display:block;position:relative;top:25em;margin:0 auto}  .view{background-color:hsla(0,0%,100%,.5)}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.view[_ngcontent-aeh-c48]{background-size:120px}  .mat-progress-spinner svg circle{stroke-width:3%!important}}@supports (-ms-accelerator:true){  .mat-progress-spinner svg circle{stroke-width:3%!important}}@supports (-ms-ime-align:auto){  .mat-progress-spinner svg circle{stroke-width:3%!important}}@media (max-width:767px){  .mat-progress-spinner{top:15em}.view[_ngcontent-aeh-c48]{background-position:50% 16.5em}}",
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n",
        }}
      />
      <div _ngcontent-ign-c84="" _nghost-ign-c48="">
        <div
          _ngcontent-ign-c48=""
          className="view ng-star-inserted"
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }}
        >
          <div _ngcontent-ign-c48="" className="mask flex-center">
            <div
              _ngcontent-ign-c48=""
              role="progressbar"
              tabIndex={-1}
              className="mat-spinner mat-progress-spinner rb-preloader mat-primary mat-progress-spinner-indeterminate-animation"
              style={{ width: 100, height: 100 }}
            >
              <svg
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 100 100"
                style={{ width: 100, height: 100 }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r={45}
                  className="ng-star-inserted"
                  style={{
                    animationName: "mat-progress-spinner-stroke-rotate-100",
                    strokeDasharray: "282.743px",
                    strokeWidth: "10%",
                  }}
                />
                {/**/}
                {/**/}
              </svg>
            </div>
          </div>
        </div>
        {/**/}
        {/**/}
        {/**/}
      </div>
    </>
  );
};
