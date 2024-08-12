
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.loadMore} onClick={onClick}>
      Load more
    </button>
  );
}


