export default function Home() {
  return (
    <main className="flex flex-col h-[1000px]">
      <div className="flex flex-row gap-6 w">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="flex flex-col">
            <div className="bg-slate-800 min-h-64 p-5 pb-12 rounded w-96">
              <h2 className="text-xl font-semibold mb-3">Board #1</h2>
              <div className="bg-gray-900 w-full rounded flex flex-col p-4 space-y-3">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="bg-gray-950 p-3 rounded">
                    <h3 className="text-sm font-semibold">To Do</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col">
          <div className="bg-gray-800 min-h-64 px-6 py-4 pb-12 rounded w-96">
            <h2 className="text-xl font-semibold mb-3">Board #1</h2>
            <div className="bg-gray-900 w-full rounded flex flex-col p-4 space-y-3">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="bg-gray-950 p-3">
                  <h3 className="text-sm font-semibold">To Do</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
