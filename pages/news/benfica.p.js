import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benfica</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benfica"/>
        <meta name="description" content="Trending News about Benfica" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benfica</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/10/05/550x300/1_whatsapp_image_2022_10_05_at_11_47_08-21828157.jpeg" alt="Benfica"/>
            <h3>Recent News</h3>
            <a href='https://interior.ne10.uol.com.br/esportes/2022/11/15129439-benfica-x-penafiel-ao-vivo-veja-horario-escalacoes-e-onde-assistir-ao-vivo-a-partida-deste-sabado-26.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BENFICA X PENAFIEL AO VIVO: Veja horário, escalações e onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5AFBYdLyX_urIO8WDxpvuomdA_gMUkjK02Gkt0xQgQNiRHFou5Pfmi_zZWuWiRkZ9tOd_wTY7" alt="BENFICA X PENAFIEL AO VIVO: Veja horário, escalações e onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipes se enfrentam pelo Grupo C da Taça da Liga de Portugal.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/futebol-na-tv/2022/11/15129401-onde-assistir-o-jogo-do-benfica-ao-vivo-veja-horario-escalacoes-e-onde-assistir-ao-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONDE ASSISTIR O JOGO DO BENFICA AO VIVO: Veja horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxdbXxekFTWZca4D1Qxb21wT9BTC-GR-Yw8UrFwqo02x8XTHvI5YX26Exrw_94oknK0QYMZC_d" alt="ONDE ASSISTIR O JOGO DO BENFICA AO VIVO: Veja horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Invicto na temporada, o Benfica entrará em campo com o apoio da sua torcida para derrotar o Penafiel, equipe que busca acabar com o domínio do time das águias.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/taca-da-liga/artigos/benfica-com-segundo-melhor-registo-de-invencibilidade-a-abrir-uma-epoca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica com segundo melhor registo de invencibilidade a abrir uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQr2RxQ9fyOXHrvGyOIg-b4zbSmqWmy8PzJg5bRg9w5Sg8b3FmMhGQgBoWRcdlsmIkmuj_L-Wh" alt="Benfica com segundo melhor registo de invencibilidade a abrir uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com 27 jogos sem perder, o &#39;onze&#39; benfiquista vai agora em busca do recorde, conseguido em 1959/60, época em que os &#39;encarnados&#39; não disputaram as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-26/taca-da-liga-benfica-penafiel-direto/966219'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica vence Penafiel com dois golos em dois minutos (veja o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpzmJ0qYi78PWDuACSHJPIyRUkzS-QWfWzsbIpKmGm1U0rIfErgeFk27bBruj3tWULr484vGFF" alt="Benfica vence Penafiel com dois golos em dois minutos (veja o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Benfica venceu o Penafiel por 2-0 e lidera o Grupo C da Taça da Liga com duas vitórias. Marcaram Gilberto e David Neres. O Benfica entrou muito forte,&nbsp;...</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/modalidades/futsal/artigos/arthur-lidera-reacao-e-benfica-esta-na-final-four-da-champions-de-futsal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arthur lidera reação e Benfica está na &#39;final four&#39; da &#39;Champions&#39; de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5vZodY1ggaTGC9qAKLuubiUzUjtx3xgb0oeEncRMeIZQ8Xgjfmagg05u1XdJXObu_13xCpdM8" alt="Arthur lidera reação e Benfica está na &#39;final four&#39; da &#39;Champions&#39; de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O triunfo no encontro da terceira jornada, disputado em Almaty, no Cazaquistão, permitiu ao Benfica vencer o agrupamento e manter-se na corrida pela&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/liveblogs/benfica-recebe-o-penafiel-em-jogo-a-contar-para-a-taca-da-liga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica vence o Penafiel e soma a segunda vitória na Taça da Liga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSQIK_RnatXEZF1G2qy2pZFYy8DKL-G_tSNqvri2rJ8kV6nAAvWc7cTN9iWktuKT87SDPbLYIH" alt="Benfica vence o Penafiel e soma a segunda vitória na Taça da Liga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de ter vencido o Estrela da Amadora na 1.ª jornada da fase de grupos (2-3) da Taça da Liga, as águias venceram o Penafiel por 2-0 no Estádio da Luz,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/modalidades/futsal/noticias/benfica-esta-na-final-four-da-liga-dos-campeoes-de-futsal-15391189.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica está na final-four da Liga dos Campeões de futsal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXtRi1z3B6D6zYU8LeTcof2lggpv2vSDYnjP9KIbJ2_4QEtcVIwhDtJtpOaSrEkvH5Fb5hnvNZ" alt="Benfica está na final-four da Liga dos Campeões de futsal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A equipa encarnada, orientada por Pulpis, venceu o Kairat Almaty no Cazaquistão.</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/benfica-vence-penafiel-com-dois-golos-em-dois-minutos-15391802.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica vence Penafiel com dois golos em dois minutos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLrhR5SiwNQvZvRFa2QFepheeHbSVh3Lr7yx_zMYZkz8OAlnaWn_GtNxkmA2hHxOG92HckLGQv" alt="Benfica vence Penafiel com dois golos em dois minutos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mais de 43 mil espectadores foram ao Estádio da Luz assistir ao 27. º jogo das águias sem perder da época. Equipa de Roger Schmidt isola-se na frente do&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/modalidades/2022/11/26/benfica-apurado-para-a-final-four-da-liga-dos-campeoes/309654/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica apurado para a “final four” da Liga dos Campeões ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsOfudPMd8eD-jE3bOLzfu9a2CnsTTvz--ILVYDvI2nrjLjjzVOwI-XPL4fVtX-CrnX7JUHml0" alt="Benfica apurado para a “final four” da Liga dos Campeões ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Encarnados deram a volta ao marcador e garantiram a passagem à fase seguinte com duas vitórias e um empate.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-26/futsal-benfica-vence-kairat-e-apura-se-para-a-final-four-da-liga-dos-campeoes/966203'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benfica vence Kairat e apura-se para a &#39;final four&#39; da Liga dos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSji172OyCgK9wZ2arS4_yAa7Te8uvhnR9n4g6CwMKdASGwIYLqSc8nMxFDZXkoclcJ_5d7y7aF" alt="Benfica vence Kairat e apura-se para a &#39;final four&#39; da Liga dos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Benfica venceu o Kairat, por 2-1, em partida referente à 3.ª jornada do Grupo C da Ronda de Elite, realizada na tarde deste sábado, no Palácio dos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}