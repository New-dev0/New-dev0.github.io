import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Esclerose múltipla</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Esclerose múltipla"/>
        <meta name="description" content="Trending News about Esclerose múltipla" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Esclerose múltipla</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/31/2022/07/28/anitta-quer-vender-r-40-milhoes-so-este-ano-com-perfume-intimo-1659037564731_v2_615x300.jpg" alt="Esclerose múltipla"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/vivabem/noticias/redacao/2022/12/04/epstein-barr-virus-que-infectou-anitta-e-comum-e-pode-causar-mononucleose.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qual a relação entre o vírus que infectou Anitta e a esclerose múltipla?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8f1KfMpGg6BmaRA2AJLUJkmnE5EMZbuefEnotvtIJD91tkRW0eLJ1wBznLOEW4ZWUI_FF9Acf" alt="Qual a relação entre o vírus que infectou Anitta e a esclerose múltipla?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anitta disse que foi diagnosticada com o vírus Epstein-Barr há dois meses. A cantora.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/saude-e-bem-estar/2022/12/15134803-doenca-anitta-o-que-aconteceu-com-a-anitta-saiba-o-que-e-a-doenca-do-beijo-e-relacao-com-esclerose-multipla.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DOENÇA ANITTA: o que aconteceu com a ANITTA? Saiba o que é a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1Hak2ZGbtSAaMvMtc5brROtpIfrCtAJGuqbseFsL7QrWDeDMcX5wAFrbEpJpEa4qT62oS8yAo" alt="DOENÇA ANITTA: o que aconteceu com a ANITTA? Saiba o que é a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Anitta divulgou que foi diagnosticada com vírus que causa a doença do beijo e pode estar relacionado à esclerose múltipla.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/fama/2121139/esclerose-multipla-estes-famosos-assumiram-a-luta-contra-a-doenca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esclerose múltipla: Estes famosos assumiram a luta contra a doença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsqPqSwiBGvSZ_82GVbvY2nPseOEx0zSvqT1gd0vlmECvB-j0Y956EePx3O_5vAKnQhNvj7NcrDw" alt="Esclerose múltipla: Estes famosos assumiram a luta contra a doença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Christina Applegate, Selma Blair, Jack Osbourne ou a atriz brasileira Ana Beatriz Nogueira estão entre os nomes conhecidos que lidam com esta doença neurológica&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/12/04/impar/noticia/gravidez-esclerose-multipla-especie-estado-graca-2029993?ref=saude'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gravidez com esclerose múltipla: “Uma espécie de estado de graça”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTx0SmkJb2WfiWWCV5unz9ZWqQHDWugjwZeTcZQGPjhRVKqtxIPotgObu4aJ6HUwP4jT-INxZ5j" alt="Gravidez com esclerose múltipla: “Uma espécie de estado de graça”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Telma Santos e Tânia Quintalo sofrem com uma doença que afecta oito mil portugueses. No Dia Nacional da Pessoa com Esclerose Múltipla partilham a&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/saude/medicina/noticia/2022/12/anitta-revela-infeccao-por-virus-que-pode-causar-esclerose-multipla-entenda.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta revela infecção por vírus que pode estar associado à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5jXfseiZI81qe5sNvF00vdo4NPEx_5rHLabYQEs7qvKX8Djko5vPqiBMCodTf4K2HLUqKd8ff" alt="Anitta revela infecção por vírus que pode estar associado à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Epstein-Barr é conhecido por ser o agenda causador da mononucleose infecciosa ou &quot;doença do beijo&quot;</p></div>
            </div>
        </a><a href='https://www.jn.pt/nacional/disfuncoes-sexuais-ficam-por-tratar-na-esclerose-multipla-15427844.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disfunções sexuais ficam por tratar na Esclerose Múltipla</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeQDPKACHn8m_ZUEcOcPV4geLj46UT6QszCDMdQpSSmy_zy-q4e5zaNTUyJ1_FXr3TqYoW-rS2" alt="Disfunções sexuais ficam por tratar na Esclerose Múltipla" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doentes desvalorizam e não pedem ajuda. Clínicos devem dar relevância pela importância na saúde global.</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/diversao-e-arte/2022/12/5056607-anitta-conta-que-foi-diagnosticada-com-ebv-que-pode-causar-esclerose-multipla.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta conta que foi diagnosticada com EBV, que pode causar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVY5-DqjbIgY_kxxk152aIkE-hHLK1151yKan_5_4FAd4sYyEZd4bPnO0F6odAXGKGZYVJ7jiz" alt="Anitta conta que foi diagnosticada com EBV, que pode causar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A estrela revelou ter sido diagnosticada com a doença há dois meses e como a relação com Ludmila foi importante para ela se recuperar.</p></div>
            </div>
        </a><a href='https://averdade.com/a-solidariedade-deu-uma-nova-vida-a-hugo-magalhaes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A solidariedade deu uma &#39;nova vida&#39; a antigo bombeiro com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4ZyOoBBPhLZYMXpUC8AgrWhtfKrArAvjg1H8muZbkBEdJTNsciVu97pIKN0xD-9_aa8ftBVt6" alt="A solidariedade deu uma &#39;nova vida&#39; a antigo bombeiro com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ser bombeiro não foi uma herança familiar, mas sim o sonho de Hugo Magalhães, que se veio a concretizar aos 18 anos, quando ingressou no Quartel de&nbsp;...</p></div>
            </div>
        </a><a href='https://jovempan.com.br/entretenimento/famosos/anitta-revela-ter-contraido-virus-epstein-barr-que-pode-causar-esclerose-multipla.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta revela ter contraído vírus Epstein-Barr, que pode causar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjzmE0arUUo1BaCBbwNuyt6iZUs-wv9cQ2qfcEDWbhLrr9yTzUEc29NJe6NliznpFn-VF9o9HN" alt="Anitta revela ter contraído vírus Epstein-Barr, que pode causar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em participação no documentário “Eu”, produzido por Ludmila Dayer, em que a atriz trata sobre sua luta contra a esclerose múltipla, a cantora Anitta revelou&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dgabc.com.br/Noticia/3898526/anitta-revela-diagnostico-de-virus-que-pode-causar-esclerose-multipla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta revela diagnóstico de vírus que pode causar esclerose ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Anitta revela diagnóstico de vírus que pode causar esclerose ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anitta surpreendeu os fãs ao anunciar que recentemente foi diagnosticada com o vírus Epstein-Barr (EBV), que pode causar esclerose múltipla .</p></div>
            </div>
        </a>
        </Template></>;
}