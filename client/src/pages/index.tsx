import Head from 'next/head';

import Header from '@/components/Header';
import { sanityClient, urlFor } from '@/sanity/sanity';
import { Category, Post } from '@/@types/typings';
import Link from 'next/link';

interface Props {
  posts: Post[];
  categories: Category[];
}

const Home = ({ posts, categories }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>ysh's Blog</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-10 ">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4 ">
              Medium
            </span>{' '}
            is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="logo"
        />
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:pd-6">
        {posts.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">
                      {post.description} by {post.author.name}
                    </p>
                  </div>

                  <img
                    className="w-12 h-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const postQuery = `
    *[_type == "post"]{
      _id,
      _createdAt,
      title,
      author -> {
        name,
        image
      },
      description,
      mainImage,
      slug,
      publishedAt,
      categories[] -> {
        _id,
        title,
        description
      }
    } 
  `;

  const categoryQuery = `
  *[_type == "category"]{
    _id,
    title,
    description
  }
  `;

  const posts = await sanityClient.fetch(postQuery);
  const categories = await sanityClient.fetch(categoryQuery);

  return {
    props: {
      posts,
      categories,
    },
  };
};
