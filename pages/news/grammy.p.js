import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Grammy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Grammy"/>
        <meta name="description" content="Trending News about Grammy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Grammy</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/0U5v84jHXI8Iac8DMRPoaM6gdn0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/l/A/1A4lcITcmWXQnyiGltcA/rirbbc11.jpg" alt="Grammy"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/pop-arte/musica/noticia/2022/11/15/grammy-2023-anuncia-indicados-com-anitta-revelacao-e-beyonce-recordista-veja-lista.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grammy 2023 anuncia lista e Beyoncé vira recordista como artista ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDgP8bBntuaFfPOXenCeeI3S77RyUjPNFCKktU-EAsK4aesfpK_qELQfThZr3YQY9sETDkoR6k" alt="Grammy 2023 anuncia lista e Beyoncé vira recordista como artista ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Anitta foi indicada na categoria artista revelação. Entre seus concorrentes está a banda Måneskin. Adele e Harry Styles estão indicados em sete&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/coluna/o-som-e-a-furia/anitta-indicada-ao-grammy-2023-confira-a-lista-completa-ao-premio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta é indicada ao Grammy 2023: confira a lista completa ao prêmio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFQl_37H1x5yZs3MwpKFFjKeEif4xFX6SdKJGEC2zfD4auTF_HV33M2PZkaAhiBD792wq2hhDe" alt="Anitta é indicada ao Grammy 2023: confira a lista completa ao prêmio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora brasileira Anitta está entre os indicados na categoria de artista revelação junto com Domi &amp; JD Beck, Latto, Måneskin, Molly Tuttle, Muni Long, Omar&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/ilustrada/2022/11/grammy-2023-anitta-e-indicada-ao-premio-confira-a-lista-completa.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grammy 2023: Beyoncé tem 9 indicações e Anitta entra como ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWwquAowUTa8dTWT-uiTKt0vzLRYZdzhrrtF2YWubwv-MOnjFkOBAPi8uv4nyG-MgUtW1T7FtX" alt="Grammy 2023: Beyoncé tem 9 indicações e Anitta entra como ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kendrick Lamar, Brandi Carlile e Adele também são destaques; premiação acontece em fevereiro de 2023.</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/cultura-e-lazer/noticia/2022/11/grammy-2023-anitta-e-indicada-a-revelacao-do-ano-veja-a-lista-dos-concorrentes-claikty5w004f01g2j11plcmu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Grammy 2023: Anitta é indicada a Revelação do Ano; veja a lista ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Grammy 2023: Anitta é indicada a Revelação do Ano; veja a lista ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com participação de nomes como Olivia Rodrigo, Luiz Fonsi e John Legend na live que divulgou os candidatos, a Recording Academy elencou os concorrentes nas&nbsp;...</p></div>
            </div>
        </a><a href='https://gshow.globo.com/tudo-mais/pop/noticia/anitta-comemora-indicacao-ao-grammy-nunca-imaginaria.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anitta comemora indicação ao Grammy: &#39;Nunca imaginaria&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUheCr_UCVnbiCZJaMa02cH7Gd2cKaDuzfiybrL5f5RpU1CS1z7VXSPZDetE61Gs50uRFqS-q5" alt="Anitta comemora indicação ao Grammy: &#39;Nunca imaginaria&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantora concorre a Best New Artist na premiação que será realizada em fevereiro de 2023; nome foi anunciado por Olivia Rodrigo, vencedora do mesmo prêmio na&nbsp;...</p></div>
            </div>
        </a><a href='https://cultura.uol.com.br/entretenimento/noticias/2022/11/15/5332_indicados-para-o-grammy-awards-sao-anunciados-veja-a-lista.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indicados para o Grammy Awards são anunciados; veja a lista</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRugcCByc2q48QbJ-4hMM2zCuyUddRfTf4u4Te_r5hhbh9FID0bmgoJ564tz20qa0_bEs2xJ0rD" alt="Indicados para o Grammy Awards são anunciados; veja a lista" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Recording Academy anunciou, em transmissão ao vivo desta terça-feira (15), a lista de indicados à 65ª edição do Grammy Awards. A cerimônia está marcada para o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}