import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Caroline Cayeux, ministre</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Caroline Cayeux, ministre"/>
        <meta name="description" content="Trending News about Caroline Cayeux, ministre" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Caroline Cayeux, ministre</h1>
            <Image width={800} height={500} src="https://www.leparisien.fr/resizer/oydI12q2wbu1bAuvdranABPzbCI=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Z5QHJ6MM2RGFNN7TR633PGXYC4.jpg" alt="Caroline Cayeux, ministre"/>
            <h3>Recent News</h3>
            <a href='https://www.leparisien.fr/politique/declaration-de-patrimoine-la-ministre-caroline-cayeux-demissionne-28-11-2022-DFPFETO5UFAI5C643JHGRSPOBI.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Déclaration de patrimoine «sous-évaluée» : la ministre Caroline ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFEwY7MyqDOOHppnYAEwH9cfDv7X2Hi-kI2fm5ov_FNXgJUTyDvZy1swsV02jYJRUv9YtLf5Xx" alt="Déclaration de patrimoine «sous-évaluée» : la ministre Caroline ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La ministre déléguée en charge des Collectivités territoriales a appelé l&#39;Élysée ce dimanche soir. Elle quitte le gouvernement en raison d&#39;un désaccord avec&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/actu/politique/les-infos-de-18h-demission-de-caroline-cayeux-pourquoi-la-ministre-quitte-le-gouvernement-7900210770'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les infos de 18h - Démission de Caroline Cayeux : pourquoi la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKF0HmCf4Y1jBAqtg4ps8h-M9RD9lcScYR-yT5ALZoza7pq-urhTX6JCqAvx1PkZf9tffuASeq" alt="Les infos de 18h - Démission de Caroline Cayeux : pourquoi la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La ministre en charge des Collectivités a remis sa lettre de démission au Président dans la soirée du dimanche 27 novembre.</p></div>
            </div>
        </a><a href='https://www.lemonde.fr/politique/article/2022/11/28/caroline-cayeux-ministre-deleguee-chargee-des-collectivites-territoriales-quitte-le-gouvernement_6151980_823448.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caroline Cayeux, ministre déléguée chargée des collectivités ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXEqd3d9o3oAcdJ5z5aDIA1nXtomkmwuMfRtffzydM8LLn8_9FXYuSCP77y6NaSzElQbHpxH5O" alt="Caroline Cayeux, ministre déléguée chargée des collectivités ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le président de la République, Emmanuel Macron, a mis fin, lundi 28 novembre, « sur proposition de la première ministre », aux fonctions de Caroline Cayeux,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/politique/caroline-cayeux-ministre-des-collectivites-quitte-le-gouvernement-28-11-2022-2499492_20.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caroline Cayeux, ministre des Collectivités, quitte le gouvernement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR458NLi0XS1Jqvii3gF7Hh_Rm4p4SM-WCerpTns5q4F3Eo-2S06WwANQmJIybRKOoHivTR_5Aw" alt="Caroline Cayeux, ministre des Collectivités, quitte le gouvernement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cette démission est liée à une déclaration de patrimoine jugée « sous-évaluée », indique Caroline Cayeux. Ses fonctions sont reprises par Dominique Faure.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/politique/gouvernement/caroline-cayeux-quitte-le-gouvernement-elle-est-remplacee-par-dominique-faure-e11b3c00-6f13-11ed-a2a4-28e0450c61da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La ministre Caroline Cayeux, mise en doute sur sa déclaration de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTBg2agrBTskwsEPVzzqFBsTsPY4G5imvvUzdvYaOfnGPFViWkV3He8Xwile0njQ70lSMzw1Qc" alt="La ministre Caroline Cayeux, mise en doute sur sa déclaration de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En désaccord avec la Haute autorité de la vie publique (HATVP) au sujet de sa déclaration de patrimoine, la ministre déléguée aux Collectivités&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/politique/la-ministre-caroline-cayeux-quitte-le-gouvernement-remplacee-par-dominique-faure-2240083.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrimoine &quot;sous-évalué&quot; : la ministre Caroline Cayeux quitte le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyyjrVBmn5BSsKKTqbTWSQL7Qu-rjIBgnQiY5Dj2ZBH94Eehjv5RtbE3AE7Qk0mas30FiErpuV" alt="Patrimoine &quot;sous-évalué&quot; : la ministre Caroline Cayeux quitte le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Caroline Cayeux est remplacée au gouvernement par Dominique Faure. La Haute autorité pour la transparence de la vie publique lui reproche une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/politique/la-ministre-caroline-cayeux-quitte-le-gouvernement-sur-sa-demande-20221128_YAXEODI4DNEI7P4OAN2SX7DUUU/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patrimoine «sous évalué» ? Caroline Cayeux quitte le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHof3qgqT1LbZsKLjxqRVPEz802cxyYfzmAMq-qqIA3piL8BoyyC1Sb7eAoU8Ohch4EbYn5D8Z" alt="Patrimoine «sous évalué» ? Caroline Cayeux quitte le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En raison d&#39;un différend avec la HATVP sur sa déclaration de patrimoine, la ministre des Collectivités territoriales a démissionné.</p></div>
            </div>
        </a>
        </Template></>;
}