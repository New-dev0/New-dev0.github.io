import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vitor Pereira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vitor Pereira"/>
        <meta name="description" content="Trending News about Vitor Pereira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vitor Pereira</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/esporte/0d/2022/09/20/vitor-pereira-tecnico-do-corinthians-e-dorival-jr-tecnico-do-flamengo-participaram-de-coletiva-de-imprensa-apos-o-sorteio-de-mando-da-final-1663684868641_v2_615x300.jpg" alt="Vitor Pereira"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/colunas/mercado-da-bola/2022/11/25/flamengo-negocia-com-vitor-pereira-e-segura-renovacao-de-dorival.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercado da Bola - André Hernan - Flamengo negocia com Vítor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdu4-18u4i9-gRoZaDGs_a72hY4c8x-eri8GdcjgTuUg5eNp90AnOGWEsPDPGDEcTzfGduZhSb" alt="Mercado da Bola - André Hernan - Flamengo negocia com Vítor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rubro-Negro conversa com técnico português e não conclui renovação do atual treinador, que fica sabendo dos movimentos no mercado da bola.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/times/flamengo/noticia/2022/11/25/flamengo-cozinha-dorival-e-abre-negociacoes-para-ter-vitor-pereira.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flamengo cozinha Dorival e abre negociações para ter Vítor Pereira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtWmR0QczhHYJ_NPVyRZ7m4wmGPzka6ez12opQXiJUviddQbC6P6Fo1I0uDyy78S-DisgTbyq3" alt="Flamengo cozinha Dorival e abre negociações para ter Vítor Pereira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ge apurou que o empresário Giuliano Bertolucci é quem intermedia as tratativas, que tem participação direta do próprio Vitor Pereira. As negociações giram em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/com-flamengo-de-olho-em-vitor-pereira-dorival-junior-anuncia-saida-do-clube,691a1173a195e9be59917e2d2f039ecdauoijk2v.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com Flamengo de olho em Vítor Pereira, Dorival Júnior anuncia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Com Flamengo de olho em Vítor Pereira, Dorival Júnior anuncia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Flamengo não contará com Dorival Júnior para a temporada de 2023. Na noite desta sexta-feira, o treinador se despediu do clube em um vídeo publicado em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/flamengo/artigo/_/id/11281757/vitor-pereira-no-lugar-de-dorival-jr-no-flamengo-veja-o-que-se-sabe-e-o-que-os-dois-treinadores-falam-sobre-isso'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitor Pereira no lugar de Dorival Jr. no Flamengo? Veja o que se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRJJJYgj608vzVpdVX4dPzm_x8aQg18N9bNltcwp5AqdaC8ecnCTmC-KY9S5DAgyBD4hHXA8AR" alt="Vitor Pereira no lugar de Dorival Jr. no Flamengo? Veja o que se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Português que acaba de deixar o Corinthians vira possibilidade para assumir o atual campeão da Libertadores no lugar de Dorival.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/futebol-nacional/2022/11/25/noticia_futebol_nacional,3981168/dorival-na-selecao-flamengo-negocia-com-vitor-pereira-diz-jornal.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dorival na Seleção? Flamengo negocia com Vitor Pereira, diz jornal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdVma-o60dlWk7enL9I7QicjlWf5Q-67FqY5azTETTgDrUfYmSGOV8ffXdfKE5eydy9o5ubD-F" alt="Dorival na Seleção? Flamengo negocia com Vitor Pereira, diz jornal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de já existir um acordo para renovação do contrato de Dorival com o Rubro-Negro, o clube carioca se prepara para uma possível perda do comandante para a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}