import React from 'react';
import Style from './Post.module.css';
const Graficos = React.lazy(() => import('../Componentes/Graficos'));
const Post = () => {
  const [post, setPost] = React.useState([]);
  const [maisPost, setMaisPost] = React.useState(3);
  React.useEffect(() => {
    fetch(
      `https://dogsapi.origamid.dev/json/api/photo/?_total=${maisPost}&_page=1&_user=0`,
    )
      .then((response) => response.json())
      .then((dados) => {
        setPost(dados);
      });
  }, [maisPost]);

  function mais() {
    if (post.length < 9) {
      setMaisPost(maisPost + 3);
    }
  }

  return (
    <React.Suspense fallback={<div></div>}>
      <div className={Style.postContainer}>
        {post.map((post) => (
          <div key={post.id} className={Style.PostsItem}>
            <div className={Style.infos}>
              <img src={post.src} alt="Foto dog" />
              <h3>{post.title}</h3>
            </div>
            <div className={Style.views}>
              <p>{post.acessos}</p>
            </div>
          </div>
        ))}
        {post.length < 9 && (
          <div className={Style.mais}>
            <p onClick={mais}>+</p>
          </div>
        )}
        <Graficos post={post} />
      </div>
    </React.Suspense>
  );
};

export default Post;
