import React from 'react';

const Wave = () => {
  return (
    <svg
      height="100%"
      width="100%"
      id="bg-svg"
      viewBox="0 0 1440 700"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="5%" stopColor="#002bdc88"></stop>
          <stop offset="95%" stopColor="#32ded488"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,233 0,233 C 112.85167464114832,255.07655502392345 225.70334928229664,277.1531100478469 319,277 C 412.29665071770336,276.8468899521531 486.0382775119617,254.46411483253584 580,242 C 673.9617224880383,229.53588516746416 788.1435406698564,226.99043062200957 892,238 C 995.8564593301436,249.00956937799043 1089.3875598086124,273.57416267942585 1179,275 C 1268.6124401913876,276.42583732057415 1354.3062200956938,254.71291866028707 1440,233 C 1440,233 1440,700 1440,700 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        className="transition-all duration-300 ease-in-out delay-150"
      ></path>
      <defs>
        <linearGradient id="gradient">
          <stop offset="5%" stopColor="#002bdcff"></stop>
          <stop offset="95%" stopColor="#32ded4ff"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,700 C 0,700 0,466 0,466 C 105.26315789473685,439.1578947368421 210.5263157894737,412.31578947368416 299,416 C 387.4736842105263,419.68421052631584 459.1578947368421,453.8947368421053 546,448 C 632.8421052631579,442.1052631578947 734.8421052631579,396.1052631578947 840,406 C 945.1578947368421,415.8947368421053 1053.4736842105262,481.68421052631584 1154,501 C 1254.5263157894738,520.3157894736842 1347.2631578947369,493.1578947368421 1440,466 C 1440,466 1440,700 1440,700 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        className="transition-all duration-300 ease-in-out delay-150"
      ></path>
    </svg>
  );
};

export default Wave;
