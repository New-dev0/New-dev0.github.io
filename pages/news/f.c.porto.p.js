import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F.c.porto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F.c.porto"/>
        <meta name="description" content="Trending News about F.c.porto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F.c.porto</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/BASQUETEBOL/2022/Porto2022.JPG" alt="F.c.porto"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-12-04/basquetebol-vitoria-suada-do-fc-porto-em-casa-do-esgueira/967281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitória suada do FC Porto em casa do Esgueira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQFqaUeD2xn0cZe6D4bKvyMLUQZ0xfKEhwcnvzVv7ZpiY5MHSvqtrZTuHAbTGYKShbUDweyqtjY" alt="Vitória suada do FC Porto em casa do Esgueira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em partida em atraso da oitava jornada da Liga Betclic de basquetebol masculino, o FC Porto foi a Esgueira derrotar a equipa local por suados 87-83.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/modalidades/basquetebol/noticias/fc-porto-encerra-primeira-volta-da-liga-com-triunfo-suado-em-esgueira-15427356.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Porto encerra primeira volta da Liga com triunfo suado em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkfmUycl49CX6wFV4N3zkMNXjGapQ_fafnf_p69z8q4hbYxW9JkM3ntgxW-8N05KiAQ7z0xJFl" alt="FC Porto encerra primeira volta da Liga com triunfo suado em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aveirenses ofereceram réplica aos dragões até ao fim, em jogo em atraso da oitava ronda.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/modalidades/fc-porto/basquetebol-fc-porto-sofre-mas-vence-esgueira'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Basquetebol: FC Porto sofre mas vence Esgueira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBlEKg4nwlXsVpWBSiUGX_7xqBSftHKC9jFhowesrfAulDo13Mjv0WjuwP74iMuJ4MJ3MPBZ5Z" alt="Basquetebol: FC Porto sofre mas vence Esgueira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O FC Porto venceu este domingo na visita ao Esgueira, por 87-83, em jogo de acerto de calendário, relativo à oitava jornada da liga de basquetebol e que&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/juniores/fc-porto/juniores-benfica-perde-mas-segue-lider-fc-porto-empata'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juniores: Benfica perde mas segue líder, FC Porto empata</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRqWKZbnn1ZJeL0Ec8J5dxx9yCXkyCl5DFCx6Vg-gkqvF4Cmb1rnm4nsM4K733sjt0ACmbo291" alt="Juniores: Benfica perde mas segue líder, FC Porto empata" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Encarnados derrotados pelo Vitória de Setúbal. Dragões (com menos um jogo) continuam a três pontos do líder Sp. Braga, que também empatou.</p></div>
            </div>
        </a>
        </Template></>;
}