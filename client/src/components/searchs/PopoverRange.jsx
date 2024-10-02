import { MoveRight, X } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Slider } from "../ui/slider"

const PopoverRange = () => {
  const form = useForm({
    defaultValues: {
      price: [0, 100],
    },
  })
  return (
    <Popover>
      <PopoverTrigger className="border rounded-md py-2 px-4">Mức giá</PopoverTrigger>
      <PopoverContent className="p-0 relative">
        <div className="p-4 flex items-center justify-center border-b font-bold">
          <p>Mức giá</p>
          <Button className="absolute right-1 top-1 bottom-0" variant="transparent">
            <X size={16} />
          </Button>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2">Giá thấp nhất</p>
              <Input placeholder="Từ" className="w-[100px]" />
            </div>
            <MoveRight className="mt-6" />
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2">Giá cao nhất</p>
              <Input placeholder="Đến" className="w-[100px]" />
            </div>
          </div>
          <Form {...form}>
            <FormField
              name="price"
              control={form.control}
              render={({ field }) => (
                <FormItem className="py-3">
                  <FormControl>
                    <Slider
                      value={field.value}
                      onValueChange={(val) => form.setValue("price", val)}
                      max={100}
                      min={0}
                      step={1}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverRange
