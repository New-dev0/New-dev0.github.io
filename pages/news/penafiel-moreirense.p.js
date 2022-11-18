import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Penafiel Moreirense</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Penafiel Moreirense"/>
        <meta name="description" content="Trending News about Penafiel Moreirense" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Penafiel Moreirense</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_17_23_37_19_2063443.png" alt="Penafiel Moreirense"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/futebol/futebol-nacional/allianz-cup/detalhe/jogo-mais-longo-do-ano-penafiel-moreirense-acabou-aos-9072'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo mais longo do ano? Penafiel-Moreirense acabou aos... 90&#39;+72</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJMuXipfdWRzrthvIF4eYnOCVm5ENUPLMBA3pRMfGKy7PFNVAiWwQcdpNerPKY9R15T49TxOmN" alt="Jogo mais longo do ano? Penafiel-Moreirense acabou aos... 90&#39;+72" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duelo da Taça da Liga esteve duas vezes suspenso devido a problemas na iluminação do estádio 25 de abril.</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/penafiel-moreirense-interrompido-por-falha-de-luz-15363341.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Penafiel-Moreirense interrompido por falha de luz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgZbZI-OZ7Fya4JiC_pshfhsIP6_1NGcR0zpsiKkqq9qqdw3T1UU6KuSpBhrnihKHBGBIcoz7j" alt="Penafiel-Moreirense interrompido por falha de luz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O encontro da Taça da Liga entre o Penafiel e o Moreirense foi interrompido por duas vezes devido a uma falha de iluminação.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2115462/penafiel-moreirense-interrompido-por-falta-de-iluminacao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Penafiel-Moreirense interrompido por falta de iluminação</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZ3KAXCy_s_8CP-vbMMm8Z_nYu4en_dcNTlgUhgEPPpNJjKQwvS_0Y431b8dMVrzKKzYBbiX-7" alt="Penafiel-Moreirense interrompido por falta de iluminação" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Primeiro duelo da presente edição da Taça da Liga foi suspenso aos 59 minutos.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-17/taca-da-liga-o-apagao-no-arranque-da-taca-da-liga-penafiel-e-moreirense-ficaram/965168'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O apagão no arranque da Taça da Liga: Penafiel e Moreirense ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPhFuW6XiyQHQ6ImYZBBh5eZNFR7KLtoyY2kEg6Ilf5PfPdEu81bW6l3oHdzVdBP5dDxoS1XN4" alt="O apagão no arranque da Taça da Liga: Penafiel e Moreirense ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo entre Penafiel e Moreirense, que marca o arranque da Taça da Liga em 2022/2023, ficou marcado por uma prolongada interrupção, originada por uma&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-nacional/2022/11/18/moreirense-derrota-penafiel-em-partida-com-dois-apagoes/308543/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moreirense derrota Penafiel em partida com dois apagões ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7iPVVw3ZE3EQVOvrqpYvLFQO1MHK95X2_abJ2-VEioqXOJ6BAS9cWM9LOpb2Ht3oDBcT7WTi2" alt="Moreirense derrota Penafiel em partida com dois apagões ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Moreirense venceu o Penafiel, por 2-1, com reviravolta, em jogo da primeira jornada do grupo C da Taça da Liga. Pelos “cónegos” marcaram Steven Petkov e&nbsp;...</p></div>
            </div>
        </a><a href='https://portocanal.sapo.pt/noticia/315127'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falha a luz no Penafiel-Moreirense</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCwNYogIK1aiXS5DZh7lgUBocMeVMW3-v3bLKwtUn91uC4k8BT04FQ4wSkTPUS1JxG_1LUIftk" alt="Falha a luz no Penafiel-Moreirense" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O encontro desta quinta-feira, para a Taça da Liga, opôs as formações de Penafiel e Moreira de Cónegos. O jogo já foi interrompido por duas vezes devido a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.imediato.pt/os10jogadorescommaisjogospelopenafielnatacadaliga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Os 10 jogadores com mais jogos pelo Penafiel na Taça da Liga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDVoOp-j8WmNdjOqJoszT-Yoxk4nLKi-sYtZ1SdsAgS6T7nuKKratGcD8emJ1n1ftKVTDgDVly" alt="Os 10 jogadores com mais jogos pelo Penafiel na Taça da Liga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prestes a dar o pontapé de saída da edição 2022-23 da Taça da Liga (esta quinta-feira às 20:30, na receção ao Moreirense), o Futebol Clube de Penafiel vai&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}