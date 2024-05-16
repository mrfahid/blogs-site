import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import Image from "next/image";
import { urlFor } from "./lib/sanityImageUrl";
import { Card } from "@/components/ui/card";

async function getData() {
  const query = `*[_type == "post"] | order(_createAt desc) {
    title,
      overview,
      slug,
      titleImage,
      _createdAt
  }`;

  const data = await client.fetch(query);
  console.log(data);

  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 mb-5">
        {data.map((post) => (
          <Card key={post._id} className="p-5">
           
              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className="space-y-3 xl:col-span-3"
              >
                <div>
                  <Image 
                    src={urlFor(post.titleImage).url()} 
                    alt={post.title} 
                    width={500} 
                    height={500}
                    className="object-cover rounded-t-lg h-[200px]" // Adjust as needed
                  />
                  <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                  {post.overview}
                </p>
                <div>
                <p className="text-base font-medium leading-6 text-teal-500">
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>
              </Link>
           
        </Card>
        ))}
      </div>
    </div>
  );
}
