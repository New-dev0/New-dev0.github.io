import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Futebol clube do Porto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Futebol clube do Porto"/>
        <meta name="description" content="Trending News about Futebol clube do Porto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Futebol clube do Porto</h1>
            <Image width={800} height={500} src="https://cdn.verdadeiroolhar.pt/wp-content/uploads/2022/12/317935873_10160486816879485_2967743041024046268_n.jpg" alt="Futebol clube do Porto"/>
            <h3>Recent News</h3>
            <a href='https://www.verdadeiroolhar.pt/jovem-pacense-integra-o-plantel-de-sub-19-do-futebol-clube-do-porto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jovem pacense integra o plantel de sub-19 do Futebol Clube do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgZW1DcGFF7JvuszthNTF7oR6X8uVFxL-fy83qvgn6uHwaZ2tD_94U9otXRDirMSNoM88dVdmB" alt="Jovem pacense integra o plantel de sub-19 do Futebol Clube do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Desde 2015 que está no Futebol Clube do Porto, clube com o qual acaba de assinar um contrato profissional, “mantendo-se vinculado” ao Dragão. “Dinis Rodrigues&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}