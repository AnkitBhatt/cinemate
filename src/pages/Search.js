import { useSearchParams } from "react-router-dom";
import { useFetch, useTitle } from "../hooks";
import { Card } from "../components"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const { data } = useFetch(apiPath, queryTerm)
  const movies = data.results;

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-grey-700 dark:text-white">{movies && movies.length > 0 ? `Result for '${queryTerm}'` : `No result found for '${queryTerm}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
