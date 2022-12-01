import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lensa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lensa"/>
        <meta name="description" content="Trending News about Lensa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lensa</h1>
            <Image width={800} height={500} src="https://www.rbsdirect.com.br/filestore/1/6/3/3/6/2/4_f0c50970568ebfc/4263361_5200d75f71e876f.jpg?w=1200&h=630&a=c&version=1575255600" alt="Lensa"/>
            <h3>Recent News</h3>
            <a href='https://gauchazh.clicrbs.com.br/tecnologia/noticia/2022/11/o-que-e-lensa-aplicativo-permite-criacao-de-avatar-personalizado-com-fotos-reais-clb43h93n0009014uljmkx5jz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O que é Lensa? Aplicativo permite criação de avatar personalizado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRISMZIvzid5E_JTtiwgPmPer0FvB0-HjyePK7guBIwUuUOKzFLTVhsimS8AqPtip4t_qeh52Ng" alt="O que é Lensa? Aplicativo permite criação de avatar personalizado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O que é Lensa? Aplicativo permite criação de avatar personalizado com fotos reais. Editor já é febre entre os famosos e uma das principais buscas nas lojas de&nbsp;...</p></div>
            </div>
        </a><a href='https://gq.globo.com/tecnologia/noticia/2022/11/lensa-3-alternativas-ao-app.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lensa: 3 alternativas ao app que desenha usuário via IA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQBZLqhCWzX_7oM--_AvBq8MDBdJGVELhorbTM3owE1gPFS0a8MXLj7vKt4KeStKg-_PLUNad5" alt="Lensa: 3 alternativas ao app que desenha usuário via IA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aplicativo que virou sensação entre internautas nos últimos dias não é o único a empregar intleigência artificial como artista.</p></div>
            </div>
        </a><a href='https://www.techtudo.com.br/dicas-e-tutoriais/2022/11/lensa-como-criar-avatar-pelo-app-de-inteligencia-artificial.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lensa: como criar avatar pelo app de inteligência artificial</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJ89Yh8BV6kFKAEtXxWIwX8gSjpr-1mQZAXPsbf0Ng0YWQtbpwnyrJvo-t0WvRZlqtsfMxOwMH" alt="Lensa: como criar avatar pelo app de inteligência artificial" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>App cria avatares a partir de fotos dos usuários, é pago e está fazendo sucesso no Instagram desde o início da semana; saiba como utilizar o Lensa para&nbsp;...</p></div>
            </div>
        </a><a href='https://canaltech.com.br/apps/lensa-como-usar-ia-para-criar-um-avatar-com-a-sua-foto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lensa | Como usar IA para criar um avatar com a sua foto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1Mmfw5H8h7WlukVnb930UMV5knjoL0aQHVVtYCyeiHkSdlOUn5UZCztWMhGFx0_OlJMrg2aCs" alt="Lensa | Como usar IA para criar um avatar com a sua foto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lensa é um aplicativo para celulares Android e iPhone (iOS) que usa Inteligência Artificial (IA) para criar avatares artísticos com as suas fotos.</p></div>
            </div>
        </a><a href='https://exame.com/tecnologia/app-lensa-saiba-como-transformar-fotos-reais-em-avatares-feitos-por-inteligencia-artificial-ia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>App Lensa: saiba como transformar fotos reais em avatares feitos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTDajlMB6MID0-_W_YrwngRuc6PBzBw_ieRimkXOR1iXPEsR0iUeEMmm3u1zmmOezLGwiIaqddd" alt="App Lensa: saiba como transformar fotos reais em avatares feitos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lensa se tornou um dos aplicativos mais baixados da Google Play e Apple Store, nos últimos dias. Veja quanto custa e o passo a passo para criar os avatares.</p></div>
            </div>
        </a><a href='https://www.tecmundo.com.br/software/255207-prisma-app-gratis-criadores-lensa-transforma-foto-desenho.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prisma: app grátis dos criadores do Lensa transforma foto em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSuOMq-T3VIszA7OWvtjJTDOv3YtIG8IetobOQ41AxhDXLqBe9J8ftbVvVzXlJYhxgvhOy2a1L" alt="Prisma: app grátis dos criadores do Lensa transforma foto em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saiba como usar o app de edição de fotos para criar imagens criativas em poucos toques!</p></div>
            </div>
        </a>
        </Template></>;
}