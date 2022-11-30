import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve comboios</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve comboios"/>
        <meta name="description" content="Trending News about Greve comboios" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve comboios</h1>
            <Image width={800} height={500} src="https://eco.imgix.net/uploads/2022/11/cropped-porto38.jpg?mark64=aHR0cHM6Ly9lY28uaW1naXgubmV0L0VDT193YXRlcm1hcmsucG5nP2ZtPXBuZw%3D%3D&markscale=33&markalign=center,left&w=1200" alt="Greve comboios"/>
            <h3>Recent News</h3>
            <a href='https://eco.sapo.pt/2022/11/29/ha-greve-de-comboios-amanha-conheca-os-servicos-minimos-na-cp-e-fertagus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Há greve de comboios amanhã. Estes são os serviços mínimos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzo9TWPkjee88o1o8HE0wREGGdJj8Ji1jf5Oibma_0b1xn1Ui00GbZxoKMACn2bIodcD-t323k" alt="Há greve de comboios amanhã. Estes são os serviços mínimos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Greve de 24 horas de trabalhadores da CP e da Infraestruturas de Portugal, que reivindicam prémio para mitigar efeito da inflação, só garante serviços&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/nacional/greve-vai-afetar-circulacao-de-comboios-em-todo-o-pais-esta-quarta-feira-15397924.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve vai afetar circulação de comboios em todo o país esta quarta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVM188K4ZjU_L792_hV4wtDtW8mTOYMB0JRyzzZGg8WUiOXQaE7g_87hUP_InaWy6VF1mW7Ssw" alt="Greve vai afetar circulação de comboios em todo o país esta quarta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A CP informou que, devido a greve convocada por organizações representativas dos trabalhadores, preveem-se perturbações na circulação de comboios,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodominho.pt/2022/11/29/circulacao-comboios-afetada-por-greve-cp-ip-de-24-horas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Circulação de comboios afetada por greve de 24 horas - DM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxm_DpfdrEfd4KAPJbZjb7NYiiJu4eisLyk7EvTOU9OfBH2fH-DwjNHe5K6bvrcq_60gZWZHMg" alt="Circulação de comboios afetada por greve de 24 horas - DM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A circulação dos comboios vai ser afetada esta quarta-feira, 30 de novembro. Em causa está uma greve dos trabalhadores da CP – Comboios de Portugal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.algarveprimeiro.com/d/perturbacoes-na-circulacao-de-comboios-por-motivo-de-greve/48068-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Perturbações na circulação de comboios por motivo de greve</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3iroC9MHRjwktOLvNRvxN-74iaumFmR86NNO3P6RSJ4i7s_pS4M1J1aUNxwBs4XxeVcr21P0E" alt="Perturbações na circulação de comboios por motivo de greve" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos clientes que já tenham bilhetes adquiridos para viajar em comboios dos serviços Alfa Pendular, Intercidades, Internacional, Interregional e Regional, a CP&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/29/servico-da-fertagus-com-perturbacoes-na-quarta-feira-devido-a-greve-na-infraestruturas-de-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serviço da Fertagus com perturbações na quarta-feira devido a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSINbL2x9EZei5bD1X0WNZcFwkm09whzrqz-OP5mH6yg7awaR3TbCECmQtkZtaazwOYHwHvsXe0" alt="Serviço da Fertagus com perturbações na quarta-feira devido a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Fertagus, que liga Lisboa e Setúbal por comboio, “prevê poder realizar 25% da sua oferta normal de dia útil” na quarta-feira, devido a uma greve na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vozdaplanicie.pt/index.php/noticias/comboios-trabalhadores-da-cp-em-greve-e-perturbacoes-na-circulacao-em-todo-o-pais'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trabalhadores da CP em greve exigem compensação para perda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbjJhRuF54GpUipCstW5cKoWMBxZ6kqsUJQeDhnTCdf9nlrW_3si5CncofO8ipkny68hT9snb8" alt="Trabalhadores da CP em greve exigem compensação para perda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Comboios de Portugal (CP) informa que, devido à greve dos trabalhadores da CP, estão previstas perturbações na circulação de comboios em todo o País,&nbsp;...</p></div>
            </div>
        </a><a href='https://bragatv.pt/trabalhadores-da-cp-vao-fazer-greve-de-24-horas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trabalhadores da CP vão fazer greve de 24 horas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFa_GCD17YSL3vSJ5TcnwQbnCl6SZ5pb633mIzq_wRtBWpi0gN5XdXLGUEmkekJ0e9NJQaGPqc" alt="Trabalhadores da CP vão fazer greve de 24 horas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os Comboios de Portugal anunciaram que, devido à greve, haverá perturbações de circulação com “possível impacto nos dias anterior e seguinte ao período de greve&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}