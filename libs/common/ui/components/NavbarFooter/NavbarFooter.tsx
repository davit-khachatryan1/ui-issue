import { useRouter } from "next/router";
import React from "react";
import styles from "./NavbarFooter.module.scss";

export const NavbarFooter = () => {
  const navList = [
    {
      title: "Resourses",
      subList: [
        {
          title: "About Us",
          link: "/",
        },
        {
          title: "Learn",
          link: "/",
        },
        {
          title: "Careers",
          link: "/",
        },
      ],
    },
    {
      title: "Quick Links",
      subList: [
        {
          title: "Top Offers",
          link: "/",
        },
        {
          title: "Portfolio",
          link: "/",
        },
        {
          title: "Blog",
          link: "/",
        },
      ],
    },
    {
      title: "Documents",
      subList: [
        {
          title: "Privacy Policy",
          link: "/",
        },
        {
          title: "Terms of Service",
          link: "/",
        },
        {
          title: "Full Disclosures",
          link: "/",
        },
      ],
    },
    {
      title: "Contact Us",
      subList: [
        {
          title: "Help & Support",
          link: "/",
        },
        {
          title: "press@dequity.com",
          link: "mailto:press@dequity.com",
        },
      ],
    },
  ];
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {navList.map((navItem) => (
          <ul key={navItem.title} className={styles.navbar__subList}>
            {navItem.title}
            {navItem.subList.map((item) => (
              <li
                key={item.title}
                className={styles.navbar__item}
                onClick={() => router.push(item.link)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarFooter;
