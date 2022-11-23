import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cristiano Ronaldo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cristiano Ronaldo"/>
        <meta name="description" content="Trending News about Cristiano Ronaldo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cristiano Ronaldo</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/r1HPaQYSUg6W66yjRdLR4-cWr7o=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/U/M3KThWSvmIobXeoIKrKw/2022-10-27t204304z-2106604607-up1eiar1ljqsg-rtrmadp-3-soccer-europa-mun-she-report.jpg" alt="Cristiano Ronaldo"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/futebol-internacional/futebol-ingles/noticia/2022/11/22/manchester-united-rescinde-com-cristiano-ronaldo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United e Cristiano Ronaldo rescindem contrato</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPgUXrIWPZF-YuW-HZAC7zw58tHZc8Vxq9aofRGbgcx__7SyBR-FToa913CoCilKdDFxQhEC1F" alt="Manchester United e Cristiano Ronaldo rescindem contrato" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Equipe inglesa anuncia a saída do atacante português em comum acordo; veja motivos para o fim da Era CR7 nos Red Devils e possíveis destinos para o craque&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/manchester-united-anuncia-saida-de-cristiano-ronaldo.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United anuncia saída de Cristiano Ronaldo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5mtDdFi4DKS2ogHCKWZpnfQtDxiCE2KcdKNCEgWuSn2kMwKZLzNTljVNtm46uTw3IYFywyl2f" alt="Manchester United anuncia saída de Cristiano Ronaldo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Craque português e clube chegaram a acordo mútuo, segundo nota oficial.</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/manchester-united-anuncia-acordo-cristiano-ronaldo-nao-joga-mais-pelo-clube-ingles-25613253.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United anuncia acordo, e Cristiano Ronaldo não joga ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnzIhFNs8RjuM7PxWRQyUzB4i-_uYabsmibGuYuQvzWzW8o7PonimlJUul1oGExEc3aR-QAQ_8" alt="Manchester United anuncia acordo, e Cristiano Ronaldo não joga ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo não é mais jogador do Manchester United. Nesta terça-feira, o clube inglês divulgou nota oficial informando que chegou a um acordo para...</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/esportes/cristiano-ronaldo-e-manchester-united-rompem-contrato/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo e Manchester United rompem contrato</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReSUzJx6mfD0f1Gr5V7HbzGWQeq1QIXFQAPMb70OsvoGlYjB8-6gj_AAQxJCxqbB55LLr2NqhR" alt="Cristiano Ronaldo e Manchester United rompem contrato" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A decisão foi em comum acordo; o salário de R$ 3,3 milhões por semana do atleta é o maior da Premier League. Leia no Poder360.</p></div>
            </div>
        </a>
        </Template></>;
}