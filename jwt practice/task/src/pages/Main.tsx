import React, { useEffect, useState } from "react";
import api from "../axios/axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductComponents/ProductCard";
import AppButton from "../components/core/AppButton";

type Props = {};

interface Product {
  id:number,
  title:string,
  price:number,
  category:string,
  description:string,
  image:string
}

export default function Main({}: Props) {
  const [data, setData] = useState<Product[]>();
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.removeItem("accessToken")
    navigate("/")
  }
  useEffect(() => {
    api
      .get("/getdata")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          navigate("/login");
        }
      });
  }, []);
  return (
    <>
      <h1>Product Lists</h1>
      {data && data.map((product,index) => 
      <ProductCard key={index} name={product.title} price={product.price}/>
      )}
      <AppButton backgroundColor='cornflowerblue' color='white' size='sm' lable='Logout' fun={logout}></AppButton>

    </>
  );
}
