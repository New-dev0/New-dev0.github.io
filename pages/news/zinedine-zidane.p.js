import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zinedine Zidane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zinedine Zidane"/>
        <meta name="description" content="Trending News about Zinedine Zidane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zinedine Zidane</h1>
            <Image width={800} height={500} src="https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/people/zinedine-zidane-ses-rares-confidences-sur-les-valeurs-quil-transmet-a-ses-enfants-4153240/59495885-1-fre-FR/Zinedine-Zidane-ses-rares-confidences-sur-les-valeurs-qu-il-transmet-a-ses-enfants.jpg" alt="Zinedine Zidane"/>
            <h3>Recent News</h3>
            <a href='https://www.europe1.fr/people/zinedine-zidane-ses-rares-confidences-sur-les-valeurs-quil-transmet-a-ses-enfants-4153240'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zinedine Zidane : ses rares confidences sur les valeurs qu&#39;il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYrchbjltko-BYYXEHwvJkEnAXqaaKMms6RFF8gPYK5hBeApzJeDeTG04skHFu4OT156rJyv8g" alt="Zinedine Zidane : ses rares confidences sur les valeurs qu&#39;il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans une interview accordée au magazine &quot;Gala&quot; jeudi 8 décembre, Zinedine Zidane s&#39;est livré à coeur ouvert sur l&#39;éducation de ses quatre enfants,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/zinedine-zidane-ses-confidences-sur-leducation-et-les-valeurs-quil-transmet-a-ses-enfants-744773'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zinedine Zidane : ses confidences sur l&#39;éducation et les valeurs qu&#39;il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQn_nb6sPQQ1cJJq5y3F9XGqTJNne2gVRPZT1btH7Pj2q9nRiqjchQGLfixvH6HxsIwXw9lgnKr" alt="Zinedine Zidane : ses confidences sur l&#39;éducation et les valeurs qu&#39;il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zinedine Zidane a une grande famille et souhaite transmettre à ses enfants d&#39;importantes valeurs. Dans une interview accordée à Gala, le champion d...</p></div>
            </div>
        </a><a href='https://www.purepeople.com/article/zinedine-zidane-rares-confessions-sur-ses-enfants-et-l-heritage-qu-il-veut-leur-transmettre_a501233/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zinedine Zidane : Rares confessions sur ses enfants et l&#39;héritage qu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrolzniZ-2wayx-W40oJzBL8Zl16zi0oR6ArC94VC_jFGO-gOkynFL2mdkCoTsuGJGZLMaqwnS" alt="Zinedine Zidane : Rares confessions sur ses enfants et l&#39;héritage qu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zinedine Zidane est l&#39;heureux père de 4 beaux et grands garçons, dont il est très proche. En interview pour Gala, il s&#39;est confié sur leur éducation et les&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}