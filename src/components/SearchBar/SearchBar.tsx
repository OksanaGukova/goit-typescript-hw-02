import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { SearchBarProps } from "../App/App.types";

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const notify = () => toast("Please enter text for the image search");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const searchQuery = query.trim();

    if (searchQuery === "") {
      notify();
      return;
    }

    onSubmit(searchQuery);
    setQuery("");
  };

  return (
    <div className={css.container}>
      <header>
        <form className={css.header} onSubmit={handleFormSubmit}>
          <div className={css.search}>
             <button type="submit" className={css.searchButton}>
            <FaSearch />
            </button>
            <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
            className={css.input}
          />
          </div>
        </form>
        <Toaster position="top-right" />
      </header>
    </div>
  );
}
