import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AddNoteButton } from '@/components/ui/AddNoteButton'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="bg-gray-200 border-b border-b-gray-400 gap-8 p-4 text-white text-2xl font-bold flex items-center justify-center">
        <p className="text-gray-950">Joseph's vault</p>
        <div className="absolute right-10">
          <AddNoteButton />
        </div>
      </div>
      <Outlet />
    </>
  )
}
