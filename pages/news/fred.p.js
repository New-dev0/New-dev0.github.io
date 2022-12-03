import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fred</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fred"/>
        <meta name="description" content="Trending News about Fred" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fred</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/AjiexyQmHcVyeYOMqjGdqTJiCK0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/I/y/6P96zeRPmyQU76gsMAkA/whatsapp-image-2022-12-01-at-18.16.54.jpeg" alt="Fred"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/times/fluminense/noticia/2022/12/02/agora-diretor-do-fluminense-fred-diz-contem-comigo-nessa-missao-em-busca-de-grandes-titulos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Agora diretor do Fluminense, Fred diz: &quot;Contem comigo nessa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ08VruGNzplna_Aez8U7RpI5375NOXGOMk6_HMFrt9G1yCNUt7NhZ_Hi-X_-sZMX1jlPyVBDBN" alt="Agora diretor do Fluminense, Fred diz: &quot;Contem comigo nessa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ídolo tricolor faz postagem em rede social e fala pela primeira vez após voltar ao Flu.</p></div>
            </div>
        </a><a href='https://www.netflu.com.br/contem-comigo-nessa-missao-vitoriosa-em-busca-de-grandes-titulos-posta-fred-apos-volta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Contem comigo nessa missão vitoriosa em busca de grandes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1WZm2vwj5H37nPYSpTeRv46hnSV00uE1YhxC9FVOxP3HP8Hkfad4n3H-xNeUfvi2VnRk4KBcm" alt="“Contem comigo nessa missão vitoriosa em busca de grandes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O NETFLU reune as últimas notícias do Fluminense, calendário de jogos, aplicativo, contratações, alerta de gols, podcast e Loja do Fluminense. Acesse já!</p></div>
            </div>
        </a><a href='https://maquinadoesporte.com.br/futebol/idolo-historico-fred-volta-ao-fluminense-como-diretor-de-planejamento-esportivo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ídolo histórico, Fred volta ao Fluminense como diretor de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKXQQ1aSPGBMtrTDbzwrTe02xQ-KQMRUH1ceqln66IV878aG8StfNyjMA_bgKQp1uvLiM2w0ME" alt="Ídolo histórico, Fred volta ao Fluminense como diretor de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-jogador Fred, um dos maiores ídolos da história do Fluminense, foi anunciado, nesta quinta-feira (1º), como novo diretor de planejamento esportivo do&nbsp;...</p></div>
            </div>
        </a><a href='https://br.bolavip.com/fluminense/Em-busca-de...-Em-retorno-ao-Fluminense-Fred-faz-promessa-a-torcida-e-situacao-repercute-na-web-20221202-0162.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Em busca de...”; Em retorno ao Fluminense, Fred faz promessa à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqJr4qmmTYlLwR6Z_tqWhJnqsZN5XWnJpBlcK4ESOZXoeew2HmvYXE1sYDgbTcpjqTIN8H1Xh1" alt="“Em busca de...”; Em retorno ao Fluminense, Fred faz promessa à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ídolo, e agora diretor executivo do Clube, Fred se manifestou sobre a nova posição que exerce no clube.</p></div>
            </div>
        </a><a href='https://www.mktesportivo.com/2022/12/fred-retorna-ao-fluminense-e-assume-cargo-de-diretor-de-planejamento-esportivo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fred retorna ao Fluminense e assume cargo de diretor de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTl_eqthOGYocZ-ZEmH1siEVRH7UtxDxRz_CXMDICtGI6x4jAPevfh6os4lkj5-TR_WewZvOAaU" alt="Fred retorna ao Fluminense e assume cargo de diretor de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Fluminense anunciou o ex-jogador Fred como novo diretor de Planejamento Esportivo. Após concluir cursos de especialização, o ídolo tricolor será&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abcdoabc.com.br/brasil-mundo/noticia/idolo-fred-novo-diretor-planejamento-fluminense-diniz-assina-renovacao-179173'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ídolo Fred é novo diretor de Planejamento do Fluminense; Diniz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnVehbiso4ZXYz7_DulABecoYATGjU49dofm27CEULQdwMXbczQqXtr2mkf6JyKmHwHB92xjs8" alt="Ídolo Fred é novo diretor de Planejamento do Fluminense; Diniz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ex-jogador tirou a Licença B de Treinadores na CBF Academy.</p></div>
            </div>
        </a><a href='https://enfoco.com.br/esportes/fluminense-anuncia-retorno-do-idolo-fred-apos-aposentadoria-87937'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fluminense anuncia retorno do ídolo Fred após aposentadoria ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6Y1tp0WQGOLbHXyYVE8ZShFBsk8EUac4aqhlpwf68ef-O8Ya1EKG2NK1vgqDtA0hySRViitsr" alt="Fluminense anuncia retorno do ídolo Fred após aposentadoria ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele voltou! Ídolo e segundo maior artilheiro da história do Fluminense, Fred está de volta ao clube - agora com nova função.</p></div>
            </div>
        </a>
        </Template></>;
}