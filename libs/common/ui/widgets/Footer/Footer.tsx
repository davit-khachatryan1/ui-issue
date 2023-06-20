import React from "react";
import FooterLogo from "../../assets/imgs/dark_logo.svg";
import Link from 'next/link'

export const Footer = ({data} : {data : any}) => {
  const list = data?.data.attributes.resources_list.split(",");
  
  const navList = [
   {
      title: list[0] ?? null,
      link: "/about"
   },
   {
      title: list[1] ?? null,
      link: "/faq"
   },
];

   function handlerClick() {
      const toStart = document.querySelector('.container-fluid'); 
      smoothScroll(toStart);
   }

   function smoothScroll(elem: any) {
      return new Promise<void>((resolve) => {
        if (!(elem instanceof Element)) {
          throw new TypeError('Argument 1 must be an Element');
        }
        let same = 0; // a counter
        let lastPos: any = null; // last known Y position
        // pass the user defined options along with our default
        const scrollOptions = Object.assign({ behavior: 'smooth' });
  
        // let's begin
        elem.scrollIntoView(scrollOptions);
        requestAnimationFrame(check);
  
        // this function will be called every painting frame
        // for the duration of the smooth scroll operation
        function check() {
          // check our current position
          const newPos = elem.getBoundingClientRect().top;
  
          if (newPos === lastPos) { // same as previous
            if (same++ > 2 || Math.floor(lastPos) == 0) { // if it's more than two frames
              /* @todo: verify it succeeded
              * if(isAtCorrectPosition(elem, options) {
              *   resolve();
              * } else {
              *   reject();
              * }
              * return;
              */
              if (lastPos < 0) {
               smoothScroll(elem);
             }
              return resolve(); // we've come to an halt
            }
          }
          else {
            same = 0; // reset our counter
            lastPos = newPos; // remember our current position
          }
          // check again next painting frame
          requestAnimationFrame(check);
        }
      });
    }

  return (
      <footer className="pt-4 pt-md-5 section-11">
        <div className="row">
          <div className="col-6 col-md">
            <h5 className="text-1 t-invert" >{data?.data.attributes.title_resources}</h5>
            <ul className="list-unstyled text-small">
              {navList.map(({title, link}, i : any) => {
                if (title) {
                  return(
                     <li key={i}>
                        <Link href={link} legacyBehavior>
                        <a className="text-2 op-7" onClick={handlerClick} >{title}</a>
                        </Link>
                     </li>
                  )
                }
              })}
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-1 t-invert" >{data?.data.attributes.title_contact}</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-2  op-7" href="mailto:info@dEquity.io">{data?.data.attributes.email}</a></li>
              <Link target="_blank" href="https://twitter.com/dEquity_io" className="social-svg">
                <svg width="16" height="16" viewBox="0 0 56.693 56.693" fill="currentColor"><path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path></svg>
              </Link>
              <Link target="_blank" href="https://t.me/dEquity_io" className="social-svg">
                <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path></svg>
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md footer-logo">
            <img className="mb-2" src={FooterLogo.src} alt="FooterLogo"/>
            <p className="mb-3 text-2 op-7 t-invert">{data?.data.attributes.copyright_text}</p>

          </div>
        </div>
        <div className="section-12 "><p className="text-1 op-7 t-invert">{data?.data.attributes.test_site_text}</p></div>
      </footer>
  );
};

export default Footer;
