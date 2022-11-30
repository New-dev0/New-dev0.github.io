import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Santa Clara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Santa Clara"/>
        <meta name="description" content="Trending News about Santa Clara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Santa Clara</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/NNH/2022/SantaClaraOliveirenseTacaLiga.jpg" alt="Santa Clara"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-29/taca-da-liga-santa-clara-salva-derrota-frente-a-oliveirense-mas-marca-passo-veja/966612'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santa Clara salva derrota frente à Oliveirense mas marca passo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-fEgQ-4vx1v5ga4_TsfYvLMQsLG-CgSx_nLO9_I_0g61_lGQk7rpy-Tpnjdt8Mcd34Z09FVo_" alt="Santa Clara salva derrota frente à Oliveirense mas marca passo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Santa Clara, que até vivia moralizante momento no Campeonato, antes da paragem para o Mundial, voltou a marcar passo nesta Taça da Liga, mesmo salvando&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/santa-clara-e-oliveirense-empatam-com-golo-ao-minuto-90-15401966.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santa Clara e Oliveirense empatam com golo ao minuto 90</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZV5Ht2RZRjidyE0rDjCeRjOutL9GbfS7rh0yqXvNmdSnjya9tWB9EpZuTQxXN-1kMWKTvPrej" alt="Santa Clara e Oliveirense empatam com golo ao minuto 90" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Santa Clara, e o Oliveirense empataram 1-1, no estádio de São Miguel, em Ponta Delgada, num jogo equilibrado da terceira jornada do grupo G da Taça da Liga.</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/11/29/santa-clara-empata-e-complica-continuidade-na-taca-da-liga/310063/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santa Clara empata e complica continuidade na Taça da Liga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2Ozu1hwuT785tpRrD49W_jxMyc-pJOsx5GR0ox9ttGYPSqxsLyZS0hJGfqfCp0cZTwxoo6gQv" alt="Santa Clara empata e complica continuidade na Taça da Liga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com empate frente à Oliveirense, os açorianos evitaram a segunda derrota na prova, mas complicaram as contas do apuramento.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2123682/santa-clara-marca-em-cima-dos-90-e-evita-nova-derrota-na-taca-da-liga'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santa Clara marca em cima dos 90 e evita nova derrota na Taça da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTo9Rw9PIge-EDIKqjY3FkdxcyUuC5Cb7oB9AOtQOU4Oi44lij4r341Cb1Jfc-ojkj1j4zor6Vf" alt="Santa Clara marca em cima dos 90 e evita nova derrota na Taça da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Santa Clara e Oliveirense empataram nesta terça-feira a um golo, em jogo da jornada três da fase de grupos da Taça da Liga. O emblema da II Liga esteve&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/santa-clara/taca-da-liga-santa-clara-garante-empate-com-golo-aos-90m'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Santa Clara garante empate com golo aos 90m</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcpAy4WdVYdT-bTrWGXs90y3OTKZu4FvDYRHA-1PV4D3g_jgLiTs8udW6yROhzdhROJNB0nkrJ" alt="Taça da Liga: Santa Clara garante empate com golo aos 90m" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Santa Clara empatou a uma bola na receção à Oliveirense, em jogo da terceira jornada do Grupo G da Taça da Liga. A equipa do segundo escalão adiantou-se&nbsp;...</p></div>
            </div>
        </a><a href='https://www.futebol365.pt/artigo/290176-taca-da-liga-santa-clara-e-oliveirense-empatam-a-uma-bola-nos-acores/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Santa Clara e Oliveirense empatam a uma bola nos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNy00OIJuoOzB8BDt0FdxUs8AIHgitPNxYW7hEXro4TIRmnE9NRfYt5RDmBmgAog93VIfNye9K" alt="Taça da Liga: Santa Clara e Oliveirense empatam a uma bola nos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Santa Clara e Oliveirense não foram além de um empate 1-1, no estádio de São Miguel, em jogo da terceira jornada do grupo G da Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.acorianooriental.pt/noticia/mario-silva-quer-equipa-ambiciosa-para-ganhar-345081'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mário Silva quer equipa ambiciosa para ganhar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyydfxvOOK20egasmm3lc6873gXL4wcytU_1Js8KR6kh3crUAef3mpR5xwJxhonoTP2A8-0FQw" alt="Mário Silva quer equipa ambiciosa para ganhar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Decorridas duas jornadas da competição, os encarnados de Ponta Delgada ocupam o quinto e último lugar do Grupo G sem qualquer ponto conquistado, ao passo que o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}