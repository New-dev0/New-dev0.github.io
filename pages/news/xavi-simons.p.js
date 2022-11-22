import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Xavi Simons</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Xavi Simons"/>
        <meta name="description" content="Trending News about Xavi Simons" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Xavi Simons</h1>
            <Image width={800} height={500} src="https://i1.wp.com/surgiu.com.br/wp-content/uploads/2022/11/xavi-simons-ex-psg-e-barcelona-agora-defende-o-psv-da-holanda.jpg?fit=633%2C422&ssl=1" alt="Xavi Simons"/>
            <h3>Recent News</h3>
            <a href='https://surgiu.com.br/2022/11/21/xavi-simons-ex-psg-e-barcelona-agora-defende-o-psv-da-holanda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xavi Simons, ex-PSG e Barcelona, agora defende o PSV, da Holanda</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-iqg1bykVIresN7IXeJegpTBoKQom9NwbUU90fNdXsXYcA_6ru25rvKR9h2ggwgVJiflliZz_" alt="Xavi Simons, ex-PSG e Barcelona, agora defende o PSV, da Holanda" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O destaque no time catalão saltou aos olhos da administração do Paris Saint Germain, que o captou para a França. A história não é de Messi, mas de Xavi Simons,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}