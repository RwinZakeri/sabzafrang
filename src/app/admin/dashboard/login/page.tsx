const AdminLogin = () => {
  return (
    <div className="flex">  
    {/* Sidebar */}  
    <aside className="w-1/3 h-screen bg-gray-800 text-white">  
      <div className="p-5">  
        <h1 className="text-lg font-bold">Admin Panel</h1>  
        <ul className="mt-5">  
          <li className="mb-3">  
            <a href="#" className="hover:text-gray-400">Dashboard</a>  
          </li>  
          <li className="mb-3">  
            <a href="#" className="hover:text-gray-400">Users</a>  
          </li>  
          <li className="mb-3">  
            <a href="#" className="hover:text-gray-400">Settings</a>  
          </li>  
        </ul>  
      </div>  
    </aside>  

    {/* Main Content */}  
    <main className="flex-1 h-screen p-10">  
      <h2 className="text-2xl font-bold">Dashboard</h2>  
      <p className="mt-4">Welcome to your admin panel!</p>  
    </main>  
  </div>  
  );
};

export default AdminLogin;
