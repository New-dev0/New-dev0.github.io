import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ana Malhoa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ana Malhoa"/>
        <meta name="description" content="Trending News about Ana Malhoa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ana Malhoa</h1>
            <Image width={800} height={500} src="https://cdn.flash.pt/images/2018-06/img_1200x676$2018_06_01_10_29_59_135377_im_638056800702533385.png" alt="Ana Malhoa"/>
            <h3>Recent News</h3>
            <a href='https://www.flash.pt/celebridades/nacional/detalhe/ana-malhoa-recorda-casamento-com-jorge-moreira-que-terminou-em-polemica-com-a-filha-e-suspeitas-de-traicao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Malhoa recorda casamento com Jorge Moreira que terminou ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReJAaocU8eimNO3-A9DPQHlJGYN555s7OuYUO_zwPSwmUVC-GU_oO0WW3dxGW4Qz5YOr-sx1ee" alt="Ana Malhoa recorda casamento com Jorge Moreira que terminou ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora e o produtor estiveram casados durante 20 anos. Da relação nasceu Índia.</p></div>
            </div>
        </a><a href='https://www.novagente.pt/ana-malhoa-cantora-esta-de-coracao-livre-mas-ha-um-motivo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Malhoa - Cantora está de coração livre, mas há um motivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSx77sZvzfnokot19W6-1KC1UHzQ4pBMZhecRTdoXlaVtbnGzlwZHwGEM9W5So3Nt06R_E7wbYo" alt="Ana Malhoa - Cantora está de coração livre, mas há um motivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ana Malhoa esteve à conversa com Manuel Luís Goucha no programa &quot;Conta-me&quot;. Ao longo da conversa a cantora foi confrontada com o seu estado civil.</p></div>
            </div>
        </a><a href='https://selfie.iol.pt/ana-malhoa/conta-me/em-testemunho-raro-ana-malhoa-fala-sobre-o-ex-marido-jorge-moreira/20221203/638b77530cf2aea785802f27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em testemunho raro, Ana Malhoa fala sobre o ex-marido, Jorge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8q8fhvh7IlxUYk9q9dya3cyo8Bg_XQwgSzZTiw-sH2GGQ6ZU1KwkbxYnAfDPdoHZPONU73fUV" alt="Em testemunho raro, Ana Malhoa fala sobre o ex-marido, Jorge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Ana Malhoa concedeu uma entrevista a Manuel Luís Goucha, no programa &quot;Conta-me&quot;, e falou, num testemunho raro, sobre o ex-marido, Jorge Moreira.</p></div>
            </div>
        </a><a href='https://infocul.pt/ana-malhoa-estou-sozinha-nao-tenho-ninguem/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Malhoa: “Estou sozinha… Não tenho ninguém”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5hg6jv8ud1qeYebgI2pWCrrtWgj1JUdX2FPGgk38GrNRm1_XW9G6YBCIClynhvW8T1U1_uAES" alt="Ana Malhoa: “Estou sozinha… Não tenho ninguém”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ana Malhoa: &quot;Estou sozinha… Não tenho ninguém&quot; , disse em entrevista a Goucha na TVI.</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/ana-malhoa-fala-sobre-o-ex-marido-jorge-moreira-foi-uma-pessoa-importante/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Malhoa fala sobre o ex-marido, Jorge Moreira: &quot;Foi uma pessoa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8Fv5TO2C-IIK2CsBYCrQxvaaGl4I1uTl_lKyUruwHFEBNV0v_sICa-ySWMmlhR0dPH00UcMXY" alt="Ana Malhoa fala sobre o ex-marido, Jorge Moreira: &quot;Foi uma pessoa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ana Malhoa foi a convidada deste sábado, dia 3 de dezembro, do programa &#39;Conta-me&#39;. A cantora está novamente na &quot;ribalta&quot;, após ter lançado um novo tema,</p></div>
            </div>
        </a><a href='https://www.impala.pt/famosos/nacionais/ana-malhoa-cantora-esta-de-coracao-livre-mas-ha-um-motivo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Malhoa está solteira e há um motivo - Impala</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQP9v7yx9Y11A_VwC4Px4XW3tiJSAmSwZR47howeTlYcpz2Sf6CEkYlLRTNshrKv-9Ycv9XBnG0" alt="Ana Malhoa está solteira e há um motivo - Impala" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ana Malhoa esteve à conversa com Manuel Luís Goucha no programa &quot;Conta-me&quot;. Ao longo da conversa a cantora foi confrontada com o seu estado civil. - Impala.</p></div>
            </div>
        </a>
        </Template></>;
}