import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Путин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Путин"/>
        <meta name="description" content="Trending News about Владимир Путин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Путин</h1>
            <Image width={800} height={500} src="https://api.bashinform.ru/attachments/5ca762b808e31e8ad2bdc220135e435ebf2888fa/store/crop/6/0/1593/900/1593/900/0/71b891127be093cd9e83afa92ea4990c2eeb32d75ae981a6733190ed5e00/GOFwppbrwhbyOHA5R9WggAN2ehnA541A.jpeg.jpg" alt="Владимир Путин"/>
            <h3>Recent News</h3>
            <a href='https://www.bashinform.ru/news/social/2022-11-26/vladimir-putin-prisvoil-zvanie-mat-geroinya-esche-semi-zhenschinam-3047241'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин присвоил звание «Мать-героиня» еще семи ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKoq3TVrGiM3GmvSqJXmVCbfCFfUhtBIoGbdGErNX2pduDGFcX0eoavVn4hntWzszePsSVUBOO" alt="Владимир Путин присвоил звание «Мать-героиня» еще семи ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Указ об учреждении звания «Мать-героиня» подписан 15 августа 2022 года. Данное звание могут получить женщины, родившие и воспитавшие 10 и более детей,&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-26/vladimir-putin-prisvoil-peterburzhenke-zvanie-matgeroinya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин присвоил петербурженке звание «Мать-героиня»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPxKgF1GrKagmgsh_3WsH6IRRq_lVPkJF9LnGB_EWQ9QDJbuNePgECSdwwZ-bS4Bttc-zReEpQ" alt="Владимир Путин присвоил петербурженке звание «Мать-героиня»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Звание также получили еще шесть женщин в разных регионах России. Фото: kremlin.ru. Президент России Владимир Путин присвоил звание «Мать-героиня» семи&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5692460'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин присвоил звание «Мать-героиня» семи россиянкам</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Путин присвоил звание «Мать-героиня» семи россиянкам" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин присвоил семи россиянкам звание «Мать-героиня». Они удостоены звания за большие заслуги в укреплении института семьи,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.volgograd.ru/gubernator/tekush/437447/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин присвоил многодетной маме из Волгоградской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Владимир Путин присвоил многодетной маме из Волгоградской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин присвоил звание «Мать-героиня» семи женщинам, в числе которых — жительница Волгоградской области Галина Меньшикова. С&nbsp;...</p></div>
            </div>
        </a><a href='https://vpravda.ru/obshchestvo/prezident-rf-vladimir-putin-prisvoil-volgogradke-zvanie-mat-geroinya-146902/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президент РФ Владимир Путин присвоил волгоградке звание ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStCTKTDoHMTZM7sbB1kbMk92MHGCKCb1iaV73YEQp8hAzuLthqsFu0xhwbMp-zdoQdhkD2W2aP" alt="Президент РФ Владимир Путин присвоил волгоградке звание ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин присвоил звание «Мать-героиня» семи женщинам. В их числе – многодетная жительница Новониколаевского района Волгоградской&nbsp;...</p></div>
            </div>
        </a><a href='https://lacmus.life/novosti/8698-volgogradke-vladimir-putin-prisvoil-zvanie-mat-geroinja.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Волгоградке Владимир Путин присвоил звание «Мать-героиня»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjk-2awCJiqpH1vliqW-7GGuVfmw3ODqGvIv1ISACAMR1foclODkOFFuPxm-uJGjKGi6eq6eq9" alt="Волгоградке Владимир Путин присвоил звание «Мать-героиня»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Напомним, почетное звание Указом Президента было вновь учреждено в августе 2022 года. Среди первых награжденных и жительница Волгоградской области Галина&nbsp;...</p></div>
            </div>
        </a><a href='https://v1.ru/text/family/2022/11/26/71849051/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>11 раз мама и 15 — бабушка: президент Владимир Путин ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQKX6jXXGSatWd_x9eM_rH2KUvFCgwTsOy7EK-6WAFj0AkUskhkKPx8i2X_TrCUzKNMz2g_ffy" alt="11 раз мама и 15 — бабушка: президент Владимир Путин ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Многодетная мама работает почтальоном в сельском отделении, а глава семейства трудится техником-электриком. 26 ноября 2022, 20:50.</p></div>
            </div>
        </a>
        </Template></>;
}