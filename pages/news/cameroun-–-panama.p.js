import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cameroun – Panama</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cameroun – Panama"/>
        <meta name="description" content="Trending News about Cameroun – Panama" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cameroun – Panama</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/a4529262-6768-11ed-8199-005056bfb2b6/w:1280/p:16x9/AP22013816805858.jpg" alt="Cameroun – Panama"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/fr/afrique-foot/20221118-coupe-du-monde-2022-le-cameroun-neutralis%C3%A9-par-le-panama-pour-son-dernier-match-amical'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022: le Cameroun neutralisé par le Panama pour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTQv6Zd1Az1k2S7QuMDprrRLCUSc1-wntuMxFJijBP1SZpQ26kfJt5f6tSsnOXYXAEYKcGT505" alt="Coupe du monde 2022: le Cameroun neutralisé par le Panama pour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Lions indomptables ont fait match nul avec la sélection panaméenne (1-1), vendredi 18 novembre à Abou Dabi. Tout juste entré en jeu en seconde période,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/cameroun-panama-malgre-l-inevitable-choupo-moting-les-lions-indomptables-inquietent-avant-le-mondial-806699'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroun - Panama : malgré l&#39;inévitable Choupo-Moting, les Lions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTykfXQ5xp8xQTft02M84J7cz1mSjXMiN1psWZtdNKiVUCnvqNJ7S7Mcf5Z0-99mvLwCaHPpBk" alt="Cameroun - Panama : malgré l&#39;inévitable Choupo-Moting, les Lions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Cameroun, pour son dernier match de préparation avant la Coupe du monde, n&#39;a pas franchement rassuré face au Panama (1-1).</p></div>
            </div>
        </a><a href='https://www.footmercato.net/a355551681317633945-amical-le-cameroun-encore-accroche-par-le-panama'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amical : le Cameroun encore accroché par le Panama</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1HZEF68LmwSzwURDjgFzmSULRBfCl-znEIWBrokIrEu79GGIdGgoD98UVjh4Ej9BXh2tK5kKY" alt="Amical : le Cameroun encore accroché par le Panama" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Décidément, le Cameroun n&#39;y arrive toujours pas. Et ça ne devrait pas plaire du tout à Samuel Eto&#39;o. Pour leur dernier match de préparation avant (.</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-cameroun/coupe-du-monde-le-cameroun-accroche-par-le-panama-en-match-de-preparation-feeb253c-6744-11ed-8d02-f374de6baa45'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. Le Cameroun accroché par le Panama en match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6DxUP51zxxGYjuU-E3VyyvziYFajeG0NOxjJJZPBJjDo64EdnYEarUd_2QKt7YJgjpuQFSAI2" alt="Coupe du monde. Le Cameroun accroché par le Panama en match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi, la sélection camerounaise de Choupo-Moting a calé (1-1) en match de préparation face au Panama, 60e nation au classement Fifa.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Football/Actualites/Le-cameroun-cale-face-au-panama-en-preparation-a-la-coupe-du-monde-malgre-choupo-moting/1365492'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Cameroun cale face au Panama en préparation à la Coupe du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTA22SHSUjH0R4znTTESYfYQEpP51NyV3FsdHXxQYkdCH1AMcDyU9nlB2c0PFBOSf6w5vg7YQ2u" alt="Le Cameroun cale face au Panama en préparation à la Coupe du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Lions indomptables ne sont pas parvenus à l&#39;emporter face au Panama, pourtant non qualifié pour la Coupe du monde, pour son dernier match de préparation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/football/matches-amicaux/2022/live-cameroun-panama_mtc1404920/live.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroun - Panama en direct - Matches amicaux : Football Scores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCFWsZualIjPSa6tCD_QS3gDq3F4S5toIikOPJ8NOp_6hPQpMCE6asAkO7cD4hDUqzfbwOSESy" alt="Cameroun - Panama en direct - Matches amicaux : Football Scores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eurosport est votre source privilégiée pour les dernières mises à jour des matches de Matches amicaux. Obtenez le résumé complet du Cameroun - Panama,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.camfoot.com/actualites/cameroun-panama-quest-ce-qui-na-pas-marche,389757.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroun - Panama : qu&#39;est-ce qui n&#39;a pas marché?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQuVYyOsazrcb6Gl7szfVJMV-oT-AEXdgnVT6Lxe8p-pd0k6WiniRok7H3OpTBqZ_XQu86FWYV4" alt="Cameroun - Panama : qu&#39;est-ce qui n&#39;a pas marché?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les Lions Indomptables du Cameroun ont réussi l&#39;exploit de faire match nul contre le Panama. Une sélection éliminée de la course au mondial 2022 depuis&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}