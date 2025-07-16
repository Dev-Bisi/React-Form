import { Eye, EyeClosed, EyeOff } from "lucide-react";
import { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    text: "",
  });

  const [showPassword, setshowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="min-w-xl h-auto p-4 shadow-md rounded-lg flex flex-col gap-5"
      >
        <h2 className="text-xl text-center uppercase">HANDLING REACT FORM 2</h2>
        <input
          value={formData.username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Username"
          className="p-2 ring-1 ring-slate-300 rounded-md"
        />
        <div className="relative">
          <input
            value={formData.password}
            name="password"
            onChange={handleInputChange}
            type = {showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="p-2 ring-1 ring-slate-300 rounded-md w-full"
          />
          {showPassword ? (
            <Eye onClick={()=>{setshowPassword(prev => !prev)}} className="absolute right-3 top-2" />
          ) : (
            <EyeOff onClick={()=>{setshowPassword(prev => !prev)}} className="absolute right-3 top-2" />
          )}
        </div>

        <textarea
          rows={5}
          value={formData.text}
          name="text"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter text"
          className="p-2 ring-1 ring-slate-300 rounded-md"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-400 py-2 px-4 rounded-md text-white text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
