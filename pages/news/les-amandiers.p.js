import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Les Amandiers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Les Amandiers"/>
        <meta name="description" content="Trending News about Les Amandiers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Les Amandiers</h1>
            <Image width={800} height={500} src="https://images.midilibre.fr/api/v1/images/view/637462eba595d4590f6edfde/large/image.jpg?v=3" alt="Les Amandiers"/>
            <h3>Recent News</h3>
            <a href='https://www.midilibre.fr/2022/11/16/cinema-les-amandiers-un-film-qui-fait-la-part-belle-aux-etudiants-dart-dramatique-10805548.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinéma : &quot;Les Amandiers&quot;, un film qui fait la part belle aux étudiants ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStBRGGRGWqcKV0fCQFnivqTv6FAugzErmCVzlPuu5xfnOaJkbCTg43teurav3rnEts8NWiGpqP" alt="Cinéma : &quot;Les Amandiers&quot;, un film qui fait la part belle aux étudiants ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Et surtout ensuite de pouvoir travailler avec la légende française du théâtre : Patrice Chéreau (Louis Garrel). Réalisé par Valeria Bruni Tedeschi, Les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiofrance.fr/franceculture/podcasts/affaire-critique/critique-cinema-les-amandiers-de-valeria-bruni-tedeschi-4780288'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Critique cinéma : &quot;Les Amandiers&quot; de Valeria Bruni Tedeschi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcST7pEx269T_n4sfj_QwxCg6OZfmR50uowKS7SRK40xuk01_RPNTN-DqDAwRFrASLUL7qPXN0YA" alt="Critique cinéma : &quot;Les Amandiers&quot; de Valeria Bruni Tedeschi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans son nouveau film à teneur autobiographique, la réalisatrice entend rendre compte de son expérience de comédienne étudiante à l&#39;école du Théâtre des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vogue.fr/culture/article/valeria-bruni-tedeschi-interview-les-amandiers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Les Amandiers : les confessions de Valeria Bruni Tedeschi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQy20WYOYrtrzEw_O31_RFRlmHHUM_JT-w1RqZBIQYqJ9IrjQmC2xSjjyLs_ll-GdyEZY9ecYOQ" alt="Les Amandiers : les confessions de Valeria Bruni Tedeschi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;actrice se confie à Vogue sur son nouveau film en tant que réalisatrice, Les Amandiers. Conversation entre présent et passé.</p></div>
            </div>
        </a><a href='https://www.rfi.fr/fr/culture/20221116-rage-utopie-les-amandiers-film-passionnant-valeria-bruni-tedeschi-patrice-ch%C3%A9reau'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La rage et l&#39;utopie des «Amandiers», le film le plus passionnant de l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTheUpvvxMfndJZwbNRHeq6HrGBdvoU8BDxTqkLBjKKF9r03l-zR9fsETWKiqD1uHpNf7D1nByi" alt="La rage et l&#39;utopie des «Amandiers», le film le plus passionnant de l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;était l&#39;utopie d&#39;un théâtre plus grand que la vie. Avec courage et folie, Valeria Bruni Tedeschi nous fait vivre la passion brûlante de ces jeunes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/culture/20221116.OBS65965/les-amandiers-coma-la-maison-les-films-a-voir-ou-pas-cette-semaine.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Les Amandiers », « Coma », « la Maison »… Les films à voir (ou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8Ja1TKL0QqR_ei5_Sf104of_i3p49-Uiuhc2EhiUBB1CZ9EeBZHqPOjLpXDiEaimt3QFEmyNq" alt="« Les Amandiers », « Coma », « la Maison »… Les films à voir (ou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comédie dramatique française par Valeria Bruni Tedeschi, avec Nadia Tereszkiewicz, Sofiane Bennacer, Louis Garrel, Micha Lescot (2h06). Le visionnage de cette&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/paris-ile-de-france/hauts-de-seine/les-amandiers-de-valeria-bruni-tedeschi-vivre-sa-jeunesse-avant-qu-elle-ne-fane-2656100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;école des &quot;Amandiers&quot; de Valéria Bruni Tedeschi : vivre sa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjJ6_k2KxIZb8fHByW2L5x5jXBchb73-2n6RPmtYHpdmGpcnFHGuw-6b1r2fnJnzqFNMOLxOEL" alt="L&#39;école des &quot;Amandiers&quot; de Valéria Bruni Tedeschi : vivre sa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En salle aujourd&#39;hui, &quot;Les Amandiers&quot; de Valéria Bruni Tedeschi revient sur l&#39;école de Patrice Chéreau au mitan des années 1980. Entre fiction et souvenirs,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}