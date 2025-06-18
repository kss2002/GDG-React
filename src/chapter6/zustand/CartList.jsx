// CartList.jsx
import { useCartStore } from '../../../stores/CartStore';
import '../../styles/CartList.css'; // 스타일 파일 임포트

export default function CartList() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <>
      <div className="cartlist-container">
        <h3>장바구니 목록</h3>
        {items.length === 0 && <p>장바구니가 비어 있습니다.</p>}
        {items.length > 0 && <p>총 {items.length}개의 상품이 있습니다.</p>}
        {/* 장바구니 아이템 목록 */}
        <ul>
          {items.map((item) => (
            <li key={item.id} className="cartlist-li">
              {item.name}
              <button
                className="cartlist-remove-btn"
                onClick={() => removeItem(item.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
