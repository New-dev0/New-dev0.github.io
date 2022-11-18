import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mick Schumacher</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mick Schumacher"/>
        <meta name="description" content="Trending News about Mick Schumacher" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mick Schumacher</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1124%3Anowe%3A0%3A104%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F17121732%2F39827589.jpg" alt="Mick Schumacher"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/17/nico-hulkenberg-substitui-mick-schumacher-na-haas-em-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nico Hulkenberg substitui Mick Schumacher na Haas em 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8FqlRkLa7FZnAfGIaB927RHL6erCRmaZjyNkYEsPYgwxtKauxiXEdyHBRNB_ezxqL2mGchYHA" alt="Nico Hulkenberg substitui Mick Schumacher na Haas em 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Schumacher mostrou-se &quot;desapontado com a decisão da equipa não renovar contrato&quot; e será substituído pelo piloto Hulkenberg que regressa a tempo inteiro à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/modalidades/motores/noticias/oficial-haas-anuncia-saida-de-mick-schumacher-e-revela-substituto-15361109.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oficial: Haas anuncia saída de Mick Schumacher e revela substituto</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9e30ae1G-U7yAhH3E2t4hpWmFX1MWhBDsrcjnEdslJYb0OKK1ieJWPpCTUu73eC5hSHV2vITD" alt="Oficial: Haas anuncia saída de Mick Schumacher e revela substituto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O piloto alemão Nico Hulkenberg vai substituir o compatriota Mick Schumacher na Haas no Mundial de Fórmula 1 de 2023, anunciou esta quinta-feira a escuderia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autosport.pt/formula1/f1/f1-mick-schumacher-a-caminho-da-mercedes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: Mick Schumacher a caminho da Mercedes?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTABf-fa-IEfumq3vG788j5i5UaSQJ372FOpy08L5cp-UPm_MYEPrc-u-K0elz-_KPK8CgBdL3I" alt="F1: Mick Schumacher a caminho da Mercedes?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com o anúncio da contratação de Nico Hulkenberg, Mick Schumacher ficou sem vaga para 2023. O piloto alemão de 23 anos pagou pela época menos conseguida e,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/colunas/pole-position/2022/11/17/hulkenberg-volta-com-a-haas-e-mick-schumacher-ve-porta-aberta-na-mercedes.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pole Position - Hulkenberg volta com a Haas e Mick Schumacher vê ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKV7eOKRRiPgel3-UVT3eaaozkadlJN5pO6eiT25A6XZb_PmYIC8dNFwWqc_VcQfN8dlvV2Wns" alt="Pole Position - Hulkenberg volta com a Haas e Mick Schumacher vê ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nico Hulkenberg estará de volta ao grid da F1 em 2023 após o esperado anúncio da Haas fechar a única vaga teoricamente em aberto para a próxima temporada,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.f1mania.net/f1/f1-mercedes-e-mais-nada-as-opcoes-de-mick-schumacher-para-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: Mercedes e mais nada. As “opções” de Mick Schumacher para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQMDichardA5R0o3atWSIySyausfs4oYW8vJECfbJLxl7dkBUDh4GRjWN6hA4Np9zEimwLwum9" alt="F1: Mercedes e mais nada. As “opções” de Mick Schumacher para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mick Schumacher não será piloto da Haas na temporada 2023 da Fórmula 1. O anúncio de que Nico Hulkenberg substituirá o jovem alemão no próximo ano foi&nbsp;...</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/esportes/noticia/2022-11/hulkenberg-substituira-mick-schumacher-na-haas-na-temporada-2023-da-f1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hulkenberg substituirá Mick Schumacher na Haas na temporada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwawZQrxj3JiQwzVx9ZDYeFeN7Xr0iWw2NI0EXPE5okE1ZH1gk3klzkq8ig4WiWlSjO9RKM3Ps" alt="Hulkenberg substituirá Mick Schumacher na Haas na temporada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O alemão Nico Hulkenberg fará um retorno em tempo integral à Fórmula 1 na Haas na próxima temporada, depois que a equipe norte-americana anunciou o piloto&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=421780'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Haas troca Mick Schumacher por Nico Hulkenberg :: zerozero.pt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGA357Ig4O5r2QW56WetgA_4zFA5DmB6635BzmpXeQnY35j7r05IOHd6iqTaiYFvcOqbxq2kS6" alt="Haas troca Mick Schumacher por Nico Hulkenberg :: zerozero.pt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Há novidades na Haas para a época 2023. A equipa norte-americana anunciou a contratação de Nico Hulkenberg, que vai fazer parelha com Kevin Magnussen.</p></div>
            </div>
        </a>
        </Template></>;
}