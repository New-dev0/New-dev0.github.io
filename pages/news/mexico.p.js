import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mexico</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mexico"/>
        <meta name="description" content="Trending News about Mexico" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mexico</h1>
            <Image width={800} height={500} src="https://media.moneytimes.com.br/uploads/2022/05/img-1-ubernews2022.jpg" alt="Mexico"/>
            <h3>Recent News</h3>
            <a href='https://www.moneytimes.com.br/uber-e-apps-de-delivery-oferecem-beneficios-para-motoristas-no-mexico-antes-de-regulacao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uber e apps de delivery oferecem benefícios para motoristas no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQilkYSneED8FMIjXfLduYnZyJq5H6fu8_WcMMdcbS6U2lxRQ_FnRrvJ_MpEuTstZszpir011dD" alt="Uber e apps de delivery oferecem benefícios para motoristas no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As empresas disseram nesta quarta-feira em um comunicado assinado em conjunto por grupos de direitos dos trabalhadores.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/noticias/mundo/turista-e-agredida-e-ofendida-ao-subir-em-piramide-proibida-no-mexico,a12539caa27b63a03c8d0c0d3a6b4fd2p6y8auui.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turista é agredida e ofendida ao subir em pirâmide proibida no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQy_E306JISBCkZWZHpil0S0DEN3heH2L92-DSolzNgLEUfDMGM-xxi5XeB0czECYCKlvWZUhRT" alt="Turista é agredida e ofendida ao subir em pirâmide proibida no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mulher desrespeitou barreira e subiu as escadas de um templo em Chichén Itzá ... Uma turista foi xingada, empurrada, teve o cabelo puxado e até recebeu um banho&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.r7.com/internacional/turista-e-agredida-apos-subir-degraus-de-piramide-maia-no-mexico-23112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turista é agredida após subir degraus de pirâmide maia no México</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRf6fKTQJo8DrgYTYfsHGr9Y94HdAacwc3jErsTM6lMSmCy2uvGmUzwa1Hh-Va-aVGkSRA1NvdI" alt="Turista é agredida após subir degraus de pirâmide maia no México" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mulher foi vaiada, teve os cabelos puxados e recebeu garrafadas de água ao descer do monumento histórico, em Yucatán.</p></div>
            </div>
        </a><a href='https://hugogloss.uol.com.br/mundo/mulher-escala-e-danca-em-piramide-proibida-no-mexico-revolta-publico-e-e-agredida-assista/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulher escala e dança em pirâmide proibida no México, revolta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSBD6R0vAps6UbgRKq161n4tzzyMtBJ4BITAZ7sDvlGzvMtXwxZ8_DJ3ZoeO7Z8rVmsxyxeQxWd" alt="Mulher escala e dança em pirâmide proibida no México, revolta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Imagens de uma mulher escalando uma pirâmide maia, no México, viralizaram nas redes sociais. No vídeo, postado nesta segunda-feira (21), a moça – que não&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prensalatina.com.br/2022/11/23/presidente-chileno-chega-ao-mexico-para-uma-visita-de-estado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Presidente chileno chega ao México para uma visita de Estado ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Presidente chileno chega ao México para uma visita de Estado ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cidade do México, 22 nov (Prensa Latina) O presidente chileno Gabriel Boric chegou hoje ao México para iniciar uma visita de Estado amanhã para discutir&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/mundo/noticia/2022/11/jornalista-pedro-pablo-kumul-e-17o-assassinado-no-mexico-este-anp.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jornalista Pedro Pablo Kumul é o 17º assassinado este ano no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRi8J7Jufh60A4ubJ4cBgKDk_xmyWIdxiPYYxBHYmDrB9F_iTTdBc6dsWEmhcR51Z3iLsbpLNG4" alt="Jornalista Pedro Pablo Kumul é o 17º assassinado este ano no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O assassinato do repórter e radialista Pedro Pablo Kumul na segunda-feira em El Castillo, cidade no estado mexicano de Veracruz, foi confirmado pelo portal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maisgoias.com.br/turista-e-agredida-e-expulsa-apos-subir-em-piramide-no-mexico-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turista é agredida e expulsa após subir em pirâmide no México; vídeo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS91DFNfnvhgY3uXwd8bbVTfMOtPYhPByiCLQnZQdP3Kgv38vMDf8nvcUQccQIvYJc7-HrsXo96" alt="Turista é agredida e expulsa após subir em pirâmide no México; vídeo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma turista subiu os mais de 90 degraus do Templo de Kukulcán, pirâmide localizada na zona arqueológica de Chichén Itzá, na península mexicana de Yucatán.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/boa-viagem/noticia/2022/11/turista-e-expulsa-e-agredida-apos-subir-na-piramide-de-chichen-itza-no-mexico-video.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Turista é expulsa e agredida após subir na pirâmide de Chichén Itzá ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTsY2sfb4kfPFbUdDI9b_-TLc58n9NoPvqKA0hMU9WjZG6BLNu2CVUeULfla5zsfsIIY4esWu-" alt="Turista é expulsa e agredida após subir na pirâmide de Chichén Itzá ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Monumento é considerado Patrimônio da Humanidade pela Unesco; autoridades locais informaram que não houve danos na zona arqueológica localizada em Yucatán.</p></div>
            </div>
        </a><a href='https://istoe.com.br/video-mulher-e-vaiada-e-expulsa-de-sitio-arqueologico-por-escalar-piramide-protegida-no-mexico/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vídeo: Mulher é vaiada e expulsa de sítio arqueológico por escalar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSucCofI6dpuL7ON0DsGYIvVIJSmz5rK5UdqcYoNbPc5lViZh91AR6yt5o_O8hom_3OlIIRTREU" alt="Vídeo: Mulher é vaiada e expulsa de sítio arqueológico por escalar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um vídeo que está circulando nas redes sociais mostra uma mulher que ultrapassou uma barreira de proteção e escalou o templo de Kukulcán, localizado no&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}