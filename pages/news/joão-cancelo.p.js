import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>João Cancelo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,João Cancelo"/>
        <meta name="description" content="Trending News about João Cancelo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>João Cancelo</h1>
            <Image width={800} height={500} src="https://www.mancity.com/meta/media/zgfjjomp/cancelo.jpg" alt="João Cancelo"/>
            <h3>Recent News</h3>
            <a href='https://pt.mancity.com/citytv/mens/joao-cancelo-ensina-o-famoso-passe-de-trivela-63805594'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Cancelo ensina o famoso passe de trivela</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYoXqLsPeXny4GbSDJfrmDJHJ7qyqMzqWkQkqz0BQZbi7QjEs9Gqy3E-lfoISwqK8xODO6PCbT" alt="João Cancelo ensina o famoso passe de trivela" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador português tem se notabilizado por seus passes com o lado de fora do pé.</p></div>
            </div>
        </a><a href='https://pt.mancity.com/citytv/mens/joao-cancelo-portugal-world-cup-showreel-manchester-city-63805586'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O caminho de João Cancelo até a Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9G0_8lCX2Z_Ww8B11AvOslPOuBYmGXPEspDzsl8Dh5XxY6rJvodx1qibgbCqUTRHbg89KkcT4" alt="O caminho de João Cancelo até a Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal já está nas oitavas de final da Copa, graças, em parte, a três jogadores do City.</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/portugal/detalhe/joao-cancelo-lembra-mae-olho-para-cima-porque-e-de-la-vem-a-minha-forca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Cancelo lembra mãe: «Olho para cima porque é de lá que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4p-bdt098JHwsKjg-4JvQEC9TxTFCrDH5WUn6jzkpLYWch-2nnHO0gVCGiIUefAVXAenHNKUS" alt="João Cancelo lembra mãe: «Olho para cima porque é de lá que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>João Cancelo lembrou a mãe, falecida num acidente de viação a 5 de janeiro de 2013. &quot;Olho para cima, porque é de lá que vem a minha força. Tu e eu sempre&quot;,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}