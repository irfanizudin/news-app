import Image from "next/image";
import Layout from "../../components/Layout";

const postDetails = ({ filterPost }) => {
  const { title, urlToImage, description, content, author, publishedAt, url } = filterPost[0];
  const date = new Date(publishedAt);
  const localTime = date.toLocaleString();

  return (
    <Layout title={title} description={content === "" ? description : content} image={urlToImage}>
      <div className="mt-[60px] mb-[50px] flex flex-col items-center px-[20px] sm:px-[100px] md:px-[200px] lg:px-[300px] xl:px-[400px]">
        <h1 className="text-xl font-bold capitalize mb-8">{title}</h1>
        <Image
          src={urlToImage}
          alt={title}
          width={800}
          height={400}
          className="object-cover rounded-lg"
        />
        <div className="w-full flex justify-between mt-3 text-xs md:text-sm text-black/50">
          <p>Published at {localTime}</p>
          <p>Author: {author === null ? "CNN" : author}</p>
        </div>
        <p className="mt-3 text-base md:leading-7 text-justify">{description}</p>
        <a
          className="w-full text-center mt-5 px-[10px] py-[10px] bg-gray/80 font-medium text-black/40 hover:text-black/60 rounded-lg cursor-pointer hover:bg-gray/100"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See original post
        </a>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (query) => {
  const slug = query.params.slug;
  const res = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json");
  const posts = await res.json();
  const filterPost = posts.articles.filter(
    (post) => post.title.split(" ").join("-").toLowerCase() === slug
  );
  return {
    props: { filterPost },
  };
};

export default postDetails;
