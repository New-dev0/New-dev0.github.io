import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michel Polnareff</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michel Polnareff"/>
        <meta name="description" content="Trending News about Michel Polnareff" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michel Polnareff</h1>
            <Image width={800} height={500} src="https://i.f1g.fr/media/eidos/1200x630_crop/2022/11/18/XVMaad19f32-6760-11ed-ab5d-da39bff1ca20.jpg" alt="Michel Polnareff"/>
            <h3>Recent News</h3>
            <a href='https://www.lefigaro.fr/culture/michel-polnareff-je-ne-regarde-jamaisen-arriere-20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Polnareff: «Je ne regarde jamais en arrière»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjA4B8bmShm5ZZZLh2K0VyghLqXVKIhyhSbvQnFKY4nmSv7FOe4eA77kA1em1531b-qc9ZAdgR" alt="Michel Polnareff: «Je ne regarde jamais en arrière»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RENCONTRE - Le chanteur revient avec un disque de ses tubes qu&#39;il interprète seul au piano, avant une tournée l&#39;année prochaine. Rencontre.</p></div>
            </div>
        </a><a href='https://www.cnews.fr/culture/2022-11-18/michel-polnareff-je-suis-ravi-de-remonter-sur-scene-1289144'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Polnareff : «Je suis ravi de remonter sur scène»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSb0tyBrJ1vX6R0HcTw9vjCj7MxnqreCilL-B58TaK8pzlhL_4ToCpgnROHwGNK7XsfHuMImM_c" alt="Michel Polnareff : «Je suis ravi de remonter sur scène»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une bonne nouvelle pour les fans du chanteur. Alors que son nouvel album, intitulé «Polnareff chante Polnareff», composé de reprises piano-voix de ses tubes,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/michel-polnareff-face-au-trac-est-ce-que-je-sais-encore-chanter_506806'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Polnareff face au trac : “Est-ce que je sais encore chanter ?”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZAKpIRy5UolyUvH_eGrW2SUcG5lZybncSY-rDyp8999GkXc23NqR4OHnn1Mi9wPjFmX0wi4M6tQ" alt="Michel Polnareff face au trac : “Est-ce que je sais encore chanter ?”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invité ce vendredi 18 novembre sur RTL à l&#39;occasion de la sortie de son nouvel album Polnareff, chante Polnareff, le chanteur a confié avoir eu des...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/culture/musique/document-rtl-michel-polnareff-se-confie-sur-son-retour-j-avais-un-peu-le-trac-7900207371'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DOCUMENT RTL - Michel Polnareff se confie sur son retour : &quot;J ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhtGbgS2VLT8LA4PoUpqwTDrpOhZ03AhcFhleTjlBGVvkrIw20EEzSdANkqh7hiG1nn0gvUYaP" alt="DOCUMENT RTL - Michel Polnareff se confie sur son retour : &quot;J ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De passage en France, Michel Polnareff a accordé l&#39;une de ses rares interviews à RTL.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/culture/musique/michel-polnareff/musique-michel-polnareff-signe-son-grand-retour-avec-un-album-de-reprise-de-ses-plus-grands-succes_5485008.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Musique : Michel Polnareff signe son grand retour avec un album de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTKyzhKjaP_NzWqGCV_wM4Iiz9LNmgDClupxWdxVxmvTdyFMPlI6EHWv-M_vUArO-IH_a-yW-4Q" alt="Musique : Michel Polnareff signe son grand retour avec un album de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est le retour d&#39;une légende de la chanson française. Michel Polnareff a maintenant 78 ans et revient avec un nouvel album dans lequel il reprend ses plus&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/video-cest-aberrant-michel-polnareff-regle-ses-comptes-avec-avec-patrick-cohen_506808'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – “C&#39;est aberrant !” : Michel Polnareff règle ses comptes avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRakMA0vrgob3-m5R7kvx2QedD_idO5iOTKXT36_XhUrcPXICUNbf0DoNgRd53pne4Un_B6cxFW" alt="VIDÉO – “C&#39;est aberrant !” : Michel Polnareff règle ses comptes avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Micherl Polnareff était l&#39;invité de C à vous vendredi 17 novembre au soir. L&#39;occasion pour le chanteur de Goodbye Marylou de faire table rase du pa...</p></div>
            </div>
        </a><a href='https://www.gala.fr/l_actu/news_de_stars/le-saviez-vous-orelsan-est-tres-proche-de-michel-polnareff_506803'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le saviez-vous ? Orelsan est très proche de… Michel Polnareff</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRquxjKakaI63jdDKkReMPaRWfWshMz2nUY1jyhq44jb7oD4pvdVGnlxPLDVVImjxcFdRdQ36Bt" alt="Le saviez-vous ? Orelsan est très proche de… Michel Polnareff" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La cérémonie des NRJ Music Awards signe son grand retour sur TF1, ce vendredi 18 novembre. L&#39;occasion de se pencher sur l&#39;une des stars de la soiré...</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/scenes/concert-musique/articles/285327-michel-polnareff-en-dedicace-exceptionnelle-et-gratuite-a-la-fnac-des-ternes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michel Polnareff en dédicace exceptionnelle et gratuite à la Fnac ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ37-7jjMTnpyJ3EJfwdRnNWOL9envmQAwmXEe4w7UWsWdtbFIDDyV_d6MQk8XqmVzRBpgTVArR" alt="Michel Polnareff en dédicace exceptionnelle et gratuite à la Fnac ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autre actualité musicale de l&#39;artiste ? La sortie d&#39;un nouvel opus. Dans les bacs depuis ce 18 novembre 2022, &quot;Polnareff chante Polnareff&quot; est un album de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/culture/musiques/entretien-michel-polnareff-l-interet-de-ce-disque-est-qu-il-est-vrai-6f23e84e-668b-11ed-9c6a-75ffb43b0cc7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ENTRETIEN. Michel Polnareff : « L&#39;intérêt de ce disque est qu&#39;il est ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQ5ErAPgm74PVOazpJ98Y9m5T8vn44WTJ0glw1ny37PDieqBrdW9I2CB09CCQx9DuACyWsUdPu" alt="ENTRETIEN. Michel Polnareff : « L&#39;intérêt de ce disque est qu&#39;il est ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans un nouvel album, Michel Polnareff propose des versions piano-voix de ses grands succès, plaisantes à écouter, fidèles, mais avec de petites&nbsp;...</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/tv/314198-je-trouve-ca-incroyable-michel-polnareff-regle-ses-comptes-avec-patrick-cohen-lors-de-son-retour-dans-c-a-vous-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Je trouve ça incroyable !&quot; : Michel Polnareff règle ses comptes avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Je trouve ça incroyable !&quot; : Michel Polnareff règle ses comptes avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michel Polnareff fait son grand retour sur le devant de la scène avec un nouvel album et une tournée à venir. Mais le chanteur n&#39;a toujours pas digéré le&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}