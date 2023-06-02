import getWikiResults from "@/lib/getWikiResults"
import SearchItem from "./components/item";
type Props = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({params: {searchTerm}}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if(!data?.query?.pages) {
    return {
      title: `${displayTerm} not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  }
}


export default async function SearchResults({params: {searchTerm}}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages

  return (
    <main className="bg-slate-200 py-2 min-h-screen">
      <div className="container mx-auto text-slate-800 flex flex-col justify-center items-center">

        <div className="py-6">
          <h1 className="text-2xl">Search results for <strong>{searchTerm.replaceAll("%20", " ")}</strong></h1>
        </div>

      
      {results ? Object.values(results).map(result => (
        <SearchItem key={result.pageid} result={result} />
      )) : 
        <h2 className="p-2 text-xl">{`${searchTerm} not found`}</h2>
      }
      </div>
    </main>
  )
}
