import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Preços combustíveis próxima semana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Preços combustíveis próxima semana"/>
        <meta name="description" content="Trending News about Preços combustíveis próxima semana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Preços combustíveis próxima semana</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/386689966054cd8274d8_socialshare.jpg" alt="Preços combustíveis próxima semana"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/noticia/economia/2022/11/25/precos-dos-combustiveis-voltam-a-descer-na-proxima-semana/309506/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preços dos combustíveis voltam a descer na próxima semana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhbwGYfjm_phnejUDKtkRMMJdwwrM4qzFneeESnQO0zRnI4qXMB6iOC33V1omcJ4o3WiVUitbB" alt="Preços dos combustíveis voltam a descer na próxima semana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Previsões apontam para uma descida de cinco cêntimos por litro de gasóleo, enquanto na gasolina deverá ser de 4,5 cêntimos por litro.</p></div>
            </div>
        </a><a href='https://eco.sapo.pt/2022/11/25/combustiveis-voltam-a-descer-gasoleo-desce-5-centimos-e-gasolina-45-na-proxima-semana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gasóleo desce 5 cêntimos e gasolina 4,5 na próxima semana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS61LX1DO4eB1amnMGF7cX8GSEji-Rj_IbxX7frHRPHgK5sZpf36EyxvyaowU_LJCAaoQUFazrL" alt="Gasóleo desce 5 cêntimos e gasolina 4,5 na próxima semana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na segunda-feira, quando for abastecer a sua viatura deverá passar a pagar 1651 euros por litro de gasóleo simples e 1658 euros por litro de gasolina&nbsp;...</p></div>
            </div>
        </a><a href='https://away.iol.pt/combustiveis/energia/preco-dos-combustiveis-para-a-proxima-semana-28-de-novembro-a-4-de-dezembro/20221125/6380c66a0cf255d6e13cddd2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preço dos combustíveis para a próxima semana 28 de novembro a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrP_3rvXa4TU-Oiiz6ftQOXsJvRG43NkMKEfP37iJUAuxYSGksN9Q5Zz3A-xTuHNst4c-A97yE" alt="Preço dos combustíveis para a próxima semana 28 de novembro a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Preço do gasóleo continuará mais alto embora desça até 6 cêntimos, já o preço da gasolina deverá descer até 5 cêntimos.</p></div>
            </div>
        </a><a href='https://expresso.pt/economia/2022-11-25-Preco-dos-combustiveis-cai-cerca-de-5-centimos-por-litro-na-proxima-semana-553cf795'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preço dos combustíveis cai cerca de 5 cêntimos por litro na próxima ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6AwIrIymu03vHBoHtaOK121DAoVys0vFR0MtHVWcNQ67vGuAJL25oQSB3Lnws5sTa6S2qbjFZ" alt="Preço dos combustíveis cai cerca de 5 cêntimos por litro na próxima ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois das quedas na semana passada, o barril de Brent, petróleo de referência na Europa e um dos indicadores do preço dos combustíveis, voltou a cair, para&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/economia/2022-11-25-Preco-dos-combustiveis-vai-descer-novamente-na-proxima-semana-c9b78ed5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preço dos combustíveis vai descer novamente na próxima semana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxQc0F4HwLKmqjZJQ3Ec2bz6mlZ9LrqGrA-Zvj8ZYFyiCfzghb_uh4q_Rz2vEIOJyTCkrA9bqU" alt="Preço dos combustíveis vai descer novamente na próxima semana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O valor da descida será praticamente semelhante entre gasolina e gasóleo.</p></div>
            </div>
        </a><a href='https://www.dnoticias.pt/2022/11/25/337858-combustiveis-mais-baratos-na-madeira-na-proxima-semana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Combustíveis mais baratos na Madeira na próxima semana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnh18ylbOOP3NGj2o0rpmTN7-JOkpLKeDXwgQnvijygmNe-EjnUIAhN834jm3ME5dK9Qk_X6sg" alt="Combustíveis mais baratos na Madeira na próxima semana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Gasolina super sem chumbo IO 95 volta a descer, desta feita 8,1 cêntimos, passando dos actuais 1,729 euros por litro para 1,648. O gasóleo colorido e marcado&nbsp;...</p></div>
            </div>
        </a><a href='https://radioaltoave.sapo.pt/preco-dos-combustiveis-volta-a-descer-na-proxima-semana-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preço dos combustíveis volta a descer na próxima semana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Preço dos combustíveis volta a descer na próxima semana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A confirmarem-se estas previsões, o litro de gasóleo simples deverá rondar, a partir de segunda-feira, os 1,651 euros e a gasolina 95 simples 1,658 euros.</p></div>
            </div>
        </a>
        </Template></>;
}