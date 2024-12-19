import React from "react";
import "./Supporter.css";

function Supporter() {
  return (
    <div>
      <div className="heading">Foundation Supporters</div>
      <div class="row justify-content-center supporters">
        <div class="logos">
          {/* 1. SPIRAL */}
          <a className="hover-underline" href="https://spiral.xyz/">
            <svg role="img" width="100" height="100">
              <use href="#supporter-spiral"></use>
            </svg>
            <div className="image-text">Spiral</div>
          </a>
          {/* 2. OPENSATS */}
          <a className="hover-underline" href="https://opensats.org/">
            <svg role="img" width="100" height="100">
              <use href="#supporter-opensats"></use>
            </svg>
            <div className="image-text">OpenSats</div>
          </a>
          {/* 3. Tether */}
          <a className="hover-underline" href="https://tether.to/">
            <svg role="img" width="140" height="100">
              <use
                href="#supporter-tether"
                style={{ fill: "currentcolor" }}
              ></use>
            </svg>
            <div className="image-text">Tether</div>
          </a>
          {/* 4. HRF */}
          <a className="hover-underline" href="https://hrf.org/">
            <svg
              role="img"
              width="110"
              height="50"
              style={{ fill: "currentcolor" }}
            >
              <use href="#supporter-hrf"></use>
            </svg>
            <div className="image-text">HRF</div>
          </a>
          {/* 5. LunaNode */}
          <a className="hover-underline" href="https://www.lunanode.com/">
            <svg role="img" width="100" height="100">
              <use href="#supporter-lunanode"></use>
            </svg>
            <div className="image-text">LunaNode</div>
          </a>
          {/* 6. walletofsatoshi */}
          <a className="hover-underline" href="https://walletofsatoshi.com/">
            <svg role="img" width="100" height="100">
              <use href="#supporter-walletofsatoshi"></use>
            </svg>
            <div className="image-text">Wallet of Satoshi</div>
          </a>
          {/* 7. COINCARDS */}
          <a className="hover-underline" href="https://coincards.com/">
            <svg role="img" width="130" height="100">
              <use href="#supporter-coincards"></use>
            </svg>
            <div className="image-text">Coincards</div>
          </a>
          {/* 8. IVPN */}
          <a className="hover-underline" href="https://www.ivpn.net/">
            <svg role="img" width="100" height="100">
              <use href="#supporter-ivpn"></use>
            </svg>
            <div className="image-text">IVPN</div>
          </a>
          {/* 9. UNBANK */}
          <a className="hover-underline" href="https://www.unbank.com/">
            <svg role="img" width="120" height="50">
              <use
                href="#supporter-unbank"
                style={{ fill: "currentcolor" }}
              ></use>
            </svg>
            <div className="image-text">Unbank</div>
          </a>
        </div>

        {/* SPONSOR-SPRITE- COLLECTION OF ALL SPONOSOR SVG's! */}
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="spiral-gradient"
              x1="81.36"
              y1="311.35"
              x2="541.35"
              y2="311.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".18" stop-color="#00f" />
              <stop offset="1" stop-color="#f0f" />
            </linearGradient>
            <linearGradient
              id="pnxbet-a"
              x1="108.127"
              y1="162.181"
              x2="74.499"
              y2="305.982"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FA1366" />
              <stop offset="1" stop-color="#FD6E06" />
            </linearGradient>
            <linearGradient
              id="pnxbet-c"
              x1="152.732"
              y1="33.344"
              x2="2.684"
              y2="194.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F91500" />
              <stop offset="1" stop-color="#FDD140" />
            </linearGradient>
            <filter
              id="pnxbet-b"
              x="35.029"
              y="154.606"
              width="85.36"
              height="85.36"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation=".5"
                result="effect1_foregroundBlur"
              />
            </filter>
            <filter
              id="pnxbet-d"
              x="8.414"
              y="53.573"
              width="93.523"
              height="181.835"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur"
              />
            </filter>
            <radialGradient id="acinq-a" cx="47.833" cy="51.834" r="56.832">
              <stop offset="0" stop-color="#fff" />
              <stop offset="1" stop-color="#fff" stop-opacity="0" />
            </radialGradient>
          </defs>
          <symbol id="supporter-spiral" viewBox="0 0 629 629">
            <path
              d="M326.4 572.09C201.2 572.09 141 503 112.48 445c-28.22-57.53-30.59-114.56-30.79-122.69-4.85-77 41-231.78 249.58-271.2a28.05 28.05 0 0 1 10.41 55.13c-213.12 40.28-204.44 206-204 213 0 .53.06 1.06.07 1.6.15 7.9 5.1 195.16 188.65 195.16 68.34 0 116.6-29.4 143.6-87.37 24.48-52.74 19.29-112.45-13.52-155.83-22.89-30.27-52.46-45-90.38-45-34.46 0-63.47 9.88-86.21 29.37A91.5 91.5 0 0 0 248 322.3c-1.41 25.4 7.14 49.36 24.07 67.49C287.27 406 305 413.9 326.4 413.9c27.46 0 45.52-9 53.66-26.81 8.38-18.3 3.61-38.93-.19-43.33-9.11-10-18.69-13.68-22.48-13-2.53.43-5.78 4.61-8.48 10.92a28 28 0 0 1-51.58-22c14.28-33.44 37.94-42 50.76-44.2 24.78-4.18 52.17 7.3 73.34 30.65s25.51 68.55 10.15 103.22C421.54 432 394.52 470 326.4 470c-36.72 0-69.67-14.49-95.29-41.92-27.47-29.4-41.34-68.08-39.11-108.89a149.1 149.1 0 0 1 51.31-104.6c33.19-28.45 74.48-42.87 122.71-42.87 55.12 0 101.85 23.25 135.12 67.23 45.36 60 52.9 141.71 19.66 213.3-25.35 54.67-79.68 119.84-194.4 119.84Z"
              fill="url(#spiral-gradient)"
            />
          </symbol>
          <symbol id="supporter-opensats" viewBox="0 0 5220 720">
            <path 
              d="M0 435.197L229.609 291.597V288.121L0 144.259V29.0508L334.901 245.894V333.824L0 550.798V435.197Z" 
              fill="#FF3300"
            />
            <path 
              d="M486.969 623.844H902.627V719.643H486.969V623.844Z" 
              fill="#FF3300"
            />
            <path 
              d="M993.879 291.2C993.879 106.422 1084.61 0 1214.37 0C1344.13 0 1434.86 106.422 1434.86 291.2C1434.86 479.061 1344.13 587.581 1214.37 587.581C1084.61 587.581 993.879 479.061 993.879 291.2ZM1345.12 291.2C1345.12 155.01 1293.16 75.9967 1214.37 75.9967C1135.58 75.9967 1083.62 155.01 1083.62 291.2C1083.62 430.473 1135.58 511.584 1214.37 511.584C1293.16 511.584 1344.85 430.473 1344.85 291.2H1345.12Z" 
              fill="#FF3300"
            />
            <path 
              d="M1593.29 154.29H1663.81L1670.37 205.37H1673.13C1711.31 169.634 1764.71 144.258 1814.44 144.258C1925.96 144.258 1988.02 228.713 1988.02 359.855C1988.02 504.111 1897.95 587.911 1797.77 587.911C1759.13 587.911 1713.54 568.829 1677.39 535.454H1675.29L1679.43 612.237V749.936H1593.29V154.29ZM1899.65 359.855C1899.65 271.269 1867.44 215.599 1791.21 215.599C1756.57 215.599 1717.93 232.713 1679.69 272.121V472.112C1714.79 503.914 1754.61 515.455 1781.57 515.455C1848.75 515.717 1899.65 459.851 1899.65 359.855Z" 
              fill="#FF3300"
            />
            <path 
              d="M2118.96 365.035C2118.96 227.336 2222.75 143.93 2335.98 143.93C2460.16 143.93 2530.82 225.434 2530.82 343.527C2530.67 359.209 2529.35 374.858 2526.88 390.345H2178.73V327.2H2473.22L2454.52 348.249C2454.52 256.449 2410.17 210.55 2338.47 210.55C2264.41 210.55 2203.66 265.17 2203.66 364.904C2203.66 468.833 2268.8 520.044 2359.79 520.044C2407.09 520.044 2445.08 505.75 2483.39 482.8L2513.56 537.29C2464.7 569.886 2407.32 587.378 2348.57 587.582C2220.39 587.582 2118.96 505.947 2118.96 365.035Z" 
              fill="#FF3300"
            />
            <path 
              d="M2658.41 154.29H2729.07L2735.63 221.697H2739.04C2781.55 178.289 2829.83 144.258 2895.17 144.258C2994.1 144.258 3039.17 205.042 3039.17 315.201V577.026H2952.9V326.152C2952.9 252.319 2928.11 218.222 2865.39 218.222C2819.47 218.222 2788.31 240.844 2744.68 285.563V577.026H2658.41V154.29Z" 
              fill="#FF3300"
            />
            <path 
              d="M3208.36 504.308L3259.46 444.376C3303 486.486 3360.93 510.468 3421.5 511.455C3493.27 511.455 3533.03 478.669 3533.03 432.77C3533.03 377.362 3491.63 361.953 3435.41 338.217L3355.57 303.333C3297.64 280.514 3234.21 238.614 3234.21 155.143C3234.21 66.8186 3313.65 0.001814 3425.64 0.001814C3492.01 -0.442962 3555.93 25.0654 3603.75 71.0807L3558.87 126.554C3521.22 93.051 3472.3 74.9951 3421.9 75.9985C3362.2 75.9985 3322.11 103.604 3322.11 150.028C3322.11 199.206 3371.05 217.173 3420.98 236.516L3497.93 270.416C3569.04 298.087 3622.18 339.528 3622.18 422.344C3622.18 513.356 3545.36 587.583 3416.78 587.583C3339.11 587.998 3264.34 558.123 3208.36 504.308V504.308Z" 
              fill="var(--btcpay-body-text)"
            />
            <path 
              d="M3762.96 465.557C3762.96 370.741 3849.04 324.055 4062.7 308.186C4059.62 255.73 4031.54 213.896 3956.3 213.896C3905.13 213.896 3854.68 237.304 3813.28 261.5L3780.48 203.994C3827.98 174.684 3898.57 144.062 3971.78 144.062C4088.42 144.062 4148.91 210.945 4148.91 322.678V577.027H4077.73L4070.84 522.144H4068.08C4022.82 557.553 3963.97 587.715 3906.04 587.715C3825.16 587.584 3762.96 540.045 3762.96 465.557ZM4062.7 462.278V363.266C3896.79 375.134 3847.26 408.576 3847.26 459C3847.26 501.489 3885.38 519.063 3930.65 519.063C3975.91 519.063 4018.88 497.883 4062.7 462.278Z" 
              fill="var(--btcpay-body-text)"
            />
            <path 
              d="M4388.81 409.884V222.941H4272.17V158.813L4392.16 154.289L4403.44 20.2617H4475.02V154.289H4674.64V222.941H4475.02V410.146C4475.02 482.864 4500.73 518.076 4577.29 518.076C4610.27 517.981 4642.96 511.847 4673.73 499.979L4691.24 562.992C4648.39 578.951 4603.07 587.274 4557.35 587.581C4430.86 587.581 4388.81 516.043 4388.81 409.884Z" 
              fill="var(--btcpay-body-text)"
            />
            <path 
              d="M4818.71 521.815L4857.09 466.014C4909.9 502.948 4972.98 522.353 5037.43 521.487C5102.31 521.487 5133.34 495.259 5133.34 463.85C5133.34 433.95 5115.76 415 5009.22 393.034C4897.7 369.887 4845.21 331.2 4845.21 267.203C4845.21 196.518 4908.85 143.93 5025.95 143.93C5093.26 143.93 5157.55 170.158 5199.93 198.878L5159.45 252.646C5117.79 224.668 5068.79 209.592 5018.6 209.304C4955.62 209.304 4931.28 234.155 4931.28 263.138C4931.28 295.923 4965.07 309.037 5048.12 326.938C5185.89 357.101 5220.33 392.509 5220.33 458.736C5220.33 529.487 5151.71 587.582 5026.8 587.582C4952.47 586.641 4880.07 563.76 4818.71 521.815V521.815Z" 
              fill="var(--btcpay-body-text)"
            />
          </symbol>
          <symbol id="supporter-tether" viewBox="0 0 111 90">
            <path 
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M24.4825 0.862305H88.0496C89.5663 0.862305 90.9675 1.64827 91.7239 2.92338L110.244 34.1419C111.204 35.7609 110.919 37.8043 109.549 39.1171L58.5729 87.9703C56.9216 89.5528 54.2652 89.5528 52.6139 87.9703L1.70699 39.1831C0.305262 37.8398 0.0427812 35.7367 1.07354 34.1077L20.8696 2.82322C21.6406 1.60483 23.0087 0.862305 24.4825 0.862305ZM79.8419 14.8003V23.5597H61.7343V29.6329C74.4518 30.2819 83.9934 32.9475 84.0642 36.1425L84.0638 42.803C83.993 45.998 74.4518 48.6635 61.7343 49.3125V64.2168H49.7105V49.3125C36.9929 48.6635 27.4513 45.998 27.3805 42.803L27.381 36.1425C27.4517 32.9475 36.9929 30.2819 49.7105 29.6329V23.5597H31.6028V14.8003H79.8419ZM55.7224 44.7367C69.2943 44.7367 80.6382 42.4827 83.4143 39.4727C81.0601 36.9202 72.5448 34.9114 61.7343 34.3597V40.7183C59.7966 40.8172 57.7852 40.8693 55.7224 40.8693C53.6595 40.8693 51.6481 40.8172 49.7105 40.7183V34.3597C38.8999 34.9114 30.3846 36.9202 28.0304 39.4727C30.8066 42.4827 42.1504 44.7367 55.7224 44.7367Z" 
              fill="#009393"
            />
          </symbol>
          <symbol id="supporter-unbank" viewBox="0 0 766 132" fill="none">
            <path 
              d="M133.125 66.24v41.145c-.03 10.77-7.051 19.926-17.376 22.792-2.053.571-4.156.831-6.279.831-27.55 0-55.09.03-82.641-.01-13.209-.02-23.625-10.429-23.645-23.623v-82.52c0-13.194 10.425-23.593 23.635-23.613h82.641c13.209.02 23.605 10.429 23.645 23.623l.01 41.385.01-.01zM68.38 33.16H31.987c-.361 0-.721-.02-1.082 0-2.694.17-4.657 2.044-4.717 4.508-.07 2.805 1.662 4.779 4.517 5.019.711.06.851.321.851.952v34.904c0 .661-.19.952-.871 1.162-2.183.661-2.694 3.206-1.042 4.769.751.711 1.632.731 2.574.731h72.316.721c1.472-.05 2.594-1.012 2.844-2.434a2.77 2.77 0 0 0-1.853-3.016c-.641-.21-.771-.501-.771-1.092V43.76c0-.741.19-.972.982-1.082 3.595-.491 5.347-4.348 3.385-7.363-1.062-1.633-2.704-2.154-4.557-2.154H68.41h-.03zm-.12 53.026H28.261c-.881 0-1.763-.04-2.644.01-3.245.19-5.208 3.446-3.715 6.171.701 1.272 1.933 1.853 3.175 2.435l27.37 12.824 12.478 5.88c1.703.822 3.325.972 5.037.081 1.352-.692 2.754-1.293 4.136-1.914l23.144-10.519 14.952-6.822c1.542-.701 2.564-1.783 2.684-3.516.2-2.755-1.672-4.638-4.577-4.638H68.26v.01zm-.13-65.329H26.218c-1.933 0-2.574.631-2.604 2.585-.02 1.122 0 2.234 0 3.356 0 2.615.561 3.176 3.155 3.176h82.741c.281 0 .561.01.841 0 1.432-.08 2.133-.761 2.153-2.174v-4.198c0-2.294-.45-2.755-2.713-2.755H68.12l.01.01zM593.247 49.67c-.27 1.703-.11 3.426-.1 5.129l.13 13.665.241 25.777.23 16.18c.18 5.169-4.006 8.155-7.321 8.145-4.696 0-7.911-3.156-7.971-7.995l-.15-17.261-.261-25.777-.22-22.18-.231-19.415c-.03-3.827 1.903-6.622 5.248-7.714s6.58.05 8.813 3.136l46.859 64.517c.29.401.5.892 1.131 1.262v-1.473-59.849c0-4.378 2.524-7.463 6.61-8.125 4.356-.711 8.542 2.755 8.693 7.183.01.321 0 .641 0 .962v84.554c0 3.897-1.933 6.792-5.248 7.864-3.355 1.082-6.64-.11-8.913-3.246l-46.708-64.327c-.251-.351-.421-.782-.832-.992-.04-.05-.08-.09-.12-.14 0 .03-.01.06-.02.1.05 0 .11.01.16.02h-.02zm-288.231-.21v12.383l.17 12.823.321 31.768c.02 1.753.22 3.526.03 5.269-.481 4.368-3.936 7.113-8.453 6.833-3.715-.231-6.739-3.637-6.79-7.704l-.14-15.589-.24-26.017-.24-22.18-.231-21.218c-.03-3.737 1.933-6.562 5.218-7.624 3.325-1.082 6.61.07 8.833 3.126l47.069 64.808c.25.351.51.691.971 1.292v-1.523-60.45c0-4.087 2.584-7.123 6.56-7.774 4.156-.671 8.182 2.394 8.622 6.572a12.05 12.05 0 0 1 .06 1.192v85.396c0 6.071-6.239 9.697-11.476 6.702-1.062-.611-1.863-1.483-2.574-2.465l-47.009-64.707-.681-.912h-.02zm97.402 22.421l-.02-37.178.02-8.626c.141-2.585.641-5.019 2.855-6.702 1.522-1.162 3.334-1.573 5.197-1.583l20.66.01c11.617.26 21.502 7.153 25.257 17.602 2.955 8.225 1.703 16.109-2.413 23.653-1.102 2.004-1.122 2.004.591 3.436 5.287 4.428 9.504 9.608 11.376 16.37 4.317 15.628-4.026 35.375-24.355 38.861-3.636.621-7.341.471-11.016.511-5.759.06-11.527 0-17.296-.05-1.442-.01-2.894 0-4.306-.21-3.946-.592-6.129-3.246-6.469-7.725a27.22 27.22 0 0 1-.061-2.033V71.871l-.02.01zm15.864 15.598v14.156c0 .491-.171 1.062.701 1.052 6.119-.1 12.258.32 18.366-.171 10.806-.871 17.206-11.921 12.619-21.729-2.163-4.628-5.718-7.634-11.026-8.135a86.36 86.36 0 0 0-9.104-.361l-10.675.17c-.801 0-.891.321-.891.982l.01 14.035zm0-42.537l-.02 10.78c0 .731.19.942.941.942l11.156-.03c7.461-.15 12.619-5.891 11.988-13.274-.431-5.009-4.006-8.796-8.903-9.537-4.767-.721-9.564-.571-14.351-.701-.751-.02-.831.311-.831.922v10.9h.02zM704.27 68.014c.581-.17.811-.571 1.111-.872l21.692-21.76 24.676-24.875c3.165-3.196 7.992-3.286 11.076-.21 3.015 3.005 2.915 7.814-.22 10.97l-24.886 25.016-6.259 6.301c-.601.581-.551.942-.071 1.563l31.026 40.153 1.462 1.903c2.604 3.456 2.073 8.095-1.212 10.72-3.315 2.644-8.072 2.123-10.796-1.323l-11.016-14.226-20.299-26.307c-.431-.561-.691-.822-1.332-.16l-14.281 14.406c-.541.541-.681 1.092-.681 1.813v18.954c-.02 3.166-1.492 5.53-4.347 6.893-2.764 1.312-5.468 1.002-7.921-.832-1.893-1.412-2.935-3.366-2.935-5.77V25.446c0-3.997 3.305-7.273 7.341-7.384 4.086-.12 7.631 3.026 7.812 7.033.1 2.194.05 4.398.05 6.592v36.336l.01-.01zM258.548 50.873l-.03 24.955c-.361 19.586-13.54 37.278-32.838 41.355-16.464 3.486-30.154-1.823-40.83-14.687-5.688-6.852-8.642-14.927-9.484-23.793-.17-1.803-.13-3.587-.13-5.38V24.745c0-3.807 2.063-6.682 5.488-7.674 4.978-1.443 9.765 2.254 9.765 7.584v33.591l.06 17.872c.33 12.232 8.843 23.423 20.66 26.228 10.045 2.374 20.64-1.803 26.879-10.86 3.275-4.749 5.068-10.028 5.078-15.839l.07-50.852c0-3.787 2.083-6.702 5.478-7.704 4.937-1.463 9.784 2.184 9.794 7.413v26.388l.04-.02zm292.788 67.683c-3.295 0-5.898-1.824-7.15-5.04l-7.131-18.413c-.35-.922-.811-1.152-1.742-1.152h-33.75c-.871 0-1.312.19-1.642 1.092l-7.01 18.584c-1.322 3.436-4.297 5.199-8.072 4.909-3.105-.241-5.859-2.786-6.56-6.102-.33-1.572-.07-3.075.501-4.568l11.657-30.906 20.37-53.968c1.272-3.386 3.996-5.4 7.301-5.41 3.254-.01 5.998 1.963 7.28 5.28l32.948 84.904c1.853 4.789-.45 9.447-5.207 10.639-.591.151-1.192.131-1.783.151h-.01zm-20.66-39.843l-12.438-32.068-.271.611-11.547 30.546c-.39 1.032.151.912.802.912h21.842 1.612z" 
              fill="#3cce49"
            />
            <path 
              d="M68.38 33.16h36.874c1.863 0 3.495.511 4.557 2.154 1.962 3.005.21 6.873-3.385 7.363-.792.11-.982.341-.982 1.082v34.903c0 .591.13.892.771 1.092a2.76 2.76 0 0 1 1.853 3.016c-.24 1.423-1.372 2.384-2.844 2.434h-.721-72.316c-.931 0-1.823-.02-2.574-.731-1.652-1.563-1.142-4.118 1.042-4.769.681-.21.881-.501.871-1.162V43.639c0-.631-.14-.892-.851-.952-2.854-.24-4.587-2.214-4.517-5.019.06-2.455 2.023-4.338 4.717-4.508.361-.02.721 0 1.082 0H68.35h.03zM52.647 61.201l.02-17.271c0-.892-.16-1.252-1.172-1.232h-9.724c-.891-.01-1.152.23-1.152 1.132v34.543c0 .932.31 1.132 1.172 1.122h9.604c1.002.02 1.282-.27 1.272-1.272l-.02-17.031v.01zm42.973-.19l.02-17.141c0-.862-.18-1.192-1.122-1.172a249.45 249.45 0 0 1-9.484 0c-.921-.02-1.132.291-1.132 1.162v34.403c0 .902.18 1.262 1.182 1.242h9.364c.991.02 1.192-.321 1.192-1.232l-.02-17.261zm-21.561.08l.02-17.131c0-1.012-.29-1.282-1.282-1.262h-9.244c-.841-.01-1.082.24-1.082 1.082v34.633c0 .832.24 1.092 1.082 1.082h9.244c1.001.02 1.282-.281 1.272-1.272l-.02-17.131h.01zM68.26 86.187h42.041c2.905 0 4.777 1.883 4.577 4.638-.12 1.733-1.152 2.815-2.684 3.516l-14.952 6.823-23.144 10.519-4.136 1.914c-1.722.881-3.335.741-5.037-.081l-12.478-5.88-27.37-12.824c-1.242-.581-2.474-1.162-3.175-2.434-1.482-2.725.471-5.981 3.715-6.171.881-.05 1.762-.01 2.644-.01H68.26v-.01zm-.13-65.329h41.671c2.263 0 2.714.461 2.714 2.755v4.198c-.021 1.412-.722 2.094-2.154 2.174h-.841-82.741c-2.594 0-3.155-.561-3.155-3.176v-3.356c.03-1.954.661-2.585 2.604-2.585H68.14l-.01-.01z" 
              fill="#0e4160"
            />
            <path 
              d="M593.247 49.67c-.05 0-.11-.01-.16-.02 0-.03.01-.06.02-.1l.12.14.02-.02z" 
              fill="#fefefe"
            />
            <path 
              d="M52.647 61.201l.02 17.031c0 1.002-.27 1.292-1.272 1.272-3.205-.06-6.409-.05-9.604 0-.861.01-1.172-.18-1.172-1.122V43.84c0-.902.26-1.152 1.152-1.132h9.724c1.001-.02 1.172.341 1.172 1.232l-.02 17.271v-.01zm42.973-.19l.02 17.261c0 .912-.2 1.252-1.192 1.232a243.59 243.59 0 0 0-9.364 0c-1.002.02-1.182-.351-1.182-1.242V43.86c0-.871.21-1.182 1.132-1.162a249.45 249.45 0 0 0 9.484 0c.941-.02 1.122.311 1.122 1.172l-.02 17.141zm-21.562.08l.02 17.131c0 .992-.27 1.292-1.272 1.272-3.074-.06-6.159-.05-9.243 0-.841.01-1.081-.25-1.081-1.082V43.78c0-.842.24-1.092 1.081-1.082h9.243c.992-.02 1.292.25 1.282 1.262l-.02 17.131h-.01z" 
              fill="#3cce49"
            />
          </symbol>
          <symbol id="supporter-coincards" viewBox="0 0 64 32">
            <g fill="none">
              <path
                d="M32.7 5.9c-.2-1-1.3-1.7-2.3-1.4L7.7 9.9c-1 .2-1.7 1.3-1.4 2.3l3.1 12.9c.2 1 1.3 1.7 2.3 1.4l22.7-5.4c1-.2 1.7-1.3 1.4-2.3L32.7 5.9Z"
                fill="#EF8022"
              />
              <path
                d="M12.6 30.3c-.2.2-.5.3-.7.3l.8.5c.9.6 2.1.4 2.7-.5l3.1-4.4-5.9 4.1ZM2.3 19.5l-1 1.4c-.6.9-.4 2.1.5 2.7L8.1 28l-5.8-8.5ZM12.9 8.1l7.2-5-2.7-1.9c-.9-.6-2.1-.4-2.7.5l-5 7.2 3.2-.8Z"
                fill="#F9F185"
              />
              <path
                d="M9.7 29.4c.6.9 1.8 1.1 2.7.5l6.7-4.6-7.4 1.8c-1.3.3-2.6-.5-2.9-1.8L6 13.5l-3.3 2.3c-.9.6-1.1 1.8-.5 2.7l7.5 10.9Zm4.5-21.6L25.9 5l-1.3-2c-.6-.9-1.8-1.1-2.7-.5l-7.7 5.3Z"
                fill="#FFC214"
              />
              <path
                d="M11.9 24.8c-.7 0-1.4-.5-1.7-1.1l-1.5-3.2 1.1 4.6c.2.6.7 1.1 1.4 1.1h.3l17-4.1-16.2 2.7h-.4Z"
                fill="#FFC214"
              />
              <path
                d="M16 17.5s-1.1 1.2-2.5 1.2c-1.7 0-2.6-1.4-2.6-2.8 0-1.3.9-2.7 2.6-2.7 1.3 0 2.3 1 2.3 1l1.1-1.7s-.6-.7-1.9-1.1v-1.2h-1.1v1h-.6v-1h-1.1v1.1c-2.2.5-3.7 2.4-3.7 4.7 0 2.4 1.5 4.2 3.7 4.7v1.2h1.1v-1h.6V22H15v-1.3c1.4-.4 2.1-1.3 2.1-1.3L16 17.5ZM21 13.7c2.1 0 3.8 1.4 3.8 3.6 0 2.1-1.7 3.5-3.8 3.5-2.1 0-3.8-1.4-3.8-3.5s1.7-3.6 3.8-3.6Zm0 5.2c.8 0 1.5-.6 1.5-1.6s-.7-1.7-1.5-1.7-1.5.6-1.5 1.7c0 1 .7 1.6 1.5 1.6Zm4.3-5h2.3v6.7h-2.3v-6.7Zm0-2.6h2.2v1.8h-2.2v-1.8Zm3.2 2.6h2.2v1c.3-.5 1-1.2 2.1-1.2 1.4 0 2.4.6 2.4 2.5v4.4h-2.3v-4c0-.6-.2-.9-.7-.9-.7 0-1.1.4-1.3 1-.1.3-.1.6-.1.9v3h-2.3v-6.7Z"
                fill="#FFF"
              />
              <path
                d="M39.3 13.9c1.7 0 2.5 1 2.5 1l-.6.9s-.7-.8-1.8-.8c-1.3 0-2.3 1-2.3 2.4 0 1.3 1 2.4 2.3 2.4 1.2 0 2-.9 2-.9l.5.9s-.9 1.1-2.6 1.1c-2.1 0-3.5-1.5-3.5-3.5-.1-2 1.4-3.5 3.5-3.5Zm6.8 2.6h.3v-.1c0-1.1-.6-1.5-1.5-1.5-1 0-1.8.6-1.8.6l-.5-.9s1-.8 2.5-.8c1.7 0 2.6.9 2.6 2.6v4.2h-1.2v-1.1s-.5 1.3-2.1 1.3c-1.1 0-2.3-.7-2.3-2 0-2.2 2.9-2.3 4-2.3Zm-1.4 3.3c1.1 0 1.8-1.1 1.8-2.1v-.2h-.3c-1 0-2.7.1-2.7 1.3-.1.5.3 1 1.2 1Zm3.8-5.8h1.2v1.7c.3-1 1.1-1.7 2.1-1.7h.3v1.3h-.4c-.8 0-1.6.6-1.9 1.6-.1.4-.2.8-.2 1.2v2.7h-1.3V14h.2Zm6.8-.1c1.5 0 2 1 2 1v-3.5h1.3v9.2h-1.2v-1s-.5 1.2-2.2 1.2c-1.8 0-2.9-1.4-2.9-3.5s1.3-3.4 3-3.4Zm.2 5.8c1 0 1.9-.7 1.9-2.4 0-1.2-.6-2.4-1.9-2.4-1 0-1.9.9-1.9 2.4s.8 2.4 1.9 2.4Zm4.2-.8s.7.8 1.9.8c.5 0 1.1-.3 1.1-.8 0-1.2-3.4-1-3.4-3.1 0-1.2 1.1-1.9 2.4-1.9 1.5 0 2.1.7 2.1.7l-.5 1s-.6-.6-1.6-.6c-.5 0-1.1.2-1.1.8 0 1.2 3.4.9 3.4 3.1 0 1.1-.9 1.9-2.4 1.9-1.6 0-2.5-1-2.5-1l.6-.9Z"
                fill="#EF8022"
              />
            </g>
          </symbol>
          <symbol id="supporter-acinq" viewBox="0 0 103 107">
            <circle fill="url(#acinq-a)" cx="47.833" cy="51.833" r="56.832" />
            <g>
              <g fill="none" stroke-width="6" stroke-linejoin="round">
                <path
                  stroke="#47BF94"
                  d="M4.493 79.67c-6.778-11.574 21.882-35.135 41.646-39.636 16.598-3.78 55.176 4.066 53.752 17.433"
                />
                <path
                  stroke="#359F7E"
                  d="M10.125 18.133c8.624-9.988 41.797 13.701 51.001 30.018 9.723 17.237 12.87 55.271-1.103 55.351"
                />
                <path
                  stroke="#49DAAA"
                  d="M69.826 4.107c12.025 5.964 3.838 38.632-11.184 57.28C47.846 74.79 11.659 91.904 4.493 79.67"
                />
                <path
                  stroke="#49DAAA"
                  d="M99.891 57.467C98.471 70.799 62.529 72.9 43.83 64.781c-17.92-7.783-42.47-36.5-33.706-46.648"
                />
                <path
                  stroke="#AAF0D3"
                  d="M60.023 103.502c-14.291.08-24.609-29.721-23.918-51.916.758-24.377 20.678-53.948 33.721-47.479"
                />
              </g>
            </g>
          </symbol>
          <symbol id="supporter-walletofsatoshi" viewBox="0 0 313.1 76.32">
            <path
              d="M110.47 44.8H121c.84 0 1.22-.64.9-1.48l-17.6-42A2 2 0 0 0 102.22 0H87.63a2 2 0 0 0-2 1.34L66 48.11c-.32.84.06 1.48.83 1.48h13.7a1.42 1.42 0 0 1 1.32 1.93l-9.7 24.8 30.55-32.63A1 1 0 0 0 102 42H84.73a1.42 1.42 0 0 1-1.32-2l5.06-12.91 6.86-17.47 6.78 17.51h-7.54a1.42 1.42 0 0 0-1.32.9l-2.83 7.22a1.42 1.42 0 0 0 1.32 1.93H105a1.42 1.42 0 0 1 1.33.91l2.08 5.36a1.92 1.92 0 0 0 2.06 1.35Zm62.65 0h37.42a1.3 1.3 0 0 0 1.46-1.41V35.9a1.3 1.3 0 0 0-1.47-1.41h-26V1.41A1.35 1.35 0 0 0 183 0h-9.92a1.3 1.3 0 0 0-1.47 1.41v42a1.3 1.3 0 0 0 1.51 1.39Zm45.36 0h42a1.3 1.3 0 0 0 1.52-1.41V35.9a1.31 1.31 0 0 0-1.47-1.41h-30.59v-7.36h25.59a1.33 1.33 0 0 0 1.48-1.4v-7a1.33 1.33 0 0 0-1.48-1.41h-25.59v-7h30.59A1.3 1.3 0 0 0 262 8.89V1.41A1.3 1.3 0 0 0 260.53 0h-42A1.3 1.3 0 0 0 217 1.41v42a1.3 1.3 0 0 0 1.48 1.39ZM71.79 0H61.61a1.71 1.71 0 0 0-1.85 1.41L52.08 34.3 44.91 1.41A1.65 1.65 0 0 0 43.12 0H30.38a1.71 1.71 0 0 0-1.85 1.41L21.36 34.3 13.68 1.41A1.65 1.65 0 0 0 11.89 0H1.14C.24 0-.14.51.05 1.41l10.88 42a1.68 1.68 0 0 0 1.79 1.41H28.4a1.65 1.65 0 0 0 1.79-1.41l6.27-28.31 6.34 28.29a1.65 1.65 0 0 0 1.79 1.41H60.2a1.66 1.66 0 0 0 1.8-1.41l10.87-42C73.07.51 72.68 0 71.79 0Zm239.84 0h-43.52a1.3 1.3 0 0 0-1.47 1.41v7.48a1.3 1.3 0 0 0 1.47 1.41h15.29v33.09a1.3 1.3 0 0 0 1.48 1.41h10a1.33 1.33 0 0 0 1.47-1.41V10.3h15.3a1.3 1.3 0 0 0 1.47-1.41V1.41A1.3 1.3 0 0 0 311.63 0ZM127.76 44.8h37.42a1.3 1.3 0 0 0 1.47-1.41V35.9a1.3 1.3 0 0 0-1.47-1.41h-26V1.41a1.35 1.35 0 0 0-1.5-1.41h-9.92a1.3 1.3 0 0 0-1.47 1.41v42a1.3 1.3 0 0 0 1.47 1.39Zm-3.84 9.6h-11.53c-3.13 0-4.53 1.31-4.53 4.36v10.37c0 3.05 1.4 4.36 4.53 4.36h11.53c3.16 0 4.51-1.31 4.51-4.36V58.76c0-3.05-1.35-4.36-4.51-4.36Zm-1 12.95c0 1.48-.29 1.75-2.07 1.75h-5.51c-1.76 0-2.08-.27-2.08-1.75v-6.81c0-1.47.32-1.75 2.08-1.75h5.51c1.78 0 2.07.28 2.07 1.75Zm51.87-5.59h-8.75c-.89 0-1.16-.27-1.16-.95v-1.06c0-.68.27-1 1.16-1h6.7c.65 0 .89.28.89.85v.16a.55.55 0 0 0 .62.6h4a.55.55 0 0 0 .62-.6v-1.08c0-3.21-1.11-4.28-4.4-4.28H164c-3.19 0-4.51 1.31-4.51 4.36v2.84c0 3.06 1.32 4.36 4.51 4.36h8.74c.9 0 1.17.28 1.17 1v1.23c0 .68-.27.95-1.17.95h-7.34c-.62 0-.86-.27-.86-.85v-.16a.56.56 0 0 0-.62-.6h-4a.55.55 0 0 0-.62.6v1.12c0 3.22 1.08 4.28 4.4 4.28h11.2c3.19 0 4.51-1.31 4.51-4.36v-3c-.06-3.1-1.41-4.41-4.57-4.41Zm85.43 0h-8.75c-.89 0-1.16-.27-1.16-.95v-1.06c0-.68.27-1 1.16-1h6.7c.64 0 .89.28.89.85v.16a.55.55 0 0 0 .62.6h4a.55.55 0 0 0 .62-.6v-1.08c0-3.21-1.11-4.28-4.4-4.28h-10.48c-3.19 0-4.51 1.31-4.51 4.36v2.84c0 3.06 1.32 4.36 4.51 4.36h8.74c.89 0 1.16.28 1.16 1v1.23c0 .68-.27.95-1.16.95h-7.34c-.62 0-.86-.27-.86-.85v-.16a.57.57 0 0 0-.62-.6h-4.05a.55.55 0 0 0-.62.6v1.12c0 3.22 1.08 4.28 4.4 4.28h11.2c3.18 0 4.51-1.31 4.51-4.36v-3c0-3.1-1.33-4.41-4.51-4.41Zm26.65-7.36h-4.21a.56.56 0 0 0-.63.6v6.66h-9.2V55a.57.57 0 0 0-.65-.6H268a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.18a.57.57 0 0 0 .65-.6v-6.84h9.2v6.84a.56.56 0 0 0 .63.6h4.21a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.57-.6Zm-137.62 0h-17.07a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.19a.58.58 0 0 0 .65-.6v-6.52h10.15a.57.57 0 0 0 .64-.6v-3.19a.57.57 0 0 0-.64-.6H137v-3.19h12.3a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.62-.6Zm146.47 0h-4.18a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.18a.57.57 0 0 0 .65-.6V55a.57.57 0 0 0-.6-.6Zm-100.28.6a.83.83 0 0 0-.86-.57h-6.16a.83.83 0 0 0-.89.57l-7.42 17.89c-.14.36 0 .63.38.63h4.45a.8.8 0 0 0 .86-.57l1-2.68h9.1l1 2.68a.8.8 0 0 0 .87.57h4.69c.33 0 .49-.27.35-.63Zm-7 11 2.89-7.52 2.92 7.52Zm30.9-11.6H201a.55.55 0 0 0-.62.6v3.19a.55.55 0 0 0 .62.6h6.45v14.1a.55.55 0 0 0 .62.6h4.21a.56.56 0 0 0 .62-.6v-14.1h6.46a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.64-.6Zm18.46 0h-11.52c-3.13 0-4.54 1.31-4.54 4.36v10.37c0 3.05 1.41 4.36 4.54 4.36h11.52c3.16 0 4.51-1.31 4.51-4.36V58.76c0-3.05-1.31-4.36-4.51-4.36Zm-.94 12.95c0 1.48-.3 1.75-2.08 1.75h-5.51c-1.75 0-2.07-.27-2.07-1.75v-6.81c0-1.47.32-1.75 2.07-1.75h5.51c1.78 0 2.08.28 2.08 1.75Z"
              fill="#fad228"
              stroke="#1e2127"
              stroke-width="2"
            />
          </symbol>
          <symbol id="supporter-ivpn" viewBox="0 0 84 29">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.75 0h6.03c.07 0 .15.03.2.1.04.05.06.13.05.2L8.6 27.43a.26.26 0 0 1-.24.22l-6.63.38H1.7a.25.25 0 0 1-.19-.08.26.26 0 0 1-.06-.22L5.2 5.05C5.12 1.67 1 .85.49.73-.06.59 0 0 0 0h6.75Zm32.32.12a.25.25 0 0 0-.22-.12h-6.5c-.1 0-.18.05-.23.14l-8.98 17.4L20.08.2a.25.25 0 0 0-.24-.21h-6.55a.25.25 0 0 0-.2.1.26.26 0 0 0-.05.2l4.85 26.05a.25.25 0 0 0 .26.2l7.57-.43c.08 0 .16-.06.2-.14L39.08.38a.26.26 0 0 0-.01-.26Zm20.27 5.5a6.8 6.8 0 0 0-.53-2.08c-.27-.6-.61-1.1-1.01-1.5-.4-.41-.8-.75-1.23-1A8.23 8.23 0 0 0 52.9 0H40.47a.25.25 0 0 0-.25.2l-4.01 24.6c-.01.07.01.14.06.2.05.05.11.08.18.08h.02l6.25-.36c.11 0 .2-.1.22-.21l.75-4.63h6.08c1.39-.09 2.7-.43 3.89-1.03a9.75 9.75 0 0 0 2.99-2.46 9.9 9.9 0 0 0 2-4.76l.56-3.3c.17-1.02.21-1.93.13-2.71Zm-7.21 5.87a2.53 2.53 0 0 1-1.1 1.66c-.27.18-.64.27-1.1.27H44.7l1.1-7h5.3c.45 0 .78.09.97.27.22.2.38.41.47.65.1.27.13.6.1.95l-.52 3.2ZM83.75 0h-6.32c-.12 0-.23.1-.25.22l-2.25 14.34L70.04.17a.25.25 0 0 0-.23-.17H63.5c-.12 0-.23.1-.25.22l-3.86 24.56c-.01.07.01.16.06.22.05.05.12.08.19.08l6.43-.39c.12 0 .21-.1.23-.22l1.62-10.36 3.4 10.08c.04.1.14.17.25.17l8.58-.52c.11 0 .2-.1.23-.22L84 .3a.27.27 0 0 0-.06-.22.24.24 0 0 0-.19-.09Z"
              fill="#F34"
            />
          </symbol>

          <symbol id="supporter-lunanode" viewBox="0 0 194.219 193.977">
            <path
              className="luna-node1"
              d="M3185.89 2995.8c-1.77 21.49-2.76 43.2-2.76 65.16 0 411.03 319.09 747.36 723.13 774.95l-618.54-641.7c-54.62-56.68-88.55-126.08-101.83-198.41M3960 2284.09c-270.37 0-508.4 138.15-647.57 347.65l23.25-22.42c76.82-74.06 176.93-109.95 276.2-108.13 99 1.77 197.53 41.2 271.5 117.59l-177.95 171.52c-26.66-27.31-62.22-41.38-98.02-42.14-36.12-.65-72.43 12.41-100.16 39.15l-37.98 36.6c-27.69 26.66-42.04 62.45-42.7 98.57-.65 36.07 12.36 72.48 39.11 100.21l745.68 773.56c305.71-104.45 525.52-394.17 525.52-735.29 0-29.89-1.73-59.34-5.04-88.32-19.44 54.57-51.41 105.56-95.79 148.35l-37.93 36.58c-76.86 74.07-176.93 110.05-276.16 108.18-99.32-1.77-198.13-41.38-272.19-118.25l-290.74-301.59 177.95-171.53 290.74 301.61c26.71 27.73 62.64 42.04 98.72 42.74 36.12.69 72.38-12.35 100.16-39.1l37.89-36.59c27.69-26.66 42.09-62.45 42.74-98.58.61-36.03-12.4-72.48-39.1-100.21l-440.73-457.23c-22.23-1.9-44.69-2.93-67.4-2.93"
              transform="matrix(.125 0 0 -.125 -397.891 479.489)"
            />
            <path
              className="luna-node2"
              d="M4376.22 2292.8h360.66v433.41c-17.35-55.88-47.59-108.64-90.81-153.48l-269.85-279.93"
              transform="matrix(.125 0 0 -.125 -397.891 479.489)"
            />
          </symbol>

          <symbol id="supporter-hrf" viewBox="0 0 3000 987.6">
            <path
              d="M1137.09 103.9v773.45h-51.44V515.96h-953.6v361.38H80.62V103.9h51.44v361.2h953.6V103.9h51.43zm-102.77 0h-51.44v258.19H234.94V103.9H183.5v309.05h850.82V103.9zm-696.29 0h-50.87v205.84h50.87V103.9zm593.05 0h-51.44v205.84h51.44V103.9zM183.5 877.34h51.44V619.16h747.94v258.19h51.44V567.72H183.5v309.62zm695.72 0h51.44V670.93h-51.44v206.41zm-592.47 0h51.44V670.93h-51.44v206.41z"
              fill="#e12991"
            />
            <path
              className="hrf"
              d="M1422.94 103.88V331.3h-44.51v-94.22h-92.2v94.22h-44.83V103.88h44.83v90.32h92.2v-90.32h44.51zM1605.81 168.85V331.3h-41.91v-18.19c-9.75 14.62-26.64 22.74-48.41 22.74-34.44 0-61.4-24.04-61.4-67.25v-99.74H1496v94.54c0 22.1 13.32 33.47 32.16 33.47 20.47 0 35.74-12.02 35.74-40.29v-87.72h41.91zM1885.19 231.23V331.3h-41.91v-97.14c0-19.17-9.75-30.86-27.29-30.86-18.52 0-30.22 12.35-30.22 36.71v91.29h-41.91v-97.14c0-19.17-9.75-30.86-27.29-30.86-17.87 0-30.54 12.35-30.54 36.71v91.29h-41.91V168.85h41.91v17.22c9.1-13.64 24.37-21.77 45.16-21.77 20.14 0 35.09 8.45 44.18 23.39 10.07-14.62 26.32-23.39 48.41-23.39 37.04.01 61.41 26.32 61.41 66.93zM2086.24 168.85V331.3h-41.91v-19.17c-11.7 14.62-29.24 23.72-52.96 23.72-43.21 0-78.95-37.36-78.95-85.77s35.74-85.77 78.95-85.77c23.72 0 41.26 9.1 52.96 23.72v-19.17h41.91zm-41.91 81.23c0-27.29-19.17-45.81-45.16-45.81-25.66 0-44.83 18.52-44.83 45.81 0 27.29 19.17 45.81 44.83 45.81 25.99 0 45.16-18.52 45.16-45.81zM2275.93 231.56v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V168.85h41.91v18.19c9.75-14.62 26.64-22.74 48.41-22.74 34.44.01 61.4 24.05 61.4 67.26zM1316.47 525.36h-30.25v78.95h-44.83V376.89h94.84c41.91 0 75.7 33.79 75.7 75.37 0 28.59-17.87 54.26-43.86 66.28l50.36 85.77h-48.41l-53.55-78.95zm-30.25-39.31h50c16.89 0 30.86-14.95 30.86-33.79s-13.97-33.46-30.86-33.46h-50v67.25zM1437.88 396.71c0-13.97 15.57-25.99 29.54-25.99 14.29 0 22.12 12.02 22.12 25.99s-11.7 25.67-25.99 25.67c-13.97 0-25.67-11.7-25.67-25.67zm4.88 45.16h41.91v162.45h-41.91V441.87zM1681.86 441.87v154.65c0 53.28-41.91 77.33-84.8 77.33-34.77 0-62.7-13.32-77-39.64l35.74-20.47c6.82 12.67 17.54 22.74 42.56 22.74 26.31 0 42.56-14.29 42.56-39.96v-17.54c-11.37 15.27-28.92 24.69-51.98 24.69-46.14 0-80.9-37.36-80.9-83.17 0-45.48 34.76-83.17 80.9-83.17 23.07 0 40.61 9.42 51.98 24.69v-20.14h40.94zm-40.94 78.62c0-25.67-19.17-44.18-45.49-44.18-26.31 0-45.48 18.52-45.48 44.18 0 25.99 19.17 44.51 45.48 44.51 26.32 0 45.49-18.52 45.49-44.51zM1871.55 504.57v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V376.89h41.91v83.17c9.75-14.62 26.64-22.74 48.41-22.74 34.44 0 61.4 24.04 61.4 67.25zM1963.46 482.15v67.58c0 17.54 12.67 17.87 36.71 16.57v38.01c-58.81 6.5-78.62-10.72-78.62-54.58v-67.58h-28.27v-40.29h28.27v-32.81l41.91-12.67v45.48h36.71v40.29h-36.71zM2148.63 556.88c0 35.09-30.54 51.98-65.31 51.98-32.49 0-56.53-13.64-68.22-38.66l36.39-20.47c4.55 13.32 15.6 21.12 31.84 21.12 13.32 0 22.42-4.55 22.42-13.97 0-23.72-83.82-10.72-83.82-67.9 0-33.14 28.27-51.66 61.73-51.66 26.32 0 49.06 12.02 61.73 34.44l-35.74 19.49c-4.88-10.4-13.97-16.57-25.99-16.57-10.4 0-18.84 4.55-18.84 13.32-.01 24.04 83.81 9.1 83.81 68.88zM1286.22 692.79v53.93h96.11v42.89h-96.11v87.72h-44.83V649.9h143.54v42.88h-98.71zM1400.82 796.1c0-48.41 38.01-85.77 85.77-85.77s86.1 37.36 86.1 85.77-38.34 85.77-86.1 85.77c-47.76 0-85.77-37.36-85.77-85.77zm129.96 0c0-26.31-19.17-44.83-44.19-44.83-24.69 0-43.86 18.52-43.86 44.83 0 26.32 19.17 44.83 43.86 44.83 25.02.01 44.19-18.51 44.19-44.83zM1744.84 714.88v162.45h-41.91v-18.19c-9.75 14.62-26.64 22.74-48.41 22.74-34.44 0-61.4-24.04-61.4-67.25v-99.74h41.91v94.54c0 22.1 13.32 33.47 32.16 33.47 20.47 0 35.74-12.02 35.74-40.29v-87.72h41.91zM1934.86 777.58v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V714.88h41.91v18.19c9.75-14.62 26.64-22.74 48.41-22.74 34.44 0 61.4 24.04 61.4 67.25zM2135.61 649.9v227.42h-41.91v-19.17c-11.7 14.95-28.92 23.72-52.63 23.72-43.54 0-79.27-37.36-79.27-85.77s35.74-85.77 79.27-85.77c23.72 0 40.94 8.77 52.63 23.72V649.9h41.91zm-41.91 146.2c0-27.29-19.17-45.81-44.84-45.81-25.99 0-45.16 18.52-45.16 45.81 0 27.29 19.17 45.81 45.16 45.81 25.67.01 44.84-18.51 44.84-45.81zM2337.35 714.88v162.45h-41.91v-19.17c-11.7 14.62-29.24 23.72-52.96 23.72-43.21 0-78.95-37.36-78.95-85.77s35.74-85.77 78.95-85.77c23.72 0 41.26 9.1 52.96 23.72v-19.17h41.91zm-41.91 81.22c0-27.29-19.17-45.81-45.16-45.81-25.66 0-44.83 18.52-44.83 45.81 0 27.29 19.17 45.81 44.83 45.81 25.99.01 45.16-18.51 45.16-45.81zM2433.46 755.17v67.58c0 17.54 12.67 17.87 36.71 16.57v38.01c-58.81 6.5-78.62-10.72-78.62-54.58v-67.58h-28.26v-40.29h28.26v-32.81l41.91-12.67v45.48h36.71v40.29h-36.71zM2494.84 669.72c0-13.97 11.7-25.99 25.67-25.99 14.29 0 25.99 12.02 25.99 25.99s-11.7 25.66-25.99 25.66c-13.97.01-25.67-11.69-25.67-25.66zm4.87 45.16h41.91v162.45h-41.91V714.88zM2565 796.1c0-48.41 38.01-85.77 85.77-85.77s86.1 37.36 86.1 85.77-38.34 85.77-86.1 85.77c-47.76 0-85.77-37.36-85.77-85.77zm129.96 0c0-26.31-19.17-44.83-44.19-44.83-24.69 0-43.86 18.52-43.86 44.83 0 26.32 19.17 44.83 43.86 44.83 25.02.01 44.19-18.51 44.19-44.83zM2911.62 777.58v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V714.88h41.91v18.19c9.75-14.62 26.64-22.74 48.41-22.74 34.44 0 61.4 24.04 61.4 67.25z"
            />
          </symbol>
        </svg>
      </div>
      {/*  */}
    </div>
  );
}

export default Supporter;
