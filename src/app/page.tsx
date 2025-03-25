'use client'
export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <h1>
          Stay Connected Anywhere with <br />
          <span className="highlight">eSIM Unlimited</span>
        </h1>
        <p>
          High-speed internet in 150+ countries. No roaming fees, no hidden charges, and no physical SIM required.
        </p>
        <button>Buy eSIM</button>
      </section>
      <section className="advantages">
        {/* Разметка для карточек с преимуществами */}
      </section>
      <section className="setup-guide">
        {/* Компонент интерактивного руководства */}
      </section>
    </main>
  );
}
