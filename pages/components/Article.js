const Article = (props) => {
  const {error, article} = props;

  const handleArticleError = (statusCode) => {
    if (statusCode === 204) {
      return (
        <p>This Entry does not exist in our database.</p>
      );
    }
    else if (statusCode === 403) {
      return (
        <>
          <h3>You are forbidden from reading this Entry</h3>
          <p>This requires logging into our website.</p>
        </>
      );
    }
  };
  
  const formatArticle = (article) => {
    return (
      <>
        <h2>{article.title}</h2>
        <h4>By {article.author}</h4>
        <p>{article.story}</p>
      </>
    )
  }
  
  return (
    <article className="c-content__article">
      {error ? 
        handleArticleError(error) :
        formatArticle(article)
      }

      {style()}
    </article>
  )
}

function style() {
  return <style jsx="true">{`
    .c-content__article {
      text-align: left;
      margin: auto;
      line-height: 2rem;
      font-family: Georgia;
      font-size: 1.2rem;
      width: 65%;
    }

    .c-content__article h2 {
      font-size: 3rem;
      margin-bottom: 0.1rem;
    }
    .c-content__article h4 {
      margin-top: 1rem;
    }

    .c-content__article h2, .c-content__article h4 {
      font-family: sans-serif;
    }
  `}</style>
}

export default Article;