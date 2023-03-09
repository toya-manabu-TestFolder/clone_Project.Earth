import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/complete.module.css";

export default function Complete() {
  useEffect(() => {
    let cookie: any = document.cookie;

    let id = cookie.match("id=[0-9]")[0];
    id = id.substring(3);
    let deleteParam = {
      user_id: Number(id),
    };
    fetch("http://localhost:3000/api/completeCartDelete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //↓全部のデータを取り扱いたい時
        Prefer: "return=representation",
        //↓更新したいならTOKEN設定
        Authorization: `Bearer ${process.env["POSTGREST_API_TOKEN"]}`,
      },
      body: JSON.stringify(deleteParam),
    });
  }, []);
  return (
    <>
      <Head>
        <title>産チョク／商品購入完了画面</title>
      </Head>
      <main className={styles.completeMain}>
        <section className={styles.message}>
          <h1>商品購入が完了しました！</h1>
          <h3>
            ご購入いただきありがとうございます。商品の到着までお待ち下さい。
          </h3>
        </section>
        <button className={styles.topLinkButton} type="submit">
          <Link href="/">TOPへ戻る</Link>
        </button>
      </main>
    </>
  );
}
