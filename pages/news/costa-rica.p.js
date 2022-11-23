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
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/_layout/v3/logoUOL2021/default-share/esporte.png" alt="Costa Rica"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/22/espanha-x-costa-rica-retrospecto-escalacoes-arbitragem-e-onde-assistir.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha x Costa Rica: retrospecto, escalações, arbitragem e onde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlE-zeaR1FmXG6P2KYa3esEZtegNm0ohP3wEEzVHDY7qWnAcHkVsk2zpzQUISoCqdaOijak5VQ" alt="Espanha x Costa Rica: retrospecto, escalações, arbitragem e onde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Espanha estreia na Copa do Mundo do Qatar nesta quarta-feira (23), contra a Costa Rica, às 13h (horário de Brasília), no Estádio Al Thumama, em Doha.</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/espanha-costa-rica-copa-do-mundo-2022-onde-assistir-tv-escalacao/blt0d4149250c7e186e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha x Costa Rica: onde assistir ao vivo e online, horário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRnK1aIc8QZe-lfd2bGriRK6DzIvgUn3YiCgyEy45DhGsIcrRvGcKyATv5e5YwBke6UNoqw7iW3" alt="Espanha x Costa Rica: onde assistir ao vivo e online, horário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleções estreiam no Grupo D do Mundial do Qatar nesta quarta-feira (23); veja como acompanhar ao vivo na TV e na internet.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/11/22/catar-2022,3980634/espanha-x-costa-rica-veja-prognosticos-para-jogo-da-copa-do-mundo.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha x Costa Rica: veja prognósticos para jogo da Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2hvKoDv1Flm7f-OOQMgIt2A6pSU2-bBWgL8Hv0ZHGylkf6UFjzrUFOwhKM9kQ7H1smV7lwufe" alt="Espanha x Costa Rica: veja prognósticos para jogo da Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipes se enfrentam nesta quarta-feira (23/11), às 13h, no Al Thumama Stadium, em Al Thumama, no Catar, pelo fechamento da rodada no Grupo E.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/espanha/espanha-x-costa-rica-onde-assistir-provaveis-times-e-desfalques-do-jogo-do-grupo-e-da-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha x Costa Rica: onde assistir, prováveis times e desfalques ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSpiSA3pW1Ez9Nrl8ooB7ethW-OvOeJ0D4lR-J2fxxuZeGtN4PKiEBNKp73Pv3k_S5dSN-nYrmh" alt="Espanha x Costa Rica: onde assistir, prováveis times e desfalques ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Roja encara o time caribenho pela primeira rodada do Grupo E. Os dois times chegam ambiciosos para o Mundial do Qatar.</p></div>
            </div>
        </a><a href='https://www.costarica.ms.gov.br/portal/noticias/0/3/5245/selecao-de-costa-rica-avanca-para-semifinal-do-futebol-amadorzao-ms-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seleção de Costa Rica avança para semifinal do Futebol ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqs0DfXNehZLqHH-EhMDMbRp2cqjLiHWa5nyPeFY3aNsvaNK6CLKn5RTOyINoTikFmvQMTMtb3" alt="Seleção de Costa Rica avança para semifinal do Futebol ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção de Costa Rica venceu no último domingo (13), Ribas do Rio Pardo pelo placar final de 5 a 1 pelo Campeonato de Futebol Amadorzão MS 2022 – 2ª&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/esporte/copa-do-mundo-espanha-e-costa-rica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo da Copa Ao Vivo: Espanha x Costa Rica</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzs0AmwQ8IpZeNbrD9BysIU1Wq-IJPsu9NmBLsC6fMvNa6vOaMySpjzx5P63Ius0Duu97WaHyc" alt="Jogo da Copa Ao Vivo: Espanha x Costa Rica" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo será realizado no Al Thumama Stadium, em Al Thumama. A arena tem capacidade para receber 40 mil torcedores. Leia mais&nbsp;...</p></div>
            </div>
        </a><a href='https://www.umdoisesportes.com.br/copa-do-mundo/2022/espanha-x-costa-rica-escalacoes-provaveis-onde-assistir-horario-e-arbitragem/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha x Costa Rica: escalações, onde assistir e horário | Copa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSM3AumEDAt1HrtqEJVuY3cqvIBw64V-XcImGvnouszCtoC3_paUwJvcFZAxs_Ea4KpAfQB8L1y" alt="Espanha x Costa Rica: escalações, onde assistir e horário | Copa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Espanha x Costa Rica, veja como assistir, escalações, horário, probabilidades e arbitragem pela Copa do Mundo do Catar. Leia no UmDois Esportes!</p></div>
            </div>
        </a><a href='https://www.bemparana.com.br/noticias/espanha-desafia-clima-e-zebra-costa-rica-de-olho-no-bicampeonato-mundial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Espanha desafia clima e “zebra” Costa Rica de olho no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Espanha desafia clima e “zebra” Costa Rica de olho no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Campeã da Copa do Mundo de 2010, a Espanha entra em campo para dar o primeiro passo rumo ao bicampeonato nesta quarta-feira, às 13h, diante da Costa Rica,</p></div>
            </div>
        </a><a href='https://www.costarica.ms.gov.br/portal/noticias/0/3/5249/enfrentamento-a-violencia-contra-mulheres-ganha-parceria-da-educacao-costarriquense/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enfrentamento à violência contra mulheres ganha parceria da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT38S9ULR6Ua9mDGJ8g_xFGym0enbS_HL6PjXBoVjo0Z_MHVivvfeq5RVughhsedtkc1irQ6Lxz" alt="Enfrentamento à violência contra mulheres ganha parceria da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta segunda-feira (21), durante reunião na sala do gabinete no Paço Municipal, a Secretaria de Políticas Públicas para as Mulheres de Costa Rica ganhou a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}