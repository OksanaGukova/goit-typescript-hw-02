import { ErrorMessageProps } from "../App/App.types";
import css from './ErrorMessage.module.css'

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className={css.error}>{message}</div>;
}



