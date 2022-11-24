import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Musiala</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Musiala"/>
        <meta name="description" content="Trending News about Musiala" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Musiala</h1>
            <Image width={800} height={500} src="https://veja.abril.com.br/wp-content/uploads/2022/11/GettyImages-1442601806-2.jpg?quality=70&strip=info" alt="Musiala"/>
            <h3>Recent News</h3>
            <a href='https://veja.abril.com.br/esporte/jamal-musiala-o-prodigio-que-escutou-o-coracao-para-jogar-pela-alemanha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamal Musiala: o prodígio que escutou o coração para jogar pela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOFlO5Wb59YncilHhkCggKaSmy1gScUkDXFQCM-R5GhxU5lj7CcMpHKsQhMSe735XuiIlayF6N" alt="Jamal Musiala: o prodígio que escutou o coração para jogar pela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 19 anos, destaque do Bayern de Munique foi formado por equipes inglesas e teve até passagem pela seleção rival antes de defender país natal.</p></div>
            </div>
        </a><a href='https://www.sambafoot.com/br/copa/jamal-musiala-aos-19-anos-e-a-promessa-da-selecao-alema-na-copa-do-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamal Musiala, aos 19 anos, é a promessa da seleção alemã na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9RoGlWtUXIC1rEr-JZe_mM5g2R_BnxLprN-oB0-FMe4JaRlow8S9Azljg-2EVRBUqk_gFFpNr" alt="Jamal Musiala, aos 19 anos, é a promessa da seleção alemã na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O futebolista é o mais jovem a estrear na seleção de Hans Flick e se mostra como o porta-estandarte da próxima geração de jogadores alemães.</p></div>
            </div>
        </a>
        </Template></>;
}