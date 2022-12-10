import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coupure electricite Paris</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coupure electricite Paris"/>
        <meta name="description" content="Trending News about Coupure electricite Paris" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coupure electricite Paris</h1>
            <Image width={800} height={500} src="https://www.francebleu.fr/s3/cruiser-production/2022/12/c6abe76b-f767-4e26-b081-66791925c6f0/1200x680_bougie.jpg" alt="Coupure electricite Paris"/>
            <h3>Recent News</h3>
            <a href='https://www.francebleu.fr/infos/societe/ce-que-l-on-sait-sur-la-coupure-de-courant-a-paris-jeudi-soir-5191276'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupure de courant à Paris : ce que l&#39;on sait sur ce qui s&#39;est passé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDs8jntnMohftrbceoT5rwyWYbZdiM1OtFCLoZvGIfwSPA0xxI-YEPPa72yPUOQ5WFzJ3UrySE" alt="Coupure de courant à Paris : ce que l&#39;on sait sur ce qui s&#39;est passé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une panne de courant due à un incident sur un transformateur électrique a plongé dans le noir plusieurs quartiers du centre de Paris pendant une vingtaine&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfmtv.com/paris/coupure-d-electricite-a-paris-les-explication-d-enedis_AV-202212090299.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupure d&#39;électricité à Paris: les explications d&#39;Enedis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3i6rS9wK5vGKKolGEJomncRZt-hy2YCrj469GK7MR8I_TNh_TcQguozDWFqn1r7m7uY1Sn-y3" alt="Coupure d&#39;électricité à Paris: les explications d&#39;Enedis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>125.000 foyers ont été privés d&#39;électricité en raison d&#39;&quot;un incident technique sur un transformateur&quot;.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/economie/energie/paris-plusieurs-quartiers-sont-prives-d-electricite-un-retour-a-la-normale-dans-les-meilleurs-delais-selon-rte_5533002.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Panne d&#39;électricité à Paris : 125 000 clients concernés au plus fort ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRByaoKBphFyuc5xF1YgTC86BTI1l6J-YuEJ0LVBbELCKCFh3deKL5t12W6GxHElUsaJRf5SiHs" alt="Panne d&#39;électricité à Paris : 125 000 clients concernés au plus fort ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enedis précise à franceinfo que le courant a été rétabli pour &quot;la quasi totalité des clients en moins de 20 minutes&quot;.</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/societe/video-coupure-d-electricite-paris-panne-courant-edf-enedis-rte-ce-que-l-on-sait-des-causes-de-l-incident-2241318.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupure d&#39;électricité géante à Paris : que s&#39;est-il passé ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwvAtxlM7I1Ecyrn7AFlkj40c9E2F_eyPnrbTNRd0wrub4a4zxsVKNLNrQLIoxoZzkVxPwnn3I" alt="Coupure d&#39;électricité géante à Paris : que s&#39;est-il passé ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un porte-parole du gestionnaire a détaillé à l&#39;AFP que la situation était due à &quot;un incident technique sur un transformateur d&#39;Enedis&quot; qui a entraîné la coupure&nbsp;...</p></div>
            </div>
        </a><a href='https://www.linternaute.com/actualite/societe/2684444-coupure-d-electricite-a-paris-quelle-est-la-cause-de-la-panne/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupure d&#39;électricité à Paris : un transformateur Enedis responsable ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8b5voO17NJHe9IhPLCYho5EsxVwKxv0gI5YEXl4BIZmzPZHeFeKp82W3sI7oRqWSXbRBI60yK" alt="Coupure d&#39;électricité à Paris : un transformateur Enedis responsable ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une coupure d&#39;électricité a frappé Paris et des milliers de foyers dans la soirée du 8 décembre. La panne ne serait pas liée à des tensions mais à une&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/paris-75/plusieurs-quartiers-de-paris-plonges-dans-le-noir-apres-une-coupure-de-courant-08-12-2022-ASQWCSWQEVEFLHYTI4XFLS3PSQ.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris : plusieurs quartiers plongés dans le noir jeudi soir après une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdMeZFrwZBiuMHiO07MgsyGUJNCpEntvtyu5bXWeRJk909cgJ9ha3NzuiJS9LZlzalkkAF4oGg" alt="Paris : plusieurs quartiers plongés dans le noir jeudi soir après une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un « incident technique sur un transformateur d&#39;Enedis » a entraîné la coupure d&#39;une « radiale », ligne à haute tension enterrée de 225 000 volts, a expliqué un&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}