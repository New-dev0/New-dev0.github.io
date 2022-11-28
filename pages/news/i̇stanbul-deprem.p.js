import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>İstanbul deprem</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,İstanbul deprem"/>
        <meta name="description" content="Trending News about İstanbul deprem" /></Head><Template>
            <h1 style={{fontSize: "30"}}>İstanbul deprem</h1>
            <Image width={800} height={500} src="" alt="İstanbul deprem"/>
            <h3>Recent News</h3>
            <a href='https://www.karar.com/sehir-haberleri/istanbulda-deprem-sakasi-korkuttu-gerizekali-1708096'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>İstanbul&#39;da deprem şakası korkuttu: Gerizekalı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfinDALd45ZkQl-rOCs8fF5u3oUraMfaT82t-X361IbmHdLPQKDJzXx0lMuWpLhtrOE6Gxz_iS" alt="İstanbul&#39;da deprem şakası korkuttu: Gerizekalı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her an deprem olacak endişesiyle günlerini geçiren İstanbullulara &#39;deprem şakası&#39; yapan adam tepki topladı. Taksim metro istasyonunda yürüyen merdivende&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}