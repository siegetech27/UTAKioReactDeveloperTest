import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Category, Item, Menu } from "../src/models/menu.model";
import useMutation from "../src/services/firebase/useMutation";
import useRealtimeList from "../src/services/firebase/useRealtimeList";
import useUtils from "../src/utils/useMessages";

const Home: NextPage = () => {
  const { data, error, loading } = useRealtimeList<Category>("categories");
  const { writeData: writeCategory, responseMessage: writeCategoryResponse } =
    useMutation<Category>("categories");

  const [category, setCategory] = useState("");

  const handleCreateCategory = () => {
    writeCategory({ name: category });
    setCategory("");
  };

  useEffect(() => {
    console.log(writeCategoryResponse);
  }, [writeCategoryResponse]);

  return (
    <div className="m-1">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <div className="h-48 w-full object-cover md:h-full md:w-48 bg-main-400" />
          </div>
          <div className="p-4">
            <div className="uppercase tracking-wide text-sm text-default font-semibold">
              Category
            </div>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 border mx-1 rounded-lg border-slate-500"
              placeholder="Enter Category"
            />

            <button
              className="p-2 bg-main-500 text-main-50 rounded-lg shadow hover:bg-main-400 transition-all ease-in-out duration-200"
              onClick={handleCreateCategory}
            >
              Save Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
