import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ines de Ramon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ines de Ramon"/>
        <meta name="description" content="Trending News about Ines de Ramon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ines de Ramon</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/cms/1200x630_crop/2022/11/16/5be3e81493dfb65a7209bfb9da43433cc84d88d86587787ac9af845e890a9bb0.jpg" alt="Ines de Ramon"/>
            <h3>Recent News</h3>
            <a href='https://madame.lefigaro.fr/celebrites/actu-people/qui-est-ines-de-ramon-apercue-au-bras-de-brad-pitt-en-plein-concert-de-bono-20221116'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qui est Ines de Ramon, aperçue au bras de Brad Pitt en plein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTc1Gj6HeWUa1kuVqhhqICpwsLJVhB53NAUN64OxGjKZhlxbWW2dPYrEMhIcgL_jWebZOld0UT1" alt="Qui est Ines de Ramon, aperçue au bras de Brad Pitt en plein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad Pitt aurait-il trouvé chaussure à son pied ? Les derniers clichés du tabloïd britannique Daily Mail le montrent en train de serrer contre lui une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/brad-pitt-en-couple-qui-est-ines-de-ramon-sa-nouvelle-compagne-de-29-ans-1668013'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt en couple : qui est Ines de Ramon, sa nouvelle compagne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTVgHmq5fmN1NCxqQoBW17hUSmSwxHbGtFo8jUq8yKewE33I73M9u_-ZgXpq52uUZdzOlf8X0iQ" alt="Brad Pitt en couple : qui est Ines de Ramon, sa nouvelle compagne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad Pitt serait de nouveau amoureux et cela semble se confirmer : selon le Daily Mail, l&#39;élue de son coeur n&#39;est autre qu&#39;Ines de Ramon, âgée de 29 ans,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/brad-pitt-qui-est-ines-de-ramon-la-sublime-brune-a-son-bras-au-concert-de-bono-743031'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt : qui est Inès de Ramon, la sublime brune à son bras au ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-8ArDKlccoheJw0NuMQd23Ul9uGkzSafxUM7wkBiia31oLaKO-3Wf_I6Nipl_qJf5nTCTDzxi" alt="Brad Pitt : qui est Inès de Ramon, la sublime brune à son bras au ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad Pitt est-il tombé amoureux ? Ce dimanche 13 novembre, le comédien a été vu en compagnie d&#39;une mystérieuse et sublime brune. Cette dernière s&#39;a...</p></div>
            </div>
        </a><a href='https://www.20min.ch/fr/story/brad-pitt-proche-dines-de-ramon-962897140806'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt proche d&#39;Ines de Ramon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLmp0x9ut7Swt9o0xEFIL4nGaBapQZQz9ExzRtBSNEDLJ08WjoB6IXfyOCGykMcalHDA2Tx-Wt" alt="Brad Pitt proche d&#39;Ines de Ramon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad Pitt et Ines de Ramon, ex-épouse de Paul Wesley et qui a étudié à Genève, ont été photographiés ensemble à un concert de Bono.</p></div>
            </div>
        </a><a href='https://www.lfm.ch/lifestyle/cote-people/brad-pitt-tombe-sous-le-charme-dines-de-ramon-lors-dun-concert/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt tombe sous le charme d&#39;Ines de Ramon lors d&#39;un concert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbLB9Jk5et2Afk_1HDhbxT26yPlrxTZL0tPX_sarkdyHAepqegVanX_HstQXPHT9MgPwUHKF-E" alt="Brad Pitt tombe sous le charme d&#39;Ines de Ramon lors d&#39;un concert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Spacey fait face à sept nouvelles accusations criminelles pour des agressions sexuelles présumées contre un homme dans les années 2000. Publié. Il y a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lematin.ch/story/brad-pitt-a-ete-apercu-tres-proche-dune-genevoise-lors-dun-concert-850627206646'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt a été aperçu très proche d&#39;une Genevoise lors d&#39;un concert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQd9GP-lJFoVPnVQk-ABLa03voSONTBBldIHJUpNyJ-HXqZbtwmlKMW6ofoWp-aVqC_fcwzP8fP" alt="Brad Pitt a été aperçu très proche d&#39;une Genevoise lors d&#39;un concert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La star aurait présenté Inès de Ramon à plusieurs de ses amis lors du show de Bono, à Los Angeles.</p></div>
            </div>
        </a><a href='https://mcetv.ouest-france.fr/mon-mag-buzz/people/brad-pitt-frequente-une-nouvelle-femme-apres-emily-ratajkowski-16112022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brad Pitt fréquente une nouvelle femme après Emily Ratajkowski ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRouN7djeQtPsZKNUFPb9e5TIYO-HL5NZ6cJinRCKacJQkfxbNjnRHu6IuvRozyPvX-rBgLRWcW" alt="Brad Pitt fréquente une nouvelle femme après Emily Ratajkowski ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brad Pitt a récemment été photographié en compagnie d&#39;une femme dans les coulisses du concert de Bono, à Los Angeles.</p></div>
            </div>
        </a>
        </Template></>;
}