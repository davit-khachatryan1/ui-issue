import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Tags.module.scss";

interface ITags {
  tagList: { title: string; link: string }[];
  tagName: string;
}
export const Tags: FC<ITags> = ({ tagList, tagName }) => {
    const router = useRouter();
  return <ul className={styles.tags}>
    <li className={styles.tags__name}>
      {/* Tags  */}
      {tagName}
      :
    </li>
    {tagList.map(tag => (
        <li key={tag.title} className={styles.tags__item} onClick={() => router.push(tag.link)}>{tag.title}</li>
    ))}
  </ul>;
};

export default Tags;
