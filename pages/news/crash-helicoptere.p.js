import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Crash helicoptere</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Crash helicoptere"/>
        <meta name="description" content="Trending News about Crash helicoptere" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Crash helicoptere</h1>
            <Image width={800} height={500} src="https://static.actu.fr/uploads/2022/11/img-20221125-wa0006.jpg" alt="Crash helicoptere"/>
            <h3>Recent News</h3>
            <a href='https://actu.fr/provence-alpes-cote-d-azur/villefranche-sur-mer_06159/un-crash-d-helicoptere-pres-de-nice-fait-plusieurs-morts-ce-que-l-on-sait_55474790.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crash d&#39;hélicoptère près de Nice : un passager a annulé le vol à la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRu4gSa1LjefLAAnnbhWjhjSu82bmfEdtlYZPBOobGMi4uUDZllCzzfotuFuQHpN3P_LwKxtidY" alt="Crash d&#39;hélicoptère près de Nice : un passager a annulé le vol à la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un hélicoptère de Monacair s&#39;est crashé à Villefranche-sur-Mer, vendredi. Deux personnes sont mortes. La société précise à actu Nice qu&#39;un passager a annulé&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/justice-faits-divers/alpes-maritimes-au-moins-deux-morts-dans-le-crash-d-un-helicoptere-monacair-2239812.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alpes-Maritimes : deux morts dans le crash d&#39;un hélicoptère</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCk5GU0x6mL0HKt0vJrwBPw_TCVAozJ05RS330_7ZOVd01nPrjTNtQTwijgcivPArAi6b90UEg" alt="Alpes-Maritimes : deux morts dans le crash d&#39;un hélicoptère" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ Un hélicoptère s&#39;est écrasé ce vendredi entre Èze et Villefranche. Le bilan fait état d&#39;au moins deux morts. Les circonstances exactes du drame&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midilibre.fr/2022/11/25/crash-dhelicoptere-sur-la-cote-dazur-le-pilote-et-son-passager-sont-morts-10827670.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crash d&#39;hélicoptère sur la Côte d&#39;Azur : le pilote et son passager ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQbPKl8QVhBHNLDKyOlsV0egG1pVLG9-12tus06ouCYD0d2qt0xXmxAgHLgCQUkMAULK0MHj_dv" alt="Crash d&#39;hélicoptère sur la Côte d&#39;Azur : le pilote et son passager ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce vendredi 25 novembre, un hélicoptère s&#39;est écrasé entre Villefranche-sur-Mer et Eze, près de Monaco. Deux personnes ont été tuées.</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/faits-divers/au-moins-deux-morts-dans-un-crash-d-helicoptere-sur-la-cote-d-azur-20221125'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Un homme d&#39;affaires russe et un pilote morts dans un crash d ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSouzVZmdhVqflUvP3jQEqdpTCyxPsJtgjL3D7AFnLKrts3WtG-3CS6ztW_0vBKU2fOldKCb5jR" alt="Un homme d&#39;affaires russe et un pilote morts dans un crash d ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;appareil était affrété par la compagnie privée monégasque Monacair et effectuait un vol entre la ville de Lausanne, en Suisse, et la principauté&nbsp;...</p></div>
            </div>
        </a><a href='https://france3-regions.francetvinfo.fr/provence-alpes-cote-d-azur/alpes-maritimes/nice/deux-morts-apres-le-crash-d-un-helicoptere-pres-du-col-d-eze-une-troisieme-personne-recherchee-2662976.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deux morts après le crash d&#39;un hélicoptère, près du col d&#39;Eze, qui ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTm-Lw2g9MGeTtKjfw9Ef03fr6nbOJvf7H4vT7DZ0dHertjC-JMs2zfxuxAcolq9XxxIZ8rnPNZ" alt="Deux morts après le crash d&#39;un hélicoptère, près du col d&#39;Eze, qui ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En début d&#39;après-midi, vers 14 heures, un hélicoptère Airbus H130 de la compagnie Monacair s&#39;est écrasé à proximité du col d&#39;Eze, à flan de collines.</p></div>
            </div>
        </a><a href='https://www.francebleu.fr/infos/faits-divers-justice/crash-d-un-helicoptere-sur-la-commune-d-eze-1669384203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crash d&#39;un hélicoptère sur la haute corniche à Villefranche-sur-Mer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSAnvjpwVYk77UBj3zwqBflEuhN0YTb0EYp12MPguCS1iHPokmSk5t5sX13jaHgPKjHW-68mCYk" alt="Crash d&#39;un hélicoptère sur la haute corniche à Villefranche-sur-Mer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Un hélicoptère s&#39;est écrasé sur la commune de Villefranche-sur-Mer. Les secours, sur place, ont trouvé deux corps : le pilote français et un passager russe.</p></div>
            </div>
        </a><a href='https://www.cnews.fr/faits-divers/2022-11-25/alpes-maritimes-au-moins-deux-morts-dans-un-crash-dhelicoptere-1293820'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alpes-Maritimes : au moins deux morts dans un crash d&#39;hélicoptère</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGzoAeqQe_omL22TYpYyrM5thWsOWgy0x8sklx-WBMq4q0Ylpx25vyVSkqPD33NL0sQRHR9I_q" alt="Alpes-Maritimes : au moins deux morts dans un crash d&#39;hélicoptère" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au moins deux personnes sont décédées ce vendredi, dans le crash d&#39;un hélicoptère civile sur la commune de Villefranche-sur-Mer (Alpes-Maritimes).</p></div>
            </div>
        </a>
        </Template></>;
}