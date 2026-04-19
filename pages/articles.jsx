// Articles page - displays blog posts
import Head from "next/head";
import Link from "next/link";
import { supabase } from "../src/lib/supabaseClient";
import Layout from "../src/components/Layout";

export const metadata = {
  title: "Articles - Poshak Tattva",
  description: "Read our latest articles on holistic wellness, functional yoga, clinical nutrition, and sound healing. Expert insights for reversing chronic lifestyle disorders naturally."
}

export async function getServerSideProps() {
  const { data: articles } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
  return { props: { articles: articles || [] } };
}

export default function Articles({ articles }) {
  return (
    <Layout>
      <Head>
        <title>Articles - Poshak Tattva</title>
        <meta name="description" content="Read our latest articles on yoga, sound healing, and holistic health." />
      </Head>

      <section className="wrapper py-12">
        <div className="container">
          <div className="row">
            <div className="col-12 article-hero">
              <h1 className="display-4 fw-bold text-center mb-5">Articles</h1>
              <p className="text-muted text-center mb-10">Explore our insights on sound healing, yoga, and integrative health practices.</p>
            </div>
          </div>

          <div className="row">
            {articles.map((article) => (
              <div key={article.id} className="col-md-4 mb-4">
                <div className="card h-100 article-card">
                  {article.image_url && (
                    <img src={article.image_url} className="card-img-top" alt={article.title} />
                  )}
                  <div className="card-body article-card-body">
                    <h5 className="card-title article-card-title">{article.title}</h5>
                    <div className="card-text article-card-copy" dangerouslySetInnerHTML={{ __html: article.content.split('\n').slice(0, 2).join('<br>') + '...' }} />
                    <Link href={`/article/${article.id}`} className="btn btn-primary mt-3">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .article-hero p {
          max-width: 760px;
          margin: 0 auto;
          color: #4f575d;
          font-size: 1rem;
          line-height: 1.75;
        }

        .article-card-body {
          padding: 1.4rem;
        }

        .article-card-title {
          font-size: 1.25rem;
          line-height: 1.35;
          font-weight: 700;
          color: #132a24;
          margin-bottom: 0.85rem;
        }

        .article-card-copy {
          color: #4e5355;
          font-size: 0.98rem;
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .article-card {
          border: 1px solid rgba(31, 61, 43, 0.08);
          border-radius: 18px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          background: #fff;
        }

        .article-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 50px rgba(31, 61, 43, 0.08);
        }
      `}</style>
    </Layout>
  );
}