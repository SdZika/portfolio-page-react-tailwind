import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  description: string;
  blogs: any;
  url: string;
  id: number;
}

export const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=sdzika")
      .then((response) => {
        return response.json();
      })
      .then((data: BlogPost[]) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  const filterdBlogs = blogs.filter((blog, index) => index < 3);

  return (
    <div className="max-w-[1200px] mx-auto py-12" id="blog">
      <div className="pb-8 mx-6">
        <p className="text-4xl mb-3  pb-1 font-bold primary-color">Blog</p>
        <p className="text-gray-400">Check out some of my recent blogs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
        {filterdBlogs &&
          filterdBlogs.map((blog, index) => (
            <a key={blog.id} href={blog.url} target="_blank" rel="noreferrer">
              <article className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-2xl font-semibold text-primary-color mb-4">
                  {blog.title}
                </h2>
                <p className="text-gray-400">{blog.description}</p>
              </article>
            </a>
          ))}
      </div>
    </div>
  );
};
