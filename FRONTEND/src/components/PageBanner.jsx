export default function PageBanner({ title, subtitle }) {
  return (
    <section className="mx-auto mt-6 w-[92%] max-w-6xl">
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-navy via-navy-2 to-indigo-brand px-6 py-14 text-center text-white shadow-[0_20px_60px_rgba(26,23,64,0.25)] md:py-16">
        <div
          aria-hidden="true"
          className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-coral/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-violet-brand/50 blur-3xl"
        />
        <div className="relative">
          <h1 className="text-4xl md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-xl text-white/75">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}