import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Slimane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Slimane"/>
        <meta name="description" content="Trending News about Slimane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Slimane</h1>
            <Image width={800} height={500} src="" alt="Slimane"/>
            <h3>Recent News</h3>
            <a href='https://www.lanouvellerepublique.fr/deux-sevres/commune/chauray/slimane-expose-au-temple-pendant-un-mois'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Slimane expose au Temple pendant un mois</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEw6-JVa9cXFEaRRYDaGpktsjdhjIHX9rRZCCBYEBPy6kkDpjGRkE9XL4753A-XtV2Yc27OO7r" alt="Slimane expose au Temple pendant un mois" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Temple de Chauray est devenu un lieu culturel de la ville et le monument emblématique de la commune. La volonté de la municipalité, sous l&#39;impulsion de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}