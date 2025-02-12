import React from "react";

export const Product = () => {
  var product = [
    {
      id: 1,
      name: "Product1",
      price: 2500,
      discount: 12,
      category: "fashion",
    },
    {
      id: 2,
      name: "Product2",
      price: 2000,
      discount: 59,
      category: "electronics",
    },
    {
      id: 3,
      name: "Product3",
      price: 3000,
      discount: 55,
      category: "sports",
    },
    {
      id: 4,
      name: "Product4",
      price: 5000,
      discount: 30,
      category: "fashion",
    },
    {
      id: 5,
      name: "Product5",
      price: 2500,
      discount: 20,
      category: "fashion",
    },
    {
      id: 6,
      name: "Product6",
      price: 10000,
      discount: 40,
      category: "electronics",
    },
    {
      id: 7,
      name: "Product7",
      price: 7000,
      discount: 65,
      category: "sports",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Table</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DISCOUNT (IN %)</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pro) => {
            return (
              <tr>
                <td>{pro.id}</td>
                <td style={{ color: pro.discount >= 50 ? "green" : "white" }}>
                  {pro.name}
                </td>
                <td>{pro.price}</td>
                <td>{pro.discount}%</td>
                <td
                  style={{
                    backgroundColor: pro.category == "fashion" ? "red" : "",
                  }}
                >
                  {pro.category}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
