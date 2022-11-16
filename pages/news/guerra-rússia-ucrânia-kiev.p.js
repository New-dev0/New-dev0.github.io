import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Guerra Rússia Ucrânia Kiev</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Guerra Rússia Ucrânia Kiev"/>
        <meta name="description" content="Trending News about Guerra Rússia Ucrânia Kiev" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Guerra Rússia Ucrânia Kiev</h1>
            <Image width={800} height={500} src="https://s.rfi.fr/media/display/1c694ade-64fd-11ed-a35d-005056bfb2b6/w:1280/p:16x9/AP22319519159694.jpg" alt="Guerra Rússia Ucrânia Kiev"/>
            <h3>Recent News</h3>
            <a href='https://www.rfi.fr/pt/mundo/20221115-guerra-na-ucr%C3%A2nia-r%C3%BAssia-disparou-centena-de-m%C3%ADsseis-em-kiev-e-outras-cidades'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guerra na Ucrânia: Rússia disparou centenas de mísseis em Kiev e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSV8SyOhcXI3W5326xhsp2Hr2sQldKCk3pa8i-2hu8liDLWpK92ocLkaAerqMTaCzM18LkjXtMd" alt="Guerra na Ucrânia: Rússia disparou centenas de mísseis em Kiev e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Este ataque acontece alguns dias depois da humilhante retirada russa da cidade de Kherson e os agrupamentos que se seguiram, com a população ucraniana da cidade&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/internacional/ultimas-noticias/2022/11/15/russia-ataca-ucrania-15-de-novembro.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rússia lança mais de 100 mísseis contra Ucrânia após Zelensky ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQckRq-k1jT4ngb9IWQLVV1dQEN4xTdnpuLcn1-lu9QPUWlW6IIYb17-iAapDLvavdwHbRyUw-I" alt="Rússia lança mais de 100 mísseis contra Ucrânia após Zelensky ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cúpula do G20 na Indonésia aumentou a pressão internacional sobre a Rússia, com vários apelos, inclusive de países próximos a Moscou, para encerrar a guerra&nbsp;...</p></div>
            </div>
        </a><a href='https://pt.euronews.com/2022/11/15/misseis-russos-volta-a-cair-sobre-kiev'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mísseis russos voltam a cair sobre Kiev</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS48u4ikaEsGN9GoU7cHvOl_kuRzZPRtdKY5y-skl4jGElcsXFiw01lFpZpER4GLQ0U841XS94Y" alt="Mísseis russos voltam a cair sobre Kiev" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nova ofensiva aérea tem como alvo principal a rede elétrica ucraniana, mas atinge também edifícios residenciais.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/amp/mundo/2022/11/15/guerra-na-ucrania-kiev-volta-a-ser-atacada-por-misseis-russos/308133/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Guerra na Ucrânia. Kiev volta a ser atacada por mísseis russos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVO4Vspr-tImwu0e_CAUfjCGo_4pzj5mF_G8nPb31kLUQNA1EEGLszUa5IoPYXJX9uA5dpyJX1" alt="Guerra na Ucrânia. Kiev volta a ser atacada por mísseis russos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dois edifícios foram atingidos na capital ucraniana. Cerca de 70 mísseis foram disparados nas últimas horas pelas forças russas contra posições ucranianas.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/mundo/noticia/2022/11/russia-bombardeia-grandes-cidades-na-ucrania-e-metade-de-kiev-fica-sem-luz.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rússia bombardeia grandes cidades na Ucrânia, e metade de Kiev ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQodWrzQfSkX79UpMwXaglQj_3GW386xfumSeQ3bQvt7RaUrekql0gwhTiVjwNger7Mr45PxXnc" alt="Rússia bombardeia grandes cidades na Ucrânia, e metade de Kiev ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As cidades ucranianas de Lviv e Kharkiv, além da capital, Kiev, foram atingidas por bombardeios russos nesta terça-feira, no que o governo da Ucrânia disse&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/15/mundo/noticia/edificios-residenciais-kiev-atingidos-misseis-russos-2027816'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Edifícios residenciais em Kiev atingidos por mísseis russos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIXh9PSlKTfg0ihuN04Zx6O5yjOVd8UoUtgQWAR_qDUCFfvLo_SMr59Vp2O-MYgrqnua4RImp9" alt="Edifícios residenciais em Kiev atingidos por mísseis russos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além de Kiev, também há relatos de ataques em Kharkiv, Lviv e Sumy, bem como na cidade de Kryvyi Rih e nas regiões de Poltava e Cherkassy.</p></div>
            </div>
        </a><a href='https://cnnportugal.iol.pt/guerra/ucrania/o-intervalo-na-guerra-acabou-russia-volta-a-atacar-kiev-retaliacao-ou-nova-escalada/20221115/6373c44a0cf2254fb2825aca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;O intervalo na guerra acabou&quot;: Rússia volta a atacar Kiev ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7tClC824_UzRDRD6l8RPUcnDHyhU_dg2P01NJeYajRcLoDJVx0olFVCPITmWtipTtX1RM-NjP" alt="&quot;O intervalo na guerra acabou&quot;: Rússia volta a atacar Kiev ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E foi isso que aconteceu. &quot;Nas últimas duas semanas praticamente não vimos ataques&quot;, afirma à CNN Portugal o major-general Agostinho Costa. Até esta terça-feira&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}