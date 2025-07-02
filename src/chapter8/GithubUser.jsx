import { useQuery } from '@tanstack/react-query';
import '../styles/GithubUser.css';

export default function GithubUser({ username }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['githubUser', username],
    queryFn: () =>
      fetch(`https://api.github.com/users/${username}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <>
      <div className="github-card">
        <p className="github-title">{data.login}</p>
        <img src={data.avatar_url} alt={data.login} className="github-img" />
        <p className="github-desc">Followers: {data.followers}</p>
        <p className="github-desc">Following: {data.following}</p>
      </div>
    </>
  );
}
