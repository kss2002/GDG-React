import { useState } from 'react';

const InputForm = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>입력한 값: {text}</h1>
      <input
        type="text"
        placeholder="이곳에 입력하세요"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <hr />
    </div>
  );
};

export default InputForm;
