import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Star Academy finale</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Star Academy finale"/>
        <meta name="description" content="Trending News about Star Academy finale" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Star Academy finale</h1>
            <Image width={800} height={500} src="https://images.ladepeche.fr/api/v1/images/view/6379ce0443144d31db25a887/large/image.jpg?v=1" alt="Star Academy finale"/>
            <h3>Recent News</h3>
            <a href='https://www.ladepeche.fr/2022/11/20/star-academy-quels-sont-les-candidats-qualifies-pour-la-finale-10815144.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Academy : quels sont les candidats qualifiés pour la finale ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTA7Ur67c4PkLbynNwjupUOJjO84ktV5h9wf3i19SsgpcecBF4_lFvS5udWzw8sLMD9Z9_raqc0" alt="Star Academy : quels sont les candidats qualifiés pour la finale ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>l&#39;essentiel Trois candidats ont obtenu leur ticket pour la finale de la &quot;Star Academy&quot; samedi soir sur TF1. Ils seront en compétition avec Louis,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tf1info.fr/culture/video-programme-tv-tf1-en-direct-star-academy-anisha-chris-enola-tiana-lea-qui-va-rejoindre-louis-en-finale-2239190.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>REVIVEZ - Star Academy : Anisha, Enola et Léa avec Louis en finale ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5-ZEAbiZ5_HU3GklVqWualrlpNatsOvC0PTd90pgQ-BR_sHrbbnKDPMumbvf5f7zIhC0qTs0b" alt="REVIVEZ - Star Academy : Anisha, Enola et Léa avec Louis en finale ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[VIDÉO] ▶️ On connaît désormais les quatre finalistes de la &quot;Star Academy&quot; 2022 sur TF1. Qualifié d&#39;office par les profs, Louis affrontera Léa, Anisha et&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/medias/television/star-academy-quels-sont-les-quatre-candidats-qualifies-pour-la-finale-b34d3e8c-68aa-11ed-a603-4a3131a74a26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Star Academy » : quels sont les quatre candidats qualifiés pour la ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzSHHeRkx9zXliPDc97wCD47itPSFBEB5PyZYU8xzB_hFmL1xEHxlEgRJxWHtNt0C1JoK4EonJ" alt="« Star Academy » : quels sont les quatre candidats qualifiés pour la ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Au terme d&#39;une demi-finale forte en émotions pour les candidats, samedi 19 novembre, on sait désormais qui de Tiana, Anisha, Enola, Léa et Chris a rejoint&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/culture/programmes-tv/star-academy-louis-et-enola-en-finale-comedie-musicale-ce-qu-il-faut-retenir-de-la-demi-finale-13041680.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Star Academy » : Louis et Enola en finale, comédie musicale… Ce ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdsgVE57d9fkxX5HDyOpz-6Dqw6TNkXPD1F3bnQZ5PSlaUtjuim3XG2O5aRDAY1avDne7XMXAn" alt="« Star Academy » : Louis et Enola en finale, comédie musicale… Ce ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Louis et Enola, les deux candidats du Sud-Ouest, sont qualifiés pour la finale de la Star Academy avec Léa et Anisha. Retour sur la soirée Samedi soir était&nbsp;...</p></div>
            </div>
        </a><a href='https://newsactual.fr/star-academy-anisha-enola-et-lea-en-finale-avec-louis-extraits-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Academy : Anisha, Enola et Léa en finale avec Louis (Extraits ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpMVSRnab3foIWfvj-v5tcOeQS1U_sMsWOLLTTZFNH9IAdoexnFg9601nKIftx-RNyavw5sYiB" alt="Star Academy : Anisha, Enola et Léa en finale avec Louis (Extraits ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Samedi soir, TF1 diffusait la demi-finale de la Star Academy. Les quatre finalistes sont désormais connus. Qualifié d&#39;office après son excellente évaluation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.closermag.fr/people/claudio-capeo-son-magnifique-cadeau-a-anisha-lors-de-la-demi-finale-de-la-star-academy-1669058'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Claudio Capéo : son magnifique cadeau à Anisha lors de la demi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTP10seOc_45pjBbkEmp3AKf8_86PqeXo_HGMwcnTaj3SOGmSveccRgmcxyoStEN93-4nnsfPb-" alt="Claudio Capéo : son magnifique cadeau à Anisha lors de la demi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>À l&#39;issue de leur prestation en duo durant la demi-finale de la Star Academy, diffusée samedi 19 novembre 2022 sur TF1, Claudio Capéo a offert un magnifique&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leparisien.fr/culture-loisirs/tv/tiana-eliminee-de-la-star-academy-lea-doit-gagner-20-11-2022-A67YSQFQCZAWLJX3IN5RT3WZRE.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tiana, éliminée de la «Star Academy» : «Léa doit gagner !»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqD0JgRfawQ0as89EwrGAWGiIAF3Iu7UWSIs-rjtLoZUa7I97_Nq9chM-CIugM-yIApdwRQoht" alt="Tiana, éliminée de la «Star Academy» : «Léa doit gagner !»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La benjamine du concours de chant de TF1 a marqué les téléspectateurs par sa forte progression en quelques semaines. Et par son amitié avec Léa,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}