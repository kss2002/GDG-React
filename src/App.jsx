import { Link } from 'react-router-dom';
import Counter from '../src/page/Counter.jsx';
import ProfileCard from '../src/page/ProfileCard.jsx';
import UserList from './Effect/UserList.jsx';
import DarkModeToggle from './state/DarkModeToggle.jsx';
import InputForm from './state/InputForm.jsx';

export default function App() {
  return (
    <>
      <div>
        <h1>Props vs State 예제</h1>
        <Counter title="클릭 카운터" />
      </div>
      <div>
        <h1>프로필 카드 예제</h1>
        <ProfileCard />
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
    </>
  );
}
