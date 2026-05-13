import React from "react";
import {
  ArrowRight,
  Bell,
  CalendarClock,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Home,
  Leaf,
  Lock,
  Menu,
  PackageCheck,
  Plus,
  Refrigerator,
  ScanLine,
  ShoppingCart,
  Smartphone,
  Sparkles,
  UsersRound,
  Wifi,
  Zap,
} from "lucide-react";

const pains = [
  [ShoppingCart, "重複買い", "同じ食材を買ってしまうことがある"],
  [CalendarClock, "期限切れ", "気づかないうちに期限が過ぎてしまう"],
  [CheckCircle2, "買い忘れ", "必要なものを買い忘れてしまう"],
  [Menu, "続かない管理", "メモや口頭管理は続かない・見づらい"],
];

const features = [
  {
    icon: Refrigerator,
    title: "在庫の見える化",
    text: "冷蔵庫の中身を一覧で確認。「何があるか」がすぐわかる。",
    accent: "green",
  },
  {
    icon: CalendarClock,
    title: "期限管理",
    text: "期限が近い食材をお知らせ。ムダなくおいしく使い切れる。",
    accent: "orange",
  },
  {
    icon: ShoppingCart,
    title: "買い物リスト",
    text: "必要なものをサッと追加。買い忘れや重複買いを防げる。",
    accent: "green",
  },
];

const values = [
  [Zap, "すぐ使える", "登録かんたん、直感的に使えるシンプル設計。"],
  [UsersRound, "家族で共有", "家族みんなで情報を共有。買い物も料理もスムーズに。"],
  [Leaf, "食品ロス削減", "ムダを減らして、食材をおいしく使い切れる。"],
  [Lock, "安心設計", "アカウントごと・グループごとにデータを管理。"],
];

const steps = [
  [Smartphone, "01", "スマホで登録", "商品名・数量だけでもサッと追加。"],
  [CalendarClock, "02", "期限を確認", "期限間近の食材をアプリが見える化。"],
  [ShoppingCart, "03", "買い物前に見る", "在庫と買い物リストを外出先で確認。"],
  [UsersRound, "04", "家族で共有", "誰が買っても、同じリストに反映。"],
];

const futureFeatures = [
  [ScanLine, "バーコード読み取り", "バーコードで食材をサッと登録。"],
  [Camera, "写真登録", "冷蔵庫の中を撮ってかんたん登録。"],
  [Sparkles, "AI献立提案", "在庫からおすすめの献立を提案。"],
  [PackageCheck, "レシート読み取り", "レシートから自動で食材を登録。"],
];

function LogoMark({ light = false }) {
  const color = light ? "border-white text-white" : "border-emerald-800 text-emerald-800";

  return (
    <div className={`relative h-14 w-11 rounded-lg border-[3px] ${color}`}>
      <div className={`absolute left-2 right-2 top-5 border-t-[3px] ${light ? "border-white" : "border-emerald-800"}`} />
      <div className={`absolute left-2 top-2 h-3 w-1.5 rounded-full ${light ? "bg-white" : "bg-emerald-800"}`} />
      <div className={`absolute bottom-2 left-2 h-3 w-3 rounded-sm border-2 ${light ? "border-white" : "border-emerald-800"}`} />
      <div className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full border-[3px] border-orange-500" />
    </div>
  );
}

function Logo({ light = false, compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark light={light} />
      <div>
        <div className={`font-black leading-none ${compact ? "text-3xl" : "text-5xl"} ${light ? "text-white" : "text-emerald-950"}`}>
          StockPi <span className="text-orange-500">Lite</span>
        </div>
        <p className={`mt-2 text-sm font-black ${light ? "text-emerald-50" : "text-emerald-900"}`}>
          スマホで使える 冷蔵庫在庫管理アプリ
        </p>
      </div>
    </div>
  );
}

function Badge({ children, tone = "green" }) {
  const styles =
    tone === "orange"
      ? "border-orange-200 bg-orange-50 text-orange-700"
      : tone === "dark"
        ? "border-white/20 bg-white/10 text-emerald-50"
        : "border-emerald-200 bg-emerald-50 text-emerald-800";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-black shadow-sm ${styles}`}>
      {children}
    </span>
  );
}

function SectionLabel({ children, tone = "green" }) {
  const isOrange = tone === "orange";

  return (
    <div className={`mb-3 inline-flex items-center gap-3 text-lg font-black ${isOrange ? "text-orange-600" : "text-emerald-800"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      <span>{children}</span>
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
    </div>
  );
}

function AppPhone() {
  const expiringItems = [
    ["🥛", "牛乳", "2026/05/14", "あと2日"],
    ["◻", "豆腐", "2026/05/15", "あと3日"],
    ["🥬", "ほうれん草", "2026/05/17", "あと5日"],
  ];

  return (
    <div className="relative mx-auto w-[292px] rounded-[2.4rem] border-[10px] border-zinc-950 bg-zinc-950 shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:w-[342px]">
      <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl rounded-t-md bg-black" />
      <div className="overflow-hidden rounded-[1.7rem] bg-[#fffdf8]">
        <div className="flex items-center justify-between px-5 pb-2 pt-8 text-[11px] font-black text-zinc-900">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <Wifi className="h-3.5 w-3.5" />●
          </span>
        </div>

        <div className="flex items-center justify-between px-5 py-3">
          <Menu className="h-5 w-5 text-zinc-700" />
          <div className="text-xl font-black text-emerald-800">StockPi Lite</div>
          <Bell className="h-5 w-5 text-zinc-700" />
        </div>

        <div className="space-y-4 px-4 pb-5">
          <div>
            <p className="mb-3 text-base font-black text-zinc-950">在庫サマリー</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                [Refrigerator, "在庫数", "32", "点", "green"],
                [CalendarClock, "期限間近", "5", "点", "orange"],
                [ShoppingCart, "買い物リスト", "8", "点", "blue"],
              ].map(([Icon, label, value, unit, tone]) => {
                const box =
                  tone === "orange"
                    ? "border-orange-100 bg-orange-50 text-orange-600"
                    : tone === "blue"
                      ? "border-sky-100 bg-sky-50 text-sky-600"
                      : "border-emerald-100 bg-emerald-50 text-emerald-700";

                return (
                  <div key={label} className={`rounded-xl border p-3 text-center ${box}`}>
                    <p className="mb-2 text-[10px] font-black text-zinc-700">{label}</p>
                    <p className="text-3xl font-black tracking-tight">
                      {value}
                      <span className="ml-0.5 text-xs">{unit}</span>
                    </p>
                    <Icon className="mx-auto mt-2 h-5 w-5" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-100">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-black text-zinc-950">期限が近い食材</p>
              <p className="text-[10px] font-black text-emerald-700">すべて見る ›</p>
            </div>
            <div className="divide-y divide-zinc-100">
              {expiringItems.map(([icon, name, date, days]) => (
                <div key={name} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#fbfaf6] text-base">{icon}</span>
                    <span className="text-xs font-black text-zinc-900">{name}</span>
                  </div>
                  <div className="text-right text-[10px]">
                    <span className="text-zinc-600">{date}</span>
                    <span className="ml-2 rounded-full bg-orange-50 px-2 py-1 font-black text-orange-600">{days}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-xl bg-white p-3 shadow-sm ring-1 ring-zinc-100">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-black text-zinc-950">買い物リスト</p>
              <p className="text-[10px] font-black text-emerald-700">すべて見る ›</p>
            </div>
            <div className="space-y-2 text-xs font-bold text-zinc-700">
              {["卵", "ヨーグルト", "鶏むね肉"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded border-2 border-zinc-300" />
                  {item}
                </label>
              ))}
            </div>
            <button className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-emerald-700 text-white shadow-lg shadow-emerald-900/25" aria-label="買い物リストに追加">
              <Plus className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-zinc-100 bg-white px-4 py-3 text-center text-[10px] font-black text-zinc-500">
          <span className="text-emerald-700"><Home className="mx-auto mb-1 h-4 w-4" />ホーム</span>
          <span><Refrigerator className="mx-auto mb-1 h-4 w-4" />在庫</span>
          <span><ShoppingCart className="mx-auto mb-1 h-4 w-4" />買い物リスト</span>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-3xl bg-[#f4ecde] shadow-[0_18px_50px_rgba(45,28,12,0.14)] ring-1 ring-stone-200 lg:min-h-[690px]">
      <img
        src="/sozai/sozai2.png"
        alt="冷蔵庫の前でスマホアプリを使う女性とStockPi Liteの画面"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8ec_0%,rgba(255,248,236,0.78)_36%,rgba(255,248,236,0.12)_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,rgba(36,25,12,0.28),rgba(36,25,12,0))]" />

      <div className="absolute left-6 top-8 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-orange-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-black text-zinc-950">スマホ完結</p>
            <p className="text-xs font-bold text-zinc-500">いつでも在庫を確認できる</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden rounded-full bg-white/90 px-8 py-7 text-center shadow-lg ring-1 ring-stone-100 xl:block">
        <p className="text-lg font-black leading-8 text-emerald-800">
          家族みんなで<br />
          <span className="text-2xl">簡単・便利</span><br />
          ムダなく、おいしく。
        </p>
      </div>

      <div className="absolute bottom-8 left-6 hidden max-w-xs rounded-2xl border border-white/70 bg-white/90 p-5 shadow-lg backdrop-blur sm:block">
        <p className="text-sm font-black text-emerald-800">買い物前に、すぐ確認。</p>
        <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
          在庫数・期限間近・買い物リストがスマホの画面にまとまります。
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, accent = "green", large = false }) {
  const tone =
    accent === "orange"
      ? "text-orange-600 border-orange-200 bg-orange-50"
      : "text-emerald-800 border-emerald-200 bg-emerald-50";

  return (
    <div className={`rounded-2xl border border-stone-100 bg-white shadow-[0_10px_30px_rgba(20,30,20,0.08)] ${large ? "p-7" : "p-6"}`}>
      <div className={`mb-5 grid ${large ? "h-20 w-20" : "h-16 w-16"} place-items-center rounded-2xl border ${tone}`}>
        <Icon className={large ? "h-11 w-11" : "h-9 w-9"} strokeWidth={2.4} />
      </div>
      <h3 className="border-b-2 border-dashed border-emerald-600/45 pb-3 text-xl font-black text-zinc-950">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-700">{text}</p>
    </div>
  );
}

export default function StockPiLiteLandingPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-zinc-950">
      <section className="relative overflow-hidden px-5 py-7 sm:px-8 lg:px-12">
        <nav className="relative z-10 mx-auto mb-8 flex max-w-[1600px] items-center justify-between">
          <Logo compact />
          <div className="hidden items-center gap-8 text-sm font-black text-zinc-600 lg:flex">
            <a href="#problem" className="hover:text-emerald-800">Problem</a>
            <a href="#features" className="hover:text-emerald-800">Features</a>
            <a href="#how" className="hover:text-emerald-800">How</a>
            <a href="#cta" className="rounded-full bg-orange-500 px-6 py-3 text-white shadow-lg shadow-orange-600/20 hover:bg-orange-600">
              今すぐはじめる
            </a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="py-4 lg:py-10">
            <div className="mb-8 hidden lg:block">
              <Logo />
            </div>

            <h1 className="text-[2.15rem] font-black leading-[1.1] tracking-normal text-zinc-950 sm:text-6xl xl:text-7xl">
              <span className="block whitespace-nowrap">冷蔵庫の</span>
              <span className="block whitespace-nowrap">“わからない”を、</span>
              <span className="block whitespace-nowrap text-emerald-800 sm:inline">スマホで</span>
              <span className="block whitespace-nowrap text-emerald-800 sm:inline">見える化。</span>
            </h1>
            <p className="mt-5 text-2xl font-black leading-10 text-zinc-950">
              在庫・期限・買い物リストをひとつに。
            </p>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-zinc-700">
              StockPi Liteは、スマホひとつで冷蔵庫管理をラクにするアプリです。買いすぎ、期限切れ、買い忘れを日々の画面で減らします。
            </p>

            <div className="mt-7 grid max-w-3xl gap-4 sm:grid-cols-3">
              {features.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="rounded-2xl border border-stone-100 bg-white p-5 text-center shadow-[0_10px_25px_rgba(25,20,10,0.08)]">
                  <Icon className="mx-auto h-14 w-14 text-emerald-800" strokeWidth={2.4} />
                  <p className="mt-4 text-lg font-black">
                    <span className="mr-2 text-emerald-800">0{index + 1}</span>
                    {title}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-600">{text.split("。")[0]}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Badge><ClockIcon /> 時短</Badge>
              <Badge><Leaf className="h-5 w-5" /> 食品ロス削減</Badge>
              <Badge><UsersRound className="h-5 w-5" /> 家族共有</Badge>
              <Badge><Check className="h-5 w-5" /> すぐ使える</Badge>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-9 py-5 text-lg font-black text-white shadow-xl shadow-orange-600/25 transition hover:-translate-y-0.5 hover:bg-orange-600">
                まずは、あなたの冷蔵庫からスマートに。
                <ChevronRight className="h-6 w-6" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-800 bg-white px-8 py-5 text-lg font-black text-emerald-900 transition hover:-translate-y-0.5">
                機能を見る
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section id="problem" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <div>
            <SectionLabel tone="orange">Problem</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              冷蔵庫の中身、<br />
              覚えていなくて<span className="text-emerald-800">大丈夫。</span>
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-zinc-700">
              冷蔵庫の中身を忘れたり、期限に気づけなかったり、同じものを買ってしまったり。日々のちょっとした困りごとを、スマホで“見える化”します。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pains.map(([Icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-stone-100 bg-white p-7 text-center shadow-[0_10px_30px_rgba(20,30,20,0.08)]">
                <div className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-full bg-[#fbf2e7]">
                  <Icon className="h-12 w-12 text-emerald-800" strokeWidth={2.4} />
                </div>
                <h3 className="border-b-2 border-dashed border-orange-500/70 pb-4 text-xl font-black">{title}</h3>
                <p className="mt-4 text-base font-medium leading-8 text-zinc-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-3xl border border-stone-100 bg-white p-6 shadow-[0_12px_35px_rgba(40,25,10,0.08)] sm:p-9 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_430px]">
            <div>
              <SectionLabel>Core Features</SectionLabel>
              <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                3つの機能で、<br />
                冷蔵庫管理を<span className="text-emerald-800">もっとかんたんに。</span>
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {features.map((feature) => (
                  <FeatureCard key={feature.title} {...feature} large />
                ))}
              </div>
            </div>
            <div className="hidden items-stretch lg:flex">
              <div className="relative min-h-[520px] w-full overflow-hidden rounded-3xl bg-[#f8f1e6] shadow-inner ring-1 ring-stone-100">
                <img
                  src="/sozai/sozai1.png"
                  alt="野菜に囲まれたStockPi Liteのアプリ画面"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(5,48,29,0.7),rgba(5,48,29,0))] p-6 pt-20">
                  <p className="text-2xl font-black text-white">スマホで、ひと目で。</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-emerald-50">
                    参考画像のように、在庫・期限・買い物を同じ画面に集約。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="value" className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-5 lg:grid-cols-[0.56fr_1.44fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-stone-100 bg-emerald-950 p-8 shadow-[0_10px_30px_rgba(20,30,20,0.08)]">
            <img
              src="/sozai/sozai3.png"
              alt="冷蔵庫の前でStockPi Liteを見せる女性"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,44,28,0.92),rgba(2,44,28,0.12))]" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <SectionLabel tone="orange">Why StockPi Lite?</SectionLabel>
              <h2 className="text-4xl font-black leading-tight tracking-normal text-white">
                続けやすくて、<br />
                <span className="text-orange-300">うれしい価値を。</span>
              </h2>
              <p className="mt-4 text-base font-bold leading-7 text-emerald-50">
                食材管理を、家の中でも買い物先でも自然に使えるスマホ体験へ。
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(([Icon, title, text]) => (
              <FeatureCard key={title} icon={Icon} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[420px] max-w-[1500px] overflow-hidden rounded-3xl bg-emerald-950 shadow-2xl shadow-emerald-950/20">
          <img
            src="/sozai/sozai4.png"
            alt="家族でStockPi Liteを使いながら食材を確認している様子"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,44,28,0.9)_0%,rgba(2,44,28,0.62)_42%,rgba(2,44,28,0.1)_100%)]" />
          <div className="relative z-10 flex min-h-[420px] max-w-2xl flex-col justify-center p-8 text-white sm:p-12 lg:p-16">
            <SectionLabel tone="orange">Family Share</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              家族みんなで、<br />
              同じリストを見る。
            </h2>
            <p className="mt-5 text-lg font-bold leading-8 text-emerald-50">
              買い物前の確認も、帰宅後の登録も、家族で同じ情報を共有。参考LPの「家族みんなで簡単・便利」を写真で伝えます。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Badge tone="dark"><UsersRound className="h-5 w-5" /> 家族共有</Badge>
              <Badge tone="dark"><ShoppingCart className="h-5 w-5" /> 買い忘れ防止</Badge>
              <Badge tone="dark"><Leaf className="h-5 w-5" /> 食品ロス削減</Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px] text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-4xl font-black tracking-normal sm:text-5xl">使い方は、シンプル。</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {steps.map(([Icon, num, title, text], index) => (
              <div key={num} className="relative rounded-2xl border border-stone-100 bg-white p-7 shadow-[0_10px_30px_rgba(20,30,20,0.08)]">
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-7 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-orange-500 lg:block" />
                )}
                <div className="mb-5 flex items-center justify-center gap-3">
                  <span className="text-4xl font-black text-emerald-800">{num}</span>
                  <h3 className="text-xl font-black">{title}</h3>
                </div>
                <Icon className="mx-auto h-24 w-24 text-emerald-800" strokeWidth={2.2} />
                <p className="mt-5 text-base font-medium leading-7 text-zinc-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px] text-center">
          <SectionLabel tone="orange">Future</SectionLabel>
          <h2 className="text-4xl font-black tracking-normal sm:text-5xl">
            小さく始めて、便利に育てる。
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {futureFeatures.map(([Icon, title, text]) => (
              <div key={title} className="flex items-center gap-5 rounded-2xl border border-stone-100 bg-white p-6 text-left shadow-[0_10px_30px_rgba(20,30,20,0.08)]">
                <Icon className="h-16 w-16 shrink-0 text-emerald-800" strokeWidth={2.3} />
                <div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-700">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-emerald-950 p-8 text-white shadow-2xl shadow-emerald-950/25 sm:p-10 lg:p-12">
          <img
            src="/sozai/sozai5.png"
            alt="StockPi Liteのアプリ画面と買い物リストのイメージ"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,42,26,0.96),rgba(1,42,26,0.86),rgba(1,42,26,0.45))]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.35fr_1fr_0.32fr] lg:items-center">
            <Logo light compact />
            <div className="border-white/30 lg:border-l lg:pl-10">
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                まずは、あなたの冷蔵庫からスマートに。
              </h2>
              <p className="mt-4 text-lg font-medium leading-8 text-emerald-50">
                在庫・期限管理・買い物リストを、スマホひとつでひとつに。今日から、ムダなく、気持ちよく。
              </p>
            </div>
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-5 text-lg font-black text-white shadow-xl shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600">
              今すぐはじめる <ArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-10 text-center text-sm font-medium text-zinc-500 sm:px-8 lg:px-12">
        <p>© StockPi Lite</p>
      </footer>
    </main>
  );
}

function ClockIcon() {
  return <CalendarClock className="h-5 w-5" />;
}
