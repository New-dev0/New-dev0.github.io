import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vanesa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vanesa"/>
        <meta name="description" content="Trending News about Vanesa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vanesa</h1>
            <Image width={800} height={500} src="https://www.leparisien.fr/resizer/tNeJ4ZOk1IBo7aNM5DjOQzf-9-s=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/CLCVHPYJRJFC7OCDT4KRFEO4UU.jpg" alt="Vanesa"/>
            <h3>Recent News</h3>
            <a href='https://www.leparisien.fr/faits-divers/meurtre-de-vanesa-une-foule-silencieuse-et-des-roses-blanches-pour-un-dernier-adieu-a-la-jeune-fille-25-11-2022-Z5CMNMI7DRBQJGZ37Z6L7UODJ4.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Vanesa : une foule silencieuse et des roses blanches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCNgmJFuFxavdq7zwmj-zBl6LnqMTcR1C870zni_kPBs4n8bm41JY7A4pFSycmVwasR3XrMSdc" alt="Meurtre de Vanesa : une foule silencieuse et des roses blanches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une marche blanche réunissant plus de 3 000 personnes à Tonneins (Lot-et-Garonne) ce vendredi a avancé jusqu&#39;au collège Germillac, en mémoire de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/25/meurtre-de-vanesa-le-meurtrier-presume-romain-chevrel-admis-en-hopital-psychiatrique-10827419.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EXCLUSIF. Meurtre de Vanesa : le meurtrier présumé Romain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpr0y1GrkLywSVk-pcdlDFhCZuycHYtXSykrHqTgI-6gplJCLZYJyA_u5XdJBaaOaVMrBdS6U0" alt="EXCLUSIF. Meurtre de Vanesa : le meurtrier présumé Romain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Décision a été prise d&#39;un transfert vers le centre hospitalier psychiatrique de la Candélie à quelques kilomètres du centre-ville d&#39;Agen, où il est pris en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/faits-divers-justice/marche-blanche-silencieuse-en-hommage-a-vanesa-collegienne-tuee-en-lot-et-garonne-1669406631'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lot-et-Garonne : une marche blanche en hommage à Vanesa, 14 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYqmDxpjJuOpoVUx_dq09OVMt39Y76zovXoHrO5MZt3M9N6eLrWIeyKhjfC8AUYsBU1P0GTk1K" alt="Lot-et-Garonne : une marche blanche en hommage à Vanesa, 14 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La mère de l&#39;adolescente, son petit frère et sa soeur cadette ouvraient le cortège, tous vêtus de blanc et le portrait de Vanesa en main. Une immense banderole,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/25/vanesa-tuee-a-tonneins-une-messe-et-une-marche-blanche-organisee-dans-la-commune-ce-vendredi-soir-10827860.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vanesa tuée à Tonneins : émotion et dignité lors de la messe et de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_bD41UpogKs-x-s6fM_cEFnCPJO2VQOKeA7tnjE5zBmaPCrexPzrg4lXbQdCTYu1xLel5SVuing" alt="Vanesa tuée à Tonneins : émotion et dignité lors de la messe et de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une marche blanche a débuté ce vendredi 25 novembre, à 18 h 30. Après une messe commencée une heure plus tôt, les proches de l&#39;adolescente et les habitants&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/lot-et-garonne/agen/meurtre-de-vanesa-a-tonneins-une-marche-blanche-ce-vendredi-25-novembre-2662968.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Vanesa à Tonneins : beaucoup de monde à la marche ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM5IaaL8fROFQXyp1WNK7ruCCPSkBTRDJF703sFPDyy6TriyP4I-Y4cM3vYdWpgljz7gixR9Ym" alt="Meurtre de Vanesa à Tonneins : beaucoup de monde à la marche ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce soir, vendredi 25 novembre à 18h30 une messe et une marche blanche de soutien à la famille de Vanesa se sont déroulées à Tonneins, dans le silence et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/faits-divers/meurtre-de-vanesa-une-marche-blanche-en-son-honneur-reunit-des-centaines-de-personnes-20221125'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Meurtre de Vanesa : une marche blanche en son honneur réunit des ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNaMssnLXoO-WWq6cHqi66z1FlkWstw_sSCM13YT7gt57N43BhU4B0DaOuuW6L53sOlntgVhXa" alt="Meurtre de Vanesa : une marche blanche en son honneur réunit des ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>REPORTAGE - De nombreux habitants de Tonneins (Lot-et-Garonne) sont venus soutenir la famille vendredi soir pour rendre un dernier hommage à Vanesa, 14 ans,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/justice-faits-divers/a-toi-vanesa-petit-ange-une-marche-blanche-rend-hommage-a-l-adolescente-de-14-ans-tuee-a-tonneins-dans-le-lot-et-garonne-2239856.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;À toi Vanesa, petit ange&quot; : une marche blanche rend hommage à l ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQyhRXuWfcvupEQ1d5NH91_BKOdiXus5LTlwigGwapcKC44coYwTj1ykMZZ83gR556yKBM-r6Gk" alt="&quot;À toi Vanesa, petit ange&quot; : une marche blanche rend hommage à l ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Une jeune fille de 14 ans a été violée puis tuée il y a une semaine, à la sortie de son collège de Tonneins, en Lot-et-Garonne.</p></div>
            </div>
        </a>
        </Template></>;
}