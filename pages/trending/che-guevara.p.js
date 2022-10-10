import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Che Guevara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Che Guevara"/>
        <meta name="description" content="Trending News about Che Guevara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Che Guevara</h1>
            <Image width={800} height={500} src="https://www.newsclick.in/sites/default/files/2022-10/TODAY%27S%20NEWS%20ROUNDUP%20%2872%29.png" alt="Che Guevara"/>
            <h3>Recent News</h3>
            <a href='https://www.newsclick.in/relook-book-bolivian-diaries-ernesto-che-guevara-che-a-memoir-fidel-castro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Relook at a Book: The Bolivian Diaries by Ernesto Che Guevara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQaFjzhzHH8yso6rzOPzS-k0xgTMAizC6crFuXoRpzVML_OBjyJcgLlUkx4pGlNOpr5dOp-jYa5" alt="Relook at a Book: The Bolivian Diaries by Ernesto Che Guevara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On October 9, 1967, CIA operatives brutally killed Che Guevara. The Diaries record his last months, fighting in the Bolivian jungles.</p></div>
            </div>
        </a><a href='https://countercurrents.org/2022/10/tania-undercover-for-che-guevara-in-bolivia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tania-Undercover For Che Guevara In Bolivia| Countercurrents</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQwJOM0ADolkKKYQd8YbphakkclFI5l5BT0S7WK8KVEfiKMIGJzuLeK5utbgE9Z28I6Ig2oHVWQ" alt="Tania-Undercover For Che Guevara In Bolivia| Countercurrents" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ulises Estrada, editor of Tricontinental, joined Cuban revolution from the very beginning as part of 26<sup>th</sup> July movement in 1953. He was part of Cuban liberation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newstalk.com/podcasts/on-the-record-with-gavan-reilly/hidden-histories-che-guevara-in-ireland'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hidden Histories: Che Guevara in Ireland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ671vT9OQF-cOQOF-aczyh3zI4MuxqRVgR67dYk_JPxgyG1USOApRGksJBdg9-FOa_YjLDPmUI" alt="Hidden Histories: Che Guevara in Ireland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On this date in 1967, a 39-year-old was unceremoniously executed in Bolivia. In time, his image would be described as becoming &quot;as iconic as the Nike swoosh&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}