import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Last of Us</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Last of Us"/>
        <meta name="description" content="Trending News about The Last of Us" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Last of Us</h1>
            <Image width={800} height={500} src="https://cabanadoleitor.com.br/wp-content/uploads/2022/08/the-last-of-us.webp" alt="The Last of Us"/>
            <h3>Recent News</h3>
            <a href='https://cabanadoleitor.com.br/the-last-of-us-bella-ramsey-trabalhar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Last of Us | Bella Ramsey fala sobre trabalhar na série</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn4bhMupu6o4ANNub2VOa7QGzGjB0v_MFysq4cPesKYCVUGP8iCRnfs2ep7gH7SSUuvXWAxBXg" alt="The Last of Us | Bella Ramsey fala sobre trabalhar na série" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Last of Us é uma das séries mais aguardadas dos últimos anos, e Bella Ramsey falou como foi trabalhar com Pedro Pascal. Eric Vieira Marcos Gabriel Alves.</p></div>
            </div>
        </a><a href='https://extra.globo.com/tv-e-lazer/pedro-pascal-fala-sobre-serie-de-the-last-of-us-na-ccxp-22-25621132.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedro Pascal fala sobre série de &#39;The last of us&#39; na CCXP 22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQY5gH4bjHjrQP9HdEHybRoPmr5mk_wr3ljOr7k_22XbmbuIn5v9TmBGnnBZ57wDkRV0cwNj06c" alt="Pedro Pascal fala sobre série de &#39;The last of us&#39; na CCXP 22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O painel da HBO na CCXP 22 começou com o elenco de “The last of us”, série do criador de “Chernobyl”, Craig Mazin baseada no game de mesmo nome.</p></div>
            </div>
        </a><a href='https://cabanadoleitor.com.br/the-last-of-us-ganha-novo-trailer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Last of Us ganha novo trailer durante CCXP22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfAzN91p79twTn9XBRDMBhINr7SdKnsPq2nLgsqLylniX-KOtzb4Bd_HYVnw5MtQiZQU0bCWxp" alt="The Last of Us ganha novo trailer durante CCXP22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No painel da série na CCXP, o criador da adaptação do game para a Tv, Craig Mazin, abordou em como a série poderia ser inspiração para outros games seguir&nbsp;...</p></div>
            </div>
        </a><a href='https://br.ign.com/the-last-of-us-the-series/104404/news/the-last-of-us-ganha-trailer-inedito-repleto-de-acao-e-similaridade-com-o-game-na-ccxp22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CCXP22: The Last of Us ganha trailer inédito repleto de ação e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRATXTp7NHPk471rMYaHrGbUN21a7p4sI4viXbMor5_sEzhkd4W-H0rxma0CvzXocBJB-qKJXpm" alt="CCXP22: The Last of Us ganha trailer inédito repleto de ação e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A série The Last of Us da HBO, baseada no jogo de sucesso, revelou novidades exclusivas em painel especial na CCXP22; veja.</p></div>
            </div>
        </a><a href='https://meups.com.br/noticias/trailer-1222-serie-de-the-last-of-us/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HBO divulga trailer emocionante de The Last of Us; assista ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0-tpfVC85t62aarT3K9Nk82_OWu4Q5eqgHh-VBthPRgr0ILjgEegsIiINOYMDBT_xOwb7wR8B" alt="HBO divulga trailer emocionante de The Last of Us; assista ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A série de The Last of Us, que chegará ao catálogo da HBO em 15 de janeiro, recebeu mais um trailer emocionante. Assista aqui!</p></div>
            </div>
        </a><a href='https://tangerina.uol.com.br/filmes-series/the-last-of-us-jogo-filme-serie-hbo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Last of Us: Jogo quase virou filme antes de ganhar série na HBO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT14ZZDSSQx81B-MaYlYcfkuDeoNrCnFHJEiMpLCS5ZcQwjOPR9s7xXGQ5yU5m4sjcxJIPHfSmp" alt="The Last of Us: Jogo quase virou filme antes de ganhar série na HBO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Criador do jogo, Neil Druckmann esteve em painel na CCXP22 neste sábado (3) ao lado do showrunner Craig Mazin (Chernobyl) e dos astros Pedro Pascal, Bella&nbsp;...</p></div>
            </div>
        </a><a href='https://exame.com/pop/the-last-of-us-anuncia-trailer-inedito-na-ccxp-com-cenas-nostalgicas-do-jogo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Last of Us&#39; anuncia trailer inédito na CCXP, com cenas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_JvUoO0dRfjsHEZcmhS_EuuoVQ1K0ubAfiG0i9uJnkj6UqoDBXg0vfj9KS4t4AlBm5YtjXufb" alt="&#39;The Last of Us&#39; anuncia trailer inédito na CCXP, com cenas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Palco Thunder recebeu Pedro Pascal (Joel), Bella Ramsey (Ellie), Gabriel Luna (Tommy Miller), Merle Dandridge (Marlene) e os cocriadores e produtores&nbsp;...</p></div>
            </div>
        </a><a href='https://adrenaline.com.br/noticias/v/80766/the-last-of-us-serie-da-hbo-max-recebe-novo-trailer-na-ccxp22-assista-agora'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Last of Us: série da HBO Max recebe novo trailer na CCXP22 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRd19hMq1x6jwg5RRBMTvOB7ml_ZYRBmO-9GDDlPRDHkyv0I3SZGczzpouAOKGVr46DsO9Cmjrq" alt="The Last of Us: série da HBO Max recebe novo trailer na CCXP22 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na série, Pedro Pascal (Game of Thrones, Mandalorian) interpreta Joel, enquanto Ellie é vivida pela atriz Bella Ramsey (Game of Thrones). A produção conta com a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nerdsite.com.br/filmes/the-last-of-us-bella-ramsey-conta-detalhes-sobre-a-personagem-ellie-na-serie/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Last Of Us | Bella Ramsey conta detalhes sobre a personagem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_K306l4RKLyyRwsVkbs7zvlU41m2VNrlJl1jSDidA_8DBCbgXSm63aRXB8i6MlWTqYlYPZI1R" alt="The Last Of Us | Bella Ramsey conta detalhes sobre a personagem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz Bella Ramsey que interpreta personagem Ellie em The Last Of Us, comentou pequenos detalhes sobre a série da HBO Max;</p></div>
            </div>
        </a>
        </Template></>;
}