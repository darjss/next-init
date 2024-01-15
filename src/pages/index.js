import Link from "next/link";
import Board from "@/components/Board";
import styles from "@/styles/global.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/test">Go To ScoreBoard</Link>
      <Board />
    </div>
  );
}
