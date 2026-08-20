import { delay } from "../../api/client";
export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "활성" | "대기" | "정지";
  joinedAt: string;
};
const data: User[] = [
  {
    id: 1,
    name: "이서준",
    email: "seojun@example.com",
    role: "일반 회원",
    status: "활성",
    joinedAt: "2026.08.19",
  },
  {
    id: 2,
    name: "박지우",
    email: "jiwoo@example.com",
    role: "파트너",
    status: "활성",
    joinedAt: "2026.08.18",
  },
  {
    id: 3,
    name: "최유진",
    email: "yujin@example.com",
    role: "일반 회원",
    status: "대기",
    joinedAt: "2026.08.17",
  },
  {
    id: 4,
    name: "정도윤",
    email: "doyun@example.com",
    role: "일반 회원",
    status: "정지",
    joinedAt: "2026.08.15",
  },
  {
    id: 5,
    name: "한수아",
    email: "sua@example.com",
    role: "파트너",
    status: "활성",
    joinedAt: "2026.08.12",
  },
];
export async function getUsers() {
  await delay();
  return data;
}
