import GitHubCalendar from 'react-github-calendar';
import Title from './Title';

const GithubGraph = () => {
  const username = "Tejas-b463";

  return (
    <div id='github' className="md:mx-16 p-6 rounded-xl bg-black shadow-md">
      <Title text="GitHub Stat's 💚" className='flex flex-col items-center justify-center -rotate-6' />

      {/* Contribution Calendar */}
      <div className="overflow-x-auto mt-12">
        <GitHubCalendar
          username={username}
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
        />
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-6 items-center justify-center text-white text-lg font-bold">
        {/* GitHub Streak Card */}
        <div className="text-center">
          <p className="mb-2">🔥 Current Streak</p>
          <img
            src={`https://streak-stats.demolab.com?user=${username}&theme=dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`}
            alt="GitHub Streak"
            width={500}
            height={250}
            className="rounded-xl shadow-lg object-contain"
          />

        </div>

        {/* Top Languages Card */}
        <div className="text-center">
          <p className="mb-2">🥇 Top Languages</p>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=github_dark&hide_border=true`}
            alt="Top Languages"
            width={350}
            height={250}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default GithubGraph;
