export const Blog = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-12" id="blog">
      <div className="pb-8">
        <p className="text-4xl mb-3  pb-1 font-bold primary-color">Blog</p>
        <p className="text-gray-400">Check out some of my recent blogs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-110">
          <h2 className="text-2xl font-semibold text-primary-color mb-4">Blog Post Title 1</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>
        <article className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-110">
          <h2 className="text-2xl font-semibold text-primary-color mb-4">Blog Post Title 2</h2>
          <p className="text-gray-400">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <article className="bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-110">
          <h2 className="text-2xl font-semibold text-primary-color mb-4">Blog Post Title 3</h2>
          <p className="text-gray-400">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
    </div>
  );
};
