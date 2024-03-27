import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  categories: any;
};

function CategoriesComponent({ categories }: Props) {
  return (
    <>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            key={category.id}
            className={styles.category}
            href={`/${category.id}`}
          >
            <div className={styles.name}>{category.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

export { CategoriesComponent };
