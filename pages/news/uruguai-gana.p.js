import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Uruguai Gana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Uruguai Gana"/>
        <meta name="description" content="Trending News about Uruguai Gana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Uruguai Gana</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/sicnot/2022-12-02-2022-12-02T162246Z_990576000_UP1EIC219HXUB_RTRMADP_3_SOCCER-WORLDCUP-GHA-URY-REPORT.JPG-5ac5eea4/1.91x1?wm=true&outputFormat=jpeg" alt="Uruguai Gana"/>
            <h3>Recent News</h3>
            <a href='https://sicnoticias.pt/especiais/mundial-de-futebol/2022-12-02-Uruguai-e-Gana-estao-fora-do-Mundial-2022-4f6611ac'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguai e Gana estão fora do Mundial 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyzcd9-qdsfwkk8C4OojgMptJqHcJw5EWH9DFiSgzhRLXXxUhtnh9AionXHBgm79_wY1Bb2LVA" alt="Uruguai e Gana estão fora do Mundial 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção sul-americana ficou em terceiro lugar do Grupo H, atrás de Portugal e Coreia do Sul. Os ganeses terminaram a fase de grupos em último.</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/uruguai-vence-gana-mas-fica-a-um-golo-do-apuramento--15417686.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguai vence Gana, mas fica a um golo do apuramento</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzyeOd13oSybzT3fd6bl6AY3S3eyD-wEYobLziY29sgP5cLyC2njFqUJvsoROeEg17BBWL5wFY" alt="Uruguai vence Gana, mas fica a um golo do apuramento" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os uruguaios venceram por 2-0, mas está de volta a casa por causa da vitória da Coreia do Sul frente a Portugal nos instantes finais.</p></div>
            </div>
        </a><a href='https://www.tsf.pt/desporto/uruguai-vence-gana-mas-esta-fora-do-mundial-por-causa-de-um-golo-sul-coreano-fatal-15417774.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Uruguai vence Gana mas está fora do Mundial por causa de um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQ8PUikmfGCU267geFaAlZd6pE2qphgNZ9Bp71P8cNDH691ciKOsgV93Ic0kWvOaWDBe826m9y" alt="Uruguai vence Gana mas está fora do Mundial por causa de um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Uruguai foi esta sexta-feira eliminado do Mundial 2022, apesar de ter vencido o Gana por 2-0, devido critério de golos marcados no torneio.</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/bis-de-arrascaeta-da-triunfo-inglorio-ao-uruguai-sobre-o-gana-15417697.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bis de Arrascaeta dá triunfo inglório ao Uruguai sobre o Gana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHcNxptdjHJkmzdqDEv6_4hvozd7AClIUa-OaWo0OcsnUQs14sZ_Sa9ZwN6YostSTWsBKF7xMl" alt="Bis de Arrascaeta dá triunfo inglório ao Uruguai sobre o Gana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador, que alinha nos brasileiros do Flamengo, marcou dois golos na vitória (2-0) da equipa sul-americana sobre o Gana, mas que não serviu para seguir&nbsp;...</p></div>
            </div>
        </a><a href='https://goalpoint.pt/gana-uruguai-qatar-2022_158226'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gana Uruguai | Lágrimas no adeus doloroso da &quot;celeste&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxOY54VStWtLvdk1Rw7VhDzearHDHOmhJ4rGK_3Qsv2gRZMWk6cxd4zJNXpmIX8O9RhbGf6Ntp" alt="Gana Uruguai | Lágrimas no adeus doloroso da &quot;celeste&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Uruguai bateu o Gana mas ambas as equipas estão fora do Qatar 2022.</p></div>
            </div>
        </a>
        </Template></>;
}