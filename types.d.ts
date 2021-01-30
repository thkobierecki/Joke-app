type IJoke = {
  category: CategoryType;
  flags: any;
  id: number;
  joke?: string | null;
  delivery?: string;
  setup?: string;
  lang: string;
  safe: boolean;
  type: "single" | "twopart";
};

type CategoryType =
  | "Any"
  | "Misc"
  | "Programming"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas";

interface IJokeState {
  allJokes: IJoke[];
  jokeCategory: CategoryType;
  categories: CategoryType[];
  totalNumOfJokes: number | null;
  error: boolean;
  errorMessage: string | null;
}

interface JokeInfoRes {
  categories: CategoryType[];
  totalCount: number;
}

interface GetJokesRes {
  error: boolean;
  amount: number;
  jokes: IJoke[];
}
