import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina"/>
        <meta name="description" content="Trending News about Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/12/09/gettyimages-1448008847_wide-4f927e08ee8d9f619224cb073b39b6e7bcc1e77f-s1400-c100.jpg" alt="Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/12/09/1141924263/argentina-netherlands-fifa-world-cup-quarterfinal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina beats the Netherlands in penalty kicks at the World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSybS6DAzP79tFGogZUKE3QqpZYOMAFkL3jvdBpPCo4gPMyZ_uehVTqmVYF5XwFI2H_JXbwONs7" alt="Argentina beats the Netherlands in penalty kicks at the World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi led Argentina to a quarterfinal victory over the Netherlands in a penalty kick shootout. Messi had a goal, an assist and scored in the shootout&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4828971/argentina-secure-semifinal-place-after-wildest-win-in-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina secure semifinal place after wildest win in Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTZ7mWfktSId4a26PICxure36i00RNOQ_JsrWiuKQaXCGEk5UDLtq6HdtQpSLHhIwJF_VW5MwIbQ" alt="Argentina secure semifinal place after wildest win in Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina let a two-goal lead slip after the 82nd minute, but Emi Martinez&#39;s shootout heroics ensured they bested the Dutch for a spot in the semis.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/live/2022/12/09/sports/argentina-netherlands-world-cup-score'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Netherlands Live: Score and World Cup Updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCyZy3GMFZle-zZk_i9aMe94BTajv-PvBiJBsGljgwb1Qc2qvbZvLreMTFlfzqcRYFEotqdPAR" alt="Argentina vs Netherlands Live: Score and World Cup Updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi assisted once and scored once to give Argentina a cushion, but the Dutch are still alive. Follow live.</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/soccer/story/2022-12-09/argentina-defeats-netherlands-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Argentina defeats Netherlands on penalty kicks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-SmUK2dIcht00rbaLPzrBBHbfwWIIPjCCXFTzilhKtBr7R8u-jEDlNrdJKqAElV0ioDQP7ueQ" alt="World Cup: Argentina defeats Netherlands on penalty kicks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Messi and Argentina advance to the World Cup semifinals against Croatia after defeating the Netherlands on penalty kicks in the quarterfinals.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/argentina-withstands-late-netherlands-rally-wins-penalty-shootout-in-wild-world-cup-quarterfinal-215744056.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina withstands late Netherlands rally, wins penalty shootout in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnHLMfPd86LHYwS0ULTb53WdBYbAMmGToNW_FaTvqGfy5Kd1sA6R567dLekbv5ddCOTg8QDr7b" alt="Argentina withstands late Netherlands rally, wins penalty shootout in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LUSAIL, Qatar — Lionel Messi and Argentina survived one of the wildest games of the 2022 World Cup in a penalty shootout. Emi Martinez sprung to his right,&nbsp;...</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol/mundial/nota/_/id/11346560/mundial-qatar-2022-selecion-argentina-proximo-rival-semifinales-croacia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croacia, el rival de Argentina en semifinales del Mundial de Qatar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6KjlCj0RGJsgvVvUnAD9syRkG8hzCzd5Ud5YqQLyI06S7rj3iNkDVrZYb-MyyQGeSP2xc9CSE" alt="Croacia, el rival de Argentina en semifinales del Mundial de Qatar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El equipo balcánico dio el golpe, eliminó a Brasil y se enfrentará por tercera vez a la Albiceleste en una Copa del Mundo.</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/09/football/argentina-netherlands-world-cup-lionel-messi-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina reaches Qatar 2022 semifinals with penalty shootout win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdd-ovX2J_d-50ASYt33oWA9ZKd-u0C3EsPd8GyG8pBOtOQjRz927sV-sN4DEdajd9p7r4fj95" alt="Argentina reaches Qatar 2022 semifinals with penalty shootout win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The hopes of Argentina and Lionel Messi winning the World Cup remain very much alive after a nerve-shredding penalty shootout victory over the Netherlands&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/mundo/noticias-63922770'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial | El sueño de Argentina continúa: derrota a Países Bajos en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwF0yPmmFMLHoA7khBc7hrg2aZqC7mKaymjmNar_kcxF-_Kid_iK9S9TJBNTCzJNbkflwvZqjF" alt="Mundial | El sueño de Argentina continúa: derrota a Países Bajos en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina se enfrentará en semifinales a Croacia, siendo el único país de América Latina que sigue con vida en Qatar 2022 tras la derrota de Brasil este viernes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/mx/futbol/news/argentina-paises-bajos-resultado-vivo-partido-hoy-resumen-goles-mundial-qatar-2022/rrurtene0onzkjlrtt0vmzb3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Países Bajos, resultado, resumen y goles: victoria ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwUqJGGxYVbSOAGSbBZGAuvTEpcTMYtpqmXikJyZN9B8l9F0illh6wDdeHjLGI-L1uMbxtpck1" alt="Argentina vs. Países Bajos, resultado, resumen y goles: victoria ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina superó a Países Bajos por penales y está en las semifinales del Mundial Qatar 2022. Análisis, resumen y goles.</p></div>
            </div>
        </a><a href='https://www.tudn.com/futbol/mundial-qatar-2022/partidos-en-vivo/cuartos-de-final/paises-bajos-vs-argentina/lionel-messi-pone-argentina-en-semifinales-mundial-qatar-2022-contra-croacia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Dibu&#39; Martínez y Lionel Messi le dan a Argentina el pase a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ9d17roeFmSERXwHbw4-_Q7ESKDsUmEuSvPPy_6qvvr6QeMaKzgxumucws-vSpx50QMAx4SqhN" alt="&#39;Dibu&#39; Martínez y Lionel Messi le dan a Argentina el pase a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Albiceleste sufrió en la tanda de penaltis pero logró el boleto a las Semifinales donde enfrentará a Croacia por el boleto a la Final.</p></div>
            </div>
        </a>
        </Template></>;
}