import IconPlus from "../assets/svg/icon-plus.svg";
import IconMinus from "../assets/svg/icon-minus.svg";
const Likes = ({ score }) => {
  return (
    <aside>
      <div className="button-likes">
        <button className="icon-plus">
          <img src={IconPlus} className="icon-plus1" alt="" />
        </button>
        <h2>{score}</h2>
        <button className="icon-minus">
          <img src={IconMinus} className="icon-minus1" alt="" />
        </button>
      </div>
    </aside>
  );
};

export default Likes;
