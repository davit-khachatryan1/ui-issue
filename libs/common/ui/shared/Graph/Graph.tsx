import { FC } from "react";
import React from "react";

export const Graph: FC<{ className: string, idGraph: number }> = ({ className, idGraph }) => {


  const [width, setWidth] = React.useState(typeof window !== "undefined" ? window.innerWidth : 0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const [graphWidth, setGraphWidth] = React.useState("232");

  React.useEffect(()=>{

    if(width < 576) {
      setGraphWidth("150");
    } else {
      setGraphWidth("232");
    }
    
  },[width])

  return (
    <>

    {idGraph == -1 ? 
    
      <svg
        className={className}
        width={graphWidth}
        height="81"
        viewBox="0 0 232 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M231 19.3529H228.596V23.1765H225.39V29.2941L222.986 25.4706L221.383 27.7647L215.774 25.4706L214.171 27.7647L210.965 23.1765L208.561 27.7647L206.157 25.4706L205.355 28.5294V20.8824L199.746 23.1765L197.341 20.8824V23.1765L195.739 19.3529L194.136 20.8824L190.93 25.4706L189.328 17.0588H187.725L185.321 0.999999L183.718 23.1765L182.115 17.0588L180.512 20.8824L178.108 17.0588V23.1765L174.101 13.2353L172.498 15.5294V13.2353L170.094 15.5294L168.491 40L166.889 37.7059V51.4706L164.484 46.8824V53L161.279 42.2941L159.676 43.8235V37.7059L157.272 53L154.868 49.9412L153.265 56.8235L151.662 51.4706L149.258 54.5294V46.8824L147.655 49.9412L144.449 46.8824L141.244 58.3529L139.641 54.5294L137.237 63.7059L134.031 56.8235L132.429 60.6471L128.422 54.5294L126.017 56.8235L125.216 55.2941L123.613 60.6471L120.408 58.3529L115.599 63.7059L113.195 60.6471L108.387 66.7647L104.38 60.6471H101.976L99.5714 58.3529L97.9686 66.7647L95.5645 62.1765L90.7561 68.2941L86.7491 63.7059L85.1463 70.5882L82.7422 68.2941L77.9338 79L74.7282 70.5882L72.324 73.6471L69.1185 60.6471L65.9129 73.6471L63.5087 68.2941L57.0976 70.5882L54.6934 68.2941L49.0836 70.5882L46.6794 66.7647L45.0767 68.2941L41.8711 63.7059L40.2683 70.5882L38.6655 63.7059L37.0627 65.2353L35.4599 60.6471L33.8571 63.7059V60.6471L30.6516 70.5882L25.8432 68.2941H21.8362L17.8293 66.7647L14.6237 70.5882L9.81533 63.7059L7.41114 66.7647L5.00696 65.2353L0.999995 73.6471"
          stroke="#09D0B8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg> 
      : idGraph == 0 ?
      
      <svg className={className} width="{graphWidth}" height="69" viewBox="0 0 229 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.80078 53.8028L3.15861 52.6143" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M3.1582 52.614L4.51604 48.5801" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M4.51562 48.5801L5.87346 47.5127" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M5.875 47.5127L7.23283 48.296" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M7.23242 48.2959L8.59025 51.6869" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M8.58984 51.6866L9.94767 51.6191" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M9.94727 51.6194L11.3051 50.2412" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M11.3047 50.2412L12.6625 50.6019" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M12.6641 50.6016L14.0219 51.3169" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M14.0215 51.3169L15.3793 49.8691" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M15.3789 49.8691L16.7367 50.1939" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M16.7363 50.1945L18.0942 49.0596" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M18.0957 49.0596L19.4535 49.7109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M19.4531 49.7109L20.811 50.7329" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M20.8105 50.7322L22.1684 50.5303" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M22.168 50.5303L23.5258 50.8283" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M23.5254 50.8284L24.8832 49.8809" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M24.8848 49.8809L26.2426 49.9354" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M26.2422 49.9355L27.6 50.1121" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M27.5996 50.1123L28.9574 53.5415" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M28.957 53.5412L30.3149 51.7881" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M30.3145 51.7879L31.6723 51.6182" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M31.6738 51.6187L33.0317 50.2256" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M33.0312 50.2251L34.3891 49.8291" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M34.3887 49.8291L35.7465 54.1355" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M35.7461 54.1357L37.1039 55.0961" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M37.1035 55.0967L38.4613 56.3182" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M38.4629 56.3175L39.8207 55.1162" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M39.8203 55.1161L41.1781 49.4688" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M41.1777 49.469L42.5356 47.874" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M42.5352 47.8737L43.893 46.2656" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M43.8926 46.2656L45.2504 46.637" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M45.252 46.6374L46.6098 45.9189" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M46.6094 45.9189L47.9672 46.9846" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M47.9668 46.9843L49.3246 46.4365" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M49.3242 46.4365L50.6821 47.1417" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M50.6836 47.1416L52.0414 47.6565" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M52.041 47.6572L53.3988 47.7772" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M53.3984 47.7764L54.7563 48.502" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M54.7559 48.502L56.1137 49.1792" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M56.1133 49.1793L57.4711 45.2285" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M57.4727 45.2284L58.8305 45.0332" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M58.8301 45.0333L60.1879 44.9648" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M60.1875 44.9648L61.5453 47.9949" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M61.5449 47.9951L62.9028 48.457" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M62.9023 48.4573L64.2602 47.373" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M64.2617 47.373L65.6196 47.6721" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M65.6191 47.6724L66.977 44.0039" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M66.9766 44.0039L68.3344 44.4106" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M68.334 44.41L69.6918 44.1572" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M69.6914 44.157L71.0492 42.1953" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M71.0508 42.1953L72.4086 42.8215" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M72.4082 42.8223L73.766 50.8889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M73.7656 50.8889L75.1235 50.8438" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M75.123 50.8438L76.4809 51.5555" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M76.4824 51.5555L77.8403 49.5039" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M77.8398 49.5039L79.1977 51.9314" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M79.1973 51.9307L80.5551 53.0063" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M80.5547 53.007L81.9125 50.3174" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M81.9121 50.3175L83.2699 50.0234" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M83.2715 50.0227L84.6293 49.6426" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M84.6289 49.6428L85.9867 48.8359" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M85.9863 48.8359L87.3442 50.2495" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M87.3438 50.25L88.7016 58.9844" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M88.7012 58.9844L90.059 65.4137" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M90.0605 65.4138L91.4184 64.6562" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M91.418 64.6562L92.7758 59.6338" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M92.7754 59.6333L94.1332 57.4717" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M94.1328 57.4717L95.4906 62.3315" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M95.4902 62.3319L96.8481 59.0107" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M96.8496 59.0107L98.2074 61.9252" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M98.207 61.9248L99.5649 65.2647" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M99.5645 65.2646L100.922 67.2759" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M100.922 67.2761L102.28 62.6729" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M102.281 62.6729L103.639 63.1775" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M103.639 63.1775L104.996 62.5898" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M104.996 62.5898L106.354 62.9426" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M106.354 62.9429L107.711 62.8145" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M107.711 62.8142L109.069 60.1348" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M109.07 60.1348L110.428 61.7996" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M110.428 61.7998L111.786 62.65" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M111.785 62.6494L113.143 62.713" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M113.143 62.7138L114.5 62.4463" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M114.5 62.4463L115.858 62.5871" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M115.859 62.5868L117.217 62.0615" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M117.217 62.0618L118.575 60.8525" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M118.574 60.8519L119.932 60.5107" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M119.932 60.5107L121.289 62.8154" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M121.289 62.8156L122.647 58.5068" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M122.648 58.5068L124.006 59.1804" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M124.006 59.1807L125.364 59.184" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M125.363 59.1841L126.721 57.9209" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M126.721 57.9211L128.079 56.9697" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M128.078 56.969L129.436 47.8916" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M129.438 47.8916L130.795 53.2405" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M130.795 53.2412L132.153 53.8687" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M132.152 53.8688L133.51 50.7715" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M133.51 50.771L134.868 49.7363" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M134.869 49.736L136.227 49.0928" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M136.227 49.0928L137.584 50.4086" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M137.584 50.4092L138.942 50.828" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M138.941 50.8275L140.299 50.3301" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M140.299 50.3308L141.657 48.2402" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M141.658 48.2402L143.016 50.5533" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M143.016 50.5527L144.373 52.1845" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M144.373 52.1846L145.731 53.9497" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M145.73 53.9499L147.088 53.0264" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M147.088 53.0264L148.446 52.6318" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M148.447 52.632L149.805 50.165" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M149.805 50.1648L151.163 49.4424" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M151.162 49.4424L152.52 49.7405" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M152.52 49.7402L153.877 50.3474" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M153.877 50.3481L155.235 48.3535" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M155.236 48.3535L156.594 47.5029" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M156.594 47.5025L157.952 45.6924" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M157.951 45.6924L159.309 40.4121" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M159.309 40.4121L160.666 40.7972" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M160.668 40.7969L162.026 43.9467" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M162.025 43.9471L163.383 39.9375" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M163.383 39.9375L164.741 40.871" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M164.74 40.8712L166.098 38.9854" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M166.098 38.9855L167.455 37.458" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M167.457 37.4578L168.815 32.9639" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M168.814 32.9637L170.172 21.5381" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M170.172 21.5381L171.53 26.0002" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M171.529 26.0002L172.887 24.9092" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M172.887 24.9087L174.245 22.4082" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M174.246 22.4089L175.604 17.6807" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M175.604 17.6802L176.961 15.9658" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M176.961 15.9662L178.319 15.0254" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M178.318 15.0249L179.676 13.7959" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M179.676 13.7964L181.034 13.0986" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M181.035 13.0987L182.393 13.0488" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M182.393 13.0488L183.75 12.126" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M183.75 12.126L185.108 14.2025" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M185.107 14.2019L186.465 11.5889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M186.467 11.5891L187.825 10.5615" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M187.824 10.5621L189.182 10.4785" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M189.182 10.4785L190.539 12.7016" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M190.539 12.7013L191.897 10.6807" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M191.896 10.6807L193.254 13.9956" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M193.256 13.9954L194.614 13.6953" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M194.613 13.6957L195.971 5.5332" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M195.971 5.5332L197.329 6.26648" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M197.328 6.26589L198.686 5.56836" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M198.686 5.56834L200.043 3.09766" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M200.045 3.09801L201.403 1.03613" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M201.402 1.03613L202.76 7.44493" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M202.76 7.44531L204.118 8.80197" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M204.117 8.80176L205.475 16.8604" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M205.475 16.8604L206.832 22.1222" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M206.834 22.1222L208.192 19.6963" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M208.191 19.6966L209.549 18.9473" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M209.549 18.9467L210.907 17.2656" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M210.906 17.2654L212.264 16.8975" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M212.264 16.8975L213.622 16.996" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M213.623 16.9961L214.981 19.0276" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M214.98 19.0278L216.338 15.918" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M216.338 15.9183L217.696 14.8008" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M217.695 14.8006L219.053 11.7754" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M219.055 11.7754L220.413 12.9936" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M220.412 12.9932L221.77 13.5799" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M221.77 13.5799L223.127 11.4561" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M223.127 11.4564L224.485 9.125" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M224.484 9.125L225.842 9.82318" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M225.844 9.82324L227.202 12.2044" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
</svg>

      : idGraph == 1 ?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_13372)">
      <mask id="mask0_457_13372" >
      <path d="M150 0.902344H0V44.8048H150V0.902344Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_13372)">
      <path d="M6 43.0482L6.83133 42.687" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 42.6873L7.66262 41.0366" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 41.0368L8.49398 39.4409" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 39.4409L9.32528 35.9048" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 35.9048L10.1566 38.397" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 38.397L10.9879 41.0845" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 41.0843L11.8193 31.9253" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 31.9254L12.6506 30.9346" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 30.9343L13.4819 22.7988" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 22.7988L14.3133 24.5247" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 24.5249L15.1446 28.1436" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 28.1434L15.9759 25.4927" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 25.4928L16.8072 22.6938" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 22.6938L17.6386 23.3635" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 23.3633L18.4699 25.4442" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 25.4443L19.3012 28.646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 28.6463L20.1325 28.2969" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 28.2969L20.9638 28.4027" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 28.4028L21.7952 30.1163" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 30.1161L22.6265 29.7778" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 29.778L23.4579 28.2886" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 28.2884L24.2892 26.3042" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 26.3042L25.1205 26.8909" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 26.8911L25.9518 26.9096" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 26.9094L26.7831 25.8184" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 25.8184L27.6145 27.4797" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 27.48L28.4458 28.3829" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 28.3826L29.2771 26.9678" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 26.9678L30.1084 27.5081" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 27.508L30.9398 24.1523" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 24.1523L31.7711 24.5548" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 24.5549L32.6024 24.2222" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 24.2222L33.4337 26.0701" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 26.0703L34.265 27.016" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 27.0161L35.0964 24.6748" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 24.6746L35.9277 24.4907" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 24.4907L36.7591 26.7541" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 26.7539L37.5904 26.9365" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 26.9367L38.4217 26.2231" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 26.2233L39.253 26.1865" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 26.1863L40.0843 25.6255" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 25.6254L40.9157 24.1309" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 24.131L41.747 23.7109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 23.7109L42.5783 23.001" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 23.001L43.4096 23.2256" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 23.2256L44.241 24.5075" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 24.5077L45.0723 23.0713" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 23.071L45.9036 22.707" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 22.7068L46.735 20.9312" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 20.9314L47.5663 20.5845" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 20.5846L48.3976 20.584" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 20.5839L49.2289 20.1748" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 20.1748L50.0603 22.3433" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 22.3433L50.8916 27.9654" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 27.9653L51.7229 30.7498" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 30.7495L52.5542 31.9545" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 31.9549L53.3855 29.0635" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 29.0635L54.2169 34.2463" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 34.2462L55.0482 32.0752" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 32.0751L55.8795 29.3286" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 29.3286L56.7108 30.0745" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 30.0743L57.5421 29.2642" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 29.2643L58.3735 16.4141" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 16.4141L59.2048 21.5368" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 21.5366L60.0362 28.4155" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 28.4155L60.8675 40.805" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 40.8051L61.6988 37.709" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 37.7089L62.5301 23.646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 23.6461L63.3614 22.8579" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 22.858L64.1928 21.8911" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 21.8911L65.0241 22.2139" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 22.2136L65.8554 21.9434" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 21.9434L66.6867 26.4217" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 26.4219L67.5181 35.1746" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 35.1746L68.3494 29.73" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 29.7299L69.1807 29.1875" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 29.1876L70.0121 24.3955" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 24.3954L70.8434 19.7607" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 19.7607L71.6747 22.5349" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 22.535L72.506 20.3794" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 20.3794L73.3374 22.0883" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 22.0881L74.1687 21.7046" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 21.705L75 20.9893" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 20.9892L75.8313 18.6636" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 18.6636L76.6626 17.7793" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 17.7793L77.494 20.646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 20.646L78.3253 22.3338" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 22.3335L79.1566 24.776" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 24.7764L79.9879 24.9204" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 24.9201L80.8193 24.3887" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 24.3886L81.6506 24.2524" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 24.2524L82.482 26.9735" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 26.9736L83.3133 27.2891" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 27.2889L84.1446 26.334" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 26.3344L84.9759 21.7183" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 21.7183L85.8072 24.0304" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 24.0303L86.6386 24.0944" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 24.0941L87.4699 21.5312" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 21.5312L88.3012 20.938" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 20.938L89.1325 21.5012" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 21.5015L89.9639 20.2715" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 20.2715L90.7952 20.5406" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 20.5405L91.6265 21.1526" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 21.1525L92.4578 20.3032" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 20.3032L93.2892 24.3642" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 24.3646L94.1205 24.0464" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 24.0464L94.9518 25.7188" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 25.7187L95.7831 23.3447" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 23.3444L96.6145 22.7954" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 22.7954L97.4458 21.9341" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 21.9341L98.2771 22.304" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 22.3042L99.1084 23.2797" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 23.2798L99.9398 23.3879" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 23.3877L100.771 23.2646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 23.2648L101.602 21.2358" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 21.236L102.434 20.4077" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 20.4075L103.265 18.9355" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 18.9355L104.096 18.835" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 18.835L104.928 20.0111" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 20.0112L105.759 18.9473" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 18.9473L106.59 19.9558" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 19.9557L107.422 19.9062" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 19.9064L108.253 17.1602" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 17.1602L109.084 13.709" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 13.7089L109.916 8.41406" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 8.41406L110.747 9.34715" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 9.34747L111.578 7" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 6.9999L112.41 6.35352" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 6.35352L113.241 8.91421" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 8.91423L114.072 5.95801" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 5.95781L114.904 5.01611" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 5.01615L115.735 2.6582" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 2.6582L116.566 6.15333" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 6.15319L117.398 5.2124" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 5.21236L118.229 2.68066" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 2.68066L119.06 7.69895" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 7.6992L119.892 7.68896" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 7.68881L120.723 6.17529" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 6.17543L121.554 5.00146" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 5.00146L122.386 7.42394" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 7.42388L123.217 7.25732" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 7.25732L124.048 12.6351" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 12.635L124.88 11.5723" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 11.5722L125.711 6.50195" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 6.50195L126.542 6.80678" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 6.80713L127.374 7.6116" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 7.6114L128.205 6.24561" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 6.24561L129.036 10.3467" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 10.3467L129.867 16.264" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 16.2642L130.699 22.9692" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 22.9692L131.53 28.6121" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 28.6122L132.361 28.2109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 28.2109L133.193 25.917" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 25.9167L134.024 25.7217" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 25.7218L134.855 24.4478" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 24.4478L135.687 25.041" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 25.041L136.518 25.8464" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 25.8462L137.349 26.8975" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 26.8975L138.181 27.1333" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 27.1337L139.012 26.1538" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 26.1536L139.843 24.249" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 24.249L140.675 24.7956" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 24.7954L141.506 25.0826" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 25.083L142.337 24.2617" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 24.2615L143.169 23.3169" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 23.3169L144 25.1035" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_13372">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.902344)"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph == 2 ?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_12992)">
      <mask id="mask0_457_12992" >
      <path d="M150 0H0V43.9024H150V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_12992)">
      <path d="M6 40.1513L6.83133 39.4629" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 39.4626L7.66262 39.2163" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 39.2164L8.49398 38.4131" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 38.4131L9.32528 38.948" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 38.9482L10.1566 40.8856" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 40.8854L10.9879 40.7163" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 40.7164L11.8193 40.0674" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 40.0674L12.6506 39.6577" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 39.6577L13.4819 40.1054" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 40.105L14.3133 39.8589" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 39.8591L15.1446 39.6011" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 39.6011L15.9759 39.5532" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 39.5532L16.8072 39.6623" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 39.6621L17.6386 39.763" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 39.763L18.4699 39.4043" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 39.4042L19.3012 39.4038" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 39.4038L20.1325 39.41" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 39.4102L20.9638 39.6371" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 39.6373L21.7952 39.5039" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 39.5039L22.6265 39.2363" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 39.2361L23.4579 38.748" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 38.748L24.2892 38.821" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 38.8213L25.1205 38.9508" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 38.9507L25.9518 39.3108" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 39.311L26.7831 39.4248" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 39.4248L27.6145 39.7829" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 39.7828L28.4458 39.6196" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 39.6196L29.2771 39.6667" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 39.6667L30.1084 37.998" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 37.998L30.9398 37.8838" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 37.8836L31.7711 37.522" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 37.522L32.6024 37.9533" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 37.9536L33.4337 38.1166" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 38.1164L34.265 38.0923" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 38.0923L35.0964 38.2926" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 38.2925L35.9277 38.4303" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 38.4304L36.7591 38.1484" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 38.1487L37.5904 38.0581" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 38.0581L38.4217 38.1659" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 38.1658L39.253 38.1206" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 38.1207L40.0843 37.0288" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 37.0288L40.9157 37.2924" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 37.2922L41.747 37.2236" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 37.2236L42.5783 37.8373" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 37.8374L43.4096 38.0334" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 38.0333L44.241 36.7852" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 36.785L45.0723 36.7261" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 36.7263L45.9036 35.603" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 35.603L46.735 36.0126" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 36.0122L47.5663 36.168" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 36.1683L48.3976 35.8984" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 35.8984L49.2289 36.2185" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 36.2183L50.0603 38.776" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 38.776L50.8916 38.0645" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 38.0645L51.7229 38.4798" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 38.4801L52.5542 37.8589" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 37.8589L53.3855 39.2159" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 39.2157L54.2169 38.7251" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 38.7252L55.0482 38.2114" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 38.2111L55.8795 37.7554" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 37.7554L56.7108 37.809" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 37.8091L57.5421 38.0685" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 38.0687L58.3735 37.4004" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 37.4004L59.2048 38.8417" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 38.8413L60.0362 40.4289" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 40.4292L60.8675 40.4515" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 40.4513L61.6988 40.4385" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 40.4387L62.5301 39.6328" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 39.6328L63.3614 40.5283" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 40.5283L64.1928 39.626" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 39.626L65.0241 40.5821" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 40.582L65.8554 41.4684" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 41.4683L66.6867 42.1459" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 42.1463L67.5181 39.9238" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 39.9238L68.3494 40.5013" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 40.5011L69.1807 39.9897" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 39.9897L70.0121 40.3034" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 40.3035L70.8434 39.8247" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 39.8248L71.6747 38.2495" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 38.2495L72.506 38.838" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 38.8379L73.3374 39.2401" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 39.2403L74.1687 39.1152" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 39.1152L75 39.2465" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 39.2461L75.8313 39.1514" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 39.1516L76.6626 39.0469" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 39.0467L77.494 38.6836" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 38.6837L78.3253 38.5581" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 38.5581L79.1566 39.3726" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 39.3724L79.9879 37.9521" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 37.9521L80.8193 38.0283" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 38.0283L81.6506 38.051" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 38.051L82.482 37.4619" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 37.4619L83.3133 38.6411" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 38.6413L84.1446 34.0542" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 34.0542L84.9759 35.6116" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 35.6113L85.8072 36.0786" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 36.0786L86.6386 35.2993" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 35.2992L87.4699 34.4854" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 34.4857L88.3012 33.5806" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 33.5805L89.1325 33.2681" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 33.2681L89.9639 33.1606" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 33.1606L90.7952 33.7089" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 33.7086L91.6265 33.4683" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 33.4683L92.4578 34.2061" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 34.2061L93.2892 34.4885" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 34.4888L94.1205 34.9499" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 34.9498L94.9518 34.6685" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 34.6685L95.7831 34.7408" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 34.741L96.6145 34.4497" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 34.4497L97.4458 34.4563" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 34.4561L98.2771 34.592" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 34.5923L99.1084 34.6289" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 34.6288L99.9398 34.1699" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 34.1697L100.771 33.1353" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 33.1355L101.602 30.7959" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 30.796L102.434 27.1782" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 27.1782L103.265 27.6014" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 27.6011L104.096 27.987" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 27.9872L104.928 26.4678" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 26.4678L105.759 26.9753" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 26.9751L106.59 26.7168" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 26.717L107.422 24.9409" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 24.941L108.253 21.1694" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 21.169L109.084 11.8032" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 11.8035L109.916 11.1655" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 11.1656L110.747 10.4722" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 10.4719L111.578 9.29053" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 9.29052L112.41 5.88721" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 5.88721L113.241 5.93945" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 5.93983L114.072 4.85449" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 4.8545L114.904 4.51025" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 4.51025L115.735 5.11652" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 5.11619L116.566 4.96387" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 4.96419L117.398 4.8252" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 4.8252L118.229 6.08343" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 6.08301L119.06 5.77148" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 5.7715L119.892 5.41455" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 5.41455L120.723 5.60622" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 5.60645L121.554 6.36014" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 6.35988L122.386 6.10449" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 6.10449L123.217 7.73474" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 7.73498L124.048 7.68994" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 7.69003L124.88 2.11719" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 2.11714L125.711 1.77393" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 1.77393L126.542 2.48927" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 2.48922L127.374 1.75586" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 1.75586L128.205 2.66028" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 2.66016L129.036 6.38167" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 6.38184L129.867 6.92164" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 6.92139L130.699 12.173" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 12.1733L131.53 17.219" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 17.2187L132.361 15.9751" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 15.9751L133.193 15.3433" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 15.3435L134.024 15.0303" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 15.03L134.855 14.4668" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 14.4668L135.687 15.2324" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 15.2324L136.518 16.0601" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 16.0601L137.349 16.7649" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 16.7652L138.181 16.6436" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 16.6435L139.012 16.356" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 16.3562L139.843 15.9062" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 15.906L140.675 15.6919" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 15.6918L141.506 15.2646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 15.2651L142.337 14.4302" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 14.4302L143.169 15.3144" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 15.314L144 14.9951" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_12992">
      <rect width="150" height="43.9024" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph == 3 ?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_16433)">
      <mask id="mask0_457_16433" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.463379H0V44.3658H150V0.463379Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_16433)">
      <path d="M6 34.1416L6.83133 36.3052" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 36.3052L7.66262 37.1654" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 37.1653L8.49398 35.1958" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 35.196L9.32528 33.5239" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 33.5242L10.1566 33.2974" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 33.2974L10.9879 35.5113" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 35.5112L11.8193 36.43" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 36.4299L12.6506 34.8994" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 34.8996L13.4819 34.1836" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 34.1836L14.3133 35.3913" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 35.3912L15.1446 35.1914" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 35.1917L15.9759 33.231" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 33.2308L16.8072 32.2559" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 32.2559L17.6386 32.5944" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 32.5942L18.4699 31.4678" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 31.4678L19.3012 30.9399" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 30.9399L20.1325 31.1394" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 31.1396L20.9638 33.0482" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 33.0479L21.7952 34.2929" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 34.2929L22.6265 33.729" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 33.7291L23.4579 33.4546" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 33.4545L24.2892 17.9775" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 17.978L25.1205 17.8042" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 17.8042L25.9518 20.0477" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 20.0474L26.7831 24.1162" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 24.1162L27.6145 23.8691" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 23.8691L28.4458 24.0143" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 24.0147L29.2771 22.022" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 22.022L30.1084 23.4995" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 23.4992L30.9398 21.3481" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 21.3483L31.7711 20.5034" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 20.5035L32.6024 19.2544" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 19.2544L33.4337 21.0533" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 21.0532L34.265 22.1989" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 22.1987L35.0964 23.7323" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 23.7324L35.9277 26.0029" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 26.0029L36.7591 26.3405" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 26.3408L37.5904 26.8845" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 26.8842L38.4217 26.5889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 26.589L39.253 24.9688" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 24.9687L40.0843 18.2061" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 18.2061L40.9157 9.94336" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 9.94336L41.747 10.2616" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 10.2615L42.5783 2.21924" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 2.21924L43.4096 7.98519" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 7.98523L44.241 6.23096" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 6.23096L45.0723 6.7518" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 6.75195L45.9036 9.36569" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 9.36572L46.735 9.46151" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 9.46153L47.5663 7.47412" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 7.47412L48.3976 9.4373" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 9.43701L49.2289 9.98746" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 9.98749L50.0603 9.65479" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 9.65479L50.8916 16.8942" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 16.8941L51.7229 14.5566" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 14.5566L52.5542 15.0527" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 15.0531L53.3855 13.9087" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 13.9087L54.2169 19.3452" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 19.3448L55.0482 18.9878" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 18.988L55.8795 17.8296" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 17.8297L56.7108 17.2144" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 17.2144L57.5421 18.0561" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 18.0557L58.3735 19.3927" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 19.3927L59.2048 14.4048" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 14.4048L60.0362 24.0323" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 24.0322L60.8675 32.4488" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 32.4492L61.6988 32.7832" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 32.7833L62.5301 32.7363" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 32.7363L63.3614 33.8129" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 33.8125L64.1928 36.3132" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 36.3132L65.0241 35.6929" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 35.6929L65.8554 37.3194" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 37.3193L66.6867 39.4265" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 39.4268L67.5181 41.9913" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 41.9911L68.3494 38.8955" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 38.8955L69.1807 40.2453" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 40.2458L70.0121 38.3774" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 38.3774L70.8434 39.6526" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 39.6522L71.6747 38.1924" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 38.1926L72.506 34.9346" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 34.9346L73.3374 36.312" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 36.312L74.1687 38.1946" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 38.1943L75 38.3368" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 38.3369L75.8313 39.1922" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 39.1924L76.6626 39.0503" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 39.0499L77.494 39.0059" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 39.0063L78.3253 38.6294" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 38.6294L79.1566 39.9107" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 39.9106L79.9879 42.6096" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 42.6096L80.8193 40.2905" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 40.2905L81.6506 39.9956" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 39.9956L82.482 41.2371" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 41.2368L83.3133 40.8037" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 40.8037L84.1446 39.5708" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 39.5711L84.9759 34.5278" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 34.5278L85.8072 35.0839" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 35.0835L86.6386 36.0016" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 36.0019L87.4699 35.4619" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 35.462L88.3012 35.0474" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 35.0474L89.1325 35.1344" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 35.1341L89.9639 34.2632" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 34.2632L90.7952 34.3989" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 34.3989L91.6265 35.2021" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 35.2024L92.4578 34.6777" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 34.6777L93.2892 36.8131" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 36.813L94.1205 37.4468" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 37.4468L94.9518 38.0348" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 38.0348L95.7831 36.6763" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 36.6763L96.6145 36.9083" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 36.9083L97.4458 36.6587" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 36.6587L98.2771 34.6162" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 34.6162L99.1084 35.0538" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 35.0537L99.9398 35.8127" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 35.8126L100.771 32.5889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 32.589L101.602 31.4683" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 31.4683L102.434 30.7358" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 30.7356L103.265 29.7412" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 29.7412L104.096 29.7631" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 29.7632L104.928 30.8014" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 30.8013L105.759 31.1109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 31.1108L106.59 31.4117" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 31.4116L107.422 31.7606" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 31.7606L108.253 29.9702" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 29.9705L109.084 25.4414" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 25.4414L109.916 19.5776" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 19.5775L110.747 18.7046" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 18.7047L111.578 14.2197" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 14.2197L112.41 14.6359" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 14.6357L113.241 15.8065" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 15.8062L114.072 11.4326" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 11.4326L114.904 13.1979" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 13.1982L115.735 12.9404" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 12.9405L116.566 11.4922" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 11.4922L117.398 9.70361" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 9.70335L118.229 9.05615" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 9.05615L119.06 13.9318" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 13.9322L119.892 13.3701" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 13.3698L120.723 11.3633" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 11.3633L121.554 11.8882" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 11.8882L122.386 14.316" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 14.3161L123.217 13.9966" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 13.9966L124.048 17.6008" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 17.6007L124.88 16.9756" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 16.9758L125.711 12.1382" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 12.1382L126.542 9.4873" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 9.4873L127.374 11.9608" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 11.9609L128.205 13.3029" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 13.3027L129.036 15.9837" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 15.9839L129.867 22.5015" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 22.5015L130.699 26.5072" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 26.5068L131.53 34.2178" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 34.2183L132.361 35.5492" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 35.5488L133.193 30.8643" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 30.8644L134.024 28.6279" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 28.6281L134.855 28.2598" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 28.2598L135.687 26.1465" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 26.1465L136.518 27.1259" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 27.126L137.349 28.0983" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 28.0981L138.181 29.2343" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 29.2341L139.012 28.6235" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 28.6237L139.843 28.5942" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 28.5942L140.675 28.6571" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 28.6569L141.506 27.8799" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 27.88L142.337 26.04" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 26.0401L143.169 25.5283" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 25.5283L144 27.7452" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_16433">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.463379)"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph == 4 ?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_16072)">
      <mask id="mask0_457_16072" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.463379H0V44.3658H150V0.463379Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_16072)">
      <path d="M6 39.582L6.83133 39.6961" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 39.6962L7.66262 38.5059" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 38.5059L8.49398 39.0176" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 39.0173L9.32528 38.314" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 38.314L10.1566 38.7982" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 38.7983L10.9879 40.0731" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 40.0732L11.8193 40.7075" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 40.7075L12.6506 39.9507" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 39.9504L13.4819 38.8877" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 38.8878L14.3133 38.6919" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 38.6921L15.1446 37.5068" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 37.5066L15.9759 36.1802" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 36.1803L16.8072 35.25" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 35.25L17.6386 36.6449" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 36.645L18.4699 37.3136" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 37.3131L19.3012 37.1226" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 37.1229L20.1325 37.0391" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 37.0391L20.9638 37.2819" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 37.2817L21.7952 37.7075" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 37.7075L22.6265 37.2393" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 37.2393L23.4579 37.0669" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 37.0671L24.2892 35.7612" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 35.7608L25.1205 35.3306" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 35.3306L25.9518 35.5735" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 35.5737L26.7831 36.3497" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 36.3496L27.6145 36.711" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 36.7109L28.4458 36.7868" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 36.7869L29.2771 36.7222" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 36.7222L30.1084 36.4736" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 36.4737L30.9398 35.457" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 35.4568L31.7711 35.4058" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 35.406L32.6024 35.0869" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 35.0869L33.4337 35.8444" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 35.8442L34.265 36.2627" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 36.263L35.0964 36.0825" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 36.0825L35.9277 36.4433" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 36.4434L36.7591 36.955" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 36.9546L37.5904 36.7549" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 36.755L38.4217 36.3071" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 36.3071L39.253 36.4046" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 36.4048L40.0843 36.6037" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 36.6035L40.9157 35.7598" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 35.7598L41.747 35.8197" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 35.8199L42.5783 35.7871" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 35.7871L43.4096 36.7885" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 36.7881L44.241 36.7903" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 36.7904L45.0723 36.084" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 36.084L45.9036 35.9482" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 35.9483L46.735 35.2012" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 35.2012L47.5663 35.2852" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 35.2853L48.3976 35.2432" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 35.2432L49.2289 35.7208" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 35.7207L50.0603 36.112" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 36.1123L50.8916 38.5644" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 38.5641L51.7229 38.3657" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 38.3657L52.5542 38.6771" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 38.6771L53.3855 38.3311" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 38.3311L54.2169 39.6269" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 39.627L55.0482 39.7507" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 39.7507L55.8795 39.1787" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 39.1789L56.7108 38.5967" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 38.5968L57.5421 38.4629" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 38.4629L58.3735 38.592" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 38.592L59.2048 38.252" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 38.252L60.0362 39.9841" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 39.9839L60.8675 41.6996" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 41.6999L61.6988 41.4756" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 41.4755L62.5301 41.2368" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 41.2369L63.3614 40.6377" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 40.6377L64.1928 41.1488" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 41.1486L65.0241 40.5806" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 40.5806L65.8554 41.0995" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 41.0996L66.6867 41.5966" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 41.5967L67.5181 42.6096" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 42.6095L68.3494 41.0928" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 41.0928L69.1807 41.0181" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 41.018L70.0121 40.9038" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 40.9038L70.8434 41.1396" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 41.1398L71.6747 40.7158" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 40.7157L72.506 39.6543" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 39.6543L73.3374 40.288" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 40.2881L74.1687 40.7368" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 40.7368L75 40.8046" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 40.8042L75.8313 40.9033" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 40.9033L76.6626 41.1531" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 41.1533L77.494 41.0269" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 41.0269L78.3253 40.9072" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 40.9071L79.1566 40.8887" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 40.8887L79.9879 41.6666" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 41.6664L80.8193 40.3408" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 40.3408L81.6506 40.548" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 40.5483L82.482 41.036" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 41.0358L83.3133 40.5811" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 40.5812L84.1446 38.9751" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 38.975L84.9759 37.0728" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 37.0728L85.8072 36.5669" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 36.5669L86.6386 37.183" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 37.1828L87.4699 36.3501" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 36.3501L88.3012 35.605" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 35.605L89.1325 35.7921" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 35.792L89.9639 35.5576" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 35.5576L90.7952 35.6724" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 35.6726L91.6265 35.6646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 35.6647L92.4578 35.457" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 35.457L93.2892 36.3664" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 36.3662L94.1205 36.5173" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 36.5176L94.9518 36.7746" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 36.7743L95.7831 36.2388" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 36.2389L96.6145 36.23" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 36.2298L97.4458 36.1982" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 36.1982L98.2771 36.2152" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 36.2154L99.1084 35.811" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 35.811L99.9398 35.8812" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 35.8811L100.771 35.5903" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 35.5903L101.602 34.6704" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 34.6705L102.434 34.0522" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 34.0522L103.265 32.958" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 32.9581L104.096 32.4175" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 32.4175L104.928 32.8761" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 32.8759L105.759 32.2642" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 32.2642L106.59 32.6698" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 32.6701L107.422 32.623" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 32.6228L108.253 31.9204" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 31.9202L109.084 29.1445" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 29.1448L109.916 28.4214" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 28.4215L110.747 28.2935" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 28.2935L111.578 28.5798" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 28.5795L112.41 27.7539" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 27.7539L113.241 28.7387" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 28.7389L114.072 27.481" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 27.481L114.904 27.5526" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 27.5526L115.735 27.1011" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 27.1011L116.566 27.6055" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 27.6054L117.398 27.3496" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 27.3496L118.229 27.5245" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 27.5244L119.06 28.7959" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 28.7962L119.892 28.4673" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 28.467L120.723 27.7598" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 27.7598L121.554 28.1486" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 28.1489L122.386 28.0259" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 28.0257L123.217 27.4526" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 27.4526L124.048 29.2887" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 29.2886L124.88 28.2959" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 28.2961L125.711 26.8628" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 26.8627L126.542 26.7524" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 26.7524L127.374 21.5513" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 21.5513L128.205 21.0405" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 21.0407L129.036 18.6528" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 18.6528L129.867 18.8314" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 18.8315L130.699 21.5825" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 21.5825L131.53 24.0584" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 24.0581L132.361 29.3842" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 29.3842L133.193 24.8188" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 24.8188L134.024 22.4189" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 22.4193L134.855 18.9746" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 18.9745L135.687 8.03369" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 8.03375L136.518 7.57422" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 7.57392L137.349 6.79883" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 6.79883L138.181 9.50649" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 9.50687L139.012 8.95508" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 8.95491L139.843 7.33594" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 7.33594L140.675 8.4206" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 8.42078L141.506 4.0625" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 4.0625L142.337 2.58203" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 2.58203L143.169 2.76731" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 2.76716L144 2.21924" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_16072">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.463379)"/>
      </clipPath>
      </defs>
      </svg>
      : idGraph == 5 ?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_15711)">
      <mask id="mask0_457_15711" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.512207H0V44.4146H150V0.512207Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_15711)">
      <path d="M6 22.3804L6.83133 22.6398" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 22.6398L7.66262 22.438" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 22.438L8.49398 23.1752" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 23.1754L9.32528 22.5557" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 22.5557L10.1566 23.5773" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 23.5771L10.9879 26.7447" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 26.7447L11.8193 23.0757" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 23.0757L12.6506 23.8821" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 23.882L13.4819 22.2739" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 22.2739L14.3133 22.6837" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 22.6836L15.1446 23.3887" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 23.3892L15.9759 25.0835" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 25.0835L16.8072 24.6299" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 24.6299L17.6386 24.9598" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 24.9595L18.4699 29.6353" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 29.6353L19.3012 29.7389" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 29.7393L20.1325 30.268" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 30.2679L20.9638 27.353" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 27.353L21.7952 27.6127" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 27.6128L22.6265 27.7352" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 27.7349L23.4579 30.0621" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 30.0625L24.2892 27.2632" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 27.2631L25.1205 24.3491" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 24.349L25.9518 24.1685" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 24.1685L26.7831 24.6861" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 24.6858L27.6145 24.332" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 24.332L28.4458 24.5494" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 24.5498L29.2771 24.7113" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 24.7109L30.1084 26.0732" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 26.0732L30.9398 24.4707" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 24.4708L31.7711 23.0547" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 23.0547L32.6024 22.6387" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 22.6388L33.4337 22.0967" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 22.0967L34.265 27.2827" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 27.2827L35.0964 27.9039" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 27.9038L35.9277 29.111" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 29.111L36.7591 28.1938" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 28.1938L37.5904 28.6012" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 28.6011L38.4217 28.6066" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 28.6068L39.253 27.8213" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 27.8211L40.0843 25.3945" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 25.3945L40.9157 27.1812" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 27.1813L41.747 26.3003" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 26.3003L42.5783 34.3923" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 34.3923L43.4096 26.5234" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 26.5234L44.241 30.0054" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 30.0054L45.0723 31.2496" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 31.25L45.9036 23.52" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 23.52L46.735 25.5316" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 25.5315L47.5663 23.9966" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 23.9966L48.3976 29.7478" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 29.7476L49.2289 32.2173" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 32.2175L50.0603 30.5854" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 30.5852L50.8916 28.3647" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 28.3647L51.7229 28.6662" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 28.6665L52.5542 31.4432" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 31.4429L53.3855 24.3257" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 24.3257L54.2169 33.2505" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 33.2505L55.0482 33.3285" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 33.3289L55.8795 32.9917" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 32.9917L56.7108 34.4163" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 34.416L57.5421 33.0112" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 33.0114L58.3735 24.8545" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 24.8545L59.2048 24.0078" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 24.0076L60.0362 23.5107" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 23.5108L60.8675 22.5078" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 22.508L61.6988 13.7988" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 13.7988L62.5301 19.7744" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 19.7745L63.3614 19.3408" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 19.3408L64.1928 22.4633" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 22.463L65.0241 21.144" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 21.1441L65.8554 16.9185" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 16.9185L66.6867 19.221" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 19.2212L67.5181 22.256" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 22.256L68.3494 14.6797" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 14.6797L69.1807 14.7479" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 14.748L70.0121 2.26807" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 2.26807L70.8434 20.8903" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 20.8902L71.6747 13.9453" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 13.9453L72.506 27.2176" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 27.2178L73.3374 21.3013" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 21.3013L74.1687 26.8561" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 26.856L75 27.8107" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 27.8104L75.8313 27.3311" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 27.3312L76.6626 27.1221" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 27.1219L77.494 26.6714" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 26.6717L78.3253 26.4966" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 26.4966L79.1566 33.0771" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 33.077L79.9879 26.9683" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 26.9681L80.8193 26.4331" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 26.4331L81.6506 27.4456" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 27.4458L82.482 31.4964" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 31.4961L83.3133 42.6581" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 42.6581L84.1446 29.5" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 29.5004L84.9759 26.9727" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 26.9727L85.8072 27.5741" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 27.5737L86.6386 27.0576" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 27.0576L87.4699 27.579" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 27.5791L88.3012 27.5798" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 27.5801L89.1325 28.339" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 28.3389L89.9639 22.3018" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 22.3015L90.7952 21.707" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 21.707L91.6265 22.6417" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 22.6421L92.4578 22.061" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 22.0607L93.2892 21.8916" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 21.8918L94.1205 21.6968" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 21.6968L94.9518 21.8165" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 21.8164L95.7831 30.8485" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 30.8486L96.6145 31.6228" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 31.6226L97.4458 32.0394" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 32.0393L98.2771 26.8926" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 26.8926L99.1084 28.1202" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 28.1204L99.9398 27.3677" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 27.3677L100.771 33.3187" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 33.3188L101.602 34.1544" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 34.1545L102.434 28.2627" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 28.2627L103.265 28.3881" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 28.3877L104.096 27.9448" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 27.9448L104.928 28.0695" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 28.0698L105.759 30.2653" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 30.2651L106.59 26.7212" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 26.7212L107.422 22.9351" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 22.9353L108.253 22.1523" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 22.1522L109.084 19.1016" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 19.1017L109.916 14.7085" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 14.7084L110.747 12.0542" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 12.054L111.578 10.5542" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 10.5545L112.41 9.13379" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 9.13379L113.241 19.4867" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 19.4868L114.072 20.4968" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 20.4966L114.904 22.5" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 22.4998L115.735 17.8237" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 17.8239L116.566 11.3892" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 11.3892L117.398 26.4583" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 26.4584L118.229 26.3618" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 26.3618L119.06 26.3654" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 26.3651L119.892 25.7246" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 25.7246L120.723 26.6873" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 26.6875L121.554 26.74" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 26.7402L122.386 31.7999" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 31.7997L123.217 26.8975" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 26.8975L124.048 30.4012" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 30.4016L124.88 26.4312" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 26.4312L125.711 28.1213" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 28.1209L126.542 24.6089" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 24.6092L127.374 22.812" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 22.812L128.205 23.133" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 23.1328L129.036 23.3794" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 23.3793L129.867 23.1538" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 23.1538L130.699 27.1229" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 27.123L131.53 27.1604" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 27.1602L132.361 24.3237" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 24.3236L133.193 22.5767" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 22.5767L134.024 28.1302" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 28.1303L134.855 28.0649" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 28.0651L135.687 27.397" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 27.397L136.518 27.9943" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 27.9941L137.349 28.1136" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 28.1138L138.181 29.4413" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 29.4412L139.012 27.4551" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 27.4551L139.843 28.4978" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 28.4979L140.675 28.2271" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 28.2271L141.506 28.7927" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 28.7924L142.337 28.2773" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 28.2773L143.169 29.5032" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 29.5034L144 34.0939" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_15711">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.512207)"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph == 6?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_15350)">
      <mask id="mask0_457_15350" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.609863H0V44.5123H150V0.609863Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_15350)">
      <path d="M6 36.659L6.83133 35.9595" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 35.9595L7.66262 36.046" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 36.0458L8.49398 34.7441" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 34.7441L9.32528 35.9399" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 35.9399L10.1566 37.0688" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 37.0688L10.9879 36.311" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 36.3113L11.8193 35.6899" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 35.6895L12.6506 35.4038" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 35.4038L13.4819 37.4642" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 37.4645L14.3133 36.3423" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 36.3423L15.1446 36.7771" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 36.7769L15.9759 37.8625" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 37.8628L16.8072 38.4529" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 38.4527L17.6386 38.4341" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 38.4342L18.4699 38.3481" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 38.348L19.3012 38.002" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 38.002L20.1325 38.5347" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 38.5347L20.9638 39.1896" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 39.1899L21.7952 39.3085" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 39.3085L22.6265 38.9858" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 38.986L23.4579 37.4155" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 37.4153L24.2892 36.8252" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 36.8251L25.1205 36.5923" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 36.5923L25.9518 37.7317" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 37.7319L26.7831 38.5679" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 38.5679L27.6145 38.9183" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 38.918L28.4458 38.8335" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 38.8339L29.2771 38.6538" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 38.6538L30.1084 36.7578" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 36.7576L30.9398 36.2349" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 36.2351L31.7711 35.8398" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 35.8398L32.6024 36.6653" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 36.665L33.4337 36.6842" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 36.6845L34.265 36.3726" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 36.3726L35.0964 36.696" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 36.6958L35.9277 36.9347" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 36.9348L36.7591 36.6826" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 36.6823L37.5904 35.9282" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 35.9282L38.4217 36.8236" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 36.8238L39.253 36.3267" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 36.3267L40.0843 34.2744" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 34.2742L40.9157 33.5312" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 33.5312L41.747 33.6108" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 33.6108L42.5783 34.7003" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 34.7002L43.4096 34.9426" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 34.943L44.241 34.4932" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 34.4929L45.0723 34.0986" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 34.0988L45.9036 33.6753" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 33.6753L46.735 34.0945" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 34.0947L47.5663 34.3006" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 34.3003L48.3976 34.3573" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 34.3574L49.2289 35.3329" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 35.333L50.0603 38.5195" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 38.5195L50.8916 39.8401" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 39.8398L51.7229 40.2011" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 40.2012L52.5542 38.7583" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 38.7583L53.3855 41.3499" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 41.35L54.2169 41.1821" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 41.182L55.0482 40.541" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 40.5412L55.8795 40.4482" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 40.4482L56.7108 40.646" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 40.646L57.5421 40.6147" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 40.6146L58.3735 39.2578" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 39.2578L59.2048 40.5706" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 40.5708L60.0362 42.7561" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 42.7562L60.8675 42.4185" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 42.4181L61.6988 30.5669" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 30.5669L62.5301 25.6567" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 25.6567L63.3614 30.6323" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 30.6326L64.1928 27.3647" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 27.3648L65.0241 26.1392" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 26.1392L65.8554 28.0878" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 28.0879L66.6867 29.5835" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 29.5832L67.5181 19.0278" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 19.0278L68.3494 21.2255" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 21.2256L69.1807 23.0304" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 23.0308L70.0121 24.1944" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 24.1943L70.8434 24.746" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 24.7459L71.6747 22.6562" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 22.6562L72.506 22.3711" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 22.3711L73.3374 23.8688" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 23.8687L74.1687 23.9094" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 23.9097L75 24.7622" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 24.7622L75.8313 25.6612" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 25.6611L76.6626 24.7944" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 24.7945L77.494 24.2231" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 24.2228L78.3253 21.6724" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 21.6724L79.1566 24.8701" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 24.8705L79.9879 24.2622" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 24.2622L80.8193 25.3426" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 25.3423L81.6506 25.103" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 25.103L82.482 23.438" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 23.4382L83.3133 18.4014" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 18.401L84.1446 17.9727" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 17.9727L84.9759 19.2442" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 19.2441L85.8072 20.6098" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 20.6098L86.6386 19.9116" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 19.9116L87.4699 19.6782" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 19.6784L88.3012 19.5244" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 19.5243L89.1325 19.2339" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 19.2339L89.9639 19.7287" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 19.729L90.7952 20.2672" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 20.2673L91.6265 18.9146" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 18.9146L92.4578 20.8239" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 20.8235L93.2892 20.2021" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 20.2021L94.1205 20.3438" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 20.344L94.9518 19.5234" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 19.5237L95.7831 19.2935" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 19.2935L96.6145 19.4192" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 19.4191L97.4458 18.8086" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 18.8086L98.2771 18.9524" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 18.9521L99.1084 19.3817" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 19.3819L99.9398 19.1025" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 19.1023L100.771 18.457" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 18.4573L101.602 16.3105" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 16.3105L102.434 15.0771" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 15.0771L103.265 15.3699" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 15.3696L104.096 16.4856" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 16.4858L104.928 16.8942" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 16.894L105.759 17.1998" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 17.2002L106.59 17.39" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 17.3898L107.422 16.2725" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 16.2726L108.253 12.4551" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 12.455L109.084 9.57715" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 9.57715L109.916 10.9943" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 10.9942L110.747 9.80273" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 9.80303L111.578 9.02246" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 9.02246L112.41 10.6445" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 10.6446L113.241 9.31836" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 9.31797L114.072 8.61279" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 8.61295L114.904 8.49023" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 8.49023L115.735 9.63917" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 9.63909L116.566 9.12939" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 9.12939L117.398 9.295" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 9.29541L118.229 12.3747" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 12.3744L119.06 11.8979" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 11.8979L119.892 11.6133" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 11.6133L120.723 12.0172" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 12.0176L121.554 12.8892" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 12.8892L122.386 11.9321" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 11.9321L123.217 14.3217" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 14.3216L124.048 12.3711" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 12.3709L124.88 9.33252" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 9.33256L125.711 3.8877" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 3.88776L126.542 2.36572" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 2.36572L127.374 2.79602" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 2.7959L128.205 5.05086" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 5.05078L129.036 7.43057" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 7.43066L129.867 8.16585" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 8.16602L130.699 16.1196" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 16.1196L131.53 16.3128" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 16.3126L132.361 15.5889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 15.5888L133.193 14.2632" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 14.2632L134.024 14.8258" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 14.8261L134.855 13.9785" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 13.9785L135.687 14.8844" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 14.8843L136.518 15.4418" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 15.4418L137.349 15.3589" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 15.3586L138.181 14.8511" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 14.8511L139.012 14.3638" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 14.3638L139.843 14.9282" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 14.9283L140.675 14.894" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 14.894L141.506 14.9373" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 14.9372L142.337 13.3267" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 13.3267L143.169 13.8115" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 13.8114L144 13.1265" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_15350">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.609863)"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph==7?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_14989)">
      <mask id="mask0_457_14989" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.70752H0V44.61H150V0.70752Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_14989)">
      <path d="M6 39.4624L6.83133 40.3142" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 40.314L7.66262 38.8799" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 38.8799L8.49398 40.7024" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 40.7026L9.32528 41.9526" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 41.9525L10.1566 40.4907" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 40.4907L10.9879 40.9464" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 40.9463L11.8193 41.2952" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 41.2953L12.6506 41.1382" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 41.1382L13.4819 41.6736" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 41.6733L14.3133 41.7106" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 41.7109L15.1446 39.9595" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 39.9595L15.9759 40.4415" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 40.4414L16.8072 41.1528" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 41.153L17.6386 39.2935" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 39.2935L18.4699 39.7452" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 39.7452L19.3012 39.6035" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 39.6034L20.1325 39.2119" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 39.2119L20.9638 40.8481" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 40.8479L21.7952 38.9048" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 38.9048L22.6265 39.6549" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 39.6548L23.4579 39.6637" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 39.6637L24.2892 39.6108" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 39.6108L25.1205 39.8656" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 39.8656L25.9518 39.0396" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 39.0396L26.7831 41.2878" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 41.2881L27.6145 42.8537" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 42.8536L28.4458 41.5112" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 41.5114L29.2771 40.022" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 40.0219L30.1084 39.6211" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 39.6211L30.9398 41.6862" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 41.686L31.7711 40.9609" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 40.9612L32.6024 40.3228" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 40.3227L33.4337 39.6221" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 39.6221L34.265 40.1358" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 40.136L35.0964 39.3643" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 39.3639L35.9277 39.1431" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 39.1431L36.7591 41.5162" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 41.5166L37.5904 41.5915" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 41.5914L38.4217 39.4902" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 39.4902L39.253 39.513" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 39.5132L40.0843 39.0317" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 39.0317L40.9157 40.1701" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 40.1697L41.747 38.8491" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 38.8491L42.5783 39.364" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 39.3643L43.4096 40.9287" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 40.9289L44.241 37.9185" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 37.9185L45.0723 38.8321" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 38.8319L45.9036 38.7485" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 38.7485L46.735 42.2722" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 42.2722L47.5663 40.1665" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 40.1665L48.3976 40.3853" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 40.3853L49.2289 41.0759" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 41.0762L50.0603 42.1534" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 42.153L50.8916 39.1733" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 39.1733L51.7229 39.3717" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 39.3721L52.5542 36.9248" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 36.9245L53.3855 35.6509" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 35.6509L54.2169 36.4537" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 36.4536L55.0482 38.059" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 38.0592L55.8795 37.7402" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 37.7405L56.7108 36.2798" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 36.2796L57.5421 36.2544" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 36.2546L58.3735 25.5928" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 25.5923L59.2048 25.5264" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 25.5268L60.0362 22.9126" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 22.9124L60.8675 2.46338" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 2.46338L61.6988 22.6957" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 22.6957L62.5301 22.2896" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 22.2896L63.3614 22.6433" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 22.6431L64.1928 22.6598" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 22.6598L65.0241 22.5298" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 22.5298L65.8554 23.5198" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 23.5201L66.6867 23.2666" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 23.2666L67.5181 23.1973" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 23.1971L68.3494 22.8228" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 22.8228L69.1807 23.7404" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 23.7402L70.0121 23.9575" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 23.9575L70.8434 24.5816" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 24.5818L71.6747 24.0752" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 24.0749L72.506 23.9463" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 23.9463L73.3374 24.0793" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 24.0795L74.1687 23.9785" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 23.9785L75 23.9913" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 23.9912L75.8313 23.354" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 23.354L76.6626 23.365" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 23.3647L77.494 23.3741" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 23.3744L78.3253 23.3315" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 23.3315L79.1566 22.9375" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 22.9375L79.9879 23.3533" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 23.353L80.8193 23.2456" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 23.2456L81.6506 25.6026" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 25.603L82.482 27.2725" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 27.2722L83.3133 26.9248" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 26.9248L84.1446 28.9741" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 28.9743L84.9759 28.4238" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 28.4236L85.8072 25.8799" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 25.8799L86.6386 31.8959" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 31.8963L87.4699 31.2871" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 31.287L88.3012 30.9346" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 30.9346L89.1325 31.8991" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 31.8989L89.9639 34.2484" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 34.2486L90.7952 33.4102" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 33.4102L91.6265 33.617" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 33.6167L92.4578 34.0936" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 34.0939L93.2892 32.5479" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 32.5479L94.1205 33.7606" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 33.7603L94.9518 34.5731" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 34.5734L95.7831 31.5659" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 31.5657L96.6145 31.3589" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 31.3589L97.4458 31.6403" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 31.6405L98.2771 31.1411" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 31.1411L99.1084 32.2214" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 32.2212L99.9398 34.4983" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 34.4985L100.771 34.3398" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 34.3399L101.602 33.1719" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 33.1719L102.434 33.9932" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 33.9932L103.265 34.5692" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 34.5693L104.096 34.2759" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 34.2758L104.928 33.665" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 33.665L105.759 37.3582" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 37.3582L106.59 36.1445" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 36.1445L107.422 36.5948" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 36.5947L108.253 38.3536" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 38.3535L109.084 38.4666" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 38.4668L109.916 39.7765" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 39.7765L110.747 39.562" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 39.562L111.578 39.0986" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 39.0982L112.41 38.4653" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 38.4653L113.241 40.4036" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 40.4038L114.072 40.1211" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 40.1212L114.904 39.686" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 39.686L115.735 39.7932" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 39.793L116.566 39.4927" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 39.4929L117.398 37.6001" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 37.6001L118.229 38.4647" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 38.4648L119.06 39.8228" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 39.8225L119.892 39.4468" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 39.4467L120.723 38.4351" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 38.4351L121.554 40.0296" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 40.0297L122.386 39.8711" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 39.8711L123.217 39.0547" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 39.0549L124.048 38.1479" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 38.1479L124.88 39.2691" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 39.269L125.711 39.9235" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 39.9236L126.542 39.3193" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 39.3192L127.374 38.8735" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 38.8739L128.205 38.8364" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 38.8364L129.036 39.6805" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 39.6802L129.867 42.5604" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 42.5603L130.699 41.0952" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 41.0954L131.53 40.9365" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 40.9363L132.361 38.8101" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 38.8101L133.193 39.4995" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 39.5L134.024 38.9214" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 38.9214L134.855 39.788" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 39.7876L135.687 39.3325" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 39.3325L136.518 39.839" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 39.8394L137.349 39.8473" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 39.8472L138.181 40.2926" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 40.2926L139.012 39.9648" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 39.9649L139.843 39.1973" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 39.1974L140.675 38.8164" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 38.8164L141.506 39.43" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 39.4298L142.337 38.7021" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 38.7021L143.169 40.4616" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 40.4619L144 42.0849" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_14989">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.70752)"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph==8?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_14455)">
      <mask id="mask0_457_14455" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.756348H0V44.6588H150V0.756348Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_14455)">
      <path d="M6 22.2236L6.83133 22.8364" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 22.8366L7.66262 17.1758" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 17.1758L8.49398 21.724" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 21.7238L9.32528 19.2075" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 19.2075L10.1566 22.6748" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 22.6748L10.9879 24.6947" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 24.6948L11.8193 25.3913" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 25.391L12.6506 23.7866" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 23.7867L13.4819 22.5288" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 22.5288L14.3133 25.3708" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 25.371L15.1446 23.5938" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 23.5934L15.9759 22.6538" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 22.6541L16.8072 22.5444" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 22.5444L17.6386 23.4523" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 23.452L18.4699 23.0083" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 23.0087L19.3012 22.3291" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 22.3289L20.1325 21.7437" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 21.7437L20.9638 22.7074" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 22.7073L21.7952 22.4038" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 22.4036L22.6265 22.1436" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 22.1436L23.4579 22.6632" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 22.6635L24.2892 21.8081" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 21.8081L25.1205 21.2524" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 21.2524L25.9518 22.3424" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 22.3423L26.7831 23.0089" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 23.009L27.6145 22.1177" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 22.1177L28.4458 23.0036" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 23.0034L29.2771 22.5762" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 22.5765L30.1084 22.3271" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 22.3267L30.9398 20.499" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 20.499L31.7711 22.5237" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 22.5239L32.6024 22.6591" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 22.6592L33.4337 22.8536" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 22.8535L34.265 22.8791" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 22.8792L35.0964 22.3579" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 22.3579L35.9277 22.6934" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 22.6934L36.7591 22.741" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 22.7407L37.5904 21.5898" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 21.5898L38.4217 22.6561" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 22.6564L39.253 20.8564" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 20.8564L40.0843 22.8518" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 22.8514L40.9157 22.1084" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 22.1084L41.747 22.5206" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 22.521L42.5783 22.7429" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 22.7427L43.4096 22.9104" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 22.9105L44.241 21.2163" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 21.2163L45.0723 22.7082" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 22.7079L45.9036 21.3232" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 21.3232L46.735 22.2892" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 22.2896L47.5663 22.6378" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 22.6377L48.3976 22.6379" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 22.6377L49.2289 22.1719" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 22.1719L50.0603 22.4652" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 22.4653L50.8916 25.109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 25.1092L51.7229 20.7109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 20.7109L52.5542 22.5668" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 22.5664L53.3855 22.6715" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 22.6719L54.2169 26.743" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 26.7427L55.0482 22.4062" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 22.4064L55.8795 20.5234" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 20.5234L56.7108 22.6866" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 22.6865L57.5421 23.3844" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 23.3843L58.3735 23.7949" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 23.7952L59.2048 22.7075" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 22.7075L60.0362 25.62" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 25.6196L60.8675 25.8083" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 25.8082L61.6988 22.6865" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 22.6865L62.5301 23.9557" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 23.956L63.3614 23.0962" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 23.0962L64.1928 23.1296" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 23.1293L65.0241 20.8086" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 20.8086L65.8554 23.4292" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 23.4292L66.6867 23.5193" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 23.5194L67.5181 22.2246" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 22.2246L68.3494 21.8521" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 21.8523L69.1807 20.8335" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 20.8335L70.0121 22.1788" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 22.1786L70.8434 21.3306" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 21.3306L71.6747 20.8726" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 20.8726L72.506 21.9838" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 21.9839L73.3374 22.6908" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 22.6909L74.1687 23.0699" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 23.0699L75 22.5112" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 22.5112L75.8313 22.9079" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 22.9077L76.6626 23.9982" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 23.9983L77.494 21.2886" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 21.2886L78.3253 21.4316" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 21.4316L79.1566 22.2952" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 22.2949L79.9879 23.1677" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 23.1679L80.8193 19.0088" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 19.0088L81.6506 22.6182" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 22.6182L82.482 22.7032" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 22.703L83.3133 21.0967" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 21.0969L84.1446 20.3779" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 20.3778L84.9759 2.51221" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 2.51221L85.8072 22.029" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 22.0288L86.6386 22.701" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 22.7014L87.4699 22.2109" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 22.2109L88.3012 22.2065" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 22.2065L89.1325 22.6397" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 22.6393L89.9639 22.3247" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 22.3249L90.7952 17.7388" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 17.7388L91.6265 19.6824" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 19.6824L92.4578 19.5464" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 19.5464L93.2892 23.0191" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 23.0192L94.1205 22.708" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 22.708L94.9518 23.5858" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 23.5858L95.7831 22.5215" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 22.5215L96.6145 22.7035" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 22.7031L97.4458 22.8501" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 22.8506L98.2771 23.0165" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 23.0161L99.1084 23.3713" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 23.3714L99.9398 22.688" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 22.6877L100.771 20.8564" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 20.8568L101.602 20.3452" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 20.3453L102.434 16.832" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 16.832L103.265 21.4377" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 21.4375L104.096 22.5941" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 22.5942L104.928 22.7478" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 22.7475L105.759 22.2925" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 22.2925L106.59 22.7604" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 22.7606L107.422 21.1362" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 21.1361L108.253 20.5386" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 20.5389L109.084 16.9116" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 16.9116L109.916 14.104" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 14.104L110.747 17.0745" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 17.0742L111.578 22.6221" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 22.6222L112.41 21.6504" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 21.6504L113.241 22.366" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 22.366L114.072 20.2085" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 20.2085L114.904 21.4885" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 21.4883L115.735 22.4485" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 22.4484L116.566 22.2412" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 22.2412L117.398 20.501" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 20.501L118.229 22.312" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 22.312L119.06 22.6036" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 22.6039L119.892 22.2832" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 22.2829L120.723 21.8975" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 21.8975L121.554 23.7216" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 23.7217L122.386 24.0545" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 24.0544L123.217 22.0889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 22.0889L124.048 26.6183" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 26.6186L124.88 21.9956" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 21.9956L125.711 15.1084" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 15.1084L126.542 19.7162" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 19.7158L127.374 22.6687" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 22.6689L128.205 22.806" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 22.8062L129.036 25.2449" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 25.2446L129.867 28.3738" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 28.3737L130.699 22.707" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 22.707L131.53 42.9022" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 42.9024L132.361 38.7607" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 38.7605L133.193 21.1914" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 21.1914L134.024 21.0781" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 21.0781L134.855 22.602" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 22.6021L135.687 22.7222" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 22.7224L136.518 22.6069" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 22.6069L137.349 23.5551" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 23.555L138.181 22.7007" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 22.7007L139.012 23.2486" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 23.2488L139.843 19.6343" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 19.6343L140.675 22.5139" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 22.5136L141.506 22.4106" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 22.4106L142.337 22.6677" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 22.6682L143.169 21.6006" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 21.6006L144 22.7685" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_14455">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.756348)"/>
      </clipPath>
      </defs>
      </svg>
      :idGraph==9?
      <svg className={className}
      width={graphWidth}
      height="81"
       fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_457_14094)">
      <mask id="mask0_457_14094" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="150" height="45">
      <path d="M150 0.756348H0V44.6588H150V0.756348Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_457_14094)">
      <path d="M6 42.685L6.83133 42.355" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M6.8313 42.355L7.66262 42.4479" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M7.66266 42.4476L8.49398 41.9917" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M8.49396 41.9917L9.32528 42.2108" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M9.32532 42.2109L10.1566 42.9024" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.1566 42.9025L10.9879 42.2397" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.988 42.2395L11.8193 41.8403" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M11.8193 41.8407L12.6506 41.0742" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M12.6506 41.0741L13.4819 40.4971" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M13.4819 40.497L14.3133 39.21" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M14.3132 39.2097L15.1446 37.187" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.1446 37.187L15.9759 37.872" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M15.9759 37.8721L16.8072 38.6569" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M16.8073 38.6572L17.6386 38.625" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M17.6385 38.6249L18.4699 37.6616" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.4699 37.6616L19.3012 37.8754" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19.3012 37.8755L20.1325 38.6336" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.1325 38.6333L20.9638 38.6591" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M20.9639 38.6592L21.7952 37.1768" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M21.7952 37.1768L22.6265 37.742" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M22.6265 37.7422L23.4579 36.8945" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M23.4578 36.8944L24.2892 35.4473" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M24.2892 35.4473L25.1205 35.6862" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.1205 35.6864L25.9518 35.6274" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M25.9518 35.6271L26.7831 34.9263" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M26.7831 34.9263L27.6145 33.8374" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M27.6144 33.8375L28.4458 33.4546" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M28.4458 33.4544L29.2771 33.3374" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M29.2771 33.3376L30.1084 32.25" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.1085 32.25L30.9398 32.3465" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M30.9398 32.3467L31.7711 32.7942" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M31.7711 32.794L32.6024 32.519" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M32.6024 32.519L33.4337 33.0309" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M33.4337 33.0308L34.265 33.2277" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M34.2651 33.228L35.0964 33.9585" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.0964 33.9584L35.9277 33.8286" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M35.9277 33.8283L36.7591 32.8584" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M36.759 32.8585L37.5904 32.7661" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M37.5903 32.766L38.4217 32.3745" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M38.4217 32.3747L39.253 32.1265" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M39.253 32.1265L40.0843 30.5151" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.0844 30.5151L40.9157 30.8844" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M40.9156 30.8843L41.747 31.2623" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.747 31.2622L42.5783 31.5985" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M42.5783 31.5988L43.4096 31.5771" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M43.4097 31.5771L44.241 31.9147" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M44.241 31.9144L45.0723 31.8677" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.0723 31.8677L45.9036 31.1665" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M45.9036 31.1665L46.735 31.5625" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M46.7349 31.5625L47.5663 31.8298" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47.5663 31.8301L48.3976 31.9667" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M48.3976 31.9668L49.2289 32.3415" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M49.2289 32.3413L50.0603 33.6518" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.0602 33.6516L50.8916 33.2607" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M50.8915 33.2608L51.7229 32.3745" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M51.7229 32.3744L52.5542 30.2764" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M52.5542 30.2764L53.3855 32.7612" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M53.3856 32.7615L54.2169 32.5879" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M54.2169 32.5881L55.0482 32.2031" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.0482 32.2028L55.8795 31.7422" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M55.8795 31.7425L56.7108 30.436" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M56.7108 30.436L57.5421 29.8726" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M57.5422 29.8726L58.3735 30.0626" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M58.3735 30.0625L59.2048 32.7161" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M59.2048 32.7163L60.0362 32.7584" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.0361 32.7584L60.8675 30.7778" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M60.8675 30.7775L61.6988 28.8838" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M61.6988 28.8838L62.5301 30.649" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M62.5301 30.6489L63.3614 31.9653" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M63.3615 31.9655L64.1928 30.5376" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M64.1927 30.5376L65.0241 32.487" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.0241 32.4868L65.8554 32.7206" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M65.8554 32.7207L66.6867 34.944" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M66.6868 34.9439L67.5181 33.3364" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M67.5181 33.3367L68.3494 31.3569" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M68.3494 31.3569L69.1807 31.7366" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M69.1807 31.7363L70.0121 31.9129" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.0121 31.9128L70.8434 31.8481" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M70.8434 31.8485L71.6747 30.6372" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M71.6747 30.6371L72.506 29.4209" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M72.506 29.4209L73.3374 30.7722" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M73.3373 30.772L74.1687 30.6235" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M74.1687 30.6235L75 30.7273" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75 30.7273L75.8313 30.7222" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M75.8313 30.7222L76.6626 31.4126" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M76.6627 31.4126L77.494 31.3359" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M77.494 31.3359L78.3253 31.5978" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M78.3253 31.5981L79.1566 32.5161" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.1566 32.5158L79.9879 31.2017" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M79.988 31.2018L80.8193 31.0073" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M80.8193 31.0073L81.6506 31.5385" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M81.6506 31.5387L82.482 31.458" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M82.4819 31.4577L83.3133 28.1211" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M83.3132 28.1213L84.1446 22.9878" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.1446 22.9876L84.9759 20.6533" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M84.9759 20.6533L85.8072 20.5283" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M85.8073 20.5283L86.6386 21.856" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M86.6385 21.8562L87.4699 21.5278" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M87.4698 21.5278L88.3012 21.6709" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M88.3012 21.671L89.1325 20.73" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.1326 20.7299L89.9639 20.0933" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M89.9639 20.0933L90.7952 20.6138" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M90.7952 20.6137L91.6265 20.3403" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M91.6265 20.3403L92.4578 20.6204" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M92.4578 20.6207L93.2892 20.3354" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M93.2892 20.3352L94.1205 18.9478" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.1205 18.9478L94.9518 19.1851" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M94.9518 19.1851L95.7831 19.9412" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M95.7831 19.9411L96.6145 18.5527" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M96.6144 18.5529L97.4458 18.1504" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M97.4458 18.1504L98.2771 18.2648" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M98.2771 18.2646L99.1084 18.6" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.1085 18.6L99.9398 18.2866" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M99.9398 18.287L100.771 17.166" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M100.771 17.166L101.602 17.6482" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M101.602 17.6481L102.434 15.7271" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M102.434 15.7271L103.265 15.6807" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M103.265 15.6807L104.096 17.8555" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.096 17.8553L104.928 16.564" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M104.928 16.564L105.759 17.1397" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M105.759 17.1396L106.59 17.8081" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M106.59 17.8083L107.422 17.0273" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M107.422 17.0274L108.253 15.7261" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M108.253 15.7259L109.084 12.0908" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.084 12.0908L109.916 13.269" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M109.916 13.2693L110.747 12.0415" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M110.747 12.0414L111.578 9.3667" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M111.578 9.3667L112.41 9.95547" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M112.41 9.95541L113.241 2.51221" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M113.241 2.51221L114.072 2.56311" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.072 2.56299L114.904 3.27486" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M114.904 3.2749L115.735 4.67715" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M115.735 4.67732L116.566 3.80566" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M116.566 3.80566L117.398 4.3423" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M117.398 4.34229L118.229 4.66163" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M118.229 4.66162L119.06 4.97683" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.06 4.97694L119.892 4.81006" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M119.892 4.81006L120.723 5.58327" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M120.723 5.58301L121.554 6.05179" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M121.554 6.05169L122.386 5.02441" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M122.386 5.02441L123.217 6.70734" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M123.217 6.70757L124.048 6.57617" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.048 6.57604L124.88 4.60889" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M124.88 4.60883L125.711 3.71631" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M125.711 3.71631L126.542 3.81849" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M126.542 3.81885L127.374 4.29294" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M127.373 4.29297L128.205 5.50748" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M128.205 5.50732L129.036 6.34513" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.036 6.34521L129.867 7.95586" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M129.867 7.95557L130.699 11.025" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M130.699 11.0252L131.53 9.5874" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M131.53 9.58737L132.361 6.9873" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M132.361 6.9873L133.193 8.62253" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M133.193 8.62256L134.024 8.99216" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.024 8.99219L134.855 9.72486" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M134.855 9.72461L135.687 11.1597" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M135.687 11.1597L136.518 11.2094" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M136.518 11.2093L137.349 10.5591" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M137.349 10.5593L138.181 10.2842" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M138.181 10.2843L139.012 10.1055" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.012 10.1055L139.843 11.046" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M139.843 11.046L140.675 10.519" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M140.675 10.519L141.506 10.9442" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M141.506 10.9441L142.337 10.6021" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M142.337 10.6021L143.169 12.4568" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M143.169 12.457L144 13.0083" stroke="#09D0B8" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_457_14094">
      <rect width="150" height="43.9024" fill="white" transform="translate(0 0.756348)"/>
      </clipPath>
      </defs>
      </svg>

      : null

    }
    </>
    
  );
};

export default Graph;
