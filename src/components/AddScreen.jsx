import styles from "@/styles/add.module.css"
const AddScreen = ({ bool, value, setPlayerName, addFunc }) => {
  if (bool) {
    return (
      <div className={styles.addScreen}>
        <input
          type="text"
          placeholder="John Doe"
          className={styles.numInput}
          onChange={(event) => setPlayerName(event, "name")}
        />
        <input
          type="text"
          placeholder="score"
          className={styles.numInput}
          onChange={(event) => setPlayerName(event, "score")}
        />
        <button className={styles.btn} onClick={() => addFunc()}>
          Enter
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default AddScreen;
