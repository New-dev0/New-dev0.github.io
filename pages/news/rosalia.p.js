import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rosalia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rosalia"/>
        <meta name="description" content="Trending News about Rosalia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rosalia</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-28-Carminho-e-Rosalia.jpg-c3abcc84/1.91x1?wm=true&outputFormat=jpeg" alt="Rosalia"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-28-O-abraco-de-Carminho-a-Rosalia-Que-noites-incriveis-5c5ec8b3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O abraço de Carminho a Rosalía: “Que noites incríveis”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToPNSF4ipDVwmajMj_TzdXhw7DHWukXQ94wd8c4swNim04eUDizIKQ4kcL5FFYh8oQfbfhikCt" alt="O abraço de Carminho a Rosalía: “Que noites incríveis”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O encontro entre Carminho e Rosalía aconteceu este domingo na Altice Arena, em Lisboa, dois dias depois de a artista catalã ter cantado, em Braga,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nit.pt/cultura/musica/rosalia-uma-noite-magica-para-a-motomami-em-lisboa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosalía em Lisboa: uma noite mágica para a motomami</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrgVjQ8TCYc1yPEreBSgfJS5Z-hMP3TUoCsXoK2pEQ3FRuEFIP62m9zIvUjq8Hw_j45WaWMRli" alt="Rosalía em Lisboa: uma noite mágica para a motomami" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A artista espanhola apresentou o seu mais recente disco com um espetáculo visual e coreográfico impressionante. 28/11/2022 às 11:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rimasebatidas.pt/rosalia-na-altice-arena-a-verticalidade-de-uma-motomami/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ROSALÍA na Altice Arena: a verticalidade de uma MOTOMAMI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTBqR1wUm4zo3yiZ65WQ6bG9JaPZkdnbH7w5XekQD3WzAswtfZA_mcZa6g8B2915kQw5ovUlips" alt="ROSALÍA na Altice Arena: a verticalidade de uma MOTOMAMI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A primeira percebe-se por várias razões e a mais óbvia é: uma voz daquelas só pode ser benção divina. A segunda só faria sentido acontecer neste novo disco e&nbsp;...</p></div>
            </div>
        </a><a href='https://sol.sapo.pt/artigo/786577/rosalia-a-metamorfose-da-motomami-ao-vivo-no-altice-arena'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosalía. A metamorfose da Motomami ao vivo no Altice Arena</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStmS3ssiOrbxvlfKZ14bY8Hhnss3wzBkEQsPrFLCGsa2XXui-R7oM5C3PuH_6lp6W8oRci0-Qn" alt="Rosalía. A metamorfose da Motomami ao vivo no Altice Arena" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora catalã, Rosalía, esteve no Altice Arena, completamente lotado, para oferecer um efusivo concerto, que contou com momentos musicais de grande&nbsp;...</p></div>
            </div>
        </a><a href='https://magg.sapo.pt/cultura/musica/artigos/do-dueto-com-um-fa-ao-encontro-com-ana-moura-rosalia-conquistou-lisboa-com-muito-chicken-teriyaki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Do dueto com um fã ao encontro com Ana Moura. Rosalía ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTfx6ebIA9Zb7MrMRbiN-2SI1FtOPy-EEUa7rHmlRAo2m5AuBI1r-uYiELWx57MU3qEdNXmlDuS" alt="Do dueto com um fã ao encontro com Ana Moura. Rosalía ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Altice Arena a rebentar pelas costuras, gritos, aplausos e um entusiasmo ensurdecedor pela catalã de 30 anos que, durante quase duas horas, apaixonou pelo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabado.pt/gps/musica/detalhe/rosalia-em-lisboa-uma-motomami-todo-o-terreno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosalía em Lisboa: uma Motomami todo-o-terreno</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3lQsEf3m7zWoQdZR_DuQsadf4YpvIULNdOaCediayiS2d3Jy3_ZMJfY1NuEurRKd5FSQPzZ6R" alt="Rosalía em Lisboa: uma Motomami todo-o-terreno" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A estrela pop espanhola brilhou sem reservas na apresentação do seu orelhudo, audaz e magnificamente recebido novo disco, MOTOMAMI.</p></div>
            </div>
        </a><a href='https://www.n-tv.pt/famosos/ana-guiomar-e-rita-pereira-divertem-se-no-concerto-de-rosalia-em-lisboa/815783/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Guiomar e Rita Pereira divertem-se no concerto de Rosalía em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHivIPMSilUkVod_bPTiTYDfhwbY2FTl7-_aP0IWI9uUG8FnxyDUEx7O_H1bt5aalqzs2LDk2K" alt="Ana Guiomar e Rita Pereira divertem-se no concerto de Rosalía em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ana Guiomar e Rita Pereira divertiram-se ao som da cantora Rosalía no concerto que a artista deu este domingo, 27 de novembro, em Lisboa.</p></div>
            </div>
        </a>
        </Template></>;
}