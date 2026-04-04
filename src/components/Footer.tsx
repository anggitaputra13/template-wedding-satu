export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-brown-900 py-8 px-4 text-center"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="block w-12 md:w-20 h-px bg-gold-700/50" />
        <span className="text-gold-600/50 text-sm">✦</span>
        <span className="block w-12 md:w-20 h-px bg-gold-700/50" />
      </div>
      <p className="text-cream-200 text-sm">
        Website Invitation by{" "}
        <span className="text-gold-300 font-semibold">Kiro</span>
      </p>
    </footer>
  );
}
