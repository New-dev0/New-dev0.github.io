import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Martha Argerich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Martha Argerich"/>
        <meta name="description" content="Trending News about Martha Argerich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Martha Argerich</h1>
            <Image width={800} height={500} src="https://kulturnews.de/wp-content/uploads/2022/11/daniel-barenboim.jpg" alt="Martha Argerich"/>
            <h3>Recent News</h3>
            <a href='https://kulturnews.de/daniel-barenboim-martha-argerich-zdf-mediathek/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daniel Barenboim und Martha Argerich in der ZDF-Mediathek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYKCUvsIvKeA2Ae9jYW41iQa5z3BSAfsu5vxQId3K44osmLJ64VzNapbjjdURWTD3Ndl0GzN7A" alt="Daniel Barenboim und Martha Argerich in der ZDF-Mediathek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Barenboim, Martha Argerich und das West-Eastern Divan Orchestra sind in der ZDF-Mediathek und auf 3sat zu sehen. - jetzt lesen.</p></div>
            </div>
        </a><a href='https://www.news.de/tv-aktuell/856612485/daniel-barenboim-und-martha-argerich-im-teatro-colon-im-tv-und-online-als-live-stream-in-der-3sat-mediathek-das-legendaere-konzert-von-2015-aus-buenos-aires-heute/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Daniel Barenboim und Martha Argerich Im Teatro Colón&quot; bei 3sat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSYnS0wCl4-2TS4NhdrDWSizogwhc2yBoKn_smc9t-s7EWHPa0yPL4pbrhzdF1jdCkxSMFur4K" alt="&quot;Daniel Barenboim und Martha Argerich Im Teatro Colón&quot; bei 3sat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute, am 26.11.2022, läuft &quot;Daniel Barenboim und Martha Argerich Im Teatro Colón&quot; im TV. Wann und wo Sie das Konzert mit &quot;Das legendäre Konzert von 2015&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}