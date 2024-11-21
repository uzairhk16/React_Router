import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/uzairhk16")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      Github Followers:{data.followers}
      <div className="flex justify-center mt-2">
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={240}
      />
      </div>
      
    </div>
  );
}

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/uzairhk16")
    return response.json()
}