// Dashboard.jsx
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">tailwind css 예제</h1>
      <h1 className="text-2xl font-bold mb-4">📊 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">카드 1</div>
        <div className="bg-white p-6 rounded shadow">카드 2</div>
        <div className="bg-white p-6 rounded shadow">카드 3</div>
      </div>
    </div>
  );
}
