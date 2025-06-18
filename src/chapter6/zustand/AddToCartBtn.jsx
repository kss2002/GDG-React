// AddToCartBtn.jsx
import { useCartStore } from '../../../stores/CartStore';
import { useState } from 'react';
import '../../styles/AddToCartBtn.css'; // 스타일 파일 임포트

export default function AddToCartButton() {
  const addItem = useCartStore((state) => state.addItem);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (!inputValue.trim()) {
      alert('상품 이름을 입력해주세요.');
      return;
    }

    const newItem = {
      id: Date.now(), // 고유 id 생성
      name: inputValue,
    };

    addItem(newItem);
    setInputValue(''); // 입력값 초기화
  };

  return (
    <>
      <div className="add-to-cart-container">
        <input
          className="input-add-to-cart"
          type="text"
          placeholder="상품명을 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-cart-btn" onClick={handleAdd}>
          장바구니 추가
        </button>
      </div>
    </>
  );
}
