export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#F8F9FC] transition-colors duration-700 dark:bg-[#080C16]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.35]
          dark:opacity-[0.18]
          transition-opacity duration-700
          [background-image:linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)]
          [background-size:48px_48px]
          dark:[background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute -left-40 -top-40
          h-[500px] w-[500px]
          rounded-full
          bg-blue-300/20
          blur-[120px]
          animate-slow-pulse
          transition-colors duration-700
          dark:bg-blue-500/10
        "
      />

      {/* Purple Glow */}
      <div
        className="
          absolute -right-40 top-[20%]
          h-[500px] w-[500px]
          rounded-full
          bg-purple-300/15
          blur-[130px]
          animate-slow-pulse
          transition-colors duration-700
          dark:bg-purple-500/10
        "
      />

      {/* Cyan Glow */}
      <div
        className="
          absolute bottom-[-200px] left-[30%]
          h-[500px] w-[500px]
          rounded-full
          bg-cyan-300/10
          blur-[130px]
          animate-slow-pulse
          transition-colors duration-700
          dark:bg-cyan-500/8
        "
      />

    </div>
  );
}