import Image from "next/image";
import Link from "next/link";

const Card = ({ post }) => {
  const { urlToImage, title, description } = post;
  const slug = title.split(" ").join("-").toLowerCase();

  return (
    <Link href={`post/${slug}`}>
      <a className="w-[400px] h-[280px] bg-white border border-black/25 rounded-lg overflow-hidden">
        <Image src={urlToImage} alt={title} width={400} height={200} className="object-cover" />
        <div className="px-4">
          <h2 className="text-sm font-medium capitalize line-clamp-2">{title}</h2>
          <p className="truncate text-black/50 text-sm">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
