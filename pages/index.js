import { getPostData } from '../lib/posts';

export default function Home({ postData }) {
  const { data, content } = postData;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticProps() {
  const postData = getPostData();
  return {
    props: {
      postData,
    },
  };
}
