import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../List/List.css";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log("🚀 ~ fetchList ~ response:", response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error fetching the list");
    }
  };

  // // remove the food id from the admin panel
  // const removeFood = async (foodId) => {
  //   console.log("🚀 ~ removeFood ~ foodId:", foodId);
  //   // const response = await axios.delete(`${url}/api/food/remove`, {
  //   //   id: foodId,
  //   // });
  //   const response = await axios.delete(`${url}/api/food/remove/${foodId}`);
  //   // await fetchList();
  //   console.log("🚀 ~ removeFood ~ response:", response.data);
  //   if (response.data.success) {
  //     toast.success(response.data.message);
  //     fetchList();
  //   } else {
  //     toast.error("Error deleting the food item");
  //   }
  // };

  // const removeFood = async (foodId) => {
  //   try {
  //     console.log("🚀 ~ removeFood ~ foodId:", foodId);
  //     const response = await axios.post(`${url}/api/food/remove`, {
  //       id: foodId,
  //     });
  //     console.log("response...", response.data);
  //     await fetchList();
  //     if (response.data.success) {
  //       toast.success(response.data.message);
  //       // fetchList(); // Refresh the list after successful deletion
  //     } else {
  //       toast.error("Error deleting the food item");
  //     }
  //   } catch (error) {
  //     console.error("Error removing food item:", error);
  //     toast.error("Failed to remove the food item");
  //   }
  // };

  const removeFood = async (foodId) => {
    try {
      console.log("🚀 ~ removeFood ~ foodId:", foodId);
      const response = await axios.delete(`${url}/api/food/remove`, {
        data: { id: foodId },
      });
      console.log("response...", response.data);
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error deleting the food item");
      }
    } catch (error) {
      console.error(
        "Error removing food item:",
        error.response ? error.response.data : error.message
      );
      toast.error(
        "Failed to remove the food item: " +
          (error.response ? error.response.data : error.message)
      );
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All food Items</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
