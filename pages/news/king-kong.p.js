import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>King Kong</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,King Kong"/>
        <meta name="description" content="Trending News about King Kong" /></Head><Template>
            <h1 style={{fontSize: "30"}}>King Kong</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/king-kong-andy-serkis.jpg?ver=1" alt="King Kong"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/king-kong-le-film-de-peter-jackson-devait-a-lorigine-etre-bien-different-5502233/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>King Kong : le film de Peter Jackson devait à l&#39;origine être bien ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0VUPc-7G79_GbjuMhtDeSXVx8xLcJFtZdXlER_5w5-44fIuAavo_n3eov-fCVPqxITPqAhm6x" alt="King Kong : le film de Peter Jackson devait à l&#39;origine être bien ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À l&#39;origine, Peter Jackson avait prévu un script différent pour &quot;King Kong&quot;, qui ressemblait beaucoup à celui d&#39;un autre film hollywoodien.</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/king-kong-nrj-12-grosse-113802832.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>King Kong (NRJ 12) : La grosse chute de Naomi Watts pendant le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTWzok3_R3P1dxkVaqixnlIsxig_WIt79ehJmyieFxCp_N8eXboK5T-QcIj7dsFnKMHRcuLKW6B" alt="King Kong (NRJ 12) : La grosse chute de Naomi Watts pendant le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soixante-douze ans après le King Kong de 1933, Peter Jackson en signe un remake époustouflant à voir ce soir sur France 2.</p></div>
            </div>
        </a>
        </Template></>;
}