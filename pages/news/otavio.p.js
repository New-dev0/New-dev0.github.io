import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Otavio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Otavio"/>
        <meta name="description" content="Trending News about Otavio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Otavio</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/398935171664a3157866_socialshare.jpg" alt="Otavio"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/bola-branca/noticia/clube-portugal/2022/11/24/otavio-esta-mais-ou-menos-apos-lesao-contra-o-gana/309438/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otávio está “mais ou menos” após lesão contra o Gana - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdzoEn_AtVOyFinJk16vjy2LCWFiU8I9aNbCVv7RcJ28AhQWUYrz2Clh4ey04_-0_POg2KDMLq" alt="Otávio está “mais ou menos” após lesão contra o Gana - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O atleta vai ser reavaliado nas próximas horas. Portugal derrotou o Gana, por 3-2, com golos de Cristiano Ronaldo, João Félix e Rafael Leão. A equipa das quinas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/otavio-saiu-lesionado-do-portugal-gana-como-estou-mais-ou-menos-15385140.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otávio saiu lesionado do Portugal-Gana: &quot;Como estou? Mais ou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4lozvKjHWsYaoS2spb2Upi76t-YKKvTQ7fgosHO8h2kTuCJyyUZpr7gell9cZVkv_46kaLwDd" alt="Otávio saiu lesionado do Portugal-Gana: &quot;Como estou? Mais ou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Otávio deixou o Portugal-Gana com queixas físicas. Aos 56 minutos, o médio da Seleção portuguesa e do FC Porto foi assistido pela equipa médica, com queixas na&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/pb/copa-do-mundo/noticia/2022/11/24/otavio-tem-estreia-discreta-na-copa-do-mundo-em-vitoria-de-portugal.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Otávio tem estreia discreta na Copa do Mundo em vitória de Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREzXKO0Mc1kr-a6bTG7kDJLaH34Z3ImsiI5gGsjUnHpJwmP9yn0I1cMd37DgjyM-ixBSno9Wy2" alt="Otávio tem estreia discreta na Copa do Mundo em vitória de Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brasileiro de 27 anos teve atuação sem grandes destaques na partida de estreia da seleção portuguesa no Grupo H, contra Gana. O jogo terminou com vitória&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/fernando-santos-obrigado-a-mexer-na-equipa-otavio-sai-lesionado--15384693.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fernando Santos obrigado a mexer na equipa: Otávio sai lesionado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSTeHzcR0RjH4nVBynadh6OKZpo3e_rzJkM_ki-lJFJ358OrSoW82TLMMOexOoHJ1pqYUamdQv" alt="Fernando Santos obrigado a mexer na equipa: Otávio sai lesionado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal estreia-se, esta quinta-feira, no Mundial2022 no jogo com o Gana. A equipa das quinas está a vencer por 1-0, graças a um golo de Cristiano Ronaldo.</p></div>
            </div>
        </a><a href='https://interior.ne10.uol.com.br/esportes/2022/11/15127853-quem-e-otavio-conheca-o-brasileiro-titular-em-portugal-na-copa-do-mundo-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>QUEM É OTÁVIO? Conheça o BRASILEIRO titular em PORTUGAL ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQmwPzsN6olGwAS0whQMHBULHZD631CDsBOKCc_6LpOuUBtmP-MnAEYtl7cEaGPQg3V4roPUyr" alt="QUEM É OTÁVIO? Conheça o BRASILEIRO titular em PORTUGAL ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na estreia de Portugal na Copa do Mundo 2022, um brasileiro estará entre os titulares. Mas não, não é o zagueiro Pepe.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/portugal/quem-e-otavio-conheca-o-brasileiro-que-disputa-a-copa-do-mundo-por-portugal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Otávio? Conheça o brasileiro que disputa a Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQr3EzuM5k6rkezHt_6SmcL2luRPiNbZYIwyS-4LJpoDmG5uIncRg4_nERLVMOUQCpmoDdeA3Q6" alt="Quem é Otávio? Conheça o brasileiro que disputa a Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nascido em João Pessoa (PB), luso-brasileiro de 27 anos atua há oito temporadas no futebol português e foi titular na partida de estreia do Mundial contra&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}