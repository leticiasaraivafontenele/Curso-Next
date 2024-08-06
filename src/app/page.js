import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1 className={styles.title}>Hello World, Next.js</h1>
      <ul>
        <li>
          <Link legacyBehavior href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link legacyBehavior href="/about/projects"><a>Projects</a></Link>
        </li>
        <li>
          <Link legacyBehavior href="/"><a>Home</a></Link>
        </li>
      </ul>
      {/* <Image src="/image/city.jpg" width={200} height={200} alt="cidade a noite" /> */}

      
    </main>
  );
}
