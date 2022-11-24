import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Costa Rica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Costa Rica"/>
        <meta name="description" content="Trending News about Costa Rica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Costa Rica</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/11/SOR09743.jpg?resize=1920%2C1440" alt="Costa Rica"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/gallery/2022/11/23/photos-spains-stars-dazzle-in-7-0-thumping-of-costa-rica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Spain&#39;s stars dazzle in 7-0 demolition of Costa Rica</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxCdxAsgC1SAyPAELGXS5Is9XcJ1Iks7C3KU2IkZ4Xr_eaIVcieLpAmQzQXvfQXbW6TmvcxsPR" alt="Photos: Spain&#39;s stars dazzle in 7-0 demolition of Costa Rica" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a one-sided contest, Spain spent 90 minutes punishing Costa Rica in their World Cup Group E match.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4806880/spain-thrash-costa-rica-in-opening-match-gavi-makes-history'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain thrash Costa Rica in opening match as Gavi makes history</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1iRnLtBujX56MOAmPDaG_CyXQWw6I9WQsGN1rtz6WZL60kus8omF-QrV-HL7CeXk2T-C4C5MQ" alt="Spain thrash Costa Rica in opening match as Gavi makes history" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain delivered a masterclass against Costa Rica in their World Cup opener, proving Luis Enrique&#39;s side can make a deep run for the trophy.</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol/costa-rica/nota/_/id/11268980/costa-rica-agota-discurso-campeon-del-mundo-muy-rapido-ridiculo-espana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Costa Rica agota discurso de ser campeón del Mundo muy rápido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDENtEbjbZSZ1mO_buZTIv2m5jQYr3Dh3K5VXzVL5u4NDDX5n1emiaVXj5voP0BLqHW8gFfD1U" alt="Costa Rica agota discurso de ser campeón del Mundo muy rápido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los ticos no tuvieron respuesta durante los 90 minutos y sufrieron una escandalosa goleada por parte de los ibéricos.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/spain-vs-costa-rica-live-online-score-stats-and-updates-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain 7-0 Costa Rica summary: score, goals, highlights | Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRN71FXecfSoEONNEJXL0UEoZhR7bNFyI1ThMW4Qw1Ag0qe6k1nhBX8bO-4yS8zItMFTpkNjNcn" alt="Spain 7-0 Costa Rica summary: score, goals, highlights | Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain thrash Costa Rica in the Qatar World Cup 2022 Group E clash. Spain&#39;s scorers: Olmo, Asensio, Ferran Torres (2), Gavi, Soler and Morata.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/spain-costa-rica-score-world-cup-2022/Nl9Kc0ElPmdn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights and analysis of Spain&#39;s 7-0 defeat of Costa Rica, the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT3MuhgSZG_Uz_kr3sMbL8eJpmq932Gmxf_c7mMz59a9Ft1sMEuLCUrt00MR7JNHZP3MwJ2rgqS" alt="Highlights and analysis of Spain&#39;s 7-0 defeat of Costa Rica, the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dani Olmo gave Spain an early lead in their opening game of the World Cup. He gorgeously collected a ball from Gavi on the turn, before lofting it over&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056611-spains-dominance-in-world-cup-opener-vs-costa-rica-applauded-by-fans-on-twitter'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain&#39;s Dominance in World Cup Opener vs. Costa Rica Applauded ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBO8IAF_jyIzXjPQiChFOaDNI2tzgPE0wcPCm359Zn9hk9lLHPEsSzGUfQ2j9GtuJR4v_uXp0k" alt="Spain&#39;s Dominance in World Cup Opener vs. Costa Rica Applauded ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spain might have installed itself as the new favorite to win the 2022 FIFA World Ca.</p></div>
            </div>
        </a><a href='https://www.nbcchicago.com/news/sports/world-cup-2022/six-spanish-players-combine-for-7-0-win-over-costa-rica-to-kick-off-world-cup-run/3004819/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Six Spanish Players Combine for 7-0 Win Over Costa Rica to Kick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBkrmaFK0RZeouisNF4_vo50vD4QaR07ywXu5OPyS_OA7QCx5fae-3fn8O2o1ZyD5MnxqYrC3W" alt="Six Spanish Players Combine for 7-0 Win Over Costa Rica to Kick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ferran Torres recorded a brace, while 18-year-old Gavi became the third-youngest goal scorer in World Cup history, to give Spain a dominant win to open&nbsp;...</p></div>
            </div>
        </a><a href='https://cnnespanol.cnn.com/2022/11/23/espana-costa-rica-estadisticas-mundial-orix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Más allá de la goleada: 5 cifras que muestran la superioridad de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2_cefS2jxySMLAr2yrkTGQ0JwVNK0UL2azPWdPoeRNmUjYeQxY4G8Erp73TaQPooA0ff5vEPo" alt="Más allá de la goleada: 5 cifras que muestran la superioridad de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los primeros tres los anotaron Dani Olmo, Marco Asensio y Ferran Torres en el primer tiempo. Torres, Gavi, Carlos Soler y Álvaro Morata anotaron en la segunda&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/espanol/deportes/articulo/2022-11-23/masacre-en-qatar-espana-le-mete-siete-a-costa-rica-con-un-tiki-taka-demoledor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Masacre en Qatar: España le mete siete a Costa Rica</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ89k8yqCBrrDCfSBY80GAZtc86hiF7P9i_nn8DtM2LP0CqpuJLh4p3_ShvCbaJnVr0ZV6BJjgE" alt="Masacre en Qatar: España le mete siete a Costa Rica" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En lo fue el regreso del Tiki-taka, España trituró 7-0 a una irreconocible Costa Rica la noche del miércoles en Al Thumama Stadium para colocarse como&nbsp;...</p></div>
            </div>
        </a><a href='https://us.as.com/futbol/costa-rica-el-salvador-y-las-maximas-goleadas-a-selecciones-de-concacaf-en-un-mundial-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Costa Rica, El Salvador y las máximas goleadas a selecciones de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTr-aB8ZukWT47uI43eBnQCQIKbM2N8tbLIfWN9dz0XFGtcEs2MnJ_DTzmorZGWuRoYd_VeYZJ7" alt="Costa Rica, El Salvador y las máximas goleadas a selecciones de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Costa Rica igualó la tercera peor goleada a una selección de Concacaf después de caer 7-0 ante España. Aquí las mayores goleadas a la zona.</p></div>
            </div>
        </a>
        </Template></>;
}