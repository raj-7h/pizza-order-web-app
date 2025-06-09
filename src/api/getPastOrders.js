export default async function getPastOrders(page) {
  const response = await fetch(`/api/past-orders?lpage=${page}`);
  const data = await response.json();
  return data;
}
