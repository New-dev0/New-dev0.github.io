import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Wonder</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Wonder"/>
        <meta name="description" content="Trending News about The Wonder" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Wonder</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/15/0/0/3600/2400/1440/960/60/0/eb1117f_1668509972626-wonder-unit-12577rc.jpg" alt="The Wonder"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/culture/article/2022/11/16/the-wonder-sur-netflix-mensonge-et-miracle-au-lendemain-de-la-grande-famine-irlandaise_6150188_3246.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« The Wonder », sur Netflix : mensonge et miracle au lendemain de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIb3GLP2e9pbmG87qop-atnQvEmAlcfCUb_Xd7Cm2RCuHcGl76xHIP1wCMAm0ArFJbShoMU4yx" alt="« The Wonder », sur Netflix : mensonge et miracle au lendemain de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florence Pugh illumine le film de Sebastian Lelio, qui interroge sans relâche ses personnages et ses spectateurs.</p></div>
            </div>
        </a><a href='https://www.ecranlarge.com/films/critique/1456448-the-wonder-critique-a-jeun-sur-netflix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Wonder : critique à jeun sur Netflix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7Az--Yi0zWII72Yj3cfSESh7Q1V-hEMY-4_-4FEYNWcirplwpPk29Y_TYK6hFhqnPmSwfo5GN" alt="The Wonder : critique à jeun sur Netflix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Découvrez la critique du film The Wonder de Sebastián Lelio - Après avoir traité de la transidentité dans l&#39;oscarisé Une femme fantastique puis magnifié&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telerama.fr/ecrans/the-wonder-sur-netflix-une-troublante-florence-pugh-dans-la-tourbe-irlandaise-7012998.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“The Wonder”, sur Netflix : une troublante Florence Pugh dans la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJ9Lx0fA_JCFGcy0txZCXMUwjsTcM0MAKKc9MFl82fzYm-nLuyyw14lBvVnd6IR0YoR2r0rLGs" alt="“The Wonder”, sur Netflix : une troublante Florence Pugh dans la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 1862, dans les Midlands, une fillette prétend se nourrir uniquement de “manne céleste”… Le Chilien Sebastián Lelio met en scène le poids de la religion&nbsp;...</p></div>
            </div>
        </a><a href='https://www.la-croix.com/Culture/The-Wonder-sur-Netflix-pouvoir-histoires-2022-11-16-1201242383'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« The Wonder » sur Netflix : le pouvoir des histoires</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTDTAdMFso6Kp9rjXA94T6P0En2FEJpZD1p4sItme-_gyyjLijY7QhRMfTlQHpyJmYRKO8u2BVu" alt="« The Wonder » sur Netflix : le pouvoir des histoires" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 1862, en Irlande, une infirmière est appelée auprès d&#39;une jeune fille qui survit sans s&#39;alimenter depuis plus de quatre mois. Une lutte entre science et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/cinema/the-wonder-sur-netflix-un-miracle-de-film-16-11-2022-HF6I7WO5ZBD6VMGQ637PRJGXEE.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«The Wonder» sur Netflix : un miracle de film</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlXCc-VJXvvCEOUkQK2CJxTewv-a5r1ypjTOYSAlpDJJz8Z33TKp1yA9pNCkSgbfiGCe2Uj8rd" alt="«The Wonder» sur Netflix : un miracle de film" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lancée ce mercredi sur la plate-forme, cette création aussi aride que remarquable conte une enquête sur un mystère religieux en Irlande au XIXe siècle et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000002256.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Wonder sur Netflix : Florence Pugh dans un thriller sombre sur ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQGqidGtFEZ0CUzppfxmHPHu5ZIzWlm0CVivTlJ0rabMTDHqir7qDm-tHHjfvbYpXZKEcRAmL_" alt="The Wonder sur Netflix : Florence Pugh dans un thriller sombre sur ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sous la direction de Sebastián Lelio, Florence Pugh sublime &quot;The Wonder&quot;, un thriller atmosphérique et pertinent sur un phénomène qui a réellement existé.</p></div>
            </div>
        </a><a href='https://www.femina.fr/article/the-wonder-avec-florence-pugh-netflix-la-terrible-histoire-vraie-derriere-le-film-dramatique'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« The Wonder » avec Florence Pugh (Netflix) : la terrible histoire ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5eif_QSr4BPsEazWnByL0QPArqZRpQiN7-MIk_HcyV2RuwlNbbaCBKcoe1nwRg3Se5nTPfYEr" alt="« The Wonder » avec Florence Pugh (Netflix) : la terrible histoire ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après Dahmer, The Watcher, Meurtres sans ordonnances ou encore American Girl, Netflix propose une nouvelle histoire inspirée de faits réels des plus a...</p></div>
            </div>
        </a>
        </Template></>;
}