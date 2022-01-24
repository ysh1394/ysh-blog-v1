import Head from "next/head";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>ysh`s blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>This is Medium 2.0</h1>
    </div>
  );
}
