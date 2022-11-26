import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Imagine Dragons</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Imagine Dragons"/>
        <meta name="description" content="Trending News about Imagine Dragons" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Imagine Dragons</h1>
            <Image width={800} height={500} src="https://info-tours.fr/storage/sites/6/2022/11/chambord-live-sting.jpg" alt="Imagine Dragons"/>
            <h3>Recent News</h3>
            <a href='https://info-tours.fr/culture/2022/11/25/imagine-dragons-pour-le-2e-chambord-live-en-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Imagine Dragons pour le 2e Chambord Live en 2023 - Info Tours</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpxtEUiZlQK-MRCmaQJO8OOjfdTnjSFx0Ai1J-Ehfi895A4ohTSNp7_xPagfE1GEVI6TNnw5Qp" alt="Imagine Dragons pour le 2e Chambord Live en 2023 - Info Tours" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AZ Prod avait annoncé sa volonté de frapper fort et le producteur de spectacle tourangeau ne déçoit pas. Après la venue de Sting organisée en 2022, c&#39;est le&nbsp;...</p></div>
            </div>
        </a><a href='https://www.defense-92.fr/musique/imagine-dragons-en-concert-a-la-paris-la-defense-arena-en-aout-2023-74570'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Imagine Dragons en concert à la Paris La Défense Arena en août ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5RknCRD5jCq561G9r7vVY7U5BF2UYuBn_xWZny0VUQaXlM5DwfR-EZE3A_OxanPruIUvS8Dki" alt="Imagine Dragons en concert à la Paris La Défense Arena en août ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un an après son passage au festival parisien Lollapalooza, Imagine Dragons sera de retour en France. Le groupe de rock américain emmené par Dan Reynolds a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lanouvellerepublique.fr/loir-et-cher/commune/chambord/imagine-dragons-en-tete-d-affiche-du-chambord-live-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Imagine Dragons en tête d&#39;affiche du Chambord Live 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-up3gjpjmZzaMnqnVKNc1fB5omaDHNuo7hf2_uerqw4ScVBT2oBzpeAOMzdwF3GLZrUed9e6Z" alt="Imagine Dragons en tête d&#39;affiche du Chambord Live 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après Sting en 2022, le groupe américain Imagine Dragons sera la tête d&#39;affiche de l&#39;édition 2023 de Chambord Live, programmé par AZ Prod et Live nation le&nbsp;...</p></div>
            </div>
        </a><a href='https://actu.fr/ile-de-france/nanterre_92050/imagine-dragon-en-concert-a-paris-la-defense-arena-comment-avoir-des-places_55471244.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Imagine Dragons en concert à Paris La Défense Arena : comment ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJYPQzPLRhY6fcFBjJ8N1IYbctNOJ1egjAQrhHpH-Xb28jmab7VCIUSD66IG9AUfB6r55yGITi" alt="Imagine Dragons en concert à Paris La Défense Arena : comment ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Imagine Dragons vient d&#39;annoncer deux concerts en France en 2023. Ils monteront sur scène à Paris La Défense Arena et au château de Chambord.</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/centre-val-de-loire/loir-cher/imagine-dragons-au-chateau-de-chambord-pour-un-concert-exceptionnel-en-2023-2662548.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Imagine Dragons au château de Chambord pour un concert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWfZDGGklsa7j0ulJkRKCk4ZWPPt7AeqtZhI0L40OT2yzp9gCVfdLrTENUDo-YgufWLbU4lgbH" alt="Imagine Dragons au château de Chambord pour un concert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour la seconde édition du Chambord Live, le public pourra venir applaudir les Imagines Dragons le 8 septembre 2023.</p></div>
            </div>
        </a><a href='https://www.sortiraparis.com/scenes/concert-musique/articles/285739-imagine-dragons-en-concert-a-paris-la-defense-arena-en-aout-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Imagine Dragons en concert à Paris la Défense Arena en août 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLA2vdlZ1bU_zhfs7LoDyeVull93e8nqMGROl319fTKDk4nfpeR-Gc0imWKJYF7ug5xql1hq7V" alt="Imagine Dragons en concert à Paris la Défense Arena en août 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le groupe Imagine Dragons part en tournée mondiale en 2023. Le &quot;Mercury World Tour&quot; s&#39;arrête en France, avec deux concerts. Imagine Dragons se produit en&nbsp;...</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/culture/musique/imagine-dragons-au-chateau-de-chambord-le-8-septembre-2023-1669367565'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le concert événement : Imagine Dragons au Château de Chambord ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfbNL36AEzlkZiq1t2Cqw1TJoDtWgYrJuOlyEXB4WRL5IJDNeKLA_OMzJpPjDkK2sTgZ8Kk-18" alt="Le concert événement : Imagine Dragons au Château de Chambord ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après le succès de sa première édition, Chambord Live a l&#39;honneur d&#39;accueillir Imagine Dragons le vendredi 08 septembre 2023 pour sa deuxième édition.</p></div>
            </div>
        </a>
        </Template></>;
}