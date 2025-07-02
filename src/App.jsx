import { Link } from 'react-router-dom';
import ProfileCard from './chapter2/ProfileCard.jsx';
import Counter from './chapter3/Counter.jsx';
import InputForm from './chapter3/InputForm.jsx';
import DarkModeToggle from './chapter3/DarkModeToggle.jsx';
import UserList from './chapter4/UserList.jsx';
import ThemePage from './chapter6/context/ThemePage.jsx';
import CartList from './chapter6/zustand/CartList.jsx';
import AddToCartButton from './chapter6/zustand/AddToCartBtn.jsx';
import Dashboard from './chapter7/Dashboard.jsx';
import Media from './chapter7/Media.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GithubUser from './chapter8/GithubUser.jsx';
import './styles/GithubUser.css';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function App() {
  const [username, setUsername] = useState('naver');
  const [inputValue, setInputValue] = useState('naver');

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>프로필 카드 예제</h1>
        <ProfileCard />
      </div>
      <div>
        <h1>Props vs State 예제</h1>
        <Counter title="클릭 카운터" />
      </div>
      <div>
        <h1>inputform 예제</h1>
        <InputForm />
      </div>
      <div>
        <h1>다크모드 예제</h1>
        <DarkModeToggle />
      </div>
      <hr />
      <h1>useEffect 예제</h1>
      <UserList />
      <>
        <hr />
        <h1>라우팅 예제</h1>
        <Link to="/about">About</Link>
      </>
      <hr />
      <h1>Context API로 다크모드 상태 관리 예제</h1>
      <ThemePage />
      <hr />
      <h1>Zustand로 장바구니 전역 상태 관리 예제</h1>
      {/* ✅ 여기에 추가된 리스트가 보임 */}
      <CartList />
      {/* ✅ 여기에 product 객체 전달 */}
      <AddToCartButton />
      <hr />
      <Dashboard />
      <hr />
      <h1>반응형 UI 예제</h1>
      <Media />
      <hr />
      <h1>깃허브 유저 조회 예제</h1>
      <GithubUser username={username} />
      <div className="github-input-container">
        <input
          className="github-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="GitHub 사용자명 입력"
        />
        <button className="github-btn" onClick={() => setUsername(inputValue)}>
          조회
        </button>
      </div>
    </QueryClientProvider>
  );
}
