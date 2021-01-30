import React, { useEffect } from "react";
import MainTemplate from "../components/templates";
import CardsContainer from "../components/Card/CardsContainer";
import ControlPanel from "../components/Controls";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  getJokesInfo,
  selectJokes,
  setActiveCategory,
  getJokes,
  searchJokes,
} from "store/jokes";

const JokeAppView = () => {
  const dispatch = useDispatch();
  const {
    categories,
    jokeCategory,
    totalNumOfJokes,
    allJokes,
    error,
    errorMessage,
  } = useSelector(selectJokes);

  const handleSearchJokes = (search: string) =>
    dispatch(searchJokes({ category: jokeCategory, contains: search }));

  const handleSetActiveCategory = (category: string) =>
    dispatch(setActiveCategory(category));

  useEffect(() => {
    dispatch(getJokesInfo());
  }, []);

  useEffect(() => {
    dispatch(getJokes({ category: jokeCategory }));
  }, [jokeCategory]);

  return (
    <MainTemplate>
      <>
        <ControlPanel
          handleSetActiveCategory={handleSetActiveCategory}
          categories={categories}
          currentCategory={jokeCategory}
          totalCount={totalNumOfJokes}
          handleSearchJokes={handleSearchJokes}
        />
        {error && errorMessage ? (
          <ErrorMessage message={errorMessage} />
        ) : (
          <CardsContainer allJokes={allJokes} />
        )}
      </>
    </MainTemplate>
  );
};

export default JokeAppView;
