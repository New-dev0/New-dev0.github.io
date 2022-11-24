import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>La Taupe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,La Taupe"/>
        <meta name="description" content="Trending News about La Taupe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>La Taupe</h1>
            <Image width={800} height={500} src="" alt="La Taupe"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/medias/television/la-taupe-sur-arte-un-remarquable-film-d-espionnage-avec-un-anti-james-bond-1106d37e-69c5-11ed-bd29-7d31c7eef0da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« La Taupe », sur Arte : un remarquable film d&#39;espionnage avec un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQgxWkZqgODrBfCE16JJNF0thPbsB4WVQqchoJGPLRtwP8lLEa0gseMmZENfoiY0zTWphW33OSZ" alt="« La Taupe », sur Arte : un remarquable film d&#39;espionnage avec un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans l&#39;excellent La Taupe, Gary Oldman incarne avec brio George Smiley, l&#39;exact opposé de son compatriote James Bond. À voir sur Arte, ce mercredi 23&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cineserie.com/news/cinema/la-taupe-retour-sur-le-groupe-dagents-doubles-qui-a-inspire-le-film-5507390/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Taupe : retour sur le groupe d&#39;agents doubles qui a inspiré le film</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFrINFTvPXQohbtRX9plK9c7uHhp4MlUWHcYV7QqBnCgKpY6GnxS9xEDpSskQtdpHeeS_TgZgN" alt="La Taupe : retour sur le groupe d&#39;agents doubles qui a inspiré le film" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retour sur les agents doubles qui ont inspiré John le Carré pour son roman &quot;La Taupe&quot;, transposé à l&#39;écran par Tomas Alfredson en 2011.</p></div>
            </div>
        </a><a href='https://www.programme-tv.net/news/cinema/314488-la-taupe-arte-pourquoi-le-film-est-il-dedie-a-bridget-oconnor/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La taupe (Arte) : pourquoi le film est-il dédié à Bridget O&#39;Connor ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="La taupe (Arte) : pourquoi le film est-il dédié à Bridget O&#39;Connor ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Adapté d&#39;un roman du maître de l&#39;espionnage John Le Carré, La Taupe, diffusé ce mercredi 23 novembre à 20h55 sur Arte, réunit un casting de choix.</p></div>
            </div>
        </a><a href='https://www.toutelatele.com/la-taupe-arte-l-histoire-vraie-d-une-chasse-a-l-homme-dans-le-film-avec-gary-oldman-et-benedict-cumberbatch-146654'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La taupe (Arte) : l&#39;histoire vraie d&#39;une chasse à l&#39;homme dans le film ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKdxYrn9zH5dXBQ7Uug5qnYUOCXO1xQRAxIP3gfrrD7BsnJaJwTwJ9qHdZ0A4VmkMwP8dI3vO5" alt="La taupe (Arte) : l&#39;histoire vraie d&#39;une chasse à l&#39;homme dans le film ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La taupe, film d&#39;espionnage de Tomas Alfredson, sorti au cinéma en 2011 aux États-Unis, sera proposé sur Arte ce mercredi 23 novembre à 20h55 avec Gary&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}