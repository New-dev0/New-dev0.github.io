import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Metro sp</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Metro sp"/>
        <meta name="description" content="Trending News about Metro sp" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Metro sp</h1>
            <Image width={800} height={500} src="https://i0.wp.com/diariodotransporte.com.br/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-18-at-06.11.10.jpeg?fit=675%2C1200&ssl=1" alt="Metro sp"/>
            <h3>Recent News</h3>
            <a href='https://diariodotransporte.com.br/2022/11/18/linha-1-volta-a-operar-integralmente-caos-no-metro-de-sao-paulo-trecho-chegou-a-ser-paralisado-linhas-2-e-3-com-reflexos-e-onibus-paese-chamados-manha-dificil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Linha 1 volta a operar integralmente: Caos no Metrô de São Paulo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZb5YjTt8-mKpa6OLBDb9ss56xRDlAwlo2_rwdkJeGOCfYjC4YWf-bQVmoxuGkwbIktLYRO8fY" alt="Linha 1 volta a operar integralmente: Caos no Metrô de São Paulo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quem depende do metrô nesta sexta-feira, 18 de novembro de 2022, enfrentou um caos verdadeiro nas principais linhas operadas pela Companhia do Metropolitano de&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/sp/sao-paulo/noticia/2022/11/18/falha-na-linha-1-azul-do-metro-interrompe-circulacao-de-trens-entre-as-estacoes-luz-e-tucuruvi.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falha na Linha 1 - Azul do Metrô interrompe circulação de trens, lota ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjicv6XLr_xpwRj9GH-HKs2xBiiCBQoixyr78dZbMws3-sJ5e9V_CyOFcjrbgDelhh66k03bGB" alt="Falha na Linha 1 - Azul do Metrô interrompe circulação de trens, lota ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Problema ocorreu na manhã desta sexta (18) entre as estações Luz e Tucuruvi, que chegaram a ficar fechadas por duas horas, e refletiu nas linhas 2 e 3.</p></div>
            </div>
        </a><a href='https://cultura.uol.com.br/noticias/53842_falha-na-linha-1-azul-do-metro-de-sp-deixa-trecho-de-nove-estacoes-paralisado.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falha na linha 1 - Azul do Metrô de SP deixa trecho de nove ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6lsQMQP65qVX0_w5SUx12jiGxV760kG3OVJOLDQMRwJf2ftA68jheGQKENBd6d1jBqeFh3OZJ" alt="Falha na linha 1 - Azul do Metrô de SP deixa trecho de nove ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Intervalo entre Luz e Tucuruvi ficou aproximadamente duas horas paralisado; estações ficaram lotadas. Da Redação 18/11/2022 08h37. Reprodução/Redes sociais.</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/geral/noticia/2022-11/metro-de-sp-para-em-horario-de-pico-mas-situacao-ja-e-normal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metrô de SP para em horário de pico, mas situação já é normal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlnVRwuEpdkSXmKoHGk5wuW4oyhj0JwSHgujjRuQIL5DHlg9K9iM9ToN32ZF4jFIgKnpw3wz0z" alt="Metrô de SP para em horário de pico, mas situação já é normal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falha na Linha 1-Azul afetou circulação de trens &middot; Publicado em 18/11/2022 - 10:16 Por Ludmilla Souza - Repórter da Agência Brasil - São Paulo &middot; ouvir:.</p></div>
            </div>
        </a><a href='https://noticias.r7.com/sao-paulo/linhas-azul-vermelha-e-verde-do-metro-apresentam-lentidao-em-sp-18112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Linhas Azul, Vermelha e Verde do Metrô apresentam lentidão em SP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWUO73ASi5gk_C-8Z2TJ8fRFwly19j7XMtOFnJwgRIN3D1wCLy636w8O2k3CH769X7HhbqDbeSOg" alt="Linhas Azul, Vermelha e Verde do Metrô apresentam lentidão em SP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falha no trem entre as estações Tucuruvi e Jabaquara causa velocidade reduzida e maior tempo de parada; linha Azul está parada.</p></div>
            </div>
        </a><a href='https://fdr.com.br/2022/11/18/metro-de-sao-paulo-tem-funcionamento-interditado-veja-previsao-de-volta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metrô de São Paulo tem funcionamento interditado. Veja a previsão ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTH18F8HRu8Y35ZMfwiPMDYpCp_khrqH0bBSH1LLrbBFK8HvhJ0mNO1Zvsvhl1pbDEFTUL-NSk" alt="Metrô de São Paulo tem funcionamento interditado. Veja a previsão ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cidade de São Paulo que é movida em sua maioria pelo transporte público, passa nessa manhã de sexta-feira (18) por um congestionamento. Devido a falha de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}