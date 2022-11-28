import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Presidente Jair Bolsonaro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Presidente Jair Bolsonaro"/>
        <meta name="description" content="Trending News about Presidente Jair Bolsonaro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Presidente Jair Bolsonaro</h1>
            <Image width={800} height={500} src="" alt="Presidente Jair Bolsonaro"/>
            <h3>Recent News</h3>
            <a href='https://www.em.com.br/app/noticia/politica/2022/11/27/interna_politica,1426494/aliados-de-bolsonaro-no-pl-se-dispoem-a-disputar-nova-eleicao-e-revelam-div.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aliados de Bolsonaro no PL se dispõem a disputar nova eleição e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQh8y_HqXwWEyynxBXUgOBzu4UHZHcvUDGyE6N_HkgL2ntfcKcreSyE9B6AWoswPWgyqIEfdAwo" alt="Aliados de Bolsonaro no PL se dispõem a disputar nova eleição e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deputado federal Nikolas Ferreira (PL-MG) abraçado ao presidente Jair Bolsonaro (PL) durante a campanha deste ano (foto: DOUGLAS MAGNO / AFP).</p></div>
            </div>
        </a><a href='https://marechalnews.com.br/noticia/50001/presidente-jair-bolsonaro-vem-ao-parana-em-dezembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Presidente Jair Bolsonaro vem ao Paraná em dezembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3qpJFjSCYI4f1GsDIJSu1Mmblmt7ANdHwOYE8PMlobh_o0LfkrHEHEtXJPM6_2oFhyfmugpCS" alt="Presidente Jair Bolsonaro vem ao Paraná em dezembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ato contará ainda com a presença do presidente paraguaio, Mario Abdo Benitez. 27/11/2022 05h30. Por: Marcio Cerny Fonte:&nbsp;...</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/blogs/humor/sensacionalista/post/2022/11/brasileiro-quer-que-bolsonaro-homenageie-neymar-e-saia-antes-do-fim.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasileiro quer que Bolsonaro homenageie Neymar e saia antes do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQiDLncgOlDx7Sv3zSgboN-ALshwfarOGx-q_IAW7-0DphX0TL3tLwFWr1BVJT3U-gFyfSYfNhg" alt="Brasileiro quer que Bolsonaro homenageie Neymar e saia antes do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A oposição diz que o presidente Jair Bolsonaro Bolsonaro está sem trabalhar desde que começou a Copa (de 2018). Desde que perdeu a eleição, Bolsonaro está&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}