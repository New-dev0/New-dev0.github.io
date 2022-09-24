import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Xi Jinping</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Xi Jinping</h1>
            <Image width={800} height={500} src="https://bitterwinter.org/wp-content/uploads/2022/09/Xi-Jinping-visiting-Tibet-2021.jpeg" alt="Xi Jinping"/>
            <h3>Recent News</h3>
            <a href='https://bitterwinter.org/why-xi-jinpings-re-election-is-bad-for-tibet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Xi Jinping&#39;s Re-Election Is Bad for Tibet</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1LvTGHsnLDUOXZjiP1UQvt0ojBAar_R5gQ8q4SV2hfIs1GHh9pWK79R6FYyZUnyvviurirzyF" alt="Why Xi Jinping&#39;s Re-Election Is Bad for Tibet" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chinese President&#39;s attitude to Tibetan Buddhism can be read in his actions before the 20th Congress: monks, nuns, and activists arrested,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}