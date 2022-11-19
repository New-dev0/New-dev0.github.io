import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rosalia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rosalia"/>
        <meta name="description" content="Trending News about Rosalia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rosalia</h1>
            <Image width={800} height={500} src="https://resize.elle.fr/original/var/plain_site/storage/images/people/tapis-rouge/evenements/rosalia-christina-aguilera-bad-bunny-le-tapis-rouge-des-latin-grammy-awards-2022/97835410-1-fre-FR/Rosalia-Christina-Aguilera-Bad-Bunny-le-tapis-rouge-des-Latin-Grammy-Awards-2022.jpg" alt="Rosalia"/>
            <h3>Recent News</h3>
            <a href='https://www.elle.fr/People/Tapis-rouge/Evenements/Rosalia-Christina-Aguilera-Bad-Bunny-le-tapis-rouge-des-Latin-Grammy-Awards-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosalía, Christina Aguilera, Bad Bunny : le tapis rouge des Latin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnoiaEueX_TFnIPhuBvFd-JPuddhcX5HjUln9zPUmq_O6IYJKJanLjfL9z5RFDFelgc3ojt2RQ" alt="Rosalía, Christina Aguilera, Bad Bunny : le tapis rouge des Latin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce 17 novembre, les Latin Grammy Awards 2022 ont été organisés à Las Vegas. Cette cérémonie récompense les plus grandes stars de la chanson latine.</p></div>
            </div>
        </a><a href='https://www.vogue.fr/mode/galerie/rosalia-style-looks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosalía a conquis la mode… La preuve en 14 looks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGacIrzfFvHD1gLfzECvccL2ZVyCYkFeKI0CCM1eTtzff3YZBba2yUzynu4Xi7BRwrPr3sAYJR" alt="Rosalía a conquis la mode… La preuve en 14 looks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acne Studios, Y/Project, Jacquemus, Givenchy… La chanteuse et compositrice espagnole Rosalía multiplie les looks pointus. Revue en images.</p></div>
            </div>
        </a>
        </Template></>;
}