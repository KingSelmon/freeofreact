import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { getOrders, type Order } from "../features/orders/api";
export function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [q, setQ] = useState("");
  useEffect(() => {
    void getOrders().then(setOrders);
  }, []);
  const rows = useMemo(
    () =>
      orders.filter(
        (o) =>
          o.id.toLowerCase().includes(q.toLowerCase()) ||
          o.customer.includes(q),
      ),
    [orders, q],
  );
  return (
    <div className="page">
      <PageHeader
        title="주문 관리"
        description="주문 내역과 처리 상태를 확인하세요."
        action={<button className="button secondary">내역 내보내기</button>}
      />
      <section className="card">
        <div className="toolbar">
          <input
            placeholder="주문번호 또는 고객명 검색"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>고객</th>
                <th>상품</th>
                <th>결제금액</th>
                <th>상태</th>
                <th>주문일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((o) => (
                <tr key={o.id}>
                  <td>
                    <b>{o.id}</b>
                  </td>
                  <td>{o.customer}</td>
                  <td>{o.product}</td>
                  <td>₩{o.amount.toLocaleString()}</td>
                  <td>
                    <span className={`badge ${o.status}`}>{o.status}</span>
                  </td>
                  <td>{o.date}</td>
                  <td>
                    <button className="link-button">상세보기</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
