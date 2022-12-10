import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Van Gaal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Van Gaal"/>
        <meta name="description" content="Trending News about Van Gaal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Van Gaal</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-photo-jpg/louis-van-gaal-n-est-plus-le-selectionneur-des-pays-bas-f-faugere-l-equipe/1500000001722582/0:0,1998:1332-640-427-75/5f3de.jpg" alt="Van Gaal"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/Louis-van-gaal-confirme-qu-il-quitte-la-selection-des-pays-bas/1369366'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louis van Gaal confirme qu&#39;il quitte la sélection des Pays-Bas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3kcmDRzZkqe2ldxyR_CCeN3CiLiADPb2VYXcc42WY022vbH77B5lwqd6uxn0Rro1IVa2RrcfW" alt="Louis van Gaal confirme qu&#39;il quitte la sélection des Pays-Bas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;élimination des Pays-Bas en quarts de finale de la Coupe du monde vendredi contre l&#39;Argentine (2-2, 3-4 aux t.a.b.) aura été le dernier match de Louis van&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/football/coupe-du-monde/coupe-du-monde-on-s-est-entraine-toute-l-annee-aux-tirs-aux-but-et-malgre-tout-nous-nous-plantons-peste-van-gaal-20221209'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : «On s&#39;est entraîné toute l&#39;année aux tirs aux but ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQJPEGchFj9lSg6M5zcQedUQauhaFoFdKUvCdVADtv_Z0hYd7N4NPqO0dLztvfkSqRKxG3y8YFd" alt="Coupe du monde : «On s&#39;est entraîné toute l&#39;année aux tirs aux but ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur néerlandais ne dissimulait pas sa déception à l&#39;issue du quart de finale perdu face à l&#39;Argentine. Louis van Gaal (sélectionneur des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/football/coupe-du-monde/2022/coupe-du-monde-2022-louis-van-gaal-confirme-qu-il-quitte-la-selection-des-pays-bas_sto9266174/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Louis van Gaal confirme qu&#39;il quitte la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHIBb1fqHZ2HUSIvVWi_EHpIMv_xQCwGg3vdRQBGmrxHBr8gkUWLXOnSiTzYDE8BON1NsUAQ0x" alt="Coupe du monde 2022 : Louis van Gaal confirme qu&#39;il quitte la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COUPE DU MONDE - Sans surprise, Louis van Gaal ne prolongera pas l&#39;aventure sur le banc des Pays-Bas. Il sera remplacé en janvier 2023 par Ronald Koeman.</p></div>
            </div>
        </a><a href='https://m.maxifoot.fr/argentine/martinez-allume-lahoz-et-van-gaal-foot-381117.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentine : Martinez allume Lahoz et Van Gaal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTemlALk7sT_UTA8jvPafKNowmT8489ya8Jz_MbiTxdwUFs9WGjeMgv6mBStEfbnVdZfJ4jp-Ev" alt="Argentine : Martinez allume Lahoz et Van Gaal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualifiés au terme d&#39;un quart de finale très chaud contre les Pays-Bas (2-2, 4-3 tab) ce vendredi à la Coupe du monde 2022, les Argentins se sont lâchés au&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/van-gaal-se-marre-apres-une-question-stupide-a-propos-de-messi/blt9eb04e0586f1a13e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Van Gaal se marre après une question &quot;stupide&quot; à propos de Messi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-kpv4z8KZTTLNNTWjb5_APhP0Z2jC4kpNlUuqiCmW5PtF3dfBsL-8E3laH4cOVv8ZSQcHUNWF" alt="Van Gaal se marre après une question &quot;stupide&quot; à propos de Messi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur néerlandais s&#39;est moqué d&#39;une question portant sur son plan pour arrêter Lionel Messi dans ce quart de finale de Coupe du monde.</p></div>
            </div>
        </a><a href='https://www.sofoot.com/louis-van-gaal-vous-ne-pouvez-pas-simuler-la-pression-522711.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Louis van Gaal : « Les joueurs sont restés assis comme des morts »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJgORP_UMf5039mS22rE85Tjcp43WVjc0QiMf6wyUTRSKFleVF0yTZ96a51hGpxjmstxwY1ZCm" alt="Louis van Gaal : « Les joueurs sont restés assis comme des morts »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Pélican se retire. Plus d&#39;une heure après l&#39;élimination de ses Pays-Bas, une nouvelle fois face à l&#39;Argentine et une nouvelle fois aux tirs ...</p></div>
            </div>
        </a><a href='https://www.rtl.be/sport/football/mondial-2022-louis-van-gaal-nous-nous-sommes-entraines-toute-l-annee-aux-tirs-au-but--1420353.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022 - Louis Van Gaal : &quot;nous nous sommes entraînés ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2ZvSkA3IoW9O5_fxPedPjpDlEwYb4TrGhe52UFPdh0Yj0mlkb0AYQboKfK-uT5mSjpMjw_Uyb" alt="Mondial 2022 - Louis Van Gaal : &quot;nous nous sommes entraînés ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Belga) Louis van Gaal, le sélectionneur des Pays-Bas, regrettait l&#39;amère élimination des Néerlandais, aux tirs au but, face à l&#39;Argentine, en quarts ...</p></div>
            </div>
        </a>
        </Template></>;
}