import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cheque energie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cheque energie"/>
        <meta name="description" content="Trending News about Cheque energie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cheque energie</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/638360966537c74da778e348/large/image.jpg?v=1" alt="Cheque energie"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/27/cheque-energie-bois-montant-beneficiaires-tout-ce-quil-faut-savoir-sur-cette-aide-de-letat-10830867.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chèque énergie bois : montant, bénéficiaires... Tout ce qu&#39;il faut ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTibRft0sQJjL-WVtsPsWWSN5HjjUikOaUuoCKwYNkomPI42TjkD3-nJUXQbQZnPjL6-e7A7-03" alt="Chèque énergie bois : montant, bénéficiaires... Tout ce qu&#39;il faut ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Certains ménages se chauffant au bois bénéficieront d&#39;une aide de l&#39;État dès le 22 décembre. Son montant dépendra du mode de chauffage (pellets ou bûches)&nbsp;...</p></div>
            </div>
        </a><a href='https://lexpansion.lexpress.fr/actualite-economique/cheques-energie-bois-et-fioul-les-aides-du-gouvernement-pour-se-chauffer-cet-hiver_2184236.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chèques énergie, bois et fioul... Les aides du gouvernement pour se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQIUgUvdBmgEIteZzzREcnf0N9cxQBzTAkWPqAZlC3JeR5tYutRso1CwjIxkpjbWZR1vXMeJVD9" alt="Chèques énergie, bois et fioul... Les aides du gouvernement pour se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les ménages qui se chauffent au bois pourront, sous conditions de revenus, prétendre à un chèque allant de 50 à 200 euros à partir du 22 décembre,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/economie/energie/chauffage-au-bois-un-cheque-energie-entre-50-et-200-pourra-etre-demande-des-le-22-decembre-4b1c7206-6e31-11ed-8a4c-ae62722f8615'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chauffage au bois : un chèque énergie entre 50 et 200 € pourra être ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSX9xONk93F7OTIDZmmWXS1hkOcaj-nLwdWfZkNbeycCdulGaAwHF7b4KOe4nwHi8a_Sw0A_X-4" alt="Chauffage au bois : un chèque énergie entre 50 et 200 € pourra être ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le ministre des Comptes publics Gabriel Attal a détaillé dans une interview publiée ce dimanche 27 novembre les modalités d&#39;un chèque énergie accessible aux&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/economie/energie/chauffage-au-bois-un-cheque-energie-de-50-a-200-euros-des-le-22-decembre-qui-pourra-en-beneficier-13144708.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chauffage au bois : un chèque énergie de 50 à 200 euros dès le 22 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSmeq3lIcWvD3UjkMmKGkdKGAuiVq8Cm7KEIcroWOwDI7UEcI4aZVACROHiIa3rvLc0sTHRZfwb" alt="Chauffage au bois : un chèque énergie de 50 à 200 euros dès le 22 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Certains ménages se chauffant au bois bénéficieront d&#39;une aide de l&#39;État dès le 22 décembre. Qui est concerné ? Quelles sont les démarches à effectuer ?</p></div>
            </div>
        </a><a href='https://www.europe1.fr/economie/cheque-bois-energie-de-50-a-200-euros-qui-pourra-en-beneficier-4150535'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chèque bois énergie : de 50 à 200 euros, qui pourra en bénéficier ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKkZz5R91JTvTtFvt1YRpp5ZVG1C-TXJVP9WrVzSFflHceZBvQux3BgYKBwgZUt8RQawzZhnhQ" alt="Chèque bois énergie : de 50 à 200 euros, qui pourra en bénéficier ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans une interview au &quot;Parisien&quot;, le ministre des Comptes publics Gabriel Attal a annoncé qu&#39;à partir du 22 décembre, les Français qui se chauffent au bois&nbsp;...</p></div>
            </div>
        </a><a href='https://www.herault-tribune.com/articles/cheque-energie-exceptionnel-de-decembre-qui-y-est-eligible-et-a-quelle-date/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chèque énergie exceptionnel de décembre : qui y est éligible, et à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTagQxqvCklbGIIkVZp9m0TYjjMexGOCX_0kvWGEgknbYOQrFTIehsQySUsmyjw0pV8B07JyJWM" alt="Chèque énergie exceptionnel de décembre : qui y est éligible, et à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12 millions de foyers français vont avoir droit à un chèque énergie exceptionnel d&#39;un montant de 100 ou 200 € au mois de décembre 2022, pour les aider à&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}