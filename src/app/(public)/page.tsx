"use client";

import { useState } from "react";
import { Oswald, Inter } from "next/font/google";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// ====================== KONFIGURASI  ======================
const WA_JOIN =
  "https://wa.me/081299859662";
const WA_MERCH =
  "https://wa.me/081299859662";
const GFORM_JOIN = "https://forms.gle/xxxxxxxxxxxxxxxx";
const ADMIN_PHONE = "+62 812-9985-9662";
const ADMIN_STRAVA = "strava.com/athletes/000000";
const PLACEHOLDER_IMG = "/image/running.jpg";
const LOGO = "image/finem.svg"
const MEMBERS = [
  {
    name: "Muhammad Rizky Iwamuhvir",
    role: "Founder",
    strava: "strava.com/athletes/111111",
  },
  {
    name: "Kontol Kontol",
    role: "Pace Setter · 5K–10K",
    strava: "strava.com/athletes/222222",
  },
  {
    name: "Memek Memek",
    role: "Route Scout",
    strava: "strava.com/athletes/333333",
  },
  {
    name: "Entod Abhy",
    role: "Half Marathon Pacer",
    strava: "strava.com/athletes/444444",
  },
] as const;

const PRODUCT_SPECS = [
  { label: "Bahan", value: "Dry-fit 180gsm, reflective print" },
  { label: "Ukuran", value: "S · M · L · XL · XXL  · XNXX" },
  { label: "Fit", value: "Regular, potongan bisex" },
  { label: "Harga", value: "Open Nego" },
] as const;

// ============================================================================

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen bg-[#0a0a0c] text-[#f3f1ea]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ================= NAV ================= */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <img
              src={LOGO}
              alt="FINEM.HQ logo"
              className="h-9 w-auto shrink-0"
            />
            <span
              className="text-lg tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              FINEM<span className="text-[#ff5a1f]">.HQ</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#c9c8c2] md:flex">
            <a href="#cerita" className="hover:text-[#f3f1ea]">
              Cerita
            </a>
            <a href="#member" className="hover:text-[#f3f1ea]">
              Member
            </a>
            <a href="#produk" className="hover:text-[#f3f1ea]">
              Produk
            </a>
            <a
              href={WA_JOIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#ff5a1f]/50 px-4 py-2 text-[#ff5a1f] transition hover:bg-[#ff5a1f] hover:text-[#0a0a0c]"
            >
              Gabung
            </a>
          </nav>

          <button
            className="text-2xl text-[#f3f1ea] md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/5 px-6 py-5 text-sm md:hidden">
            <a href="#cerita" onClick={() => setMenuOpen(false)}>
              Cerita
            </a>
            <a href="#member" onClick={() => setMenuOpen(false)}>
              Member
            </a>
            <a href="#produk" onClick={() => setMenuOpen(false)}>
              Produk
            </a>
            <a href={WA_JOIN} className="text-[#ff5a1f]">
              Become a Member →
            </a>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="cerita" className="relative overflow-hidden pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm text-[#8d8c93]">
              Running Society · est 2022 · South Tangerang
            </p>
            <h1
              className="text-[15vw] leading-[0.9] tracking-tight md:text-[5.2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              FINEM:
              <br />
              One Pace ,
              <br />
              One Society.
            </h1>
            <p className="mt-6 max-w-md text-[#c9c8c2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, ut
              enim ad minim veniam quis nostrud exercitation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WA_JOIN}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-semibold text-[#0a0a0c] transition hover:bg-[#ff7b45]"
              >
                Become a Member
              </a>
              <a
                href="#produk"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-[#f3f1ea] transition hover:border-white/40"
              >
                View Shop
              </a>
            </div>

            {/* <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm">
              <div>
                <p
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  240+
                </p>
                <p className="text-[#8d8c93]">member aktif</p>
              </div>
              <div>
                <p
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  3x
                </p>
                <p className="text-[#8d8c93]">lari bareng / minggu</p>
              </div>
              <div>
                <p
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  05.00
                </p>
                <p className="text-[#8d8c93]">jam kumpul, subuh</p>
              </div>
            </div> */}
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
            <img
              src={PLACEHOLDER_IMG}
              alt="Member FINEM.HQ lari"
              className="h-full w-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#ff5a1f]/10 mix-blend-overlay" />
          </div>
        </div>
      </section>
      
      {/* ================= SOCIAL PROOF ================= */}
      <section id="member" className="border-t border-white/5 bg-[#111113] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Social Proof
            </h2>
            <p className="max-w-sm text-sm text-[#8d8c93]">
              Lorem ipsum dolor sit amet consectetur,  adipiscing elit. Integer eu est in diam gravida mattis. Donec sed interdum tellus. Nam hendrerit id libero sagittis interdum.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {MEMBERS.map((m) => (
              <div
                key={m.name}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0c]"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={PLACEHOLDER_IMG}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">{m.name}</p>
                  <p className="text-xs text-[#8d8c93]">{m.role}</p>
                  <a
                    href={`https://${m.strava}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs text-[#ff5a1f]"
                  >
                    Strava ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= FILOSOFI LOGO ================= */}
      <section className="border-t border-white/5 bg-[#111113] py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] p-8">
            <img
              src={LOGO}
              alt="Logo FINEM Society"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#ff5a1f]">
              Filosofi Logo
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Lorem Ipsum.
            </h2>
            <p className="mt-4 max-w-lg text-sm text-[#c9c8c2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 max-w-lg text-sm text-[#c9c8c2]">
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur, excepteur sint
              occaecat cupidatat non proident.
            </p>

            {/* <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm">
              <div>
                <p className="font-medium">Kawanan</p>
                <p className="mt-1 text-xs text-[#8d8c93]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div>
                <p className="font-medium">Insting</p>
                <p className="mt-1 text-xs text-[#8d8c93]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div>
                <p className="font-medium">Gelap-Subuh</p>
                <p className="mt-1 text-xs text-[#8d8c93]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* ================= PRODUK ================= */}
      <section id="produk" className="border-t border-white/5 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
            <img
              src={PLACEHOLDER_IMG}
              alt="Jersey FINEM.HQ"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-[#ff5a1f]">
              Desain &amp; Detail Produk
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Jersey Edisi Kawanan
            </h2>
            <p className="mt-4 text-sm text-[#c9c8c2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>

            <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
              {PRODUCT_SPECS.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between py-3 text-sm"
                >
                  <dt className="text-[#8d8c93]">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={WA_MERCH}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-fit rounded-full bg-[#ff5a1f] px-6 py-3 text-sm font-semibold text-[#0a0a0c] transition hover:bg-[#ff7b45]"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>
      {/* ================= CTA GANDA ================= */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="mb-10 text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Join us now!
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Join komunitas */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111113] p-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#ff5a1f]">
                  01
                </p>
                <h3
                  className="mt-3 text-2xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Become a Member
                </h3>
                <p className="mt-3 text-sm text-[#c9c8c2]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_JOIN}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#25D366]/10 px-5 py-2.5 text-sm text-[#25D366] ring-1 ring-[#25D366]/30 transition hover:bg-[#25D366]/20"
                >
                  Chat WhatsApp
                </a>
                <a
                  href={GFORM_JOIN}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-white/40"
                >
                  Isi Google Form
                </a>
              </div>
            </div>

            {/* Beli baju */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111113] p-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#ff5a1f]">
                  02
                </p>
                <h3
                  className="mt-3 text-2xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  Beli Jersey Komunitas
                </h3>
                <p className="mt-3 text-sm text-[#c9c8c2]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_MERCH}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#25D366]/10 px-5 py-2.5 text-sm text-[#25D366] ring-1 ring-[#25D366]/30 transition hover:bg-[#25D366]/20"
                >
                  Pesan via WhatsApp
                </a>
                <a
                  href="#produk"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-white/40"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* ================= FOOTER / KONTAK ================= */}
      <footer className="border-t border-white/5 bg-[#111113] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  FINEM.HQ
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-[#8d8c93]">
                Lorem ipsum dolor sit amet, komunitas lari subuh yang
                lahir dari jalanan sepi kota.
              </p>
            </div>

            <div className="text-sm text-[#c9c8c2]">
              <p className="text-xs uppercase tracking-widest text-[#8d8c93]">
                Kontak Admin
              </p>
              <p className="mt-2">Muhammad Rizky Iwamuhvir — Founder</p>
              <p className="mt-1">{ADMIN_PHONE}</p>
              <a
                href={`https://${ADMIN_STRAVA}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-[#ff5a1f]"
              >
                {ADMIN_STRAVA} ↗
              </a>
            </div>
          </div>

          <p className="mt-12 text-xs text-[#8d8c93]">
            © {new Date().getFullYear()} FINEM.HQ — lari bukan buat pamer.
          </p>
        </div>
      </footer>
    </main>
  );
}