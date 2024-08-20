import SectionTitle from "../Common/SectionTitle";
import SingleArticle from "./SingleArticle";
import articleData from "./ArticleData";

const Articles = () => {
  return (
    <section
      id="articles"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {articleData.map((article) => (
            <div key={article.id} className="w-full">
              <SingleArticle article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
