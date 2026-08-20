import { useState, type FormEvent } from "react";
import { PageHeader } from "../components/ui/PageHeader";
export function SettingsPage() {
  const [email, setEmail] = useState(true);
  const [order, setOrder] = useState(true);
  const [saved, setSaved] = useState(false);
  function save(e: FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  }
  return (
    <div className="page">
      <PageHeader
        title="환경 설정"
        description="서비스 기본 정보와 관리자 알림을 설정하세요."
      />
      <form className="card form-card" onSubmit={save}>
        <section>
          <h2>서비스 정보</h2>
          <p>관리자 화면에 표시되는 기본 정보입니다.</p>
          <div className="form-grid">
            <label>
              서비스 이름
              <input defaultValue="AdminFlow" />
            </label>
            <label>
              대표 이메일
              <input type="email" defaultValue="support@example.com" />
            </label>
            <label className="full">
              서비스 설명
              <textarea defaultValue="비즈니스를 위한 통합 관리자 서비스" />
            </label>
          </div>
        </section>
        <section>
          <h2>알림 설정</h2>
          <p>중요한 활동의 알림 수신 여부를 선택합니다.</p>
          {[
            [
              "이메일 알림",
              "관리자 공지와 시스템 알림을 받습니다.",
              email,
              () => setEmail((v) => !v),
            ],
            [
              "신규 주문 알림",
              "새 주문이 등록되면 알림을 받습니다.",
              order,
              () => setOrder((v) => !v),
            ],
          ].map(([title, text, on, toggle]) => (
            <div className="toggle-row" key={String(title)}>
              <div>
                <b>{String(title)}</b>
                <small>{String(text)}</small>
              </div>
              <button
                type="button"
                className={`toggle ${on ? "on" : ""}`}
                onClick={toggle as () => void}
              />
            </div>
          ))}
        </section>
        <button className="button">
          {saved ? "저장되었습니다 ✓" : "변경사항 저장"}
        </button>
      </form>
    </div>
  );
}
