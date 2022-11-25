import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NFL</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NFL"/>
        <meta name="description" content="Trending News about NFL" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NFL</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/6OEXVGg9exGNZBmcUU10C1RuVt8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/r/j/0diZezQ62M3C1gUainfw/gettyimages-1356063550.jpg" alt="NFL"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol-americano/noticia/2022/11/24/nfl-aaron-rodgers-revela-jogar-lesionado-desde-a-semana-5.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL: Aaron Rodgers revela jogar lesionado desde a semana 5</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQE5FUGP7UFgKWcH5Een3kJFCJeDuyInPbBqFAasTuSmSZVTKDFS9QMGeow6qRL2g1xHPO0oAi" alt="NFL: Aaron Rodgers revela jogar lesionado desde a semana 5" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quarterback do Green Bay Packers afirma que tem de lidar com o polegar machucado desde a derrota para o New York Giants, mas não vê relação com a má fase da&nbsp;...</p></div>
            </div>
        </a><a href='https://br.bolavip.com/esportes/NFL-Aaron-Rodgers-revela-estar-atuando-lesionado-desde-a-semana-5-Quarterback-sofre-com-uma-lesao-no-polegar-20221124-0183.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL: Aaron Rodgers revela estar atuando lesionado desde a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5iscumur665P7gYWfyfPGKgOvnEn5XcN2Bhvodmv0lwUED9T6RvX5b1UtHtsmle2eqMQNP--9" alt="NFL: Aaron Rodgers revela estar atuando lesionado desde a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O veterano do Packers admitiu o problema em entrevista na última quarta-feira (23)</p></div>
            </div>
        </a><a href='https://www.theplayoffs.com.br/nfl/aaron-rodgers-admite-que-vem-jogando-com-dedo-quebrado-desde-a-semana-5/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aaron Rodgers admite que vem jogando com dedo quebrado desde ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOqXXsoW5WunIOYwIMwBgERTt3Z8-VgE7kbhDppECiwr7Fso3LvOXQvkgLtIzCQlbK1uyu_xar" alt="Aaron Rodgers admite que vem jogando com dedo quebrado desde ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O quarterback do Green Bay Packers Aaron Rodgers admitiu, nesta quarta-feira (23), que tem jogado com o dedo polegar da mão direita quebrado.</p></div>
            </div>
        </a>
        </Template></>;
}