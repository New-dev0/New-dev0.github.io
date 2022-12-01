import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sporting  Farense</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sporting  Farense"/>
        <meta name="description" content="Trending News about Sporting  Farense" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sporting  Farense</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/NNH/2022/Sportingfarense.JPG" alt="Sporting  Farense"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-30/taca-da-liga-sporting-farense-direto/966681'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting-Farense DIRETO</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzL_hK7CJgp3F4SecV1lW0C2XIhciwCi63BqGwjYFeB9Cvm_jUrmg0Ga-608ROYhWCj3_Ab2zB" alt="Sporting-Farense DIRETO" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sporting e Farense esgrimem forças esta noite na estreia de leões e algarvios na Taça da Liga. A partida, que faz parte do Grupo B da competição (no qual&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/1a-liga/sporting/noticias/paulinho-bisa-no-sporting-farense-em-apenas-dois-minutos-veja-os-golos-15407933.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paulinho bisa no Sporting-Farense em apenas dois minutos: veja os ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQySbRjbOAblwXxBkfU8FYKThkG95NPbxHdZgjaWPGRtNA0Fu9F_kfk8uNiFNgy7JDMBmP2e728" alt="Paulinho bisa no Sporting-Farense em apenas dois minutos: veja os ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minuto 20: Marsà abriu em Nuno Santos, o ala toca de primeira e Trincão na esquerda encontra Paulinho para o 1-0. Boa finalização do dianteiro leonino;&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/liveblogs/sporting-defronta-farense-em-alvalade-para-a-estreia-dos-leoes-na-taca-da-liga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting-Farense. Paulinho marcou dois golos em dois minutos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYZix4IitRw7JwuAJzB0IdDyDq5nRmulvFJDAzOLcFlvy8avpLikK3tOOSIeJOXr59yrq00HS5" alt="Sporting-Farense. Paulinho marcou dois golos em dois minutos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Termina a partida. O Sporting vence o Farense por 6-0. Paulinho por duas vezes, Edwards, Pedro Gonçalves, Arthur e Mateus Fernandes fizeram os tentos da goleada&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/taca-da-liga/sporting/taca-da-liga-sporting-farense-6-0-cronica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: Sporting-Farense, 6-0 (crónica)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSu8mWEQmb6EqF6VNzGMS6nON42OyxFw5wkAebMP2tMWDLGuLCnTr4DrXlX8pLR8AcJvQLZgHR1" alt="Taça da Liga: Sporting-Farense, 6-0 (crónica)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vestidos de branco, os rapazes de Ruben Amorim apresentaram-se com fome de bola em Alvalade e, depois dezassete dias sem competição, golearam o Farense com&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/sporting-goleia-secundario-farense-na-estreia-na-taca-da-liga-15408324.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting goleia &#39;secundário&#39; Farense na estreia na Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSz5ec3YPpAjuNXXHkHYyBz6GRDl-5nxo_lbUPSIiy9erwe1TXSUFqkCYUkN0CCWL945rEHRHbe" alt="Sporting goleia &#39;secundário&#39; Farense na estreia na Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dois golos de Paulinho abriram caminho para goleada do Sporting na receção ao Farense (6-0), no jogo inaugural do Grupo B da Taça da Liga.</p></div>
            </div>
        </a><a href='https://desporto.sapo.pt/futebol/taca-da-liga/artigos/farense-sporting-conheca-os-onzes-que-vao-estar-em-campo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting-Farense: Conheça os onzes que vão estar em campo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjAAmEHzZvKpV_Pla52hS3aPhV04aDkwNAx8k0utWZfBmYzmbzzd1YDITyvxESgFhrUy8Ob-Fq" alt="Sporting-Farense: Conheça os onzes que vão estar em campo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipa inicial: Ricardo Velho, Muscat, Marcos Paulo, John Velasquez, Rui Costa, Cristian, Claúdio Falcão, Abner, Talocha, Marco Matias e Vítor Gonçalves.</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/marsa-e-essugo-no-onze-do-sporting-diante-do-farense-15407458.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marsà e Essugo no onze do Sporting diante do Farense</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGsjfx6r8dgZWsxAL7455mek5fm1ukuo65_5UnSweYp-6p3ZP_nkKP0SVgqHWljHHGgR2rDJlM" alt="Marsà e Essugo no onze do Sporting diante do Farense" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sporting defronta esta quarta-feira, às 20.45 horas, o Farense, em jogo a contar para a Taça da Liga.</p></div>
            </div>
        </a><a href='https://www.tsf.pt/desporto/conheca-os-onzes-de-sporting-e-farense-15395567.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em duelo de leões, os lisboetas ganharam aos algarvios. Sporting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnNshpTXLHFblAXOTx-e642WRKhoCeVIFOuFwZb1yXBmbM0CDPS4VcYCmqzB5fOaybO59btgWU" alt="Em duelo de leões, os lisboetas ganharam aos algarvios. Sporting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os verde e brancos iniciaram a caminhada rumo à revalidação do título da Taça da Liga, que lhe pertence há duas edições consecutivas, com uma goleada frente&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/futebol-nacional/sporting-goleia-secundario-farense-na-estreia-na-taca-da-liga_d1450794'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting goleia `secundário` Farense na estreia na Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBsZ5bzqSlqQhkRb3AnJ4BYLnkVeq4sFfyUngn7zpoMbNeHsImfpc7xEMqnEqOt_7Kp6o5BsAm" alt="Sporting goleia `secundário` Farense na estreia na Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Sporting entrou a vencer na edição 2022/2023 da Taça da Liga em futebol, ao golear na receção ao `secundário` Farense, por 6-0, no jogo inaugural do Grupo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2124192/eis-os-onzes-mudados-de-sporting-e-farense-para-a-taca-da-liga'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eis os onzes (mudados) de Sporting e Farense para a Taça da Liga</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTW-uPQTkefKkxdE0VymUdHb0vvUQbd68DNuwThqG-NEhNC7KY-iWPdAmy-ZNFk-YZbXWYOQmWU" alt="Eis os onzes (mudados) de Sporting e Farense para a Taça da Liga" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A equipa de arbitragem será comandada por Nuno Almeida, com o auxílio de André Campos, Pedro Felisberto e Marcos Brazão. O VAR será da responsabilidade de Bruno&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}