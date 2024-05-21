
import Link from "next/link";
import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";
import Image from "next/image";
import { urlFor } from "./lib/sanityImageUrl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

async function github() {
  const data = await fetch(`https://api.github.com/users/mrfahid`);
  const json = await data.json();

  try {
    return json;
  } catch (err) {
    console.log(err);
  }
}
export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  const githubData = await github();
  console.log(data);
  console.log(githubData);

  return (
    <>
      <div className="mt-8 flex">
        <div className="flex flex-[50px] justify-center items-center">
          <Image
            src={githubData.avatar_url}
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer object-cover rounded-full"
          ></Image>
        </div>
        <div className="flex-[400px] pointer-events-none">
          <h2>I am Shah Fahid</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {githubData.bio}
          </p>
          
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5 mb-5 border-b-[1px] border-t-[1px] p-3 dark:border-indigo-900 ">
        {data.map((post, idx) => (
          <Card
            key={idx}
            className="dark:border-zinc-400 shadow-2xl hover:border-indigo-900 hover:transition-all dark:hover:border-green-900"
          >
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
