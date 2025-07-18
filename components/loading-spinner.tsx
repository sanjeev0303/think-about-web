export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-yellow-400 rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
}
