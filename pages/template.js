import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const year = new Date().getFullYear();

function TitlePress(router) {
    if (router.pathname != "/") {
        router.push("/");
    }
}

export function Template({ children, show_footer = true, show_content = true }) {
    const router = useRouter();
    return <>
        <header className={styles.header}>
            <p style={{width: "100vh", justifyContent: "space-between", display: "flex"}}>
                <span onClick={() => TitlePress(router)}>New-Dev0</span>
            {show_content && <a href="/projects" style={{ justifySelf: "flex-end",  fontSize: 22 }}>Projects</a>}
            </p>
        </header>
        <main className={styles.main}>
            {children}
        </main>
        {show_footer && <footer className={styles.footer}>
            New-Dev0@{year}
        </footer>}
    </>
}