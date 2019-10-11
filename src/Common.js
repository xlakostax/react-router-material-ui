import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import 'typeface-roboto';


const useStyles = makeStyles(theme =>({
  main_text: {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400
  }
}));

const Common = () => {
    const classes = useStyles();
    return (
    <div style = {{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "90%"}}>
      {/*<svg xmlns="http://www.w3.org/2000/svg" width="8in" height="6.25332in" viewBox="0 0 600 469">
        <path id="Selection" fill="#000" stroke="black" stroke-width="1" d="M 326.00,114.00
          C 329.38,99.60 338.29,95.41 352.01,97.16
          368.18,99.22 381.06,110.27 405.00,110.00
          417.77,109.85 425.12,105.75 436.00,100.00
          413.95,121.57 374.83,139.68 350.01,165.00
          336.26,179.03 324.24,198.81 324.00,219.00
          324.00,219.00 324.00,225.00 324.00,225.00
          324.00,225.00 399.00,225.00 399.00,225.00
          399.00,202.86 402.20,184.21 414.06,165.00
          429.34,140.26 449.27,127.55 461.69,100.00
          468.71,84.42 469.00,70.59 469.00,54.00
          466.61,54.00 460.24,53.74 458.32,54.57
          455.35,55.87 453.10,60.83 448.91,64.70
          441.41,71.63 432.25,75.88 422.00,76.00
          390.02,76.37 381.66,50.73 350.00,50.01
          333.17,49.63 315.13,55.50 307.88,72.00
          301.03,87.56 305.06,113.48 326.00,114.00 Z
          M 131.00,226.00
          C 133.66,226.00 142.68,226.32 144.61,225.43
          146.43,224.59 151.34,216.73 154.04,214.04
          161.31,206.77 170.81,203.59 181.00,204.04
          196.89,204.73 206.11,214.61 219.00,221.69
          230.66,228.09 236.02,229.02 249.00,229.00
          266.94,228.97 281.83,221.45 288.53,204.00
          294.98,187.22 289.16,164.21 268.00,164.00
          267.47,174.60 261.80,180.86 251.00,181.00
          235.62,181.20 229.64,174.99 216.00,171.15
          192.65,164.59 167.06,167.83 149.00,185.00
          157.30,170.23 169.39,165.65 185.00,161.63
          185.00,161.63 250.00,148.85 250.00,148.85
          265.77,144.53 280.55,137.67 287.69,122.00
          290.67,115.45 292.20,106.13 291.39,98.96
          290.61,92.06 290.47,89.59 287.56,83.00
          277.22,59.59 247.63,51.04 224.00,51.00
          224.00,51.00 210.00,51.00 210.00,51.00
          202.85,51.03 191.16,52.38 184.00,53.59
          169.82,55.97 151.78,61.52 143.36,74.00
          132.65,89.88 139.25,108.73 157.00,115.53
          165.41,118.75 175.28,117.98 184.00,116.82
          200.27,114.66 205.82,104.20 206.00,89.00
          206.05,84.35 205.37,77.06 207.45,73.02
          211.49,65.19 223.00,63.84 228.26,72.02
          229.97,74.67 229.96,76.99 230.00,80.00
          230.12,89.25 228.22,99.92 223.54,108.00
          206.72,137.03 171.56,131.44 149.00,150.32
          126.83,168.88 131.00,200.23 131.00,226.00 Z
          M 377.00,59.00
          C 377.00,59.00 377.00,60.00 377.00,60.00
          377.00,60.00 376.00,59.00 376.00,59.00
          376.00,59.00 377.00,59.00 377.00,59.00 Z
          M 317.00,62.00
          C 317.00,62.00 317.00,63.00 317.00,63.00
          317.00,63.00 316.00,62.00 316.00,62.00
          316.00,62.00 317.00,62.00 317.00,62.00 Z
          M 307.00,81.00
          C 307.00,81.00 307.00,82.00 307.00,82.00
          307.00,82.00 306.00,81.00 306.00,81.00
          306.00,81.00 307.00,81.00 307.00,81.00 Z
          M 441.00,96.00
          C 441.00,96.00 441.00,97.00 441.00,97.00
          441.00,97.00 440.00,96.00 440.00,96.00
          440.00,96.00 441.00,96.00 441.00,96.00 Z
          M 204.00,97.00
          C 204.00,97.00 204.00,98.00 204.00,98.00
          204.00,98.00 203.00,97.00 203.00,97.00
          203.00,97.00 204.00,97.00 204.00,97.00 Z
          M 440.00,97.00
          C 440.00,97.00 440.00,98.00 440.00,98.00
          440.00,98.00 439.00,97.00 439.00,97.00
          439.00,97.00 440.00,97.00 440.00,97.00 Z
          M 437.00,99.00
          C 437.00,99.00 437.00,100.00 437.00,100.00
          437.00,100.00 436.00,99.00 436.00,99.00
          436.00,99.00 437.00,99.00 437.00,99.00 Z
          M 373.00,101.00
          C 373.00,101.00 373.00,102.00 373.00,102.00
          373.00,102.00 372.00,101.00 372.00,101.00
          372.00,101.00 373.00,101.00 373.00,101.00 Z
          M 325.00,112.00
          C 325.00,112.00 325.00,113.00 325.00,113.00
          325.00,113.00 324.00,112.00 324.00,112.00
          324.00,112.00 325.00,112.00 325.00,112.00 Z
          M 198.00,131.00
          C 198.00,131.00 198.00,132.00 198.00,132.00
          198.00,132.00 197.00,131.00 197.00,131.00
          197.00,131.00 198.00,131.00 198.00,131.00 Z
          M 280.00,131.00
          C 280.00,131.00 280.00,132.00 280.00,132.00
          280.00,132.00 279.00,131.00 279.00,131.00
          279.00,131.00 280.00,131.00 280.00,131.00 Z
          M 439.00,131.00
          C 439.00,131.00 439.00,132.00 439.00,132.00
          439.00,132.00 438.00,131.00 438.00,131.00
          438.00,131.00 439.00,131.00 439.00,131.00 Z
          M 391.00,135.00
          C 391.00,135.00 391.00,136.00 391.00,136.00
          391.00,136.00 390.00,135.00 390.00,135.00
          390.00,135.00 391.00,135.00 391.00,135.00 Z
          M 183.00,170.00
          C 183.00,170.00 183.00,171.00 183.00,171.00
          183.00,171.00 182.00,170.00 182.00,170.00
          182.00,170.00 183.00,170.00 183.00,170.00 Z
          M 134.00,183.00
          C 134.00,183.00 134.00,184.00 134.00,184.00
          134.00,184.00 133.00,183.00 133.00,183.00
          133.00,183.00 134.00,183.00 134.00,183.00 Z
          M 149.00,185.00
          C 149.00,185.00 149.00,186.00 149.00,186.00
          149.00,186.00 148.00,185.00 148.00,185.00
          148.00,185.00 149.00,185.00 149.00,185.00 Z
          M 330.00,199.00
          C 330.00,199.00 330.00,200.00 330.00,200.00
          330.00,200.00 329.00,199.00 329.00,199.00
          329.00,199.00 330.00,199.00 330.00,199.00 Z
          M 212.00,342.00
          C 212.00,342.00 195.00,342.00 195.00,342.00
          193.01,342.00 189.19,341.77 187.60,343.02
          185.62,344.59 186.00,348.70 186.00,351.00
          186.00,351.00 186.00,380.00 186.00,380.00
          186.00,381.95 186.11,385.18 185.40,386.94
          183.76,391.01 179.29,391.66 177.02,387.85
          175.81,385.81 176.00,382.34 176.00,380.00
          176.00,380.00 176.00,253.00 176.00,253.00
          176.00,250.62 175.81,247.22 177.02,245.12
          178.98,241.74 185.92,238.83 186.00,251.00
          186.00,251.00 186.00,284.00 186.00,284.00
          186.00,284.00 212.00,284.00 212.00,284.00
          212.00,284.00 212.00,247.00 212.00,247.00
          211.90,239.16 210.05,229.07 204.79,223.02
          193.51,210.05 165.34,210.67 154.53,224.04
          148.36,231.67 147.12,244.43 147.09,254.00
          147.09,254.00 147.09,331.00 147.09,331.00
          147.09,331.00 147.09,341.59 147.09,341.59
          147.09,341.59 147.09,379.00 147.09,379.00
          147.27,386.10 147.92,396.59 150.91,403.00
          159.95,422.39 195.54,425.43 207.01,407.00
          210.51,401.38 211.92,391.58 212.00,385.00
          212.00,385.00 212.00,342.00 212.00,342.00 Z
          M 277.00,218.00
          C 277.00,218.00 277.00,219.00 277.00,219.00
          277.00,219.00 276.00,218.00 276.00,218.00
          276.00,218.00 277.00,218.00 277.00,218.00 Z
          M 326.00,223.00
          C 326.00,223.00 326.00,224.00 326.00,224.00
          326.00,224.00 325.00,223.00 325.00,223.00
          325.00,223.00 326.00,223.00 326.00,223.00 Z
          M 263.00,225.00
          C 263.00,225.00 263.00,226.00 263.00,226.00
          263.00,226.00 262.00,225.00 262.00,225.00
          262.00,225.00 263.00,225.00 263.00,225.00 Z
          M 260.00,226.00
          C 260.00,226.00 260.00,227.00 260.00,227.00
          260.00,227.00 259.00,226.00 259.00,226.00
          259.00,226.00 260.00,226.00 260.00,226.00 Z
          M 295.00,233.00
          C 295.00,233.00 295.00,389.00 295.00,389.00
          295.01,396.94 296.13,404.55 301.68,410.70
          311.08,421.12 334.60,422.06 344.96,412.79
          352.36,406.17 353.99,396.42 354.00,387.00
          354.00,387.00 354.00,238.00 354.00,238.00
          354.00,238.00 329.00,238.00 329.00,238.00
          329.00,238.00 329.00,383.00 329.00,383.00
          328.99,386.12 329.40,391.35 325.86,392.83
          320.08,395.24 320.01,386.16 320.00,383.00
          320.00,383.00 320.00,356.00 320.00,356.00
          320.00,356.00 320.00,233.00 320.00,233.00
          320.00,233.00 295.00,233.00 295.00,233.00 Z
          M 297.00,234.00
          C 297.00,234.00 297.00,235.00 297.00,235.00
          297.00,235.00 296.00,234.00 296.00,234.00
          296.00,234.00 297.00,234.00 297.00,234.00 Z
          M 229.00,237.00
          C 229.00,237.00 229.00,419.00 229.00,419.00
          229.00,419.00 280.00,419.00 280.00,419.00
          280.00,419.00 285.21,418.01 285.21,418.01
          285.21,418.01 286.99,409.00 286.99,409.00
          286.99,409.00 286.99,395.00 286.99,395.00
          286.99,395.00 257.00,394.00 257.00,394.00
          257.00,394.00 257.00,240.00 257.00,240.00
          244.36,240.00 241.58,240.64 229.00,237.00 Z
          M 366.00,237.00
          C 366.00,237.00 366.00,418.00 366.00,418.00
          366.00,418.00 398.00,418.00 398.00,418.00
          404.97,417.91 412.60,416.55 417.96,411.79
          424.84,405.68 426.96,396.85 427.00,388.00
          427.00,388.00 427.00,343.00 427.00,343.00
          426.91,335.56 425.12,328.54 418.00,325.00
          419.94,322.05 422.07,319.39 423.21,316.00
          426.06,307.53 425.12,279.40 425.00,269.00
          424.88,258.95 422.94,247.11 413.99,241.11
          408.40,237.36 402.49,237.01 396.00,237.00
          396.00,237.00 366.00,237.00 366.00,237.00 Z
          M 369.00,238.00
          C 369.00,238.00 369.00,239.00 369.00,239.00
          369.00,239.00 368.00,238.00 368.00,238.00
          368.00,238.00 369.00,238.00 369.00,238.00 Z
          M 388.00,238.00
          C 388.00,238.00 388.00,239.00 388.00,239.00
          388.00,239.00 387.00,238.00 387.00,238.00
          387.00,238.00 388.00,238.00 388.00,238.00 Z
          M 236.00,240.00
          C 236.00,240.00 236.00,241.00 236.00,241.00
          236.00,241.00 235.00,240.00 235.00,240.00
          235.00,240.00 236.00,240.00 236.00,240.00 Z
          M 256.00,241.00
          C 256.00,241.00 256.00,242.00 256.00,242.00
          256.00,242.00 255.00,241.00 255.00,241.00
          255.00,241.00 256.00,241.00 256.00,241.00 Z
          M 391.00,315.00
          C 391.00,315.00 391.00,262.00 391.00,262.00
          399.23,262.03 400.94,262.23 401.00,271.00
          401.00,271.00 401.00,305.00 401.00,305.00
          401.00,307.16 401.22,310.76 399.98,312.57
          398.11,315.29 393.91,314.97 391.00,315.00 Z
          M 189.00,282.00
          C 189.00,282.00 189.00,283.00 189.00,283.00
          189.00,283.00 188.00,282.00 188.00,282.00
          188.00,282.00 189.00,282.00 189.00,282.00 Z
          M 210.00,282.00
          C 210.00,282.00 210.00,283.00 210.00,283.00
          210.00,283.00 209.00,282.00 209.00,282.00
          209.00,282.00 210.00,282.00 210.00,282.00 Z
          M 391.00,393.00
          C 391.00,393.00 391.00,337.00 391.00,337.00
          393.92,337.01 398.13,336.55 399.98,339.31
          401.45,341.53 401.00,349.10 401.00,352.00
          401.00,352.00 401.00,385.00 401.00,385.00
          400.84,393.17 398.22,392.97 391.00,393.00 Z
          M 285.00,395.00
          C 285.00,395.00 285.00,396.00 285.00,396.00
          285.00,396.00 284.00,395.00 284.00,395.00
          284.00,395.00 285.00,395.00 285.00,395.00 Z
          M 232.00,417.00
          C 232.00,417.00 232.00,418.00 232.00,418.00
          232.00,418.00 231.00,417.00 231.00,417.00
          231.00,417.00 232.00,417.00 232.00,417.00 Z
          M 241.00,417.00
          C 241.00,417.00 241.00,418.00 241.00,418.00
          241.00,418.00 240.00,417.00 240.00,417.00
          240.00,417.00 241.00,417.00 241.00,417.00 Z
          M 248.00,417.00
          C 248.00,417.00 248.00,418.00 248.00,418.00
          248.00,418.00 247.00,417.00 247.00,417.00
          247.00,417.00 248.00,417.00 248.00,417.00 Z
          M 255.00,417.00
          C 255.00,417.00 255.00,418.00 255.00,418.00
          255.00,418.00 254.00,417.00 254.00,417.00
          254.00,417.00 255.00,417.00 255.00,417.00 Z
          M 269.00,417.00
          C 269.00,417.00 269.00,418.00 269.00,418.00
          269.00,418.00 268.00,417.00 268.00,417.00
          268.00,417.00 269.00,417.00 269.00,417.00 Z
          M 285.00,417.00
          C 285.00,417.00 285.00,418.00 285.00,418.00
          285.00,418.00 284.00,417.00 284.00,417.00
          284.00,417.00 285.00,417.00 285.00,417.00 Z" />
      </svg>*/}
      <img src="https://bit.ly/33q3LnI" style ={{position: "relative", display: "block", objectFit: "contain", maxWidth: "100%", maxHeight: "100%", marginRight: "1em"}} />
      <div style = {{position: "relative", flex: 1, marginLeft: "1em"}}>
        <Typography gutterBottom variant = "h5" component = "h2" className = {classes.main_text}>
          This is "The 27 Club".
          The members of the club have invented genres, pioneered performances and musical techniques and influenced millions of people.
          Find out <Link to = "/about">about</Link> the club and club <Link to = "/members">members</Link>, see how to <Link to="/contacts">join us</Link>.
        </Typography>
      </div>
    </div>
    )
}

export default Common;
