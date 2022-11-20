import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harry Styles</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harry Styles"/>
        <meta name="description" content="Trending News about Harry Styles" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harry Styles</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/styles-wilde-1-230ac2-0@1x.jpeg" alt="Harry Styles"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/culture/apres-deux-ans-d-amour-harry-styles-et-olivia-wilde-ont-decide-de-faire-un-break-2239188.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Après deux ans d&#39;amour, Harry Styles et Olivia Wilde ont décidé de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXi7NkFaWqR5kyZnU6vzIZHFFRA1i0owjq0m764raz3aBYc4z_oYJ55PwB-TcxxUYmgmvVJsyn" alt="Après deux ans d&#39;amour, Harry Styles et Olivia Wilde ont décidé de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ En couple depuis janvier 2021, la star américaine et le chanteur britannique reprennent leur liberté. Ils s&#39;étaient rencontrés sur le tournage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vanityfair.fr/people/article/harry-styles-et-olivia-wilde-ont-rompu-mais-restent-amis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Styles et Olivia Wilde ont rompu mais «restent amis»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTHBz6SGJugz3Fom_ZB0d6o43Ywa7io3wVovB2uFL7ZxppuOmNdjfRLW7nXO2a2p18seYPareg" alt="Harry Styles et Olivia Wilde ont rompu mais «restent amis»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selon People, Harry Styles et Olivia Wilde se sont séparés, après deux ans d&#39;amour, car pour l&#39;instant leurs vies sont trop éloignées : « Leurs priorités&nbsp;...</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/harry-styles-et-olivia-wilde-separes-les-raisons-de-leur-rupture-devoilees-1668934'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Styles et Olivia Wilde séparés : les raisons de leur rupture ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgx3zxzuWdnlRxG2MCsccL1-mKncVreze6ohiadW1K_akUByHDsvM_Iq9BaQUHvLkYTGhZgqyA" alt="Harry Styles et Olivia Wilde séparés : les raisons de leur rupture ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Olivia Wilde et Harry Styles, c&#39;est fini ! Le couple aurait décidé de faire une pause. Il faut dire que leur relation était loin d&#39;être un long fleuve&nbsp;...</p></div>
            </div>
        </a><a href='https://www.public.fr/News/Harry-Styles-et-Olivia-Wilde-apres-deux-ans-d-amour-la-rupture-et-on-vous-explique-pourquoi-1751102'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Styles et Olivia Wilde : après deux ans d&#39;amour, la rupture et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGUPJPSHgh_3ebNSBU9q-_MvzkLs2ooQ964IfEePi0xN4dCuRjlouvn_GJXu_sW6G9wPYCufbM" alt="Harry Styles et Olivia Wilde : après deux ans d&#39;amour, la rupture et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après deux années de relation, le chanteur Harry Styles et la comédienne Olivia Wilde ont décidé de se séparer !</p></div>
            </div>
        </a><a href='https://fr.news.yahoo.com/harry-styles-olivia-wilde-s%C3%A9par%C3%A9s-213100519.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Styles et Olivia Wilde séparés ? Des révélations sur leurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoMX9IQGN_BPaZz_jqCgrSJjnUyb_pGxyaQbpnvKvbOlDGvCMNgY4Jw0LmnBZaRNal7N4-pNZh" alt="Harry Styles et Olivia Wilde séparés ? Des révélations sur leurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À l&#39;époque, Olivia Wilde venait de se séparer de l&#39;acteur Jason Sudeikis avec lequel elle était en couple depuis novembre 2011. Ils ont eu deux enfants dont un&nbsp;...</p></div>
            </div>
        </a><a href='https://parismatch.be/actualites/people/602833/harry-styles-et-olivia-wilde-rompent-apres-deux-ans-de-relation'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harry Styles et Olivia Wilde rompent après deux ans de relation</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3e6Cm308QxTwmRLrx2QJQFOPuRoNyJ7fVhC_Nk3vVyNX6TINV2PstmA0PEdLAcvONb9LyWvty" alt="Harry Styles et Olivia Wilde rompent après deux ans de relation" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harry Styles et Olivia Wilde, c&#39;est fini, ou en tout cas pour le moment. Le chanteur de Watermelon Sugar et sa petite amie actrice et réalisatrice ont&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}