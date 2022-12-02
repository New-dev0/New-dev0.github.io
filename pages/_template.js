import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Navbar, Text } from "@nextui-org/react";

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
            <p style={{width: "100%", justifyContent: "space-between", display: "flex"}}>
                <span onClick={() => TitlePress(router)}>New-Dev0</span>
            {show_content && <a href="/projects" style={{ justifySelf: "flex-end",  fontSize: 22, marginTop: "5px" }}>Projects</a>}
            </p>
        </header>
        <hr style={{borderBottom:"none"}}/>
        <main className={styles.main}>
            {children}
        </main>
        {show_footer && <footer className={styles.footer}>
            New-Dev0@{year}
        </footer>}
    </>
}