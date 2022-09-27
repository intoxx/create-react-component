import Head from "next/head";
import TagGrid from "components/TagGrid";
import TagRow from "components/TagRow";
import Tag from "components/Tag";

const tags = ["Startups", "Tech personalities", "Language learning", "Marketing", "NASA"];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create React Component</title>
        <meta name="description" content="Generated by create react component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TagGrid className="space-y-2 p-4">
          <TagRow className="">
            {tags.map(e =>
              <Tag
                key={e}
                href={`/${e.toLowerCase()}`}
                className="text-sm tracking-tight whitespace-nowrap bg-black border shadow rounded-2xl px-5 py-1 text-white font-semibold"
              >
                {e}
              </Tag>
            )}
          </TagRow>
        </TagGrid>
      </main>
    </>
  )
}
