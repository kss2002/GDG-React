import { Link } from 'react-router-dom';
import ProfileCard from './chapter2/ProfileCard.jsx';
import Counter from './chapter3/Counter.jsx';
import InputForm from './chapter3/InputForm.jsx';
import DarkModeToggle from './chapter3/DarkModeToggle.jsx';
import UserList from './chapter4/UserList.jsx';
import ThemePage from './chapter6/context/ThemePage.jsx';
import CartList from './chapter6/zustand/CartList.jsx';
import AddToCartButton from './chapter6/zustand/AddToCartBtn.jsx';

export default function App() {
  return (
    <>
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
    </>
  );
}
