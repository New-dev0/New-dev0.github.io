import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Epic Games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Epic Games"/>
        <meta name="description" content="Trending News about Epic Games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Epic Games</h1>
            <Image width={800} height={500} src="https://3dnews.ru/assets/external/illustrations/2022/11/18/1077570/google_Photo-Mix__pixabay-com.jpg" alt="Epic Games"/>
            <h3>Recent News</h3>
            <a href='https://3dnews.ru/1077570/epic-games-google-platila-activision-i-riot-games-za-otkaz-ot-konkurentsii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Epic Games: Google платила Activision и Riot Games за отказ от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZd6S3TMDGHIKj6gpQAU-iSZeByhO2lo9Kkmi0ZctbV5UJRgWY5l6asI0WYobC6j9-HXQ3vtwv" alt="Epic Games: Google платила Activision и Riot Games за отказ от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Google перечислила миллионы долларов Activision Blizzard и Riot Games за то, чтобы они отказались от намерений запускать собственные магазины приложений под&nbsp;...</p></div>
            </div>
        </a><a href='https://www.igromania.ru/news/120854/Epic_Games_Google_otkupilas_ot_Riot_Games_i_Activision_millionami_dollarov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Epic Games: Google откупилась от Riot Games и Activision ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVlx50j9qJkzy40U9d8Dpx7WNB9_aVgBGiAdm_en_XlISPYwmb0nhl4WXx4hK5HdiuksVCecCa" alt="Epic Games: Google откупилась от Riot Games и Activision ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В судебном иске, проанализированном изданием Bloomberg, компания Epic Games заявила, что Google заплатила Activision Blizzard и Riot Games миллионы долларов&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goha.ru/poyavilis-novaya-iformaciya-v-sudebnoj-vojne-epic-games-protiv-apple-i-google-xkmVXj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Появилась новая иформация в судебной войне Epic Games ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQccoZHC8nIeGRzP33u6PKXf7U-pX-qhNJmfV3Qre3WL3RzN6hPXWkyskbo2fivxL2W3sRhJoxx" alt="Появилась новая иформация в судебной войне Epic Games ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Компания Google заплатила Activision Blizzard Inc. и Riot Games миллионы долларов за то, чтобы они не запускали конкурирующие магазины приложений или не&nbsp;...</p></div>
            </div>
        </a><a href='https://dtf.ru/gameindustry/1452919-epic-google-zaplatila-milliony-dollarov-krupnym-razrabotchikam-igr-chtoby-te-ne-otkryvali-svoi-magaziny-prilozheniy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Epic: Google заплатила «миллионы долларов» крупным ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTlyER726ooL7G4dbjSYL0rgLD8dcFrV62NiEQr0yz9RPVexUycEKvyEOPvKDOQ-zhDcvA0tCGz" alt="Epic: Google заплатила «миллионы долларов» крупным ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Activision Blizzard якобы получила 360 миллионов долларов, а Riot Games — около 30 миллионов.</p></div>
            </div>
        </a><a href='https://overclockers.ru/blog/Scorpion81/show/79232/google-obvinyajut-v-vyplatah-razrabotchikam-igr-chtoby-oni-ne-uhodili-iz-play-store'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google обвиняют в выплатах разработчикам игр, чтобы они не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAXj3KhcUPoCLq36RZzERxfrNpsCkV4kvb-FxAsuK04Bn_QldoMdhIwnmHjXWqPUe8HPik24zp" alt="Google обвиняют в выплатах разработчикам игр, чтобы они не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Деньги получали Activision Blizzard, Riot Games, Nintendo, Ubisoft и другие | Overclockers.ru - крупнейший информационный сайт России посвященный&nbsp;...</p></div>
            </div>
        </a><a href='https://itzine.ru/news/business/google-paid-activision-360m.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google заплатила Activision 360 миллионов долларов, чтобы та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrAi1xuLHJu_qLy8qqt4Jl1x2xumBh3WF4n0KwGYZQVDij4FFZDHG5bLcXvZTC7UK4DtajfGZ5" alt="Google заплатила Activision 360 миллионов долларов, чтобы та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Согласно недавно неотредактированной копии иска, который производитель Fortnite Epic Games впервые подал против Google в 2020 году, компания выплатила&nbsp;...</p></div>
            </div>
        </a><a href='https://games.mail.ru/pc/news/2022-11-18/google-zaplatila-kompaniyam-za-otkaz-ot-svoih-magazinov-dlya-mobilnyh-igr/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Google заплатила компаниям, чтобы те не создавали магазины ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQP3dmr-zO6oVJrDhReI7rwzv-teIMyDpGjVFdu8fv51Awp4YsOa7sjrxalu6-U94cYV9StSp4d" alt="Google заплатила компаниям, чтобы те не создавали магазины ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СМИ обнаружили в иске Epic Games против Google, что IT-гигант заплатил игровым компаниям, чтобы они не создавали свои магазины на мобильных платформах.</p></div>
            </div>
        </a>
        </Template></>;
}