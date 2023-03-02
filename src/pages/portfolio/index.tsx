import React from "react";
import styles from "../../styles/Portfolio.module.css";
import { usePosts } from "../../hooks/usePosts";

const Index: React.FC = () => {
  const posts = usePosts();

  return (
    <div className={styles.portfolio_wrapper}>
      {posts.length ? (
        <div className={styles.card_container}>
          <ul className={styles.card_ul}>
            {posts.map((item) => {
              return (
                <li key={item.id} className={styles.card_li}>
                  <p className={styles.card_title}>{item.title}</p>
                  <img
                    src={item.featured_image}
                    alt="Featured image"
                    className={styles.card_img}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Index;
