import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>B-21 Raider</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,B-21 Raider"/>
        <meta name="description" content="Trending News about B-21 Raider" /></Head><Template>
            <h1 style={{fontSize: "30"}}>B-21 Raider</h1>
            <Image width={800} height={500} src="https://pplware.sapo.pt/wp-content/uploads/2022/12/54197ADA-2626-4FAF-AC14-A9766AC00382.jpeg" alt="B-21 Raider"/>
            <h3>Recent News</h3>
            <a href='https://pplware.sapo.pt/motores/b-21-raider-o-novo-bombardeiro-nuclear-furtivo-da-forca-aerea-americana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>B-21 Raider: o novo bombardeiro nuclear furtivo da Força Aérea ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3y81VeiZE55d0tWAaPTtk58ZZ--2WFUjvTrxLIotaUVk4papevdt6TKpBRrz4mfG_hLQfdndJ" alt="B-21 Raider: o novo bombardeiro nuclear furtivo da Força Aérea ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Como esperado, detalhes específicos da aeronave permanecem envoltos em segredo. Contudo, o Secretário de Defesa dos EUA, Lloyd Austin, disse que era &quot;uma prova&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/mundo/noticia/2022/12/03/eua-revelam-o-b-21-raider-o-novo-bombardeiro-nuclear-contra-a-china.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA revelam o B-21 Raider, o novo bombardeiro nuclear contra a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxREcLp7_jG1Ae_rlf0kb2uN6ThrTcwpsfWDCe6bN_7ZDpAtEsWi3jbIVqlNomi8buBfahuMLp" alt="EUA revelam o B-21 Raider, o novo bombardeiro nuclear contra a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O mais novo bombardeiro nuclear furtivo dos Estados Unidos foi lançado na última sexta-feira após anos de desenvolvimento secreto e como parte da resposta&nbsp;...</p></div>
            </div>
        </a><a href='https://olhardigital.com.br/2022/12/03/carros-e-tecnologia/b-21-raider-e-lancado-nos-estados-unidos-e-pode-custar-pelo-menos-r-36-bilhoes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>B-21 Raider é lançado nos Estados Unidos e pode custar pelo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUcPkLUh9LmZnkDlFRAv5W5ZgavnyVkfxn48TTpASYa18697dbZukouQwBqPYRVbjMwsV063vk" alt="B-21 Raider é lançado nos Estados Unidos e pode custar pelo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O B21-Raider é o novo modelo de bombardeiro furtivo que será adotado na frota americana. Seu primeiro voo está planejado para 2023.</p></div>
            </div>
        </a><a href='https://www.defesaaereanaval.com.br/aviacao/b-21-raider-ng-apresenta-o-futuro-bombardeiro-da-usaf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>B-21 Raider: NG apresenta o futuro bombardeiro da USAF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSugC93NFUHOonnGrDf64q2bAuKIUapmtrW3sDqtaFLZvHrelGhBc_G3U-q-XQfRlkqDttlQ7Qu" alt="B-21 Raider: NG apresenta o futuro bombardeiro da USAF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Embora não se espere que o B-21 esteja operacional e introduzido em serviço nos próximos anos, a cerimônia de Rollout foi organizada pela Northrop Grumman&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aereo.jor.br/2022/12/03/northrop-grumman-e-a-forca-aerea-dos-eua-apresentam-o-b-21-raider-a-primeira-aeronave-de-sexta-geracao-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Northrop Grumman e a Força Aérea dos EUA apresentam o B-21 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4Tre751arak6s1kWEaKqNCfs2vDJm2uE5jRbMP7J9av-2QoNVlbSK8JGR7MLXuvC4bz0iHCJ9" alt="Northrop Grumman e a Força Aérea dos EUA apresentam o B-21 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Northrop Grumman Corporation (NYSE: NOC) e a Força Aérea dos EUA revelaram o B-21 Raider para o mundo hoje. O B-21 se junta à tríade nuclear como um&nbsp;...</p></div>
            </div>
        </a><a href='https://www.swissinfo.ch/por/afp/eua-apresenta-novo-bombardeiro--invis%C3%ADvel--b-21/48106772'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA apresenta novo bombardeiro &#39;invisível&#39; B-21</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbIVH8tlvVG3tPDLKDTgcDk2alw0JW6n-xKgPTj4CfSvqFZgH81VtJ5EAOVZuQfkY43z3hZ1eD" alt="EUA apresenta novo bombardeiro &#39;invisível&#39; B-21" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os Estados Unidos apresentaram na sexta-feira (2) o B-21 Raider, um bombardeiro invisível de alta tecnologia que pode transportar armas nucleares e&nbsp;...</p></div>
            </div>
        </a><a href='https://aeromagazine.uol.com.br/artigo/b-21-rider-o-novo-bombardeiro-dos-eua.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>B-21 Rider: O novo bombardeiro dos EUA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTa4adVtTL-VmIhEVdRCw-Wc-AIHQOyUfD5Ql2Ae65WAJEdVaQBMRAOUDLI5kqc6CKdyqdrGDBp" alt="B-21 Rider: O novo bombardeiro dos EUA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O evento começou com a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}