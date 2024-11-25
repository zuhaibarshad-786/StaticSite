// import { getPostData } from '../lib/posts';


// export default function Home({ postData }) {
//   const { data, content } = postData;
//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: content }} />
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const postData = getPostData();
//   return {
//     props: {
//       postData,
//     },
//   };
// }


// import Head from 'next/head';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>My Static Site</title>
//         <meta name="description" content="This is a sample static site." />
//         <meta property="og:title" content="My Static Site" />
//         <meta property="og:description" content="This is a sample static site using Next.js." />
//       </Head>
//       <h1>Welcome to My Static Site</h1>
//     </>
//   );
// }

// .................My updated code......
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="A beautifully styled static site built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My Static Site" />
        <meta property="og:description" content="A visually appealing static site using Next.js" />
      </Head>

      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Welcome to My Static Site</h1>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <Image
          src="/front.png" 
          alt="An example beautiful static site"
          width={600}
          height={400}
          style={styles.image}
        />
        <p style={styles.paragraph}>
          This is a sample static site built with Next.js. Explore the power of static site generation!
        </p>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Zohaib Arshad. All rights reserved.</p>
      </footer>
    </>
  );
}

// Inline Styles
const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
  },
  headerText: {
    margin: 0,
    fontSize: '2rem',
  },
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    borderRadius: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px',
  },
};
