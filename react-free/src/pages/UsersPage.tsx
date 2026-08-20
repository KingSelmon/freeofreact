import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { getUsers, type User } from "../features/users/api";
export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("전체");

  useEffect(() => {
    void getUsers().then(setUsers);
  }, []);

  const rows = useMemo(
    () =>
      users.filter(
        (u) =>
          (u.name.includes(q) || u.email.includes(q)) &&
          (status === "전체" || u.status === status),
      ),
    [users, q, status],
  );

  return (
    <div className="page">
      <PageHeader
        title="사용자 관리"
        description={`등록된 사용자 ${users.length}명을 조회하고 관리합니다.`}
        action={<button className="button">+ 사용자 추가</button>}
      />
      <section className="card">
        <div className="toolbar">
          <input
            placeholder="이름 또는 이메일 검색"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>전체</option>
            <option>활성</option>
            <option>대기</option>
            <option>정지</option>
          </select>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>사용자</th>
                <th>권한</th>
                <th>상태</th>
                <th>가입일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="person">
                      <i>{u.name[0]}</i>
                      <div>
                        <b>{u.name}</b>
                        <small>{u.email}</small>
                      </div>
                    </div>
                  </td>
                  <td>{u.role}</td>
                  <td>
                    <span className={`badge ${u.status}`}>{u.status}</span>
                  </td>
                  <td>{u.joinedAt}</td>
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
