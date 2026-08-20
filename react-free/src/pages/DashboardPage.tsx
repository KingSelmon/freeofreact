import { PageHeader } from "../components/ui/PageHeader";
const stats = [
  ["전체 사용자", "12,849", "♙", "+12.5%"],
  ["이번 달 매출", "₩28.4M", "₩", "+8.2%"],
  ["신규 주문", "1,429", "▤", "+5.7%"],
  ["전환율", "4.82%", "↗", "+1.4%"],
];
const bars = [42, 58, 46, 72, 65, 84, 78, 91, 70, 88, 95, 82];
const activity = [
  ["✓", "새 주문 ORD-1048이 결제되었습니다.", "방금 전"],
  ["♙", "신규 사용자 이서준 님이 가입했습니다.", "12분 전"],
  ["↗", "7월 매출 보고서가 생성되었습니다.", "1시간 전"],
  ["⚙", "관리자 설정이 변경되었습니다.", "3시간 전"],
];
export function DashboardPage() {
  return (
    <div className="page">
      <PageHeader
        title="대시보드"
        description="서비스의 주요 지표와 최근 활동을 확인하세요."
        action={<button className="button secondary">보고서 다운로드</button>}
      />
      <div className="stats-grid">
        {stats.map((s) => (
          <article className="card stat" key={s[0]}>
            <header>
              {s[0]}
              <i>{s[2]}</i>
            </header>
            <b>{s[1]}</b>
            <em>
              {s[3]} <span>지난달 대비</span>
            </em>
          </article>
        ))}
      </div>
      <div className="dashboard-grid">
        <section className="card">
          <div className="card-head">
            <h2>월별 매출</h2>
            <span className="badge">2026년</span>
          </div>
          <div className="chart">
            {bars.map((h, i) => (
              <div className="bar-group" key={i}>
                <div className="bar" style={{ height: `${h}%` }} />
                <small>{i + 1}월</small>
              </div>
            ))}
          </div>
        </section>
        <section className="card">
          <div className="card-head">
            <h2>최근 활동</h2>
          </div>
          <ul className="activities">
            {activity.map((a) => (
              <li key={a[1]}>
                <i>{a[0]}</i>
                <div>
                  <p>{a[1]}</p>
                  <small>{a[2]}</small>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
