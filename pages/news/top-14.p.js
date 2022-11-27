import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TOP 14</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TOP 14"/>
        <meta name="description" content="Trending News about TOP 14" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TOP 14</h1>
            <Image width={800} height={500} src="https://i.rugbyrama.fr/2022/11/26/3497578-71298735-1600-900.jpg" alt="TOP 14"/>
            <h3>Recent News</h3>
            <a href='https://www.rugbyrama.fr/rugby/top-14/2022-2023/top-14-le-barometre-de-la-rochelle-castres-skelton-et-tanga-inarretables-ben-nicholas-hors-sujet_sto9245044/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top 14 - Le baromètre de La Rochelle - Castres : Skelton et Tanga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5vag-8uSgg4-HHKZrbOUvJ0xctNTHbZIDpliVuMjAr6eDC443A2gg_D54UoKzxHI5NdYy25kZ" alt="Top 14 - Le baromètre de La Rochelle - Castres : Skelton et Tanga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TOP 14 - Dans une rencontre à sens unique en faveur de La Rochelle, nombre de Maritimes se sont illustrés, comme Will Skelton et Yoan Tanga.</p></div>
            </div>
        </a><a href='https://www.rugbyrama.fr/rugby/top-14/2022-2023/top-14-jefferson-poirot-bordeaux-begles-japlatis-mais-larbitre-ne-peut-pas-laccorder_sto9245227/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top 14 - Jefferson Poirot (Bordeaux-Bègles) : &quot;J&#39;aplatis mais l&#39;arbitre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUz9SFqTdT1WWp0R3arJFkUTke--XhXAUX13Gb1Ob3yd83GVBpJrHx84rW3IZpUtQ59LC0V74i" alt="Top 14 - Jefferson Poirot (Bordeaux-Bègles) : &quot;J&#39;aplatis mais l&#39;arbitre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TOP 14 - Battu à Aimé-Giral par Perpignan (23-20), les Bordelais ont eu plusieurs occasions en fin de match pour arracher la victoire.</p></div>
            </div>
        </a>
        </Template></>;
}