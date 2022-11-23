import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Padre encontrado morto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Padre encontrado morto"/>
        <meta name="description" content="Trending News about Padre encontrado morto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Padre encontrado morto</h1>
            <Image width={800} height={500} src="https://cultura.uol.com.br/upload/tvcultura/noticias/happens_big/20221122063225_padre-corte.jpg" alt="Padre encontrado morto"/>
            <h3>Recent News</h3>
            <a href='https://cultura.uol.com.br/noticias/53915_padre-e-encontrado-morto-em-paroquia-no-parana.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Padre é encontrado morto em paróquia no Paraná</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5z8-yHCv4bA6Du6EjWKui8oaCkkRvcauRG4Zs0kH_2iDaFiRWfOkUCUi_lY9J9hvpdaqDk3CR" alt="Padre é encontrado morto em paróquia no Paraná" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O padre José Aparecido Bilha, de 63 anos, foi encontrado morto nesta segunda-feira (21) dentro da Paróquia Nossa Senhora Aparecida, em Guaíra, no Paraná. A&nbsp;...</p></div>
            </div>
        </a><a href='https://www.extraclasse.org.br/justica/2022/11/padre-catolico-que-apoiou-lula-e-encontrado-mortono-parana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Padre católico que vinha recebendo ameaças de bolsonaristas por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNvIC4iEJt7MTgteniT-j4dFbdJUvLmfE4SDl3G16NmlRGCRsekyEX6Yaaih8CtYX08hxIwKiz" alt="Padre católico que vinha recebendo ameaças de bolsonaristas por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O padre José Aparecido Bilha, titular da Paróquia Nossa Senhora Aparecida, em Guaíra, no Oeste do Paraná, foi encontrado morto na manhã de segunda-feira,&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/pr/oeste-sudoeste/noticia/2022/11/22/veja-o-que-se-sabe-sobre-morte-de-padre-em-paroquia-no-parana.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Veja o que se sabe sobre morte de padre em paróquia no Paraná</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPRfL1dqpQSoQ2mMQIA2bGtolhyO8KaLpf2dOzNvlrxPr0I_ymEfk3u2S4cHsqBzmRDDL5o_aG" alt="Veja o que se sabe sobre morte de padre em paróquia no Paraná" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>José Aparecido Bilha tinha 63 anos e foi encontrado morto na paróquia que trabalhava desde 2020. Polícia Civil diz que religioso tinha ferimento de faca no&nbsp;...</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/brasil/padre-morto-paroquia-parana-nprm/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Padre é encontrado morto em paróquia no oeste do Paraná</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRS_d_xf_tw8DCR-0fOMYm5YxZH7Zzb7lYjWpt4T0cDIasfPlv9sB6LRgtu8OfC1YDfMLsam1t" alt="Padre é encontrado morto em paróquia no oeste do Paraná" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polícia diz que não há indícios de homicídio e levanta a suspeita de suicídio; José Aparecido Bilha tinha 63 anos.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2022/11/22/padre-e-encontrado-morto-em-paroquia-de-guaira-no-oeste-do-parana.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Padre é encontrado morto em paróquia de Guaíra, no oeste do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Padre é encontrado morto em paróquia de Guaíra, no oeste do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A informação foi confirmada pela Diocese de Toledo, que fica na mesma região. Os funcionários acharam o corpo do padre José Aparecido Bilha ao chegarem para o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/brasil/2022/11/5053463-padre-e-encontrado-morto-em-paroquia-diocese-acompanha-investigacoes.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Padre é encontrado morto em paróquia; Diocese acompanha ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvFlbbHoOE3MghmKvItiiIr44eNTm53K3XSbdjx6jc61QNlWPuHsIjc0wH06s8qYvtpJ5GTMXn" alt="Padre é encontrado morto em paróquia; Diocese acompanha ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O padre José Aparecido Bilha, 63 anos, foi encontrado por funcionários da paróquia na manhã desta segunda-feira (21/11)</p></div>
            </div>
        </a>
        </Template></>;
}