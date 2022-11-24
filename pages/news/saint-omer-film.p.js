import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Saint Omer film</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Saint Omer film"/>
        <meta name="description" content="Trending News about Saint Omer film" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Saint Omer film</h1>
            <Image width={800} height={500} src="http://www.justice.gouv.fr/art_pix/film_saint_omer.jpg" alt="Saint Omer film"/>
            <h3>Recent News</h3>
            <a href='http://www.justice.gouv.fr/histoire-et-patrimoine-10050/proces-historiques-10411/le-film-saint-omer-sort-en-salles-34651.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le film « Saint Omer » sort en salles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKp_P4GHfErI3EqxYHQuGr06SOb-7ex1vVDCj2Vt-_TlvbONj6WkF56IwK97UsGBYHl-BT-8wP" alt="Le film « Saint Omer » sort en salles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le long-métrage « Saint Omer », réalisé par Alice Diop, retrace l&#39;histoire vraie d&#39;une mère infanticide. Sorti au cinéma le 23 novembre 2022,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ecranlarge.com/films/critique/1457319-saint-omer-critique-12-femmes-en-colere'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saint Omer : critique 12 femmes en colère</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdFKaVqtXf5M4QkVsYtp3wnXfN400fnjVH_b2I9DqIpsGC6ZmTSZsACPdE1S4FJUuFsxNOZS3Jjw" alt="Saint Omer : critique 12 femmes en colère" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le film raconte l&#39;histoire de Rama (Kayije Kagame), une jeune romancière qui va assister au procès de Laurence Coly (Guslagie Malanga) à la cour d&#39;assises de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marianne.net/culture/cinema/saint-omer-de-alice-diop-que-vaut-le-film-qui-representera-la-france-aux-oscars'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Saint-Omer&quot;, de Alice Diop : que vaut le film qui représentera la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRcxqF4O9JBNrJALnkN3jlVGph6oqd3320Q_3oYm2Ao6vaWybZpqD3UxV1P2iCJ1xlEFEQmaEpK" alt="&quot;Saint-Omer&quot;, de Alice Diop : que vaut le film qui représentera la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Plébiscité au dernier Festival de Venise, acclamé par la critique extatique et sélectionné pour représenter la France lors de la prochaine cérémonie des&nbsp;...</p></div>
            </div>
        </a><a href='https://www.linternaute.com/cinema/tous-les-films/2662679-saint-omer-l-histoire-vraie-qui-inspire-le-representant-de-la-france-aux-oscars/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saint Omer : l&#39;histoire vraie qui a inspiré le film représentant la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtnQuVcl0kW8k8u_py1CXsS-49sSKmcqYwjZySsSGwtS65swW8m8HHi92SgnjbcUfcUgpWq37i" alt="Saint Omer : l&#39;histoire vraie qui a inspiré le film représentant la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SAINT OMER FILM. &quot;Saint Omer&quot;, le film qui représente la France aux Oscars 2023, est sorti au cinéma ce 23 novembre 2022. Il revient sur un terrible fait&nbsp;...</p></div>
            </div>
        </a><a href='https://www.madmoizelle.com/saint-omer-nest-pas-un-film-sur-linfanticide-mais-sur-la-maternite-rencontre-avec-alice-diop%EF%BF%BC-1464277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saint Omer n&#39;est pas un film sur l&#39;infanticide mais sur la maternité ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0v3HW7d0RRruGtVTCVwve14nuMpwyIUgEu2rQbUY0hNmPgGDYky3HUcDTZNIER8Z1eUspzisD" alt="Saint Omer n&#39;est pas un film sur l&#39;infanticide mais sur la maternité ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vous avez une envie de cinéma mais ne savez pas quoi choisir parmi les sorties en salles ? Dans Premier Rang, Maya Boukella, journaliste pop culture chez&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/actu/justice-faits-divers/saint-omer-l-histoire-vraie-de-fabienne-kabou-qui-a-inspire-ce-film-troublant-7900208154'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quelle est la véritable histoire de Fabienne Kabou derrière le film ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQv_OTThJgigKRBUup4ikNnmI9HNpRK7xk3Avw3HXqmFoSdUwdb-6b18tZNQouoKaaunCqxeIe" alt="Quelle est la véritable histoire de Fabienne Kabou derrière le film ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La réalisatrice Alice Diop assiste à la première de &quot;Saint Omer&quot; lors du 60e Festival du film de New York à la Film Society of Lincoln Center, Walter Reade&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}