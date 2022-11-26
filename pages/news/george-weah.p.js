import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>George Weah</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,George Weah"/>
        <meta name="description" content="Trending News about George Weah" /></Head><Template>
            <h1 style={{fontSize: "30"}}>George Weah</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/26/223960532-5723e5af0a2f7.jpeg" alt="George Weah"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/george-weah-marca-presenca-no-estadio-para-assistir-filho-na-selecao-dos-estados-unidos,056b11c9ab6fc1f81935c36902ee9742rojjkkk3.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Weah marca presença no estádio para assistir filho na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR_BesxV0SiDAN-XmzN37Sc77t04Kzy4nCOW9MD7P6ZfmskcPJm5_RqiJWScC9cPvrUevIo7X1B" alt="George Weah marca presença no estádio para assistir filho na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente da Libéria e ganhador da Bola de Ouro em 1995, esteve nas arquibancadas do Al Bayt, para assistir à partida entre Inglaterra e Estados Unidos,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}