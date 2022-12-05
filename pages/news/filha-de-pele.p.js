import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Filha de pele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Filha de pele"/>
        <meta name="description" content="Trending News about Filha de pele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Filha de pele</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/11/30/615x300/1_pele-22100345.jpg" alt="Filha de pele"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/social1/2022/12/15134433-o-que-pele-fez-com-a-filha-sandra-filha-de-pele-teve-cancer.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O QUE PELÉ FEZ COM A FILHA SANDRA? Filha de Pelé teve ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJ2DCRhp5Kan9_7V0TN3LFCMknpWu2TUFICMs_ikxPAs_v3dsiUa-72KEkBS2YbPKIj4L9WvmR" alt="O QUE PELÉ FEZ COM A FILHA SANDRA? Filha de Pelé teve ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O rei do futebol, Pelé, está com um estado de saúde preocupante para os fãs. Internado desde 29 de novembro, ele não responde mais à quimioterapia,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodocentrodomundo.com.br/a-tragedia-de-sandra-a-filha-que-pele-rejeitou-e-que-morreu-de-cancer-chamando-pelo-pai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A tragédia de Sandra, a filha que Pelé rejeitou e que morreu de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFWsTYQOKPjxZqEDlDW2reqGN4FEeQD2QnMA_UD9QWXOyHxjGxsOK4rh8fWF7iLWhT4JtVnhBA" alt="A tragédia de Sandra, a filha que Pelé rejeitou e que morreu de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pelé, diz a Folha, não responde mais à quimioterapia que fazia desde setembro do ano passado, quando foi operado de um câncer de intestino.</p></div>
            </div>
        </a><a href='https://diariodonordeste.verdesmares.com.br/jogada/quem-e-sandra-filha-de-pele-nao-reconhecida-pelo-jogador-1.3308249'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Sandra, filha de Pelé não reconhecida pelo jogador</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqtNS1OArJHxbGmh65xLzVwuDRaw0etiFiVbFwLwQt4KOoBb9JYxQZrHWlgKcNqCWXk3zNH0Ep" alt="Quem é Sandra, filha de Pelé não reconhecida pelo jogador" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mesmo após a comprovação de um exame de DNA, o ex-jogador Pelé, de 82 anos, rejeitou a paternidade de Sandra Regina Machado, no início da década de 1990.</p></div>
            </div>
        </a><a href='https://www.contioutra.com/conheca-a-historia-de-sandra-regina-a-filha-que-pele-rejeitou-e-que-faleceu-chamando-pelo-pai/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conheça a história de Sandra Regina, a filha que Pelé rejeitou e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdP_6wC_IxA-30uFmny8fkx7wUraM0N2021BF0lRxZUA7hw28POMqUq9mvhILiDSBdJhl56dP7SA" alt="Conheça a história de Sandra Regina, a filha que Pelé rejeitou e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A trajetória de Edson Arantes do Nascimento, o &#39;Rei&#39; Pelé, é marcada por muitas conquistas e reconhecimento, mas também por muitas polêmicas.</p></div>
            </div>
        </a>
        </Template></>;
}