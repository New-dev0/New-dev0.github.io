import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aniversário do Flamengo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aniversário do Flamengo"/>
        <meta name="description" content="Trending News about Aniversário do Flamengo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aniversário do Flamengo</h1>
            <Image width={800} height={500} src="https://mundorubronegro.com/wp-content/uploads/2022/11/Captura-de-tela-2022-11-15-155731.png" alt="Aniversário do Flamengo"/>
            <h3>Recent News</h3>
            <a href='https://mundorubronegro.com/flamengo/craques-de-hoje-e-do-passado-se-unem-para-desejar-feliz-aniversario-ao-flamengo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Craques de hoje e do passado se unem para desejar feliz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRIL45gW5tlJnklvv0wAq0aAppID38U2hquVOyEo6IiUPRYU7whE_EgcZ5aEG2fjJh0LM2NhhOQ" alt="Craques de hoje e do passado se unem para desejar feliz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De Ronaldinho a Thomas Muller, comunidade do futebol se reúne para parabenizar o Flamengo pelo aniversário de 127 anos do clube.</p></div>
            </div>
        </a><a href='https://colunadofla.com/2022/11/flamengo-completa-127-anos-nesta-terca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flamengo completa 127 anos nesta terça</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGxT_ldzE0mx1iRfA1HH2ZiLBFjIcXYfHCLWyRAOAfbFLOsHJN-6kjVS85w3aBGdg6nBJmmEyF" alt="Flamengo completa 127 anos nesta terça" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dia será de muitas comemorações e homenagens na Gávea, sede do Flamengo O Rio de Janeiro amanheceu vermelho e preto! Tricampeão da Libertadores da América&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fogaonet.com/noticias-do-botafogo/dirigente-exalta-50-anos-botafogo-6-x-0-flamengo-maracana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dirigente exalta 50 anos de Botafogo 6 x 0 Flamengo no aniversário ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShz2Bt01kTdo0WTx5IZf98Ql-2kJgLk-hIGm869pRlH-3GEuHghAZ-rSk3W0w6ZfDIRbtuZqtx" alt="Dirigente exalta 50 anos de Botafogo 6 x 0 Flamengo no aniversário ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goleada histórica do futebol brasileiro, Botafogo 6 x 0 Flamengo, pelo Campeonato Brasileiro de 1972, completa 50 anos nesta terça-feira (15/11). A data ...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/flamengo/desejo-do-flamengo-gerson-parabeniza-clube-pelo-aniversario,5bb448380d84b884270c853ce5c2fda3cfq79hpi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Desejo do Flamengo, Gerson parabeniza clube pelo aniversário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZRcwucXcF4wM8TW4x0mOMOtUC_N5njZ1YYXz5gV-_9GzdHcEpwwo3DaKZZM7wYgniVQ-iGzD-" alt="Desejo do Flamengo, Gerson parabeniza clube pelo aniversário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meia vem sendo monitorado pela diretoria rubro-negra e pode ser um dos reforços para a próxima temporada.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/flamengo/2022/11/15/noticia_flamengo,3979806/flamengo-faz-aniversario-com-renovacoes-estadio-e-planejamento-na-mira.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flamengo faz aniversário com renovações, estádio e planejamento ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQO58zxt44cZ4MJBqzmolI2YXt-5jlBBo5cXT7v7s4U9d3GD74LfDQAZWcmjN1uKYfhQhX3Btdo" alt="Flamengo faz aniversário com renovações, estádio e planejamento ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de ser campeão da Copa do Brasil e da Libertadores, o clube projeta renovações, estádio próprio, Carioca, Mundial, entre outros.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/15/muller-parabeniza-fla-por-aniversario-e-libertadores-e-presenteia-a-vidal.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Muller parabeniza Fla por aniversário e Libertadores e presenteia A ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5PFL8bX-uktp-wkXCbOwJvFVCm4Oy8O9j_Un266-TsHuMijcMVIHH6awF-0GE4qVrq_ntEJGA" alt="Muller parabeniza Fla por aniversário e Libertadores e presenteia A ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Flamengo completa 127 de história hoje e recebeu felicitações de uma figura ilustre: Thomas Müller. O atacante do Bayern de Munique gravou um vídeo&nbsp;...</p></div>
            </div>
        </a><a href='https://diariodofla.com.br/homenagem-merecida-no-dia-do-aniversario-do-flamengo-clube-inaugura-busto-do-lico-na-gavea/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homenagem merecida! No dia do aniversário do Flamengo, clube ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSV5CIq9KTjuZrPhfuM6Ved4Ye_9QoR_6lMDqKbmbZNQcfveFCyvTqpEzJP3eFT6ljG-sj0462d" alt="Homenagem merecida! No dia do aniversário do Flamengo, clube ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Flamengo aproveitou a celebração do aniversário de 127 anos, que completa nesta terça-feira (15/11), para homenagear um ídolo do clube.</p></div>
            </div>
        </a><a href='https://sportbuzz.uol.com.br/noticias/futebol/127-anos-de-flamengo-relembre-principais-conquistas-do-fla-em-seu-aniversario.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>127 anos de Flamengo: relembre as principais conquistas do Fla ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaBD5qCjwoB0232zavHosJbi-5ym98TP9pfM1gxizTCFJsGhCtR11dPbcCNmvB3OijtZBvu8pE" alt="127 anos de Flamengo: relembre as principais conquistas do Fla ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nos últimos anos, o Flamengo soma mais de 20 títulos expressivos conquistados em toda a sua história, e no dia do aniversário do clube, nada melhor que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}