import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UFC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UFC"/>
        <meta name="description" content="Trending News about UFC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UFC</h1>
            <Image width={800} height={500} src="https://www.actumma.com/wp-content/uploads/2022/12/UFC-Mcgregor.png" alt="UFC"/>
            <h3>Recent News</h3>
            <a href='https://www.actumma.com/ufc-top-10-des-combattants-les-mieux-payes/53783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC - Top 10 des combattants les mieux payés - Arts Martiaux Mixtes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO0m_MEpyJXd84SbTaeDvSoX3WWqXOEfQk0GR8DSeZ_stJBauKpTWqy0zMl49gyPoKpmvVNQGV" alt="UFC - Top 10 des combattants les mieux payés - Arts Martiaux Mixtes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le « Cowboy » a décroché son plus gros salaire, grâce à Conor McGregor, comme beaucoup. Malgré une défaite en 40 secondes, Donald Cerrone a gagné plus de 200&nbsp;...</p></div>
            </div>
        </a><a href='https://www.parlons-basket.com/2022/12/04/ufc-un-proche-de-khabib-arnaque-vladimir-poutine-et-prend-19-ans-de-prison/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC - Un proche de Khabib arnaque Vladimir Poutine et prend 19 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUXV5vuBp2vp-eDfdt3bH_nUxXCp5zMk2jib10ZLNgPh9Kx3AzR_gNNPbDDjP7Gxnmjkl2hE8B" alt="UFC - Un proche de Khabib arnaque Vladimir Poutine et prend 19 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un des bons amis de Khabib Nurmagomedov vient d&#39;écoper d&#39;une énorme peine de prison en Russie après avoir trompé l&#39;État et Vladimir Poutine...</p></div>
            </div>
        </a><a href='https://www.parlons-basket.com/2022/12/04/ufc-dana-white-est-il-vraiment-riche-sa-fortune-en-2022-revelee/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UFC - Combien gagne Dana White ? Sa fortune en 2022 révélée !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTIFLjCC-FOZE_lAT6y7HYH7HsqCk2zTNxPhWQbQGjr7qdcPMveqsTGY9JCegyG8k2PMKsKIMnJ" alt="UFC - Combien gagne Dana White ? Sa fortune en 2022 révélée !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À l&#39;heure où de plus en plus de combattants se plaignent des salaires à l&#39;UFC, combien pèse réellement Dana White ?</p></div>
            </div>
        </a><a href='https://www.actumma.com/les-derniers-evenements-ufc-en-2022/53796'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zoom sur les derniers événements UFC en 2022 - Arts Martiaux Mixtes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwACQneb1IXD7TTx66vpX8dxMhEbrW2-wJSRYWEdARysjpW3rAkrzYzspZKEH6SYrCP3z94oDkYQ" alt="Zoom sur les derniers événements UFC en 2022 - Arts Martiaux Mixtes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fight Night : Jared Cannonier vs. Sean Strickland. La principale organisation de combat terminera l&#39;année avec une soirée Fight Night. Les têtes d&#39;affiche&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}