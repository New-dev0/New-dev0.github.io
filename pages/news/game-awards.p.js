import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Game Awards</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Game Awards"/>
        <meta name="description" content="Trending News about Game Awards" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Game Awards</h1>
            <Image width={800} height={500} src="https://sm.ign.com/t/ign_pt/screenshot/default/tga_fggp.1200.jpg" alt="Game Awards"/>
            <h3>Recent News</h3>
            <a href='https://pt.ign.com/the-game-awards-2022/120065/news/the-game-awards-2022-assiste-ao-vivo-com-a-ign-portugal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022 - Assiste ao vivo na IGN Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSjSwiiFZATvrUOnrBnv5G18UiRJ05Sir_rlMaN9KR6_pUuLXccV_iHynw5c5sa5iaJ0yyMaNN" alt="The Game Awards 2022 - Assiste ao vivo na IGN Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para além da atuação da Orquestra dos The Game Awards, também vamos ter a performance musical de Hozier. No que toca aos apresentadores, Keighley está muito bem&nbsp;...</p></div>
            </div>
        </a><a href='https://www.techtudo.com.br/dicas-e-tutoriais/2022/12/como-assistir-ao-the-game-awards-2022.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como assistir ao The Game Awards 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm4wmLjW81z1bBgUz7p1LWBMY4ReSk_EcQ9RbCU24l8f4LsFkSnY8TMKuCB6SrByDh5skHo1KG" alt="Como assistir ao The Game Awards 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Premiação anunciou indicados das categorias no dia 14 de novembro e TechTudo fez parte do júri técnico para escolhê-los; confira o passo a passo para&nbsp;...</p></div>
            </div>
        </a><a href='https://br.financas.yahoo.com/noticias/the-game-awards-2022-saiba-o-que-esperar-e-como-assistir-a-cerimonia-ao-vivo-223343453.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022: saiba o que esperar e como assistir a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWKXaqmq5Iam9hEOAxSDMUrmXa6ivf_AYI1tSij2uJ378PF21_M0KBqv2G64B6DuRDY-aCY15q" alt="The Game Awards 2022: saiba o que esperar e como assistir a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os jogos Elden Ring, God of War Ragnarok, Stray e Immortality são alguns dos favoritos a faturar os prêmios.</p></div>
            </div>
        </a><a href='https://www.theenemy.com.br/cobertura-em-tempo-real/the-game-awards-2022-em-tempo-real'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cobertura em Tempo Real - The Game Awards 2022 | The Enemy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqLq17RDR58LKUbeivVcB1GkjinhzPXMv3JO2G6I478aviCBVfhPfiR38gKY_iR7sKmjTvctM_" alt="Cobertura em Tempo Real - The Game Awards 2022 | The Enemy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Enemy - Games, Esports e Tecnologia - Confira as principais notícias, reviews, artigos, listas e entrevistas.</p></div>
            </div>
        </a><a href='https://jovemnerd.com.br/nerdbunker/the-game-awards-2022-assista-aqui/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Game Awards 2022: acompanhe ao vivo - NerdBunker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRcxTejYE9UJt48kNb7mxDm0iUeiQcjnlzCktl57710W6mXqomvsNQtxxzucv2LxDlMR8GB0Z7" alt="The Game Awards 2022: acompanhe ao vivo - NerdBunker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com apresentação de Geoff Keighley, criador do TGA, a cerimônia terá participações de Pedro Pascal, Bella Ramsey, Troy Baker, Ashley Johnson, entre outros nomes&nbsp;...</p></div>
            </div>
        </a><a href='https://salaodejogos.net/acompanha-o-the-game-awards-2022-aqui-no-nosso-site/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Acompanha o The Game Awards 2022 aqui no nosso site</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPJO0eqYeO6YKPnHTdl3eEQtly1a3gmKNCPgKG5_-lvW-chFJ-ONw6LdaJFbhbH6DYIgmpeYQl" alt="Acompanha o The Game Awards 2022 aqui no nosso site" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os The Game Awards 2022 acontecem a partir das 00h30 deste dia 09 de dezembro, com a apresentação de Geoff Keighley onde vão ser revelados os vencedores de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}