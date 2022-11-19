import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Handball feminin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Handball feminin"/>
        <meta name="description" content="Trending News about Handball feminin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Handball feminin</h1>
            <Image width={800} height={500} src="https://photos.tf1info.fr/images/1280/720/handball-france-norvege-1-3293db-1@1x.jpeg" alt="Handball feminin"/>
            <h3>Recent News</h3>
            <a href='https://www.tf1info.fr/sport/handball-feminin-euro-2022-norvege-france-resultat-les-bleues-s-inclinent-en-demi-finale-2239135.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Handball féminin : les Bleues s&#39;inclinent en demi-finale de l&#39;Euro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQpIVNXE4lxb1Kqh3T05oie13lg7j62FURVwbOyxjt-0aHURRXpjZojHZq5bRmk18VR8O79C1b" alt="Handball féminin : les Bleues s&#39;inclinent en demi-finale de l&#39;Euro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Norvège a surclassé la France (28-20), ce vendredi 18 novembre, à Ljubljana (Slovénie), les joueuses d&#39;Olivier Krumbholz n&#39;ont pas réussi à créer l&#39;exploit&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lefigaro.fr/sports/handball/direct-handball-suivez-la-demi-finale-de-l-euro-feminin-france-norvege-20221118'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Handball : La France déchante en demi-finales de l&#39;Euro féminin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQC0I4lK_PeM-rjlEow1hxX-tHVpnyVZF5Hp1BsBU1XYQfpvUF5EZBUHNDiiyAlu6n9BHTkpqTA" alt="Handball : La France déchante en demi-finales de l&#39;Euro féminin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sonnées, les Bleues ne reviendront pas au score et la Norvège va dérouler. Pour son 500e match sur le banc, Olivier Krumbholz va s&#39;incliner 28-20 en demi-finale&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ouest-france.fr/sport/handball/equipe-de-france-feminine/direct-norvege-france-suivez-la-demi-finale-de-l-euro-feminin-de-handball-en-live-d118bf4c-6691-11ed-9c6a-75ffb43b0cc7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Euro féminin de handball. L&#39;équipe de France stoppée en plein vol ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkIJ02BkFcOlr822gDKpuo_Z_oD_zW_fiFeWvEc-rCavHbVY6RLFW5LFajGItRjhyJFOURtCMG" alt="Euro féminin de handball. L&#39;équipe de France stoppée en plein vol ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;équipe de France ne jouera pas la finale de l&#39;Euro féminin de handball. Malgré un début de compétition parfait, les Bleues sont tombées face à une grande&nbsp;...</p></div>
            </div>
        </a><a href='https://rmcsport.bfmtv.com/handball/feminin/euro-handball-feminin-les-bleues-eliminees-en-demi-finale-par-les-norvegiennes_AV-202211180784.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Euro handball féminin: les Bleues éliminées en demi-finale par les ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXwtRkykxKgfPom6VOONFnJxghYOU7ZxnDkYTtYvr8xqIsF8Zc63km6jcJIbH9a-g4FvTD51H9" alt="Euro handball féminin: les Bleues éliminées en demi-finale par les ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après les finales de l&#39;Euro 2020 et du Mondial 2021, la Norvège a une nouvelle fois éteint un rêve de titre des Bleues, qui redescendront dans l&#39;Arena Stozice&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sudouest.fr/sport/handball/euro-de-handball-feminin-les-norvegiennes-eliminent-les-bleues-en-demi-finale-28-20-13030188.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Euro de handball féminin : les Françaises éliminées par la Norvège ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSK4q-7jEGSmz-TkJexhshsSJFW-HMetoNyiiPxcyFkrfcMlYgBnCs0ADwC_TujQgBT-YDBH7U_" alt="Euro de handball féminin : les Françaises éliminées par la Norvège ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Après les finales de l&#39;Euro en 2020 et du Mondial-2021, les Norvégiennes ont une nouvelle éteint un rêve de titre des Bleues qui redescendront dans l&#39;Arena&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ski-nordique.net/handball-euro-feminin-2022-live-les-resultats-la-norvege-trop-forte-pour-les-bleues.6567807-72348.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Handball - Euro féminin 2022 - LIVE - Les résultats - La Norvège ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSy01vtZC6waid3xF8PD7J3PSyVoXpW8J1YvTSo-z6DVP_-eGZnZARLXXb4ebnaTMEAmORFUm_4" alt="Handball - Euro féminin 2022 - LIVE - Les résultats - La Norvège ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Retrouvez sur cette page les infos, le suivi LIVE, les résultats et les vidéos du championnat d Europe de handball féminin prévu du 4 au 20 novembre.</p></div>
            </div>
        </a><a href='https://www.francetvinfo.fr/sports/handball/championnat-d-europe/direct-france-norvege-une-nouvelle-finale-pour-les-bleues-suivez-la-demi-finale-de-l-euro-de-handball-2022_5483319.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France-Norvège : revivez l&#39;élimination des Bleues face aux ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTToOkWsQpTDejiD5sJjAxQcJhmlB676Q3DFNf1-KcuJQ-P9iT_fbBiMPgC29x8RZHtHPhkB_6z" alt="France-Norvège : revivez l&#39;élimination des Bleues face aux ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bonsoir à toutes et à tous et bienvenue sur notre site pour suivre en direct commenté la demi-finale du championnat d&#39;Europe féminin de handball opposant la&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}