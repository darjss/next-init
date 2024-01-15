import styles from "@/styles/button.module.css"
const Button = ({ func, name }) => {
    return (
        <button className={styles.resetBtn} onClick={func}>
            <p>{name}</p>
        </button>
    )
}
export default Button