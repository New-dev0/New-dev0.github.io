import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Segurança Social ciberataque</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Segurança Social ciberataque"/>
        <meta name="description" content="Trending News about Segurança Social ciberataque" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Segurança Social ciberataque</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=41957e70-0030-42e5-a032-498327cae73d&w=800&h=420&watermark=true&t=20221121115500" alt="Segurança Social ciberataque"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/sociedade/seguranca-social-foi-alvo-de-um-ciberataque-15372297.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segurança Social foi alvo de um ciberataque</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKhZVtzWUyybuQEFM6oYANcgIAxE_y-xYqiUucwSRufhVNXLRKUdI7BYA3IDQPl2WCImy8peK2" alt="Segurança Social foi alvo de um ciberataque" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segurança Social confirma ciberataque. Até ao momento, não foram apurados factos que permitam concluir &quot;ter havido acesso indevido a dados de cidadãos ou de&nbsp;...</p></div>
            </div>
        </a><a href='https://pplware.sapo.pt/internet/seguranca-social-foi-alvo-de-ciberataque-o-que-aconteceu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segurança Social foi alvo de ciberataque! O que aconteceu?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSu8Q9Fj0Ds46ceLlToSvJBsbrhcL6f1P7L3MqwINQs9CGVl5Zr2eSKov15Y1eiRFXbJ0bfuwim" alt="Segurança Social foi alvo de ciberataque! O que aconteceu?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segurança Social: &quot;não se apurou qualquer facto que permita concluir ter havido acesso indevido a dados de cidadãos ou de empresas&quot;</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/21/seguranca-social-alvo-de-ataque-informatico-pj-esta-a-avaliar-a-dimensao-dos-danos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segurança Social alvo de ataque informático. PJ está a avaliar a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX_JzMk-vm_n0FUlTBaAOAV1W728yYDNSr_FEEVivSfW9SW2l78Kzz0iY5cvf9JyoJHlf1XIzs" alt="Segurança Social alvo de ataque informático. PJ está a avaliar a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Polícia Judiciária já foi chamada a intervir e não divulga para já os danos que podem estar em causa e qual a informação acedida. A Segurança Social reúne&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/pais/ciberataque-a-seguranca-social-compromete-contas-de-funcionarios_n1448468'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ciberataque à Segurança Social compromete contas de funcionários</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT9sbSQkOGCc-GxM8EgXgxLTnzNgZAZTdy-_yJcDUhApJpRwEdvrSuE317VJWvDU5nxVhfSnz9B" alt="Ciberataque à Segurança Social compromete contas de funcionários" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Polícia Judiciária está a investigar o ciberataque desde a passada sexta-feira. Até ao momento, o trabalho dos investigadores não permite concluir que tenham&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/economia/seguranca-social/detalhe/seguranca-social-alvo-de-ataque-informatico'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segurança Social alvo de ataque informático</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8mVhHGwxz4xDxkCa8EgBLMh48guVm5Ubp24UaX6tq4jy6-eZPDTAYvw-0hvo30wLgtgqRz3Bf" alt="Segurança Social alvo de ataque informático" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ataque foi confirmado pelos serviços informáticos sendo ainda incerto se o &#39;acesso indevido” teve como alvo “dados de cidadãos ou de empresas&#39;.</p></div>
            </div>
        </a>
        </Template></>;
}