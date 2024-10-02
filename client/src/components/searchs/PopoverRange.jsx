import { MoveRight, X } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Slider } from "../ui/slider"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from "react"

const PopoverRange = ({ name, label, options = [], _name }) => {
  const form = useForm({
    defaultValues: {
      [name]: [0, 100],
    },
  })

  const triggerRef = useRef(null)

  const [widthContent, setWidthContent] = useState(0)
  useEffect(() => {
    if (triggerRef.current) {
      const width = triggerRef.current.getBoundingClientRect()?.width // lấy ra chiều dài của trigger
      setWidthContent(width)
    }
  }, [])
  return (
    <Popover>
      <PopoverTrigger ref={triggerRef} className="border rounded-md py-2 px-4">
        {label}
      </PopoverTrigger>
      <PopoverContent style={{ width: `${widthContent}px` }} className="p-0 relative h-[364px]">
        <div className="p-4 flex items-center justify-center border-b font-bold">
          <p>{label}</p>
          <Button className="absolute right-1 top-1 bottom-0" variant="transparent">
            <X size={16} />
          </Button>
        </div>
        <div className="p-4 space-y-4 max-h-[250px] overflow-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center ">
              <p className="text-xs font-bold mb-2">{`${label} thấp nhất`}</p>
              <Input placeholder="Từ" className="w-[100px]" />
            </div>
            <MoveRight size={16} className="mt-6" />
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2"> {`${label} cao nhất`}</p>
              <Input placeholder="Đến" className="w-[90px]" />
            </div>
          </div>
          <Form {...form}>
            <FormField
              name={name}
              control={form.control}
              render={({ field }) => (
                <FormItem className="py-4">
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
          <Form {...form}>
            <FormField
              name={_name}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange}>
                      {options.map((el) => (
                        <FormItem className="flex items-center justify-between" key={el.id}>
                          <FormLabel>{el.label}</FormLabel>
                          <FormControl className="m-0">
                            <RadioGroupItem value={el.value} />
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </div>
        <div className="flex items-center h-[57px] border-t px-4 justify-end">
          <Button>Áp dụng</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverRange
PopoverRange.propTypes = {
  name: PropTypes.string.isRequired,
  _name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // shape là theo Object
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
}
