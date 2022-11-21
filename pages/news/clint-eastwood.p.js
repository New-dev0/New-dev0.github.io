import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clint Eastwood</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clint Eastwood"/>
        <meta name="description" content="Trending News about Clint Eastwood" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clint Eastwood</h1>
            <Image width={800} height={500} src="https://www.tagesspiegel.de/images/993283291jpg/alternates/BASE_16_9_W1400/993283291jpg.jpeg" alt="Clint Eastwood"/>
            <h3>Recent News</h3>
            <a href='https://www.tagesspiegel.de/gesellschaft/medien/wer-ist-clint-eastwood-von-wegen-macho-8898907.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wer ist Clint Eastwood?: Von wegen Macho</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpmodiyZAZvi7lt_uLIDWhrQtE7XkgRrgXxqUPOxwgcexCgtFplBoCl0I3pW5ugsChO_LiTt0f" alt="Wer ist Clint Eastwood?: Von wegen Macho" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dem am 31. Mai 1930 in Kalifornien geborenen Schauspieler, Regisseur, Drehbuchautor und Produzenten ist ein Dokumentarfilm von Clélia Cohen gewidmet („Clint&nbsp;...</p></div>
            </div>
        </a><a href='https://kulturnews.de/clint-eastwood-arte-mediathek/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clint Eastwood in der Arte Mediathek: Doku über die Legende</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0X_5SJTVOpfvxinHxEdtQqua9yDGBUVcjjHx53sYvbM2Yw1OAbWI3tB4thj_CUQi1j4HNGBhv" alt="Clint Eastwood in der Arte Mediathek: Doku über die Legende" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clint Eastwood ist in der Arte Mediathek in einer Dokumentation zu sehen, die sich seiner langen Karriere widmet. Eine lebende Legende!</p></div>
            </div>
        </a>
        </Template></>;
}