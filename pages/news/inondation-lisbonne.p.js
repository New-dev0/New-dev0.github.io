import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Inondation Lisbonne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Inondation Lisbonne"/>
        <meta name="description" content="Trending News about Inondation Lisbonne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Inondation Lisbonne</h1>
            <Image width={800} height={500} src="https://img.20mn.fr/n4jlMCtpRUW6JYnCd8Lj7Sk/1200x768_mandatory-credit-photo-by-andrew-mc-caren-lnp-shutterstock-13628754y-a-vehicle-drives-through-the-flood-water-in-york-this-morning-after-the-river-ouse-in-york-broke-its-banks-after-days-of-heavy-rain-across-the-uk-york-flooding-york-yorkshire-uk-18-nov-2022-shutterstock-editorial-york-flooding-york-yorkshire-13628754y-2211181131" alt="Inondation Lisbonne"/>
            <h3>Recent News</h3>
            <a href='https://www.20minutes.fr/planete/4013872-20221208-portugal-fortes-pluies-provoquent-inondations-lisbonne-mort'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal : De fortes pluies provoquent des inondations à Lisbonne ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRYQkor4PCP53IK99WXau8pfx1EfUe8LQt3Jc_Wx_x4G0Y-9D7MVvlnj0EZYebbgrbxFvd6_hTe" alt="Portugal : De fortes pluies provoquent des inondations à Lisbonne ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une personne de 55 ans, piégée dans sa cave, s&#39;est noyée.</p></div>
            </div>
        </a><a href='https://www.cnews.fr/insolite/2022-12-08/portugal-les-images-impressionnantes-des-inondations-lisbonne-1298397'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal : les images impressionnantes des inondations à Lisbonne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQ03ZcOzKbAP2fZzKe6piJuYhcHUmelPpTHOKtjDs2u0_J4rmtwhqM7MzTqJnMNgI4zWATssDG" alt="Portugal : les images impressionnantes des inondations à Lisbonne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La région de Lisbonne au Portugal, a subi cette nuit de fortes pluies et inondations, ayant provoqué la mort d&#39;une personne pour le moment.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/meteo/climat/portugal-des-inondations-spectaculaires-surprennent-a-lisbonne_5532369.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal : des inondations spectaculaires surprennent à Lisbonne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVrQSOpZ4D_ANpRQPMa97aVG4z0UhVqdIpsDigvZ063GEO9J_fSnnAzgW8VcBuEAa9Ptxg8Yhs" alt="Portugal : des inondations spectaculaires surprennent à Lisbonne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dans la nuit du mercredi 7 décembre, un déluge s&#39;est abattu sur Lisbonne et sa région, au Portugal. Une femme est morte lors de ces inondations soudaines.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/faits-divers/portugal-un-mort-apres-dimpressionnantes-inondations-a-lisbonne-08-12-2022-Q7MDAJ33D5CT5D6JEOM7W2LDA4.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal : un mort après d&#39;impressionnantes inondations à Lisbonne</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsTdHKSTCKJQgPb5hiy-LDb80JJ7xnjdyUUVe5NlRt8015TaFLDtrEDdc_vRzD21BQ2ZgAErcx" alt="Portugal : un mort après d&#39;impressionnantes inondations à Lisbonne" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le pays fait face à de fortes pluies, qui ont provoqué des inondations dans la région de Lisbonne. Des routes et stations de métro dans la capitale ont&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/flash-actu/portugal-un-mort-dans-des-inondations-a-lisbonne-provoquees-par-de-fortes-pluies-20221208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal : un mort dans des inondations à Lisbonne provoquées par ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXD8B5ySyLWE09z3qmhho9lpwkUpK2CDY98vzRDMZipNnzOshzInIAIZyd9t7TW94K0bgXFIDr" alt="Portugal : un mort dans des inondations à Lisbonne provoquées par ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Nous déplorons une victime mortelle» âgée de «55 ans environ» qui «se trouvait dans une cave qui a été inondée», a déclaré le commandant de la protection&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}