import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>27 ноября День матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,27 ноября День матери"/>
        <meta name="description" content="Trending News about 27 ноября День матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>27 ноября День матери</h1>
            <Image width={800} height={500} src="https://bel.ru/attachments/d6dc1bc7105203c97a7c9a8e6863961f38c54df2/store/crop/0/0/1280/720/1280/720/0/317a54750a4f3929fbbcc6a6e6f12ba3c361f0e5ce6c906dfa52d65ca5a6/80NCqpY7BlE.jpg" alt="27 ноября День матери"/>
            <h3>Recent News</h3>
            <a href='https://bel.ru/news/2022-11-27/27-noyabrya-belgorodtsy-obsuzhdali-den-materi-i-obstrel-shebekino-2601092'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября белгородцы обсуждали День матери и обстрел ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJvVpFbGfl56exka0WwRe0mSCFFSynDRgIHygVSPXSkVQRJZnfmRgHxYLB_GlD4TJdUy4xO60_" alt="27 ноября белгородцы обсуждали День матери и обстрел ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В воскресенье ВСУ обстреляли окраину Шебекино, в регионе изменилось движение 13 автобусов, а военные поздравили матерей с праздником.</p></div>
            </div>
        </a>
        </Template></>;
}