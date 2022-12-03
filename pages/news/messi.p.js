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
            <Image width={800} height={500} src="https://ak.uecdn.es/p/110/thumbnail/entry_id/0_7ctkgupg/width/657/type/2/bgcolor/000000/0_7ctkgupg.jpg" alt="Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.marca.com/en/world-cup/2022/12/01/638879c6e2704e25b38b4581.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Messi and Lewandowski incident: What happens on the pitch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXPdwk-dylwmRNMuYDnz2VLAyXgFWiBz4tePUaJIsEpvibPnyF1tNdiU1aBedAtFp_-iHz6SCV" alt="The Messi and Lewandowski incident: What happens on the pitch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the most striking images of the Poland vs Argentina came as the game entered its final minutes, Robert Lewandowski fouled Lionel Messi after being&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-ng/lists/messi-missing-penalty-better-than-ronaldo-stealing-a-goal-fans-as-argentina-march-on-in-world-cup/bltc9efba75ba02f284'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi missing penalty better than Ronaldo &#39;stealing a goal&#39; - Fans as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyEZFMdhNaIxlLYGWO5zZ02ii_luoKuVkdCBlfLDcLOBQQE0l0gw8C7C7ul7jXwFpmIVjJXcOn" alt="Messi missing penalty better than Ronaldo &#39;stealing a goal&#39; - Fans as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fans reactions after Lionel Messi missed a penalty in Argentina&#39;s World Cup win against Poland on Wednesday night.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/argentina-arg/story/4821129/the-seven-tendencies-lionel-messi-displayed-against-poland'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The seven tendencies Lionel Messi displayed against Poland</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1qAWM5l0wVXYjQsPijJ8LlWKoQSRY2DuV7ioa6f4jOFhkcW_4XIsJFTOMrYgaRsmGBxJhvek3" alt="The seven tendencies Lionel Messi displayed against Poland" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s hard to focus on one player for 90 minutes, but Gab Marcotti watched exclusively Lionel Messi take on Poland. What did he learn about the GOAT?</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/30/messi-misses-penalty-but-argentina-advance-at-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi Misses Penalty But Argentina Advance At World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsQoUA3gSk4QGmtwCcMXUr0dFASw0bYH7YyW4IB5DVqmXLR3YQefnzIZduhO9sB0aAT_Az7kMT" alt="Messi Misses Penalty But Argentina Advance At World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Poland also went through as runners-up although a 2-1 win for Mexico over Saudi Arabia in the group&#39;s other game meant Czeslaw Michniewicz&#39;s side advanced only&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11492115/Robert-Lewandowski-reveals-told-Lionel-Messi-frosty-moment.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Robert Lewandowski reveals what he told Lionel Messi after their ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPd7T1lsuEM3awSRPHJpvKzKSnHAZYxT1O0w-Rd3Tw6u7ChSreSwUYau1iAzj4LdFLfV0AjkMv" alt="Robert Lewandowski reveals what he told Lionel Messi after their ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Robert Lewandowski has shared what he told Lionel Messi at full-time after the pair shared a frosty moment on the pitch during Argentina&#39;s 2-0 win against&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/12/01/6387fb7be2704e0d138b4613.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canelo Alvarez vs. Lionel Messi: Argentine striker refuses to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2KqzKxVzZOB_Oi8fDJ7I-BCRAouHwP5GD7siOXiYbq27Cvd88TH0MHH4w2toc2XLILQMae8f3" alt="Canelo Alvarez vs. Lionel Messi: Argentine striker refuses to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saúl Canelo Álvarez acknowledged his mistake and offered apologies, and now it was Lionel Messi&#39;s turn to speak and he is clear: at no time did he&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football.london/international-football/lionel-messi-robert-lewandowksi-tension-25636130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi and Robert Lewandowski true feelings revealed with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1TQ9dULLoWsz1dk5ztrpThAl-ZqJyOzkKAoCwjAwf6uTMnNGZHXPtVCUYm5DXYI39UjKfKmr5" alt="Lionel Messi and Robert Lewandowski true feelings revealed with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup news: Two footballing giants went head-to-head in a chaotic deciding group stage match in Qatar.</p></div>
            </div>
        </a><a href='https://www.goal.com/en/news/disrespect-people-mexico-messi-insists-forgiveness-canelo-threat/bltc268b7ae7cdfde50'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I didn&#39;t disrespect the people of Mexico&#39; - Messi insists he &#39;won&#39;t ask ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSK4YFegMA-mn73CHj5Dr04fhDDOJbSo7TrThaKvbaBEUIO11py_KU7h-rgcXf8BeokhYxnzi4T" alt="&#39;I didn&#39;t disrespect the people of Mexico&#39; - Messi insists he &#39;won&#39;t ask ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WHAT HAPPENED? A dressing room video that showed a Mexico jersey on the floor by Messi&#39;s feet after their defeat to Argentina sparked outrage from Mexican&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-sa/news/canelo-apologises-to-messi-bullsh-t-comments-after-argentina-win-over-mexico/blt2c49e86c42a25935'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I got carried away&#39; - Canelo apologises to Messi for &#39;bullsh*t ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1F72663sZ1CZ_BQs6JWD4_-oLNq5DWk48_5zM7t3y7-jLHhoyPUUW-JAZt8iaaRNXopoavygW" alt="&#39;I got carried away&#39; - Canelo apologises to Messi for &#39;bullsh*t ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saul &#39;Canelo&#39; Alvarez has apologised to Lionel Messi for comments he made towards him after his side beat Mexico at the World Cup.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-us/news/only-psg-can-afford-messi-laliga-president-questions-barcelona-re-signing-club-legend/bltf1c47c4f4542f362'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Only PSG can afford Messi&#39; - La Liga president questions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1JJwIAikeN1mj1bFJv-GAQX5Pb9M8T4-4gulssuugiIhRCz67FlXtOSIwfM6rYn4ct9Tk2aeS" alt="&#39;Only PSG can afford Messi&#39; - La Liga president questions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Liga president Javier Tebas has questioned the possible return of Lionel Messi to Barcelona, claiming that only PSG can afford his wage demands.</p></div>
            </div>
        </a>
        </Template></>;
}