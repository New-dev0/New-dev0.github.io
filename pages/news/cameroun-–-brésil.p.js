import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cameroun – Brésil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cameroun – Brésil"/>
        <meta name="description" content="Trending News about Cameroun – Brésil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cameroun – Brésil</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/b1d0eb7a-7152-11ed-ac2b-005056a90284/w:1280/p:16x9/000_32RV9C9.jpg" alt="Cameroun – Brésil"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/fr/afrique-foot/20221201-mondial-2022-rencontre-capitale-pour-le-cameroun-face-au-br%C3%A9sil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mondial 2022: rencontre capitale pour le Cameroun face au Brésil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNIBoSoj16qqXE1vqsXeRiJVRA_ywIjShI7auI_kyRqXDs3fy-V9EyudMLtw9OcJLH_kx-uH9V" alt="Mondial 2022: rencontre capitale pour le Cameroun face au Brésil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Cameroun affronte le Brésil, vendredi 2 décembre, pour une place en huitièmes de finale. Après avoir fait match nul face à la Serbie,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/fr/news/cameroun-bresil-diffusion-tv-live-streaming-compos-probables-et-avant-match/blt17fdef52c908fc0d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroun-Brésil : diffusion TV, live streaming, compos probables et ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAqhMLeHsQhVbp7sjEFkLHb-MkzLpa7cGUYSGlI3Fr4To6ZuML9gY7tDAdaMgyxC_zwgXPXHK6" alt="Cameroun-Brésil : diffusion TV, live streaming, compos probables et ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Où voir le match, heure du coup d&#39;envoi, les compositions des équipes : GOAL vous dévoile toutes les informations utiles sur Cameroun-Brésil.</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/sports/football/coupe-du-monde/coupe-du-monde-le-bresil-envoie-ses-coiffeurs-contre-le-cameroun-01-12-2022-54NAXBURUJAHZJK4LKNGV2T7WM.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde : le Brésil envoie ses coiffeurs contre le Cameroun</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTph2DEE2yu_7Pv6eCXUHLfTDtBWPdgBv0rSEw64XraYNihp_l4jxHnMvnQMfHXv8RJ56Uj7rUu" alt="Coupe du monde : le Brésil envoie ses coiffeurs contre le Cameroun" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tite, le sélectionneur de la Seleçao, va procéder à un large turnover contre le Cameroun vendredi (20 heures) alors que le Brésil est déjà qualifié pour les&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/football/equipe-cameroun/coupe-du-monde-le-cameroun-peut-le-refaire-contre-le-bresil-affirme-rigobert-song-ac3211c6-7193-11ed-8d7c-fc31769d4d38'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde. Le Cameroun « peut le refaire » contre le Brésil ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjSte-XPbHixIwURZXMyeaSiFJjfknejKKpj9_0Y25zHA-0VWRffXbrsbz5CYrWI1OFeMCxdyf" alt="Coupe du monde. Le Cameroun « peut le refaire » contre le Brésil ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le sélectionneur camerounais Rigobert Song a expliqué, ce jeudi 1er décembre, qu&#39;il croyait aux chances de son équipe face au Brésil, vendredi,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.befoot.net/cameroun-bresil-les-compositions-probables/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroun - Brésil : Les compositions probables ! - BeFoot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROhUyL6cyLtnFsuOMIuKtht_J6YFKVjpgu_XhlRm0f3JbnT_oJN0_0PoNOsbtsJt6-dgcUabIs" alt="Cameroun - Brésil : Les compositions probables ! - BeFoot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Cameroun doit s&#39;imposer pour se qualifier pour les huitièmes de finale de la Coupe du Monde 2022. Actuels troisièmes du groupe G, les coéquipiers de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/football/coupe-du-monde/2022/mondial-2022-bresil-cameroun-pedro-le-meconnu-avant-centre-que-les-bresiliens-prefereraient-a-gabrie_sto9252786/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MONDIAL 2022 - Brésil - Cameroun : Pedro, le méconnu avant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmlyA6dbSMIiuUhXWRSEgQY-2NUe5IUIUSPgmMt-v6eS6iSm5TXe-qdxMsGePtfSpxl7BVyuob" alt="MONDIAL 2022 - Brésil - Cameroun : Pedro, le méconnu avant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>COUPE DU MONDE – Titulaire ou remplaçant, Pedro devrait avoir sa chance face au Cameroun ce vendredi lors du dernier match de poules du Brésil.</p></div>
            </div>
        </a><a href='https://paris-sportifs.lefigaro.fr/pronostics/cameroun-bresil-02-12-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pronostic Cameroun – Brésil 02/12/2022 Coupe du monde 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTEX5do4eKvCvIPz_0SmydxJ0Vm0egHO2vNn1KKwWTI_sIykPt-klQ9N3-w6dy5uvG4VOCUKzs9" alt="Pronostic Cameroun – Brésil 02/12/2022 Coupe du monde 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Seleção voudra continuer son sans-faute en battant le Cameroun lors de la dernière journée. Lisez notre prono Cameroun - Brésil.</p></div>
            </div>
        </a><a href='https://www.rtl.fr/sport/football/coupe-du-monde-2022-programme-vendredi-2-decembre-cameroun-bresil-serbie-suisse-portugal-7900211783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coupe du monde 2022 : le programme de vendredi 2 décembre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpImqSzPr7RaD7dDjUqceds-uOmJX4bNsxCN9jpHmVTrHiQmLobagsLD3gMk2RKUqYgXWMr_Px" alt="Coupe du monde 2022 : le programme de vendredi 2 décembre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PRÉSENTATION - Le Brésil sera-t-il accompagné en 8es par la Suisse, la Serbie ou le Cameroun dans le groupe G ? Le Portugal par le Ghana, la Corée du Sud ou&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}