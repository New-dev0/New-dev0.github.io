import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marche de noel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marche de noel"/>
        <meta name="description" content="Trending News about Marche de noel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marche de noel</h1>
            <Image width={800} height={500} src="https://images.petitbleu.fr/api/v1/images/view/6378e6bf5c3e264ef044c3bd/large/image.jpg?v=1" alt="Marche de noel"/>
            <h3>Recent News</h3>
            <a href='https://www.petitbleu.fr/2022/11/19/la-feerie-des-marches-de-noel-est-de-retour-des-ce-week-end-en-lot-et-garonne-10811464.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La féerie des marchés de Noël est de retour dès ce week-end en Lot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMZxkGUb90wq-PkVGz7Knu1Dg8fm77cFdQQbBxXKV7T7Ywu9okawon1YKqQO--qyV_89d6uLAw" alt="La féerie des marchés de Noël est de retour dès ce week-end en Lot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autour d&#39;Agen, ce sont les villes de Brax, qui ouvre le bal avec son marché de l&#39;Avent du 26 au 27 novembre à la salle des fêtes de 10 heures à 18 heures, ainsi&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/paris-ile-de-france/paris/le-marche-de-noel-des-tuileries-mise-sur-le-retour-des-touristes-2658508.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le marché de Noël des Tuileries mise sur le retour des touristes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPOppCBOobAfEWdZ3sOI0eL396Pn_-78walOLfPZuMQM65IH1MPUjwTsgdklRAuTamZFBeC7k7" alt="Le marché de Noël des Tuileries mise sur le retour des touristes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le marché de Noêl des Tuileries rouvre ses portes ce samedi. Après deux éditions marquées par la pandémie de Covid l&#39;institution parisienne mise sur le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lanouvellerepublique.fr/indre/ou-et-quand-ont-lieu-les-marches-de-noel-dans-l-indre'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Où et quand ont lieu les marchés de Noël dans l&#39;Indre ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSAiAG6xgEdggNbu6t6IJY3wwFS34txjT-mw3aQ5Nfe1CwXtbCinfZyAZJTtTokyph-D4-9yAi3" alt="Où et quand ont lieu les marchés de Noël dans l&#39;Indre ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CARTE. La saison des marchés de Noël débute dans l&#39;Indre. Plusieurs dizaines sont d&#39;ores et déjà programmés à travers tout le département.</p></div>
            </div>
        </a><a href='https://www.leberry.fr/bourges-18000/loisirs/premier-week-end-du-marche-de-noel-au-chateau-de-bouges-indre_14218060/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premier week-end du marché de Noël au château de Bouges (Indre)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjOXdU6rFfjUEk9aEz7B3scnJyVZmcRyydq5oVtawQR5FgZZyNj9QgJ3X7-itkwi9mWI5Pr8zA" alt="Premier week-end du marché de Noël au château de Bouges (Indre)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Centre des monuments nationaux donne rendez-vous au public le 17 décembre à partir de 19h 30 pour une visite libre du château décoré, et un spectacle conté&nbsp;...</p></div>
            </div>
        </a><a href='https://jhm.fr/marche-de-noel-et-beaujolais-un-mariage-judicieux/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>jhm | Marché de Noël et beaujolais : un mariage judicieux</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSv7Fo3Q94UQKe1txPU2pZqbiM89Vxx26E8gIIAIBRKtUr8gBgMLhvpIxrv9vvJTBEPbCZXkHQl" alt="jhm | Marché de Noël et beaujolais : un mariage judicieux" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Afin de faire honneur au beaujolais nouveau, les membres du comité d&#39;animation se sont rassemblés au centre socio-culturel, jeudi 17 novembre, avec pour.</p></div>
            </div>
        </a><a href='https://www.oisehebdo.fr/2022/11/19/fontaine-chaalis-le-marche-de-noel-dans-labbaye-revu-et-corrige/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fontaine-Chaalis. Le marché de Noël dans l&#39;abbaye revu et corrigé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFaSMh1XqZbgB7dMWxOd6UvB4XwF6H98Pc3ybG5pr3W5TQwANKh6jOMTvdPDEk3bKmPDXkST6D" alt="Fontaine-Chaalis. Le marché de Noël dans l&#39;abbaye revu et corrigé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le rotary club de Senlis organise son traditionnel marché de Noël dans l&#39;abbaye de Chaalis (Oise) jusqu&#39;au 20 novembre.</p></div>
            </div>
        </a><a href='https://www.leprogres.fr/economie/2022/11/19/cosette-creations-prepare-son-marche-de-noel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gendrey. Cosette Créations prépare son marché de Noël</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQFDMe10nVq9OhGoFRIRgZGQBHYcoZ8_-MRw_4Va8Q9vsROdnqO2QrvRoNEw0zkvNR8RsjMZay" alt="Gendrey. Cosette Créations prépare son marché de Noël" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce mercredi 16 novembre, l&#39;atelier Cosette Créations de notre couturière locale Charlyne Cordier était en pleins préparatifs de son marché de Noël.</p></div>
            </div>
        </a><a href='https://www.leveil.fr/puy-en-velay-43000/actualites/le-marche-de-noel-du-club-soroptimist-se-poursuit-a-la-salle-jeanne-d-arc-au-puy_14219036/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le marché de Noël du club Soroptimist se poursuit à la salle Jeanne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvttYQ6JMk4iwMDrjTZL5CRqx_CSr-2w8-fWnQkR8UtafTKWAq_7wfh91ShhoD6r05SCTWdKKa" alt="Le marché de Noël du club Soroptimist se poursuit à la salle Jeanne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Côté table, du foie gras, des chocolats, des produits de la ruche, des champignons, des confiseries et des spiritueux (…) sont proposés aux plus gourmands.</p></div>
            </div>
        </a><a href='https://www.courrier-picard.fr/id362182/article/2022-11-19/rivery-la-fete-des-artisans-un-marche-de-noel-inspirant'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rivery: la Fête des artisans, un marché de Noël inspirant</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYPOTTEy2tx2buurH0o6Z1iDNekX0AUdXjV26aItEqvX1LmvfGs5_Vacow8729wgk8vONXmvNR" alt="Rivery: la Fête des artisans, un marché de Noël inspirant" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sidonie Sauvé fabrique des chapeaux avec des vieux tissus. Elle a le projet d&#39;installer un atelier à Amiens, avec&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}