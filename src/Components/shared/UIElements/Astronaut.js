import React from "react";

import styles from "./Astronaut.module.css";

const NotFoundSVG = () => (
  <svg
    viewBox="0 0 204 274"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.item}
  >
    <path
      d="M113.26 1.86111C105.389 4.36546 93.225 15.2773 86.0698 26.3679C82.8499 31.5555 78.9145 35.8487 77.4835 35.8487C74.0847 35.8487 69.4338 44.9717 69.4338 51.5903C69.4338 54.4524 71.0437 58.2089 73.0114 59.9978C74.9791 61.7866 76.5891 65.1853 76.5891 67.5108C76.5891 69.8363 78.199 75.0238 80.3456 79.1381C83.5654 85.399 83.7443 87.0089 81.7766 90.5866C80.5245 92.912 78.0201 94.8797 76.2313 94.8797C72.6537 94.8797 63.5307 102.929 62.0997 107.223C61.3841 109.19 59.7742 108.833 53.6922 105.792C45.4637 101.498 37.2352 100.783 37.2352 104.36C37.2352 105.613 40.0973 115.093 43.496 125.29C46.8947 135.486 49.7569 144.072 49.7569 144.43C49.7569 144.788 48.5047 144.967 47.0736 144.967C45.6426 144.967 42.065 147.113 39.2028 149.797C34.7308 153.911 33.2998 157.488 30.9743 170.01C27.9333 185.215 23.9979 196.664 20.5992 198.81C19.7048 199.526 19.7048 201.315 20.9569 203.64C22.0302 205.608 22.9246 209.006 22.9246 210.974C22.9246 212.763 23.9979 214.91 25.2501 215.267C26.3234 215.804 23.9979 216.341 20.0625 216.341C15.2327 216.519 11.1185 215.267 8.61412 213.3C4.67873 210.08 4.49985 209.722 7.36195 203.998C10.7607 197.379 10.5818 196.306 6.10978 197.916C-2.11876 201.136 -0.508831 214.91 8.61412 219.739C14.5172 222.78 33.6575 221.349 42.2438 217.056C47.968 214.194 49.0413 212.226 54.05 197.2C58.1643 184.5 60.132 180.743 62.6363 180.743C65.6773 180.743 65.6773 181.101 63.173 186.11C59.9531 192.37 59.7742 202.209 62.6363 215.088C63.7096 220.276 64.604 225.285 64.4251 226.179C62.9941 231.546 60.6686 254.8 61.563 255.695C62.0997 256.231 63.8885 254.8 65.6773 252.475C68.3605 248.897 69.9705 248.36 75.158 249.434C81.5977 250.686 85.5331 256.41 81.5977 258.915C80.3456 259.63 80.1667 259.093 81.0611 257.483C82.3133 255.516 81.9555 255.516 79.0934 257.662C73.727 261.598 73.727 261.956 77.4835 260.524C79.8089 259.63 80.3456 259.809 79.2723 260.882C78.3779 261.956 75.8735 263.029 74.0847 263.387C69.4338 264.102 68.1816 268.395 72.6537 268.395C74.4425 268.395 78.199 266.428 80.8822 263.923C83.5654 261.419 86.4275 259.451 87.1431 259.451C88.9319 259.451 91.9729 252.654 97.3393 237.27L114.154 184.321L100.949 203.998C98.8024 201.672 94.4772 214.731 94.4772 210.795C94.4772 204.713 97.3393 207.486 106.105 202.656C113.439 198.542 78.3779 212.584 84.4598 213.3C88.5741 213.657 131.327 194.875 134.726 194.338C140.092 193.265 141.702 191.655 145.637 183.784C153.329 168.579 156.191 166.254 166.03 167.506C174.437 168.579 181.414 166.611 184.276 162.139C184.991 161.066 185.707 155.163 185.707 148.902C185.707 140.316 186.601 136.559 189.463 132.445C194.472 125.826 194.83 110.8 190.358 102.393C187.853 97.3841 179.983 90.9443 174.258 88.9766C171.575 88.0822 182.129 68.4052 185.707 67.5108C194.293 65.3642 194.651 45.8661 186.422 42.2884C184.097 41.2151 181.592 37.6375 180.34 33.5232C177.478 23.8636 165.851 11.8785 154.045 6.15427C143.133 1.14558 122.74 -1.17988 113.26 1.86111ZM149.752 9.19526C165.135 15.9928 172.827 24.0425 176.942 37.9953C178.194 42.6462 178.015 43.004 174.974 42.1096C172.648 41.394 170.681 42.4673 168.534 45.6872C165.851 49.8015 165.672 51.7692 167.64 62.1443C169.429 72.3406 169.429 74.4872 166.566 80.2114C162.989 87.7245 149.752 97.2052 138.84 100.604C130.969 102.929 114.333 100.425 104.852 95.5953C96.6238 91.3021 87.322 82.1791 83.3866 74.4872C79.4512 66.7953 79.6301 54.8102 83.7443 40.8574C88.2164 25.6524 104.495 8.65863 117.911 5.43875C126.139 3.29217 140.271 5.08097 149.752 9.19526ZM81.9555 41.0363C81.9555 44.0773 79.8089 48.3704 78.199 48.3704C77.3046 48.3704 76.5891 46.4027 76.5891 43.8984C76.5891 41.0363 77.6624 39.4263 79.2723 39.4263C80.7033 39.4263 81.9555 40.1419 81.9555 41.0363ZM186.064 47.2971C188.927 51.4114 187.674 57.3145 183.918 57.3145C180.34 57.3145 179.625 55.8835 180.161 49.2648C180.519 46.2238 180.161 46.2238 178.73 48.3704C177.657 49.8015 176.763 52.8425 176.763 54.9891C176.763 59.9978 173.722 61.7866 170.502 59.1033C167.461 56.599 167.103 51.4114 169.607 46.5816C171.038 43.8984 172.648 43.3617 178.194 44.2561C181.771 44.7928 185.349 46.2238 186.064 47.2971ZM176.763 95.0586C183.202 98.994 185.707 101.677 185.707 104.718C185.528 105.613 184.812 105.076 183.739 103.287C182.666 101.319 177.657 97.9207 172.47 95.5953C167.282 93.2698 164.956 91.3021 166.924 91.3021C168.892 91.3021 173.364 93.0909 176.763 95.0586ZM97.6971 100.604C104.137 104.539 105.389 107.58 99.8437 106.149C97.876 105.613 96.266 104.36 96.266 103.466C96.266 102.572 95.3716 102.393 94.1194 103.108C92.8673 103.824 92.6884 103.645 93.4039 102.393C94.1194 101.141 93.7617 100.246 92.6884 100.246C91.6151 100.246 90.3629 101.498 89.8263 102.929C88.3952 106.686 83.7443 102.929 83.7443 98.0996C83.7443 93.9853 88.0375 94.8797 97.6971 100.604ZM82.4922 100.783C83.7443 104.003 75.3369 113.126 71.5804 112.41C69.9705 112.052 68.3605 110.085 68.0028 107.938C67.1083 101.498 80.1667 94.8797 82.4922 100.783ZM172.47 102.572C179.625 106.686 187.496 114.378 187.496 117.24C187.496 122.606 182.308 122.249 175.689 116.346C167.997 109.548 161.379 106.865 156.549 108.475C152.971 109.548 153.329 108.117 157.622 102.393C159.769 99.7096 167.461 99.7095 172.47 102.572ZM91.794 112.768C100.559 120.46 102.527 121.175 104.495 117.777C105.389 116.524 106.283 117.061 107.357 119.923C108.967 124.395 106.462 128.867 102.348 128.867C100.917 128.867 94.6561 126.721 88.2164 124.216C75.8735 119.208 74.2636 116.703 79.4512 109.548C80.8822 107.401 82.4922 105.613 82.8499 105.613C83.2077 105.613 87.322 108.833 91.794 112.768ZM51.9034 109.906C53.1556 109.011 53.3345 109.369 52.4401 110.979C51.3668 112.768 51.7245 113.126 54.05 112.231C56.0177 111.337 56.7332 111.695 55.8388 113.126C54.9444 114.557 55.4811 114.736 57.6276 114.02C59.5953 113.126 60.3109 113.483 59.4164 114.915C58.522 116.346 59.0587 116.524 61.2053 115.809C63.173 114.915 63.8885 115.272 62.9941 116.703C62.0997 118.134 62.6363 118.313 64.7829 117.598C66.3928 116.882 67.4661 117.061 66.9295 117.956C66.3928 118.671 68.0028 120.281 70.5071 121.533C73.1903 122.606 74.6214 122.785 73.9058 121.712C73.3692 120.818 73.3692 119.923 74.2636 119.923C76.9468 120.102 98.9492 132.266 96.6238 132.445C95.3716 132.445 91.794 131.193 88.753 129.583C85.8909 127.973 83.7443 127.615 84.4598 128.51C84.9965 129.404 87.8586 131.193 90.8996 132.445C95.3716 134.234 96.266 135.665 96.4449 141.21L96.8027 147.65L97.876 140.495C98.9492 133.697 99.307 133.339 104.852 133.876C109.682 134.234 111.113 133.339 114.154 128.51C116.122 125.29 117.911 121.891 118.268 120.997C118.626 120.102 124.887 119.387 132.221 119.565C142.417 119.744 146.711 119.029 151.362 116.346C158.338 112.052 162.273 111.874 170.323 115.272C178.909 118.85 182.308 127.436 181.056 141.568C180.34 148.723 178.909 153.911 177.12 155.163C168.534 162.139 129.717 152.301 125.066 141.926C123.993 139.421 123.456 136.917 123.993 136.38C125.781 134.592 153.866 139.421 158.159 142.283C160.484 143.715 162.631 144.251 163.168 143.536C164.42 141.389 159.232 130.656 156.907 130.656C155.655 130.656 155.297 131.193 155.834 131.908C156.549 132.445 156.191 134.055 155.297 135.128C154.045 136.738 150.825 136.917 144.206 135.844C139.019 134.949 129.18 134.592 122.204 134.949C110.934 135.486 109.682 136.023 109.145 139.421C108.43 143.536 108.43 143.536 104.495 142.105C102.885 141.568 101.454 139.242 101.454 137.096C101.275 135.128 100.559 137.811 99.6648 143.178C98.7704 148.544 98.5915 158.204 99.1281 164.465L100.38 175.913L95.1927 172.336C92.3306 170.368 82.3133 163.749 72.8326 157.667L55.4811 146.577L50.1146 131.014C41.5283 105.97 41.7072 106.686 46.0003 109.19C48.1469 110.264 50.8301 110.621 51.9034 109.906ZM148.678 113.126C147.605 115.093 128.822 114.915 127.749 112.947C127.213 112.231 131.863 111.516 138.124 111.695C144.385 111.874 149.215 112.41 148.678 113.126ZM120.952 139.958C126.318 145.324 121.131 153.016 113.439 151.049C108.072 149.797 107.536 145.861 111.829 141.031C115.227 137.275 117.911 136.917 120.952 139.958ZM112.008 161.424C106.999 166.075 106.105 167.327 109.682 165.001C112.723 163.034 116.659 159.814 118.447 157.667C120.415 155.521 123.098 153.911 124.708 153.911C127.391 153.911 119.878 161.603 108.43 170.01L103.6 173.767L103.779 169.652C103.958 167.327 105.389 163.928 106.82 162.139C109.503 158.919 109.503 158.741 106.641 159.814C104.852 160.529 103.421 160.172 103.421 159.277C103.421 156.773 106.641 155.521 107.893 157.488C108.609 158.562 109.861 158.741 110.934 158.204C112.186 157.488 112.008 156.594 110.755 155.7C109.503 155.163 111.113 154.447 114.154 154.447H119.699L112.008 161.424ZM144.922 165.717L149.752 166.79L144.922 175.556C142.06 180.743 139.198 183.963 137.945 183.426C132.221 181.28 129.717 180.743 133.473 182.711C137.409 184.857 139.019 189.687 135.441 189.687C134.547 189.687 134.01 188.972 134.726 188.077C135.262 187.004 134.189 185.394 132.221 184.321C130.254 183.247 129.001 181.459 129.538 180.206C129.896 178.954 129.18 176.45 127.749 174.482C125.424 171.262 125.603 170.547 129.001 166.79C131.506 164.107 134.01 163.034 136.514 163.749C138.482 164.286 142.239 165.18 144.922 165.717ZM128.107 190.939C126.318 191.297 123.456 191.297 121.846 190.939C120.057 190.403 121.488 190.045 124.887 190.045C128.286 190.045 129.717 190.403 128.107 190.939Z"
      fill="url(#paint0_linear_749_74)"
    />
    <path
      d="M103.242 30.3033C91.0785 34.2387 81.9556 46.5816 81.9556 58.7455C81.9556 73.0561 94.2984 88.9766 110.04 94.8797C122.741 99.5306 132.758 99.3517 143.849 94.1642C169.607 82.1791 166.566 48.0126 138.303 33.5232C130.432 29.5878 111.113 27.7989 103.242 30.3033ZM124.529 78.2437C122.741 78.6014 119.521 78.6014 117.374 78.2437C115.049 77.8859 116.48 77.5281 120.415 77.5281C124.35 77.3493 126.139 77.707 124.529 78.2437Z"
      fill="url(#paint1_linear_749_74)"
    />
    <path
      d="M14.5174 192.728C13.2652 193.086 12.1919 194.338 12.1919 195.411C12.1919 197.916 19.8838 196.484 20.7782 193.622C21.4937 191.476 18.6316 190.939 14.5174 192.728Z"
      fill="url(#paint2_linear_749_74)"
    />
    <path
      d="M63.173 259.451C61.9208 261.419 63.5308 264.817 65.8562 264.817C66.5717 264.817 67.645 263.744 68.1817 262.313C69.255 259.451 64.7829 256.947 63.173 259.451Z"
      fill="url(#paint3_linear_749_74)"
    />
    <path
      d="M86.9649 267.322C82.4929 270.721 83.0295 274.119 87.8593 273.404C90.3637 273.046 91.9736 271.436 92.3313 268.753C93.0469 264.281 91.4369 263.923 86.9649 267.322Z"
      fill="url(#paint4_linear_749_74)"
    />
    <path
      d="M198.229 32.2708C198.229 33.1652 199.481 34.0596 200.912 34.0596C202.343 34.0596 203.595 33.1652 203.595 32.2708C203.595 31.1975 202.343 30.4819 200.912 30.4819C199.481 30.4819 198.229 31.1975 198.229 32.2708Z"
      fill="url(#paint5_linear_749_74)"
    />
    <path
      d="M36.5196 64.2907C35.2674 66.2584 39.7395 70.1938 41.3494 68.5839C42.0649 68.0472 42.6016 66.4373 42.6016 65.0062C42.6016 62.323 37.9507 61.7864 36.5196 64.2907Z"
      fill="url(#paint6_linear_749_74)"
    />
    <path
      d="M44.0326 79.1378C42.6015 82.8943 44.3904 85.9353 47.968 85.9353C52.0823 85.9353 53.6922 83.6098 52.2611 79.8533C51.009 76.4546 45.1059 76.0968 44.0326 79.1378Z"
      fill="url(#paint7_linear_749_74)"
    />
    <path
      d="M196.619 146.755C193.578 148.544 195.366 153.911 198.944 153.911C200.196 153.911 201.806 152.837 202.343 151.406C203.774 148.008 199.659 144.788 196.619 146.755Z"
      fill="url(#paint8_linear_749_74)"
    />
    <path
      d="M5.03662 177.165C5.03662 179.133 6.28879 180.743 7.71984 180.743C9.15089 180.743 10.4031 179.133 10.4031 177.165C10.4031 175.197 9.15089 173.587 7.71984 173.587C6.28879 173.587 5.03662 175.197 5.03662 177.165Z"
      fill="url(#paint9_linear_749_74)"
    />
    <path
      d="M102.527 255.873C101.811 256.947 101.99 258.735 103.064 259.809C104.137 260.882 105.21 260.882 106.105 259.451C106.82 258.378 106.641 256.589 105.568 255.516C104.495 254.442 103.421 254.442 102.527 255.873Z"
      fill="url(#paint10_linear_749_74)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_749_74"
        x1="28.383"
        y1="112.844"
        x2="215.234"
        y2="115.656"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_749_74"
        x1="93.3499"
        y1="58.1131"
        x2="170.409"
        y2="59.9692"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_749_74"
        x1="13.4382"
        y1="193.77"
        x2="21.8605"
        y2="194.073"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_749_74"
        x1="63.5403"
        y1="261.104"
        x2="68.9787"
        y2="261.204"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_749_74"
        x1="85.1346"
        y1="268.592"
        x2="93.4624"
        y2="268.769"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_749_74"
        x1="198.998"
        y1="31.9822"
        x2="204.197"
        y2="32.1454"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_749_74"
        x1="37.2042"
        y1="65.3113"
        x2="43.3114"
        y2="65.4394"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_749_74"
        x1="44.862"
        y1="80.7842"
        x2="53.8136"
        y2="80.9792"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_749_74"
        x1="196.154"
        y1="149.408"
        x2="203.488"
        y2="149.557"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_749_74"
        x1="5.8057"
        y1="176.588"
        x2="11.0087"
        y2="176.67"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_749_74"
        x1="102.733"
        y1="257.192"
        x2="107.035"
        y2="257.261"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#19C78E" />
        <stop offset="1" stop-color="#3C9CE6" />
      </linearGradient>
    </defs>
  </svg>
);

export default NotFoundSVG;