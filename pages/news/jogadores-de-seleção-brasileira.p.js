import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogadores de Seleção Brasileira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogadores de Seleção Brasileira"/>
        <meta name="description" content="Trending News about Jogadores de Seleção Brasileira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogadores de Seleção Brasileira</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1120%2Fr1093725_1296x729_16%2D9.jpg" alt="Jogadores de Seleção Brasileira"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com.br/futebol/selecao-brasileira/artigo/_/id/11251770/jogadores-da-selecao-adotam-musica-da-torcida-que-exalta-campeoes-do-mundo-e-fazem-a-festa-antes-do-1%C2%BA-treino-veja'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da seleção &#39;adotam&#39; música da torcida que exalta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrrw4ErzFgePRufzqjltUz8N9Plb-dcYs7ZMBg3V9yoZ601lcJA6tGKbJpuB5myBwrvrs4lWYj" alt="Jogadores da seleção &#39;adotam&#39; música da torcida que exalta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção brasileira realiza neste domingo (20) o primeiro treino no Qatar em busca do hexa da Copa do Mundo. Antes da primeira atividade, no entanto,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/brasil/jogadores-da-selecao-brasileira-recebem-surpresa-no-quarto-do-hotel-no-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Seleção Brasileira recebem surpresa no quarto do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRw-Fu8LFNEiCJYcMtO9mKV_tPFFCiI7mSuirD4fPNBifTC0HUV1Hi9MYpuX93k3NFJhJmaREbB" alt="Jogadores da Seleção Brasileira recebem surpresa no quarto do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A CBF está fazendo de tudo para tentar ajudar os jogadores da Seleção Brasileira na Copa do Mundo de 2022. Além de disponibilizar uma área de convívio.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/galerias/saiba-o-time-do-coracao-de-infancia-dos-jogadores-da-selecao-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saiba o time do coração de infância dos jogadores da Seleção da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT44DqEYhXF15sJK_h4YMDv_nlQUdRZZoKrKi69jxbCVhmYMw8NGL5MRHxzhCayh1uMJ2HGH1qD" alt="Saiba o time do coração de infância dos jogadores da Seleção da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todo brasileiro apaixonado por futebol tem um clube do coração, pelo qual torce, vibra e se emociona. Geralmente, esse clube é escolhido na infância,&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecao-brasileira/noticia/2022/11/20/jogadores-da-selecao-recebem-criancas-no-campo-apos-treino-no-catar.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Seleção recebem crianças no campo após treino no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwJjSm1rxBdjSOVHBCS_jM49KqEkoA0RQWEI4nXsyE9JhTBvQ8zcjTNvDc7GqGfBh1nMmxNfcG" alt="Jogadores da Seleção recebem crianças no campo após treino no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em preparação para a estreia, elenco brasileiro fez primeira atividade no país da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.estadao.com.br/esportes/futebol/selecao-brasileira-vestiario-video-catar-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da seleção brasileira fazem batucada e cantam antes de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQepX8Mo7vb-qlD0msFHTy925T6ijc83ZQV9GT1r9MaaeaVWVybnI3_l74aMZM_MOUhkVknorpY" alt="Jogadores da seleção brasileira fazem batucada e cantam antes de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No estádio Grand Hamad, atletas aparecem em ambiente bem animado em uma publicação da CBF no Instagram.</p></div>
            </div>
        </a><a href='https://observatoriodosfamosos.uol.com.br/noticias/copa-do-mundo-saiba-quais-jogadores-da-selecao-brasileira-que-estao-solteiros'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: saiba quais jogadores da Seleção Brasileira que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnPMHw9tuqtmA5H_uOHaNNuKKpiXUXjuZayBtaSoHqq1ZE1r248lsee34OIPuEs05vHNBHnwhC" alt="Copa do Mundo: saiba quais jogadores da Seleção Brasileira que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saiba quais são os jogadores que estão na Seleção Brasileira da Copa do Mundo 2022, e que estão com o status de relacionamento como solteiros.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecao-brasileira/quiz/quiz-voce-reconhece-os-jogadores-da-selecao-brasileira-por-fotos-de-quando-eram-criancas.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quiz: você reconhece os jogadores da seleção brasileira por fotos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7Vj_zqM4Vz3Tox58ncdXmNno4b9X_B0_VuWtK9skkpllvrvD1z9kWQ6001gs9uQCoQnmxMQf8" alt="Quiz: você reconhece os jogadores da seleção brasileira por fotos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Veja 15 imagens e escolha quem é o convocado por Tite para a Copa do Mundo. Os craques Vini Jr, Thiago Silva e Gabriel Jesus são algumas opções disponíveis.</p></div>
            </div>
        </a><a href='https://www.mg.superesportes.com.br/app/noticias/futebol/copa-do-mundo/catar/2022/11/20/catar-2022,3980228/jogadores-da-selecao-cantam-musica-da-torcida-antes-de-treino-veja.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Seleção cantam música da torcida antes de treino; veja</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRiSjSro5KoDv1Gws-Ksuqdq2x4vDMB2Ralzeh5chVEgMyzV-pKANBshMUBN6PKrHamcrOEND_v" alt="Jogadores da Seleção cantam música da torcida antes de treino; veja" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No vestiário do Estádio Grand Hamad, atletas brasileiros cantaram música lançada pelo Movimento Verde e Amarelo na última Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.itatiaia.com.br/editorias/esportes/2022/11/20/jogadores-da-selecao-brasileira-cantam-musica-pelo-hexa-antes-de-treino-no-catar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogadores da Seleção Brasileira cantam música pelo hexa antes de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHr249iP5s1G7OIB9Q6xdBtb9wXSWwMZtqSNOqd4p-Wzv_pNlXm5V0WG4Vl2cECT9AL1UDm5gT" alt="Jogadores da Seleção Brasileira cantam música pelo hexa antes de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Às vésperas da estreia na Copa do Mundo do Catar, os jogadores da Seleção Brasileira foram flagrados cantando a música &quot;Único Penta é o Brasilzão&quot; neste&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}