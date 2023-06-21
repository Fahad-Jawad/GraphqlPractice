import React from "react";
import "./styles/productCard.css";
type Props = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: Props) {
  return (
    <div className="card">
      <h4>{name}</h4>
      <h4>${price}</h4>
    </div>
  );
}
