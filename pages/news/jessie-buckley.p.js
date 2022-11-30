import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jessie Buckley</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jessie Buckley"/>
        <meta name="description" content="Trending News about Jessie Buckley" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jessie Buckley</h1>
            <Image width={800} height={500} src="https://www.indiewire.com/wp-content/uploads/2022/10/Women-Talking-100922-01-2000-22445325244045e1a7243ac1e5039737.webp?w=650" alt="Jessie Buckley"/>
            <h3>Recent News</h3>
            <a href='https://www.indiewire.com/2022/11/oscar-contender-jessie-buckley-women-talking-ensemble-1234785625/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oscar Contender Jessie Buckley Is the One Who Pops in &#39;Women ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQwdctUrAc4qWstBeQvDH2Nop5a43WfJA4UvAONWuhu2Y9aGzwDzFcjT0rYtQk1pHIo3zpidN7k" alt="Oscar Contender Jessie Buckley Is the One Who Pops in &#39;Women ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>And that&#39;s after she &quot;did an awful audition on Zoom&quot; (&quot;as you always do on Zoom&quot;).</p></div>
            </div>
        </a>
        </Template></>;
}