import React from 'react';

export default function Home(
  
) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - תפריט צד */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">TaskIt</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="block py-3 px-6 bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-medium">Dashboard</a>
          <a href="#" className="block py-3 px-6 text-gray-600 hover:bg-gray-50 transition">My Tasks</a>
          <a href="#" className="block py-3 px-6 text-gray-600 hover:bg-gray-50 transition">Settings</a>
        </nav>
      </aside>

      {/* Main Content - התוכן המרכזי */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back, Developer</h2>
            <p className="text-gray-500">Here’s what’s happening with your tasks today.</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
            + New Task
          </button>
        </header>

        {/* Stats - כרטיסיות מידע */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Total Tasks</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">In Progress</p>
            <p className="text-3xl font-bold text-orange-500">4</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Completed</p>
            <p className="text-3xl font-bold text-green-500">8</p>
          </div>
        </div>

        {/* Task Table - טבלה של משימות (דוגמה) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold">Recent Tasks</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between py-4 border-b border-gray-50">
              <span className="font-medium">Build Portfolio Website</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Priority: High</span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="font-medium">Connect MongoDB to App</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Priority: Medium</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
