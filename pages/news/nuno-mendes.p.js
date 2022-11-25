import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nuno Mendes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nuno Mendes"/>
        <meta name="description" content="Trending News about Nuno Mendes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nuno Mendes</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/SELECAO/2022/nunomendes2.jpg" alt="Nuno Mendes"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-24/portugal-nuno-mendes-fora-da-ficha-de-jogo-o-motivo/965964'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nuno Mendes fora da ficha de jogo: o motivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEopcnUtyZJ6ZOpbSurtkgOPYX-4elJYsT3Sy1-xf10SS79bQ0FchwClNgITMCQY_D0rRhgRhE" alt="Nuno Mendes fora da ficha de jogo: o motivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de as seleções agora poderem colocar na ficha de jogo todos os jogadores disponíveis, ou seja, no limite, 11 titulares e 15 suplentes, Portugal só&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornaldenegocios.pt/negocios-iniciativas/banca-do-futuro/detalhe/joao-nuno-mendes-o-euro-digital-esta-a-avancar-rapidamente'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Nuno Mendes: “O euro digital está a avançar rapidamente”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSV1rQzHwuXfzPozQR5TUc3YzpWVhVvejzwtl99TngHiIkObgAHpeBZO61BJEchDWgS0mgyWu32" alt="João Nuno Mendes: “O euro digital está a avançar rapidamente”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>João Nuno Mendes apelou a que a banca apoie “a mudança para uma cultura de risco acrescido no conjunto do país, com capacidade de transformar o conhecimento&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}