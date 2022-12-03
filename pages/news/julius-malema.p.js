import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Julius Malema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Julius Malema"/>
        <meta name="description" content="Trending News about Julius Malema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Julius Malema</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/fx6fjtbjk3lh6chtowkl" alt="Julius Malema"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/12/01/sahrc-files-case-against-malema-eff-at-equality-court-over-comments-made-in-wc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SAHRC files case against Malema, EFF at Equality Court over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCveJeD6V1N36lIKKDyJWWv3twcHEJXl0R4hhOwtkfyb57wyd2Cw-D6mIaqeuWJWoVsfwguIzp" alt="SAHRC files case against Malema, EFF at Equality Court over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JOHANNESBURG - The South African Human Rights Commission (SAHRC) has filed a case against the Economic Freedom Fighters (EFF) and its leader Julius Malema&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}