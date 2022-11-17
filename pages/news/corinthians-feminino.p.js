import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Corinthians Feminino</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Corinthians Feminino"/>
        <meta name="description" content="Trending News about Corinthians Feminino" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Corinthians Feminino</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/02/13/615x300/1_51872701786_468fdfa4f6_k-20565962.jpg" alt="Corinthians Feminino"/>
            <h3>Recent News</h3>
            <a href='https://interior.ne10.uol.com.br/esportes/2022/11/15121801-jogo-do-corinthians-feminino-hoje-onde-assistir-corinthians-x-santos-pelo-paulistao-feminino-saiba-qual-canal-vai-transmitir-corinthians-x-santos-ao-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>JOGO DO CORINTHIANS FEMININO HOJE: Onde assistir ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRO7xEHHrFjQEb89DRx8VqxuqffheV5kC-yaB5oa3dNHkyeC1EiFPxEJOlI4KbZ5m3wN4SYqtyC" alt="JOGO DO CORINTHIANS FEMININO HOJE: Onde assistir ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Corinthians enfrenta o Santos em jogo da 9ª rodada do Paulistão Feminino de 2022.</p></div>
            </div>
        </a><a href='https://www.meutimao.com.br/noticias-do-corinthians/434626/corinthians-recebe-o-santos-na-neo-quimica-arena-para-se-manter-vivo-no-paulista-feminino'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corinthians recebe o Santos na Neo Química Arena para se manter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhmEzY00Es3e2TBSFG3E_FhApksxo3154L1nvweHreaNAx7MWAIzxAFKOgm8Ypg_SV3yEf1Z-F" alt="Corinthians recebe o Santos na Neo Química Arena para se manter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta quarta-feira, o Corinthians recebe o Santos buscando se manter vivo no Campeonato Paulista Feminino. A bola rola às 19h30, na Neo Química Arena.</p></div>
            </div>
        </a><a href='https://www.meutimao.com.br/noticias-do-corinthians/434658/corinthians-relembra-titulo-sobre-o-sao-paulo-pelo-paulista-feminino-de-2019'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corinthians relembra título sobre o São Paulo pelo Paulista ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQB7sLc27LJiVycVDoTVX6W9daRZBrf6MvrJh5s67cVc7gUlepZ-tmeN5QC929fHa41jdyl8XcZ" alt="Corinthians relembra título sobre o São Paulo pelo Paulista ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Corinthians utilizou as redes sociais para relembrar o troféu do Paulista Feminino de 2019, conquistado diante do São Paulo após triunfo por 3 a 0 na Neo&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/futebol-na-tv/2022/11/15121761-corinthians-x-santos-onde-assistir-ao-vivo-e-horario-da-partida-do-paulistao-feminino-desta-quarta-feira-16.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CORINTHIANS X SANTOS: Onde assistir AO VIVO e horário da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7mwpkg9IrAmt5AY_7tvY-eeXwCCmcdGX8WdZp5Uy0ZD_iFKK8oy0sjs-rfHaTavWmp0eQvvEI" alt="CORINTHIANS X SANTOS: Onde assistir AO VIVO e horário da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O clássico é válido pela 9ª rodada do Paulistão Feminino 2022.</p></div>
            </div>
        </a><a href='https://identidadecorinthiana.com/corinthians-recebe-o-santos-pelo-paulista-feminino/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corinthians recebe o Santos pelo Paulista Feminino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUomxCG1pg5ZpXsQWDFJHQ5rd6SarMmk5OliHBYsQhI7mw9jr6SSJ4sQDX-6uxJEa4IeKkUdcp" alt="Corinthians recebe o Santos pelo Paulista Feminino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta quarta-feira, o Corinthians recebe o Santos em partida válida pelo Campeonato Paulista Feminino. O duelo acontece, às 19h30 (Brasília)</p></div>
            </div>
        </a><a href='https://www.diariodopeixe.com.br/noticias/sereias-perdem-para-o-corinthians-pelo-paulista-feminino/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sereias perdem para o Corinthians pelo Paulista Feminino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfucJeUCZsQTrGaUpKQez_OgPqE4mDySDEkYpaRhCHqpzCssGkMmdOBbaRsaMMm7C2mdOsO0zI" alt="Sereias perdem para o Corinthians pelo Paulista Feminino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As Sereias da Vila foram derrotadas por 1 a 0 na noite desta quarta-feira (16), na Neo Química Arena, em jogo válido pelo Campeonato Paulista Feminino.</p></div>
            </div>
        </a><a href='https://www.futebolstats.com.br/corinthians-x-santos-como-assistir-o-jogo-ao-vivo-campeonato-paulista-feminino-358673/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como assistir Corinthians x Santos Futebol AO VIVO Campeonato ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvzjvhyqRqLHLh3WyHZF_9pdYC0LCx3Jv-22hF2532m1zy_oE7AzSoiKbFA-zE9l-GUQ-RNbbf" alt="Como assistir Corinthians x Santos Futebol AO VIVO Campeonato ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo entre as duas equipes vai ser válido pelo Campeonato Paulista Feminino. O jogo está programado para começar às 19h30 (horário de Brasília). Obtenha mais&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}