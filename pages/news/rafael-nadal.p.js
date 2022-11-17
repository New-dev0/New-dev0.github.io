import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael Nadal"/>
        <meta name="description" content="Trending News about Rafael Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael Nadal</h1>
            <Image width={800} height={500} src="" alt="Rafael Nadal"/>
            <h3>Recent News</h3>
            <a href='https://www.ouest-france.fr/sport/tennis/rafael-nadal/tennis-rafael-nadal-et-la-malediction-des-masters-005c5cec-6533-11ed-921e-4ba615c3f69c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tennis. Rafael Nadal et la malédiction des Masters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGTl5Ii3abyFyeM1j9DLjxWfDQKf-71yXc8eW6kvo0n_QQURonc_CjDrY_fFNmfE-FZ-mgmm9E" alt="Tennis. Rafael Nadal et la malédiction des Masters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Éliminé lors de la phase de poules du Masters ATP à Turin, Rafael Nadal rate une nouvelle fois son rendez-vous lors de ce tournoi indoor de fin de saison&nbsp;...</p></div>
            </div>
        </a><a href='https://www.welovetennis.fr/videos/rafael-nadal-en-grande-discussion-avec-toni-apres-son-elimination-du-masters'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal en grande discussion avec Toni après son élimination ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPHdk5MRBy97L7mk7Yz3jYqf3bt9jt2gYhyR5S8hJtbyQByROTzvK2_N4l6orN8_jgOWvxIzTB" alt="Rafael Nadal en grande discussion avec Toni après son élimination ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si Toni Nadal n&#39;est plus l&#39;entraîneur de Rafael Nadal depuis fin 2017, il reste néanmoins son oncle et un précieux conseillé.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sports/tennis/atp-finals-rafael-nadal-au-bord-de-l-elimination-apres-sa-defaite-contre-felix-auger-aliassime_5478618.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals : Rafael Nadal éliminé après sa défaite contre Félix ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSoaUikfJQOY4CZtUuLrxECJZy6OX6VZpVBtKEhMIyjFseg7ctLQ52M4DXCY6j41D2rn_n-CoPY" alt="ATP Finals : Rafael Nadal éliminé après sa défaite contre Félix ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;Espagnol s&#39;est incliné contre le Canadien en deux sets (6-3, 6-4), mardi, pour son deuxième match au Masters à Turin.</p></div>
            </div>
        </a><a href='https://www.lequipe.fr/Tennis/masters-turin/epreuve-simple-messieurs/annee-2022/match-direct/rafael-nadal-felix-auger-aliassime-live/329607'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Résultat et résumé : Rafael Nadal - Félix Auger-Aliassime, ATP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyGeoKp3710ObQePIqfXAGZtIEBD51Wawj3w8g-R0EyCrc-mj5BvoIbhXixErIlJ-uK4HqVnev" alt="Résultat et résumé : Rafael Nadal - Félix Auger-Aliassime, ATP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après 1h57, Auger-Aliassime claque un ultime service gagnant au T et domine Nadal, quasiment éliminé. Enorme au service (15 aces), le Canadien a étalé sa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.20minutes.fr/sport/tennis/4010126-20221115-masters-atp-rafael-nadal-perd-quatrieme-match-suite-jamais-vu-depuis-2009'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters ATP : Rafael Nadal perd un quatrième match de suite, du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5XtHIeqaUfsNnrtQ21IBaF-rP0hFSIs-PF1EMcooVpQry77AF4fZm3GZKmhatpxW598VDCJ06" alt="Masters ATP : Rafael Nadal perd un quatrième match de suite, du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal est quasiment éliminé du Masters de Turin, après avoir perdu ce mardi contre Félix Auger-Aliassime. C&#39;est la quatrième défaite consécutive de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.fr/tennis/atp-finals/2022/masters-je-suis-pret-a-mourir-pour-cela-rafael-nadal-jure-quil-a-encore-le-feu-en-lui-apres-sa-defai_sto9228194/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masters - &quot;Je suis prêt à mourir pour cela&quot; : Rafael Nadal jure qu&#39;il a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9IipCUcmr4gLAr7Rw75FW3n8eL2B6o_wqUFFZ6hnRFxxbuTcTIAnOezDn15qn56AXGZbnzjqV" alt="Masters - &quot;Je suis prêt à mourir pour cela&quot; : Rafael Nadal jure qu&#39;il a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATP FINALS - Une série et un niveau inquiétants. Rafael Nadal a perdu un quatrième match de rang, le deuxième dans ce tournoi des Maîtres, mardi à Turin.</p></div>
            </div>
        </a>
        </Template></>;
}