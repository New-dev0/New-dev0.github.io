import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jean-Marc genereux</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jean-Marc genereux"/>
        <meta name="description" content="Trending News about Jean-Marc genereux" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jean-Marc genereux</h1>
            <Image width={800} height={500} src="" alt="Jean-Marc genereux"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/interview-jean-marc-genereux-papa-dune-fille-handicapee-ca-a-ete-un-choc-pour-ma-femme-et-moi_507852'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INTERVIEW – Jean-Marc Généreux, papa d&#39;une fille handicapée ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQInD-H-YtXJYJa34MMGV8eLVrC2W7QRrackl2fBiuuaXtIn-YIR0Zhq8OzoA3SpHonNAZwN2DXzQ" alt="INTERVIEW – Jean-Marc Généreux, papa d&#39;une fille handicapée ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gala.fr : Votre fille Francesca est atteinte du syndrome de Rett. Pouvez-vous m&#39;en dire plus au sujet de cette maladie ? Jean-Marc Généreux : C&#39;est une maladie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.voici.fr/news-people/jetais-devaste-jean-marc-genereux-se-confie-sur-la-maladie-de-sa-fille-francesca-atteinte-du-syndrome-de-rett-744349'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« J&#39;étais dévasté » : Jean-Marc Généreux se confie sur la maladie ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfe46czjivr4VmmHKk_ZzemEF695Dj8f7P6gjVlxijwRHVtWV_XyI4ermUVicjrtBWesyZDJHu" alt="« J&#39;étais dévasté » : Jean-Marc Généreux se confie sur la maladie ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lorsque le danseur et sa femme ont appris que leur fille était atteinte du syndrome de Rett, cette nouvelle a été un véritable &quot;choc&quot; pour le couple. &quot;Ça a été&nbsp;...</p></div>
            </div>
        </a><a href='https://tvmag.lefigaro.fr/programme-tv/actu-tele/il-a-fallu-que-je-me-reinvente-jean-marc-genereux-ex-jure-de-danse-avec-les-stars-se-confie-dans-50-inside-20221203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Il a fallu que je me réinvente» : Jean-Marc Généreux, ex-juré de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKjq-ZCnWDYbAMLyXX8UDVjnexkE4Vg6Wr9wbruF7G79ZwvX3WwiqvmuvByI8wadYzd3rXgCKs" alt="«Il a fallu que je me réinvente» : Jean-Marc Généreux, ex-juré de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors qu&#39;il a quitté le show diffusé sur TF1 en 2020, le danseur et chorégraphe ne compte pas abandonner la télévision française.</p></div>
            </div>
        </a>
        </Template></>;
}