import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Messi"/>
        <meta name="description" content="Trending News about Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Messi</h1>
            <Image width={800} height={500} src="https://medias.lequipe.fr/img-video-cover/1500000001713926/640/0" alt="Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.lequipe.fr/Football/Actualites/Lionel-messi-s-est-entraine-avec-le-groupe-de-l-argentine/1365898'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi s&#39;est entraîné avec le groupe de l&#39;Argentine</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUFECfUQVU_o2PiKULyosxLMk4zvnFg5bpii-0Egmqmxuojz9D2bLDLc5oer8KmjK-j1HMA7jZ" alt="Lionel Messi s&#39;est entraîné avec le groupe de l&#39;Argentine" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi, qui s&#39;était entraîné en marge du groupe argentin ces deux derniers jours, a participé à la séance collective ce dimanche.</p></div>
            </div>
        </a><a href='https://www.ladepeche.fr/2022/11/20/deja-legendaire-une-photo-de-cristiano-ronaldo-et-lionel-messi-devient-lune-des-plus-likees-dinstagram-en-seulement-24-heures-10814486.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Déjà légendaire ! une photo de Cristiano Ronaldo et Lionel Messi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQshCOaxTWoG8sSxHFgUNSuPSY_QYxDxmkYSJ9H6kR5Y1ZndzpKRX-8P9XNVhLXixgDF3f7dzgE" alt="Déjà légendaire ! une photo de Cristiano Ronaldo et Lionel Messi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce samedi 19 novembre à 19 heures, Lionel Messi et Cristiano Ronaldo ont publié le même cliché sur leur compte Instagram : celui d&#39;une campagne publicitaire&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/coupe-du-monde/coupe-du-monde-la-photo-de-messi-et-ronaldo-par-louis-vuitton-devient-lune-des-plus-likees-dinstagram-20-11-2022-A4B4J5PFDVBLXL6RGCLHHZMDEU.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : la photo de Messi et Ronaldo par Louis Vuitton ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPDQ64a2d_egiVSQgS6LTHAcKq3Ofwm6VzLrvkulyBjMvGMubobClehoSVvum8-EQtTgUELk2R" alt="Coupe du monde : la photo de Messi et Ronaldo par Louis Vuitton ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>C&#39;est ce qu&#39;on peut appeler un coup de pub réussi. Cristiano Ronaldo et Lionel Messi, qui ont dévoilé samedi dans la soirée un cliché, pris dans le cadre&nbsp;...</p></div>
            </div>
        </a><a href='https://le10sport.com/football/coupe-du-monde/coupe-du-monde-2022-inquietude-pour-messi-la-reponse-622405'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : Inquiétude pour Messi ? La réponse</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSD7u6jZky0bEKXc3opdbwTAnvojtVcpexXK3UGldLyfGp3gzJg-iZIfozFJBhwf5Z1K4ZPoZdZ" alt="Coupe du monde 2022 : Inquiétude pour Messi ? La réponse" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alors que la Coupe du monde 2022 débute ce dimanche avec la rencontre Qatar-Equateur, pour l&#39;Argentine, le premier match sera mardi à l&#39;Arabie Saoudite.</p></div>
            </div>
        </a><a href='https://www.sports.fr/football/coupe-du-monde-2022/qatar-2022-nouvelles-rassurantes-messi-646378.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: Nouvelles rassurantes pour Messi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnSVsYJyjiigrdDnQeldHDmJtNeoon4JDrINaIoMUUObu0SgHwYBKZXCBm2DQRI6iK65DlpJXX" alt="Qatar 2022: Nouvelles rassurantes pour Messi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Absent de l&#39;entraînement collectif avec l&#39;Argentine samedi, Lionel Messi a retrouvé ses coéquipiers ce dimanche et ne ressentirait aucune gêne.</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/ligue-1/portugal-argentine-cristiano-ronaldo-et-messi-vont-exploser-un-record-avec-une-photo-806962'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Portugal, Argentine : Cristiano Ronaldo et Messi vont exploser un ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLAf-uN4a6I8mZHZaA26GB028U-15NByiejBc2sSnA2N1KbmVHilG5ISfYqsdFBdsBTTShUpJw" alt="Portugal, Argentine : Cristiano Ronaldo et Messi vont exploser un ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La photo de Lionel Messi et Cristiano Ronaldo en partenariat avec Louis Vuitton bat des records sur Instagram !</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/football/coupe-du-monde/2022/qatar-2022-messi-neymar-boufal-leao-sane-ces-dribbleurs-vont-illuminer-le-mondial_sto9231193/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022 : Messi, Neymar, Boufal, Leão, Sané : ces dribbleurs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMaZdxOyAUnJwq_XPQGw92nTFhULR7meMB-USKSdMeqrMrt80RWlS1cZVjzMi40JsPRXz043yJ" alt="Qatar 2022 : Messi, Neymar, Boufal, Leão, Sané : ces dribbleurs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COUPE DU MONDE - De Lionel Messi à Leroy Sané en passant par Neymar, voici les cinq dribbleurs qui vont donner le tournis aux défenseurs adverses.</p></div>
            </div>
        </a><a href='https://www.sports.fr/football/coupe-du-monde-2022/messi-ronaldo-detail-dingue-dune-photo-de-legende-646221.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi-Ronaldo, le détail dingue d&#39;une photo de légende</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYpequ9AFZJLxRTWUxHL9YmqP2aZASkLUfWSUdniKpusIiMqr_fZPtCG0b8ocObqOI-GiAyqWP" alt="Messi-Ronaldo, le détail dingue d&#39;une photo de légende" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour Louis Vuitton, Lionel Messi et Cristiano Ronaldo se sont affichés en pleine partie d&#39;échecs. Et on sait qui a gagné ce duel de légendes. commenter.</p></div>
            </div>
        </a><a href='https://www.onzemondial.com/coupe-du-monde-2022/argentine-des-nouvelles-tres-rassurantes-pour-lionel-messi-806964'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentine : des nouvelles très rassurantes pour Lionel Messi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvhDKU8ROu6gEccU4RMC2hRj_lklm2_ah8LWGWUiVwX6ys4tqSXzb2iyMG_vib2IGR8WP1u7Hk" alt="Argentine : des nouvelles très rassurantes pour Lionel Messi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Absent de l&#39;entraînement collectif hier, Lionel Messi était de retour avec le groupe aujourd&#39;hui, à l&#39;approche du premier match de l&#39;Argentine en Coupe du&nbsp;...</p></div>
            </div>
        </a><a href='https://canal-supporters.com/coupe-du-monde-2022-bonne-nouvelle-pour-lionel-messi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du Monde 2022:Bonne nouvelle pour Lionel Messi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxvrkRcUpcDlgpRdMBXuxjIRY6kkHcA30jEM-otodP8uKSEtdO3lzxAfku0gA9NGKQJXerorzP" alt="Coupe du Monde 2022:Bonne nouvelle pour Lionel Messi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Absent des entraînements collectifs de l&#39;Argentine ces derniers jours, l&#39;attaquant du PSG, Lionel Messi, était bien présent avec ses coéquipiers ce&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}