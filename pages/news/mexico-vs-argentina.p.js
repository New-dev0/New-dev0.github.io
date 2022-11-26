import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mexico vs Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mexico vs Argentina"/>
        <meta name="description" content="Trending News about Mexico vs Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mexico vs Argentina</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1125%2Fr1096959_1296x729_16%2D9.jpg" alt="Mexico vs Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/fifa-world-cup/story/4814115/2022-world-cup-mexico-aim-to-oust-messi-and-argentina-usa-can-build-off-england-draw-saturdays-best-bets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTL--XNzZ6RgSbNdT_G06fdNDwY0QHwQCExkR4CesMEYNuD_GxXJbsJFcD1roTPcb8FdHP9LbTa" alt="2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup&#39;s matches on Friday saw Qatar eliminated, while England and USA entertained. Here&#39;s the latest and what&#39;s ahead at the World Cup.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/2022/11/26/mexico-vs-uruguay-last-chance-for-messis-men'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Mexico vs Argentina match preview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRItp3gPCoqdSjtapZy6S7dLKiC6LXFC9nuJ4kfjJj3Wp0Rre6oPi5q2oUpw27WNqRJci08bx1M" alt="World Cup 2022: Mexico vs Argentina match preview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina are under huge pressure to get a win after the shock defeat to Saudi Arabia in their Group C opener.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/world-cup-2022-mexico-vs-argentina-start-time-betting-odds-line-expert-picks-fifa-predictions-bets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 Mexico vs. Argentina start time, betting odds, line ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzcUB-7_TBs2_ij0ksDNqJqVvhsAVu-bguEU4bTJE4B9AL3_7zN5OzTK-0ckv-_4xiC3_mUbT9" alt="World Cup 2022 Mexico vs. Argentina start time, betting odds, line ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soccer expert Jon Eimer has locked in his 2022 World Cup picks and predictions for Argentina vs. Mexico in Group C play.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/argentina-mexico-watch-time-channel-live-stream-usa-world-cup-2022/ry3j8upv0kqcdct2qfo2xa66'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Argentina vs Mexico in USA: Time, TV channel, live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIoAAqfSzB109Xp9N1bCi17s7JXCWy-YW8wKUSeTk7DONxnMu28M0NCMlHEIebFLsifWyxubad" alt="How to watch Argentina vs Mexico in USA: Time, TV channel, live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It is now or never for Lionel Messi&#39;s World Cup dream, as the Argentina master — in his last global tournament — takes on Mexico needing a win.</p></div>
            </div>
        </a><a href='https://www.dazn.com/en-US/news/soccer/argentina-vs-mexico-time-tv-channel-preview-and-how-to-watch-fifa-world-cup-match/17k134o3acori1lb5tfmnnbuzo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Mexico: Time, TV channel, preview and how to watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSycH9FSZkooSPjHbQeVEQagZLIzlcKNKErXQhwrEbV1uHUMGRIYSwxXGy01DZ1bBUwQT4nEsXE" alt="Argentina vs. Mexico: Time, TV channel, preview and how to watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s the second game of the tournament for both sides. Two teams desperate for a result meet Saturday in the World Cup as Argentina face Mexico. The Argentines&nbsp;...</p></div>
            </div>
        </a><a href='https://espndeportes.espn.com/futbol/mundial/nota/_/id/11280093/mexico-vs-argentina-cuando-y-a-que-hora-ver-el-segundo-partido-de-la-seleccion-mexicna-en-qatar-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>México vs Argentina: ¿Cuándo y a qué hora es el segundo partido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnwnayjZw5LFQCWJzjaDRqya94zyy4M2MEMrP8P1LtwJZ6UGMUu8fO6jpPhyCw3V97l81iGlvc" alt="México vs Argentina: ¿Cuándo y a qué hora es el segundo partido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>México enfrenta su segundo partido del Mundial Qatar 2022 ante la selección comandada por Lionel Messi.</p></div>
            </div>
        </a><a href='https://www.foxsports.com/stories/soccer/world-cup-2022-odds-how-to-bet-argentina-vs-mexico'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 odds: How to bet Argentina vs. Mexico, picks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYtooq2MdLrCQY9fKr6mlIrfCWXoio971r1WCDQL237ijU3OoJ_a6fsrP2AzX3qko1r5aiLiVo" alt="World Cup 2022 odds: How to bet Argentina vs. Mexico, picks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s how to bet the Argentina-Mexico match, from the moneyline, draw, Over/Under total odds and expert pick from Jason McIntyre.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/world-cup-2022-mexico-vs-argentina-everything-you-need-to-know-v/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Mexico vs Argentina - everything you need to know</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6nqn_CuaDV4zr5Lap8y7tOt1v9MOa6gFVGgG9GEIevMoioeF-P9v5EXxEUYWRWO5rDAwF64Cn" alt="World Cup 2022: Mexico vs Argentina - everything you need to know" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>El Tri will take on Lionel Messi and Argentina in their Group C World Cup match on Saturday as they try to make it to the knockout stage.</p></div>
            </div>
        </a><a href='https://es-us.vida-estilo.yahoo.com/partido-m%C3%A9xico-vs-argentina-lugares-194505733.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Partido México vs Argentina: Lugares (¡con descuentos) para verlo</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Partido México vs Argentina: Lugares (¡con descuentos) para verlo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La cerveza Minerva de barril estará al 2×1 durante todos los partidos de la selección mexicana en el Mundial Qatar 2022. Ya que estás ahí, puedes probar la&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mediotiempo.com/futbol/copa-mundial/a-que-hora-es-el-juego-de-mexico-vs-argentina-predicciones-apuestas-donde-ver-partido-mundial-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>¿A qué hora juega México vs Argentina? Alineaciones, pronóstico y ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeOMje7rXaNU_XD-I1bZp4hv4vkeNUGt4ZK9oYQPgI7dpW4t_qILZh1ijJwTleEporAOrQO0SY" alt="¿A qué hora juega México vs Argentina? Alineaciones, pronóstico y ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>¿A qué hora juega México vs Argentina? Alineaciones, pronóstico y transmisión Mundial 2022. Llegó el momento de la verdad para la Selección Mexicana al afrontar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}