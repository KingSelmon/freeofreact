import { delay } from "../../api/client";
export type Order = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "결제완료" | "배송중" | "취소" | "배송완료";
  date: string;
};
const data: Order[] = [
  {
    id: "ORD-1048",
    customer: "이서준",
    product: "프리미엄 플랜",
    amount: 129000,
    status: "결제완료",
    date: "2026.08.20",
  },
  {
    id: "ORD-1047",
    customer: "박지우",
    product: "비즈니스 플랜",
    amount: 249000,
    status: "배송중",
    date: "2026.08.20",
  },
  {
    id: "ORD-1046",
    customer: "최유진",
    product: "스타터 플랜",
    amount: 49000,
    status: "취소",
    date: "2026.08.19",
  },
  {
    id: "ORD-1045",
    customer: "한수아",
    product: "프리미엄 플랜",
    amount: 129000,
    status: "배송완료",
    date: "2026.08.18",
  },
];
export async function getOrders() {
  await delay();
  return data;
}
