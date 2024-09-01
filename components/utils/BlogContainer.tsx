const BlogContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center w-3/4 pb-16 mt-8 lg:max-w-screen-md lg:items-start lg:mx-auto">
      {children}
    </section>
  );
};

export default BlogContainer;
