import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina vs Australia"/>
        <meta name="description" content="Trending News about Argentina vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina vs Australia</h1>
            <Image width={800} height={500} src="" alt="Argentina vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.nytimes.com/live/2022/12/03/sports/argentina-australia-world-cup-score'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Australia Live: Score and World Cup Updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTB9-0lG6N5SB6wCXs1_9mgIdZ6RR7D3KkRFYss0qZWyRpv6akpOkrKMjx8bi18c9i57V1LT9Sw" alt="Argentina vs Australia Live: Score and World Cup Updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina has controlled the ball for most of the game. Lionel Messi finally found an opening for his 789th career goal. Follow live.</p></div>
            </div>
        </a><a href='https://theathletic.com/3964785/2022/12/03/argentina-vs-australia-result-world-cup-messi-1000/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Australia result: Lionel Messi scores in 1000th game to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQq1_c0_riqlxE8e3513ymcbSgEoeIBidHAtmemP7qQ4JiOOGuK_OqHH7jWSRtSyQXoXq4QDIHt" alt="Argentina vs Australia result: Lionel Messi scores in 1000th game to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi scored in his landmark 1000th game as Argentina survived a late scare to beat Australia 2-1 and book a quarter-final date with the Netherlands.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/argentina-vs-australia-2022-world-cup-live-stream-tv-channel-how-to-watch-online-pick-odds-start-time/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Australia: 2022 World Cup live stream, TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTWWfNQX1_onGBS6PwZ0H_ghG4D021hZ9xnAxZg9OmOgUwrp_-netFrtbM5Ly8Tjhvc8AtxXnLc" alt="Argentina vs. Australia: 2022 World Cup live stream, TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina qualified by winning Group C as they took six points from three matches, recovering from a shock opening day defeat to Saudi Arabia (2-1) to record&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/argentina-vs-australia-world-cup-live-score-result/ygak6pvg4iunog82ucz644hr'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Australia final score, result: Messi stars as brave ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiQAg6cgOkvaxuzLxsSukem2F2X-qqEVETJsAU-OPiqkho4F82bIougucGI45oknHcPBivowh0" alt="Argentina vs Australia final score, result: Messi stars as brave ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi inspired Argentina past Australia and into the quarterfinals of the 2022 World Cup.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/argentina-vs-australia-live-online-score-stats-and-updates-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Australia summary: Messi opener, score, goals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSogXbAxY7dA6cPiIKXGlFBQFAb8l8LY4VmWk9KXXtsThyCpEBjy5NbyeBf7Rob8KyG5Lx94ix5" alt="Argentina vs Australia summary: Messi opener, score, goals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina hang on to beat Australia for a place in the 2022 World Cup quarter-finals in Lionel Messi&#39;s 1000th career game.</p></div>
            </div>
        </a><a href='https://edition.cnn.com/sport/live-news/world-cup-2022-12-03-2022/h_4224901a61d65d9324ccfe6943cf4a9a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dec. 3, 2022 coverage of the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPhiU7wxBhrCjEBdIt8Do0Z9J53wOlCABJm2ejCBifLOkqoh4r_GIZVeIAI3WgOvusHWJV62O4" alt="Dec. 3, 2022 coverage of the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team USA is out at the 2022 World Cup after a heartbreaking loss to the Netherlands. Lionel Messi&#39;s Argentina will advance after holding off a late push&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/espanol/deportes/articulo/2022-12-03/minuto-a-minuto-de-argentina-vs-australia-en-vivo-de-octavos-de-final-de-qatar-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Con brillante actuación de Messi, Argentina avanza a Cuartos de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPavIy8x9WFP14_3hfEnwcDDmEWe65iXuw1dfNMg0xW6uJHm2OcjPjl7dipOJxY1hgOBu3GfN0" alt="Con brillante actuación de Messi, Argentina avanza a Cuartos de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Una genialidad de Lionel Messi abrió el camino a Cuartos de Final del Mundial de Qatar 2022 para la Argentina que derrotó a Australia 2-1, el sábado,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tudn.com/futbol/mundial-qatar-2022/partidos-en-vivo/octavos-de-final/argentina-vs-australia/argentina-vs-australia-vivo-por-mundial-qatar-2022-minuto-minuto-partido'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Australia EN VIVO por el Mundial Qatar 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTn6SmasNgZHc0a0PJrRFM3rRNPvwflP5zpDtQeHNOh44S9C5BtAnN7gy7VVCDlv3WDPy4G3PR_" alt="Argentina vs. Australia EN VIVO por el Mundial Qatar 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina y Australia juegan clasificación a cuartos final Copa Mundial de la FIFA. | Deportes Argentina vs. Australia | TUDN Univision.</p></div>
            </div>
        </a><a href='http://espndeportes.espn.com/futbol/reporte?juegoId=633836'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Australia - Reporte del Partido - 3 diciembre, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxRqwn4__q7grHEKnCrISdVdwuSq9bW7x18SL9ox8_VEUqGXI9dYhPedCCtvAUpaUTG0Dc6iUC" alt="Argentina vs. Australia - Reporte del Partido - 3 diciembre, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Obtén el reporte del partido Argentina vs. Australia 2022 Copa Mundial FIFA, Ronda de 16.</p></div>
            </div>
        </a><a href='https://www.marca.com/claro-mx/futbol/mundial/2022/12/03/638b8300e2704e433a8b45b0.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Australia: Resultado del partido de octavos de final del ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOugRKUGRXkxW4yLhDwRt6qmPZP7wmj-tKAY_1FXk0PF5ON5TmYiKE66ePIfghGdjE3LpYnqg0" alt="Argentina vs Australia: Resultado del partido de octavos de final del ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Resultado: Argentina 2-1 Australia Gracias amigos y amigas de MARCA CLaro por seguir un nuevo minuto a minuto de esta Copa del Mundo, donde Argentina se&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}