import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Caio Castro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Caio Castro"/>
        <meta name="description" content="Trending News about Caio Castro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Caio Castro</h1>
            <Image width={800} height={500} src="https://br.paipee.com/wp-content/uploads/2022/11/Caio-Rodrigo.jpg" alt="Caio Castro"/>
            <h3>Recent News</h3>
            <a href='https://br.paipee.com/2022/11/15/caio-castro-rodrigo-mussi-veja-20-famosos-que-sofreram-acidentes-de-carro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caio Castro, Rodrigo Mussi: Veja 20 famosos que sofreram ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREKS9Ziu6nTCvn5pwBzHi0RTuxevEKdoPKfKNqOdabRV6p90Co-6HbAmEdb0K_z3MVulPC3TcW" alt="Caio Castro, Rodrigo Mussi: Veja 20 famosos que sofreram ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualquer pessoa está sujeita a uma fatalidade, e com os famosos não poderia ser diferente. Muitas celebridades...</p></div>
            </div>
        </a><a href='https://www.msn.com/pt-br/entretenimento/noticias/caio-castro-rodrigo-mussi-veja-20-famosos-que-sofreram-graves-acidentes-de-carro/ss-AA148P34'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caio Castro, Rodrigo Mussi: Veja 20 famosos que sofreram graves ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxXQk7P8IF0W8gsUVnOV6QATKEDveR1otv6AlfzGSZin1gCGZDnH8KW86OrG0XqFbWsZ78FCR6" alt="Caio Castro, Rodrigo Mussi: Veja 20 famosos que sofreram graves ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualquer pessoa está sujeita a uma fatalidade, e com os famosos não poderia ser diferente. Muitas celebridades já tiveram que lidar com situações perigosas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}