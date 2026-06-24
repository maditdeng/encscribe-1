import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="bg-slate-300 text-2xl flex items-center justify-center  h-20">
        <p className="self-center">Joseph's vault</p>
        <button className="absolute shadow-xl active:shadow-none hover:cursor-pointer hover:bg-slate-200 active:bg-slate-400 right-10 active:scale-95 bg-slate-50 py-3 px-6 rounded-xl">
          Add note
        </button>
      </div>
      <Outlet />
    </>
  )
}
