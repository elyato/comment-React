import { createPortal } from "react-dom";
import { Card } from "./components/Comment";
import { useState } from "react";
import { comments } from "./components/data/data.js";
import { YouProfile } from "./components/YouProfile";
function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && createPortal(<YouProfile />, document.body)}
      {comments.map((comentario) => (
        <section key={comentario.id}>
          <Card comentario={comentario} />

          {comentario.replies.length > 0 && (
            <section className="container-replies">
              <Card comentario={comentario.replies[0]} />
              <Card comentario={comentario.replies[1]} />
            </section>
          )}
        </section>
      ))}
    </>
  );
}

export default App;
