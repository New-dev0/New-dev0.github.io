import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Muller</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Muller"/>
        <meta name="description" content="Trending News about Muller" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Muller</h1>
            <Image width={800} height={500} src="https://gwebs3.redacms.com/images/Deus_ainda_e_brasileiro.2e16d0ba.fill-800x450.jpg" alt="Muller"/>
            <h3>Recent News</h3>
            <a href='https://www.gazetaweb.com/noticias/cultura/ator-otavio-muller-prestigia-4-dia-do-festival-revoada-de-cinema/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ator Otávio Müller prestigia 4º dia do Festival Revoada de Cinema</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSCNedfL782yoXA9tB5VXOoDFNi2WSKg6RI2dd94GpsZlw7aHT7bSvDp_EMVkB-GajkgMDIZl_l" alt="Ator Otávio Müller prestigia 4º dia do Festival Revoada de Cinema" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artista está em Alagoas participando das filmagens do filme Deus ainda é Brasileiro, de Cacá Diegues.</p></div>
            </div>
        </a><a href='https://independente.com.br/lauro-muller-exerceu-uma-lideranca-marcante-em-todo-vale-do-taquari-recorda-presidente-do-conselho-da-fruki/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Lauro Müller exerceu uma liderança marcante em todo Vale do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbMUj_ImJkDRsZpYHszzINNYlp2pBZkU5eNnT2sjWD2q-NqGHipMCIK6UfOlbXuqUb_-UuNN9D" alt="&quot;Lauro Müller exerceu uma liderança marcante em todo Vale do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente do Conselho de Administração da Fruki, Nelson Eggers fez um relato pessoal de sua amizade com o histórico diretor do Grupo Independente,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}