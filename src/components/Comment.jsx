import "../../styles/main.css";
import { ContentBodyCard } from "./TextCommentary";
import { CardHeader } from "./Header";
import Likes from "./LikeCounter";
export const Card = ({ comentario }) => {
  return (
    <article className="content-card">
      <Likes score={comentario.score} />
      <section className="content-comment">
        <CardHeader
          username={comentario.user.username}
          createdAt={comentario.createdAt}
          image={comentario.user.image.png}
        />

        <ContentBodyCard content={comentario.content} />
      </section>
    </article>
  );
};
