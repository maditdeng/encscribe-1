import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className=" min-h-screen bg-amber-200 flex flex-col items-center justify-center">


      <h1 className="text-xl">You have no notes</h1>

      <button className="w-40 shadow-xl active:shadow-none hover:cursor-pointer hover:bg-slate-200 active:bg-slate-400 right-10 active:scale-95 bg-slate-50 py-3 px-6 rounded-xl text-2xl border border-slate-400 hover:border-slate-800">
        Add note
      </button>
    </div>
  )
}
