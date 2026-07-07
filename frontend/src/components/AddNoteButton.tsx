import { FaCirclePlus } from 'react-icons/fa6'
import { useForm } from '@tanstack/react-form'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// our old button component code
export const AddNoteButton = () => {
  const form = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  })

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className="bg-amber-900 active:bg-amber-900 active:scale-98 hover:bg-amber-700 flex items-center justify-center border border-amber-500 cursor-pointer font-normal text-2xl rounded-full text-gray-900 shadow-lg">
            <FaCirclePlus className="w-10 h-10 text-amber-300" />
          </button>
        </DialogTrigger>
        <DialogContent className="w-full h-fit bg-white">
          <DialogHeader>
            <DialogTitle>Add a note</DialogTitle>
          </DialogHeader>

          <form.Field>
            {(field) => {
              return (
                <div className="flex flex-col">
                  <label className="text-xl" htmlFor="title">
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="border border-gray-400 text-xl"
                  ></input>
                </div>
              )
            }}
          </form.Field>

          <div className="flex flex-col">
            <label className="text-xl" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              rows={8}
              className="border border-gray-400 text-xl"
            ></textarea>
          </div>

          <button type="submit" className="bg-amber-200 p-3 rounded-lg">
            Create
          </button>
        </DialogContent>
      </form>
    </Dialog>
  )
}

