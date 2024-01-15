import styles from "@/styles/counter.module.css"
const Counter = ({ id, name, score, incScore, decScore }) => {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <div className={styles.counter}>
        <button className={styles.btn} onClick={() => decScore(id)}>
          -
        </button>
        <h2>{score}</h2>
        <button className={styles.btn} onClick={() => incScore(id)}>
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
