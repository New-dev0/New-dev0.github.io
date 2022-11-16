import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Orpea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Orpea"/>
        <meta name="description" content="Trending News about Orpea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Orpea</h1>
            <Image width={800} height={500} src="https://img.lemde.fr/2022/11/15/0/17/3465/2310/1440/960/60/0/1dea3b4_fw1-orpea-debt-strategy-0202-11.jpg" alt="Orpea"/>
            <h3>Recent News</h3>
            <a href='https://www.lemonde.fr/societe/article/2022/11/15/perquisitions-dans-des-ehpad-d-orpea-pour-des-soupcons-de-maltraitance-institutionnelle_6149953_3224.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scandale Orpea : plusieurs dizaines de perquisitions dans des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtsXpFe66EiRH08sKUPnw4LaH0Q6c-jxH0kLFxmUCd5zAcsNFwaPWQBA4oRIaAhomejQSwavwC" alt="Scandale Orpea : plusieurs dizaines de perquisitions dans des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ces perquisitions, menées dans le cadre d&#39;une enquête pour « maltraitance institutionnelle », coïncident avec la présentation d&#39;un plan de relance du&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sante/senior/maltraitance-dans-les-ehpad/plan-de-transformation-d-orpea-c-est-bien-le-moins-qu-on-puisse-attendre-apres-tout-ce-qui-s-est-passe-estime-une-association_5478765.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Plan de transformation d&#39;Orpea : &quot;C&#39;est bien le moins qu&#39;on puisse ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQj7sMse5jiUuezrYrCtuJv6BglFFCCxX0dpGr4Ohf1vqzTppl8EJuLq6aKe99ZWHyiUk177ltU" alt="Plan de transformation d&#39;Orpea : &quot;C&#39;est bien le moins qu&#39;on puisse ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le groupe Orpea a dévoilé, mardi, un plan pour assainir sa situation financière qui menace son avenir.</p></div>
            </div>
        </a><a href='https://www.lesechos.fr/industrie-services/services-conseils/les-actionnaires-dorpea-menaces-dune-dilution-massive-1879081'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les actionnaires d&#39;Orpea menacés d&#39;une « dilution massive »</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQWg66aTzLWLp42fQX0yAQcDx-5K-onvu00aXzeyMfSkteeDUqBVdZmq3zSgMYtGohcAZQuY8q" alt="Les actionnaires d&#39;Orpea menacés d&#39;une « dilution massive »" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le groupe d&#39;Ehpad endetté à plus de 25 fois son Ebitda avertit ses actionnaires qu&#39;ils perdront tout s&#39;ils ne réinvestissent pas lors de l&#39;augmentation en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lepoint.fr/justice/ehpad-serie-de-perquisitions-dans-des-etablissements-d-orpea-15-11-2022-2497858_2386.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ehpad : série de perquisitions dans des établissements d&#39;Orpea</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiwcJUHQgwjducNDQbSOU6Nud0P1snvWP8VW6nZpONGJtePLQU-2rGwempKL4bbwQUbcnccEe0" alt="Ehpad : série de perquisitions dans des établissements d&#39;Orpea" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Des perquisitions ont été lancées, mardi 15 novembre, dans « plusieurs dizaines » d&#39;Ehpad du groupe Orpea en France, qui doivent s&#39;étaler « sur plusieurs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/actualite-france/ehpad-des-perquisitions-lancees-dans-plusieurs-etablissements-orpea-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orpea : plusieurs dizaines d&#39;établissements perquisitionnés</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJQ1ERTxAigVRIUhT0FjsLBqQwmyoyrqFsUzRDb9_wRj9GiOjP0P86BBFNuzsb4QVQPgmDEd-I" alt="Orpea : plusieurs dizaines d&#39;établissements perquisitionnés" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le groupe Orpea est concerné par une enquête préliminaire pour «maltraitance institutionnelle». Des opérations sont menées «dans toute la France» et doivent&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liberation.fr/societe/sante/ehpad-orpea-devoile-son-plan-pour-assainir-ses-finances-20221115_BEBLZPTFJRDUDHB3K4U464RRJI/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ehpad : Orpea dévoile son plan pour assainir ses finances</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAZgOW094IkNNaM4b1DZJ4Zy7IuPNVbUOWgOwMoXr4K6aBVQw3adAwFw90jqBc5kzK7GrQItEa" alt="Ehpad : Orpea dévoile son plan pour assainir ses finances" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le groupe d&#39;Ehpad privés dévoile ce mardi son plan de transformation, alors qu&#39;il est en pleine tourmente financière. Entre scandale humain et financier,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.boursorama.com/bourse/actualites/orpea-oddo-confirme-son-conseil-sur-le-titre-5c43b2c66d0c9fcae6bb548affa9f17f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orpea: Oddo confirme son conseil sur le titre</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-MhAEmv5dIYM16yRcPgwrACrgd8arZCQ1Uj9VC44MpKjWpga5CagWXlcD3qkLy8ZOHt7hBVkR" alt="Orpea: Oddo confirme son conseil sur le titre" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(CercleFinance.com) - Oddo maintient sa note &#39;neutre&#39; sur le titre Orpea avec un objectif de cours inchangé de 16 euros, après que le groupe a présenté son&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}