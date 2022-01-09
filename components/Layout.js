import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="icon"
          href="https://parsinta.com/favicons/apple-touch-icon.png?v=3ewwoaowER"
        />
      </Head>
      {props.children}
    </div>
  );
}
