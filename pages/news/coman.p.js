import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coman</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coman"/>
        <meta name="description" content="Trending News about Coman" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coman</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/11/24/3496232-71271808-2560-1440.jpg" alt="Coman"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.fr/football/coupe-du-monde/2022/coupe-du-monde-kingsley-coman-na-pas-participe-a-lentrainement-de-lequipe-de-france-jeudi-gene-muscu_sto9241907/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde | Kingsley Coman n&#39;a pas participé à l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGfeQ7RC7mML8S5Gw6iFZTt7plOXAwx6AE1JKMW5aa0Kis9mO_H17XLaMe_GYKtp7o69a_WxlW" alt="Coupe du monde | Kingsley Coman n&#39;a pas participé à l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le joueur du Bayern Munich serait retourné au vestiaire après avoir pris part à l&#39;échauffement. Nos confrères évoquent une &quot;petite gêne musculaire&quot;, pour&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/sport/football/les-infos-de-18h-coupe-du-monde-2022-kinsley-coman-montre-des-signes-de-faiblesse-7900209632'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les infos de 18h - Coupe du monde 2022 : Kinsley Coman montre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_pe4IyvVEqaXtbFm1SFsjvuU-I-7A58kA5KPbGIkYMOmH625G9a10BZbvmsW-XsyJCsTYR18P" alt="Les infos de 18h - Coupe du monde 2022 : Kinsley Coman montre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ailier Kingsley Coman n&#39;a pas réussi à terminer son entraînement jeudi 24 novembre. Un nouveau risque de blessure plane sur les Bleus.</p></div>
            </div>
        </a><a href='https://www.lunion.fr/id430529/article/2022-11-24/coman-menage'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coman « ménagé »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSChjYZ_UEODKhTEVUZYfRi2c3sK8fWsEhDDW_cjBsLLhtG0bgFE0_YZa-0L-3a4c5to_0KROMN" alt="Coman « ménagé »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les 24 de l&#39;équipe de France ont pris part à un entraînement léger, jeudi, à l&#39;exception de l&#39;ailier Kingsley Coman, qui l&#39;a écourté. Le joueur du Bayern Munich&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/sport/football/coupe-du-monde-coman-quitte-prematurement-l-entrainement-24-11-2022-2499085_1858.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde : Coman quitte prématurément l&#39;entraînement</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRT6fhI8huWV-AFx0UhCKgINVXBiUDwLc1lgI5pSXay6hXBDH_DWobgWpNldFLEJEjVta3xr4TR" alt="Coupe du Monde : Coman quitte prématurément l&#39;entraînement" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ailier français a été « ménagé » par les entraîneurs après avoir ressenti une gêne à la hanche, à deux jours de la prochaine rencontre des Bleus.</p></div>
            </div>
        </a><a href='https://www.foot-national.com/equipe-de-france/equipe-de-france--nouvelles-rassurantes-pour-coman--802434'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Équipe de France : Nouvelles rassurantes pour Coman</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZlppz6VeqOk1dfVuZgIdxQhL0GP3uu7fIldOsggZzUq0U2naGI1-v6tJFAP_FxrBe08iI7Yb0" alt="Équipe de France : Nouvelles rassurantes pour Coman" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kingsley Coman, qui n&#39;a pas participé à l&#39;intégralité de l&#39;équipe de France, ce jeudi, devrait être disponible contre le Danemark, samedi à 16h,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/equipe-de-france-nouvelles-rassurantes-pour-coman-apres-qu-il-ait-quitte-l-entrainement-807585'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Equipe de France : nouvelles rassurantes pour Coman, après qu&#39;il ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS896RPRP7pqf8EEx48_XqaCQElvQplkCQETyGf2nRunK3LSGqfzel_4vMoXOdp-NZbpKaLphyK" alt="Equipe de France : nouvelles rassurantes pour Coman, après qu&#39;il ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kingsley Coman a dû quitter l&#39;entraînement de l&#39;Equipe de France ce jeudi. Zapping Onze Mondial CDM 2022 : Portugal, la dernière chance de Ronaldo ?</p></div>
            </div>
        </a>
        </Template></>;
}