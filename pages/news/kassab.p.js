import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kassab</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kassab"/>
        <meta name="description" content="Trending News about Kassab" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kassab</h1>
            <Image width={800} height={500} src="https://uploads.metropoles.com/wp-content/uploads/2022/07/22190129/Sem-titulo-99.jpg" alt="Kassab"/>
            <h3>Recent News</h3>
            <a href='https://www.metropoles.com/blog-do-noblat/ricardo-noblat/gilberto-kassab-o-poderoso-secretario-do-governo-de-sao-paulo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gilberto Kassab, o poderoso secretário do governo de São Paulo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQu3oKksWa8pW2YdtQ5sMvUR9wT5wY5FNBYVUUQG2B79Q0alsFOvLdkWiOJKA3abO-0VzAqVWpP" alt="Gilberto Kassab, o poderoso secretário do governo de São Paulo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sincero, ele foi, mas irônico, também. Em recente entrevista à TV Cultura, Gilberto Kassab, presidente do PSD, eleitor de Lula no primeiro e no segundo&nbsp;...</p></div>
            </div>
        </a><a href='https://oantagonista.uol.com.br/brasil/kassab-estou-muito-envolvido-no-governo-de-tarcisio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kassab: “Estou muito envolvido no governo de Tarcísio”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSX1pb127L7KViqsPCIi2iNy0tGPzPT9A2L-FrTnAYixI9Y01MazFoD2e1WJCb1qj8b3lda1npw" alt="Kassab: “Estou muito envolvido no governo de Tarcísio”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gilberto Kassab (foto) afirmou neste sábado (26) que “não falta nada” para que ele seja, de fato, oficializado como Secretário de Governo do Estado de São&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/vou-ajudar-o-tarcisio-da-mesma-forma-dentro-ou-fora-do-governo-diz-kassab/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vou ajudar o Tarcísio da mesma forma, dentro ou fora do governo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQpEkyAS2Z9pIza-Od7FCG98PsJNWzQx8INJQ14H4VZQ6krHTENh9PPyHsY1P1ErVmJRpM2fxs" alt="Vou ajudar o Tarcísio da mesma forma, dentro ou fora do governo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista à CNN neste sábado (26), o presidente do PSD, Gilberto Kassab, afirmou que ainda está em fase de definição sua oficialização como Secretário&nbsp;...</p></div>
            </div>
        </a><a href='https://correio.rac.com.br/opiniao/a-vitoria-de-kassab-1.1315685'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A vitória de Kassab</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_A_ppRvDcXL7rmVJMI_WU81rka2CAlmNGXbFazT3Pu-aXL6N-5V55FtD09qNESNwx9lAy3dQs" alt="A vitória de Kassab" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kassab venceu a queda-de-braço com Eduardo Bolsonaro, filho do presidente Jair Bolsonaro, e será o articulador político do governador do Estado de São Paulo&nbsp;...</p></div>
            </div>
        </a><a href='https://bahia.ba/politica/governador-eleito-de-sp-anuncia-kassab-como-secretario/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Governador eleito de SP anuncia Kassab como secretário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3Iow2xQfvvW8UwEyfqO0R-q-2yhJPzTUeDkNrC8pUsI3n7y1jUSyzMaRyfFLpiacZZp0-HYW0" alt="Governador eleito de SP anuncia Kassab como secretário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo a publlicação, durante painel do grupo Esfera, no Guarujá (SP), Tarcísio confirmou a indicação do cacique do PSD como o futuro secretário de Governo.</p></div>
            </div>
        </a><a href='https://sbtinterior.com/noticia/tarcisio-confirma-kassab-como-secretario-de-governo,1481762588641.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tarcísio confirma Kassab como secretário de Governo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXPVgKs2H9VPKSZgjc-rVCGcLw4SFFuaP2OiOlIn7cL4wY6YQdlgKsSnVn3GgNyami_c_2yQEn" alt="Tarcísio confirma Kassab como secretário de Governo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kassab é visto como um elo entre o futuro governo paulista e o presidente eleito, Luiz Inácio Lula da Silva (PT)</p></div>
            </div>
        </a>
        </Template></>;
}