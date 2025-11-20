export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome Beverly 👋</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        This is Week 3 React + Tailwind CSS project.  
        Explore your Task Manager, interact with API data, and enjoy Dark Mode!
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <a
          href="/tasks"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Go to Tasks
        </a>

        <a
          href="/api"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        >
          View API Data
        </a>
      </div>
    </div>
  );
}
