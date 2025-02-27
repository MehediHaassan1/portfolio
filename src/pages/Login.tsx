import logo from '../assets/main-logo.svg';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-5xl p-8 space-y-8 md:space-y-0 md:space-x-8 bg-white shadow-lg rounded-lg">
        {/* Left Section - Logo */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 space-y-4">
          <img
            src={logo}
            alt="Logo"
            className="w-32 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">
            Welcome to the Admin Panel
          </h2>
          <p className="text-center text-gray-600">
            Please log in with your credentials to manage the system and access your dashboard.
          </p>
          <button className="px-6 py-2 mx-auto text-black border border-black rounded shadow-md">
            View Portfolio
          </button>
        </div>

        {/* Right Section - Login Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 space-y-8 bg-white shadow-lg rounded-lg">
          <p className="text-3xl text-center">Admin Login</p>
          <form className="flex flex-col pt-3 space-y-6">
            <div className="flex flex-col">
              <div className="flex relative">
                <span className="inline-flex items-center px-3 bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  id="design-login-email"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex relative">
                <span className="inline-flex items-center px-3 bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  id="design-login-password"
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white hover:border hover:border-black rounded focus:outline-none focus:ring-2"
            >
              Submit
            </button>
          </form>
          <div className="pt-6 text-center">
            <p>
              Don&#x27;t have an account?
              <a href="#" className="font-semibold underline">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
