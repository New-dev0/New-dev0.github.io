import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mark Allen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mark Allen"/>
        <meta name="description" content="Trending News about Mark Allen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mark Allen</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/c160f37eaec14c13f95be1e45440b54b145b55cf/0_117_3500_2102/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=38b9154503b977ef86d911194bc66670" alt="Mark Allen"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/sport/2022/nov/20/mark-allen-fights-back-to-stun-ding-junhui-and-win-uk-championship'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Allen fights back to stun Ding Junhui and win UK Championship</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSn2ivFX-TDxtix0mNWuR2KX5h8HcaCh1FPZ7EUuvMAavzz4s_I9eTtymKz495r0bV2VqTiVEj-" alt="Mark Allen fights back to stun Ding Junhui and win UK Championship" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Allen trailed Ding Junhui 6-1 but battled back to win 10-7 and claim his second triple crown title after his Masters triumph in 2018.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/snooker/uk-championship/2022-2023/wow-mark-allen-makes-incredible-pot-along-bottom-rail-in-uk-championship-final_vid1779718/video.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Wow!&#39; – Mark Allen makes incredible pot along bottom rail in UK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMFxOhN8WZByxk8XgSgj_prHw_7IkSuesSCAR8urCp3iaUhAu25OBLBZkqO42tqfl2pMNZ_VPW" alt="&#39;Wow!&#39; – Mark Allen makes incredible pot along bottom rail in UK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A filthy shot from Mark Allen along the bottom rail on frame ball, having earlier shanked the same red, saw the Northern Irishman grab the first session&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/other-sports/snooker/ding-mark-allen-uk-championship-28541145'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Allen completes remarkable comeback over Ding Junhui to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlmUaVs4dcVirbprwy1SsKX9L0WXawt9o6n6EJG-iokBnpFoTgtjhGA76eKzOWqrGNUsuStOea" alt="Mark Allen completes remarkable comeback over Ding Junhui to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Allen looked down and out at the halfway stage, after finding himself 6-1 down in frames but the Northern Irishman played out an astonishing comeback&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.co.uk/snooker/uk-championship/2022-2023/mark-allen-praised-for-brilliant-sportsmanship-despite-foul-in-uk-championship-final-he-asked-the-re_sto9237342/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Allen praised for &#39;brilliant&#39; sportsmanship despite foul in UK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRhIwtp2XUmpbVpNU3k0eBESMsXV-w7XWHxkDapQVxPSRxDmgvlOjafyuVXeiZWIIwAUu2U8k0V" alt="Mark Allen praised for &#39;brilliant&#39; sportsmanship despite foul in UK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Allen continued snooker&#39;s rich tradition of sportsmanship with a brave call during his UK Championship final with Ding Junhui at the York Barbican.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/other-sport/snooker/ronnie-osullivan-allen-uk-championship-28541099'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronnie O&#39;Sullivan slams Mark Allen for &#39;worst performance ever ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTq3srrw6Qd-elumzGyxJaO2whl7colrW-XmerbL8sRMF5rSQLEhFkSt3XLtfpgfDfd6urXovp" alt="Ronnie O&#39;Sullivan slams Mark Allen for &#39;worst performance ever ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Allen made a poor start to his UK Championship final against Ding Junhui - and his performance was ripped apart by seven-time world champion Ronnie&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/snooker/63691850'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Allen produces stunning comeback to win UK title</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKVhX4kffDgtCdLK8b-92nkz5Zm6GGJG_ftcTin5dDZ2cMERrGTqh4nRnziLf1Yk1tKxBvJ9U5" alt="Allen produces stunning comeback to win UK title" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Allen produces a sensational recovery as he fights back from 6-1 down to beat Ding Junhui 10-7 for his first UK Championship title.</p></div>
            </div>
        </a><a href='https://www.belfasttelegraph.co.uk/sport/othersports/mark-allen-produces-another-big-comeback-to-claim-uk-championship-title-with-victory-over-ding-junhui-42159720.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Allen produces another big comeback to claim UK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQw3BlyDBRtnpC4Sx0tiFpO3SNnFkToGIHDl3fCsBLMkdTQFRd1pfRF412Kqm4WezAjNnStPTak" alt="Mark Allen produces another big comeback to claim UK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Allen conjured the required magic for an epic 10-7 comeback victory over Ding Junhui in the Cazoo UK Championship final in York – to become the first&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}