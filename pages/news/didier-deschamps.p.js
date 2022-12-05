import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Didier Deschamps</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Didier Deschamps"/>
        <meta name="description" content="Trending News about Didier Deschamps" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Didier Deschamps</h1>
            <Image width={800} height={500} src="https://images.rtl.fr/~c/2000v2000/rtl/www/1556556-kylian-mbappe-celebre-la-victoire-de-l-equipe-de-france.jpg" alt="Didier Deschamps"/>
            <h3>Recent News</h3>
            <a href='https://www.rtl.fr/sport/football/coupe-du-monde-2022-c-est-la-joie-partagee-clame-didier-deschamps-apres-la-victoire-francaise-7900212652'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : &quot;C&#39;est la joie partagée&quot;, clame Didier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_WwV7QZs4Q8cFscD_v-fukueHEqpVvghSLCvoDOA3kbaBX0DUalK859MdfNJmAAnXBXyIYRTf" alt="Coupe du monde 2022 : &quot;C&#39;est la joie partagée&quot;, clame Didier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;équipe de France s&#39;est qualifiée en quarts de finale de la Coupe du monde en battant les Polonais. Les réactions se sont multipliées pour saluer la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Didier-deschamps-apres-la-qualification-des-bleus-en-quarts-de-finale-ca-n-a-pas-ete-simple/1368441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Didier Deschamps, après la qualification des Bleus en quarts de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFAvy6039RvWnp3vCfnMKgIBD2PRPOJSjQoXAh3CNX2nituszW0khIUREE7W4UbGxbvOlWKO1S" alt="Didier Deschamps, après la qualification des Bleus en quarts de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Malgré la large victoire de la France contre la Pologne dimanche en huitièmes de finale (3-1), obtenue grâce à un doublé de Kylian Mbappé et le 52e but de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a1668973963400392130-france-pologne-la-reaction-de-didier-deschamps'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France - Pologne : la réaction de Didier Deschamps</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIcixzJJn871tKq6qmLz78L09QBabhNIaP2sQXW2n4GqCRGz01Hapt0f0-lMfGAjQjeCVFgi2S" alt="France - Pologne : la réaction de Didier Deschamps" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après la victoire des Bleus (3-1) contre la Pologne, en huitièmes de finale de la Coupe du Monde au Qatar, Didier Deschamps s&#39;est arrêté au micro (.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Coupe-du-monde-didier-deschamps-a-parle-a-youssouf-fofana-apres-le-match-contre-la-tunisie/1368485'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : Didier Deschamps a parlé à Youssouf Fofana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUNIylfPXcXrfbVNKjYYwQ5lyyxRrhmjpDU9Wf_odE9zKw7fdpE6iQ7QWf2VIZskBJ96n68aJW" alt="Coupe du monde : Didier Deschamps a parlé à Youssouf Fofana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après son match décevant face à la Tunisie (0-1), dernière rencontre de la phase de groupes du Mondial, le milieu de terrain des Bleus, Youssouf Fofana a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foot-national.com/equipe-de-france/equipe-de-france--didier-deschamps-n-a-pas-apprecie-la-premiere-periode-de-griezmann--803563'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Didier Deschamps n&#39;a pas apprécié la première ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpSpnHG9B2ULJe7xHgJwpc1br6Kce6jcVm4XRUdy4DJrEIE-kHA3KPyIMeVzLuBuWv1eFL9GZ2" alt="Équipe de France : Didier Deschamps n&#39;a pas apprécié la première ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Bleus se sont imposés, 3-1, contre la Pologne grâce à des buts d&#39;Oliver Giroud (44e) et de Kylian Mbappé (74e, 90+9) en huitième de finale. Malgré tout,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-de-france/coupe-du-monde-didier-deschamps-agace-contre-jules-kounde-apres-la-polemique-du-collier-c0a11848-7407-11ed-9402-c361be74b85c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. Didier Deschamps agacé contre Jules Koundé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPJ7s_rxMKc3gTaUseHmkgCMvvQFkF9eW4qN49h-S_ZTUO0ZJ28ByAMeKgI-QTiNsXf6yvHMNU" alt="Coupe du monde. Didier Deschamps agacé contre Jules Koundé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur de l&#39;équipe de France n&#39;a pas apprécié que son joueur, Jules Koundé, ait dérogé au règlement en portant deux chaînes autour du cou lors du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a3896369420100111525-cdm-2022-france-didier-deschamps-a-discute-avec-youssouf-fofana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CdM 2022, France : Didier Deschamps a discuté avec Youssouf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgzxVLxYG61Zo-sTuDR6FwsWaGoGxxUL-FeJ7nlQJRiyJvIGeWZO9dtSPmuBJhGg8YXt8SNhqK" alt="CdM 2022, France : Didier Deschamps a discuté avec Youssouf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il n&#39;a échappé à personne que Youssouf Fofana a éprouvé de grandes difficultés à prendre la mesure de ce que représentait le niveau de la Coupe d (.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/equipe-de-france/equipe-de-france--didier-deschamps-a-parle-a-youssouf-fofana-apres-la-defaite-contre-la-tunisie-803578'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Didier Deschamps a parlé à Youssouf Fofana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFtH3gw9yRoM4lcOXi7cP5GryVcIPMUZb3LqJqG4AKytGDhFc0k2IJQC-9uxcGV228vggSvNV2" alt="Équipe de France : Didier Deschamps a parlé à Youssouf Fofana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après une performance très compliquée lors de la défaite face à la Tunisie (1-0) lors de la dernière rencontre de la phase de poules du Mondial,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a7926101416880420725-cdm-2022-france-didier-deschamps-revient-sur-la-polemique-du-collier-de-jules-kounde'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CdM 2022, EdF : Didier Deschamps revient sur la polémique du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSyjViHFEM_UPhw8suvMSaDm2u9hT0kteLFm_r5ne749XG6UoAUCJFWKPLrJxmFy9JuiN1xs0Ol" alt="CdM 2022, EdF : Didier Deschamps revient sur la polémique du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est une scène qui a étonné bons nombres de téléspectateurs. Pendant quasiment toute la première période de la victoire finale face à la Pologne (.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-de-france/france-pologne-kylian-resout-bien-des-problemes-se-felicite-didier-deschamps-6cce0bba-73fb-11ed-9402-c361be74b85c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France – Pologne. « Kylian résout bien des problèmes », se félicite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdi_NPElK3G7aBGLE5AMtfk35l8WIs-7Fgr-_YM1PHm-QoW93eKPBx2TzeYRkVAODm-TP22Cp5" alt="France – Pologne. « Kylian résout bien des problèmes », se félicite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur des Bleus Didier Deschamps s&#39;est réjoui de la qualification en quarts de finale de la Coupe du monde dimanche. Et a salué la performance de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}