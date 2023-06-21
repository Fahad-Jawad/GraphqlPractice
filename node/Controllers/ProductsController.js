exports.getProducts = (req, res) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => res.status(200).json({ data: json }));
};
