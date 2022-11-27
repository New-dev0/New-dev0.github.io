import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Immeuble incendie Nice</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Immeuble incendie Nice"/>
        <meta name="description" content="Trending News about Immeuble incendie Nice" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Immeuble incendie Nice</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/pompiers-numero-18-1740c1-0@1x.jpeg" alt="Immeuble incendie Nice"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/justice-faits-divers/video-un-mort-et-plusieurs-blesses-dans-l-incendie-d-un-immeuble-a-nice-2239876.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un mort et plusieurs blessés dans l&#39;incendie d&#39;un immeuble à Nice</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStGHtBPWZqzZ8uLUaBC5XHEGJCuq5qggOdUWVCMiJOHh4ZiqnyV8MnzusoVQXqLo8V9Fxy_Byx" alt="Un mort et plusieurs blessés dans l&#39;incendie d&#39;un immeuble à Nice" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Vendredi soir, un important incendie s&#39;est déclaré à Nice. Une personne est décédée et une est en urgence absolue. · Police, justice et faits&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/replay-jt/france-3/12-13/nice-un-incendie-meurtrier-dans-un-immeuble-de-la-ville_5503740.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nice : un incendie meurtrier dans un immeuble de la ville</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1vb7tq7iMjMKkOMkvd8rfFabSWdmh-L8gqwG_p0Qwo3Pz2Tua5LQKuBvdsBiwx3tC4fjs-Ht-" alt="Nice : un incendie meurtrier dans un immeuble de la ville" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un immeuble de la ville de Nice, dans les Alpes-Maritimes, a pris feu, vendredi 25 novembre. Une personne est décédée et quatre autres sont blessées,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/faits_divers/4011957-20221126-nice-mort-plusieurs-blesses-incendie-immeuble'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nice : Un mort et plusieurs blessés dans un incendie dans un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwOObFZpeb2NbxwoguFeOyuDyV4FNwlH3-bK4kb7B8O_g9LW5j8KC7_YgZBy9pH-SSNehQZZlp" alt="Nice : Un mort et plusieurs blessés dans un incendie dans un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendredi soir un appartement a pris feu à Nice puis les fumées se sont propagées dans tout l&#39;immeuble jusque tard dans la nuit. Une personne a été tuée et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nicematin.com/faits-divers/un-mort-et-un-blesse-grave-dans-lincendie-dun-immeuble-a-nice-le-point-a-la-mi-journee-810588'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un mort et un blessé grave dans l&#39;incendie d&#39;un immeuble à Nice: le ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCytMgejDsoqXdTtK3JQHdgkYBd_RMNhy6gxgPrSXmRzAUmCrmdvy-amn9XGl1FQobb6QegGfz" alt="Un mort et un blessé grave dans l&#39;incendie d&#39;un immeuble à Nice: le ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une personne a été tuée et une autre grièvement blessée dans l&#39;incendie d&#39;un appartement situé au 12, boulevard comte de Falicon, à Nice, vendredi soir,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/faits-divers/un-incendie-fait-un-mort-et-plusieurs-blesses-a-nice-26-11-2022-U7LLRMMZC5HPPEH2T223R54ULI.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un incendie fait un mort et plusieurs blessés à Nice</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSM31MGn0o2nT61FajUjrK-bCxJ_chy2McEF2POyCJ0LhzNrPBNK1JmkZs3u4ysVjgwG8bivvd" alt="Un incendie fait un mort et plusieurs blessés à Nice" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deux cents personnes ont été évacuées de cet immeuble, dont l&#39;un des appartements du quatrième étage s&#39;est embrasé dans la nuit.</p></div>
            </div>
        </a><a href='https://www.lamontagne.fr/nice-06000/actualites/l-incendie-d-un-immeuble-a-nice-fait-un-mort-et-un-blesse-grave_14222881/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;incendie d&#39;un immeuble à Nice fait un mort et un blessé grave</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_Qw18-YNnljSV9JiO_89RISYTO00rw8hv2rdR47Np7hIjGSRSqkiHMkDkWTQXNDCXnxjodEmP" alt="L&#39;incendie d&#39;un immeuble à Nice fait un mort et un blessé grave" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le drame a eu lieu vendredi soir à Nice (Alpes-Maritimes). Un homme est mort dans l&#39;incendie d&#39;un immeuble qui a aussi fait un blessé grave, son frère.</p></div>
            </div>
        </a><a href='https://www.lexpress.fr/actualites/1/societe/nice-un-mort-et-plusieurs-blesses-dans-un-incendie-dans-un-immeuble_2184186.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nice: un mort et un blessé grave dans un incendie dans un immeuble</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRpjbqPsVfeKSx4WXt4NLz6H3aZ_9-v1Wz9z7mY81Z411U1mPANZEX11yDP4c83Z7UlwIfOYaV" alt="Nice: un mort et un blessé grave dans un incendie dans un immeuble" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ces deux victimes sont deux frères, qui vivaient dans l&#39;appartement du troisième étage (bien troisième étage) d&#39;où est parti le sinistre, a précisé à l&#39;AFP&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}