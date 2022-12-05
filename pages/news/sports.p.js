import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://images.midilibre.fr/api/v1/images/view/638cd14f180bac04c359b534/large/image.jpg?v=9" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.midilibre.fr/2022/12/04/sports-un-week-end-de-reve-autour-de-thau-10846565.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports : un week-end de rêve autour de Thau</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRkWITEGidPfO2cnWkyya9j8BjezK7nQY0zXmTzwJxLYuu0_ZFhQe1CCcJ0dmF1IskCw1E_3ams" alt="Sports : un week-end de rêve autour de Thau" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Il s&#39;est passé quelque chose ce week-end dans le sport Séto-Frontignanais. Fait rare, toutes les équipes évoluant au niveau national ont dicté leur loi. Cela a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lanouvellerepublique.fr/indre-et-loire/indre-et-loire-france-pologne-vu-avec-l-ancien-chef-des-sports-de-la-nr-c-est-du-sport'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indre-et-Loire : France-Pologne vu avec l&#39;ancien chef des sports de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNdFEiIyvq-HrezeDdFoJ7qe2T2Pdwdd9U1gSLeurqb0hRvhltwqqQigOtkq4z0-LqannSac9Z" alt="Indre-et-Loire : France-Pologne vu avec l&#39;ancien chef des sports de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jean-Éric Zabrodsy, chez lui à Saint-Pierre-des-Corps, a été journaliste sportif à La Nouvelle République de 1976 à 2017. Il a couvert trois Coupes du monde de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}