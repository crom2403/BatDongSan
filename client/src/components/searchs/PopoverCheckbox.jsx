import { X } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import PropTypes from "prop-types"
import { useState, useEffect, useRef } from "react"
import { Checkbox } from "../ui/checkbox"

const PopoverCheckbox = ({ label, options = [], name }) => {
  const [widthContent, setWidthContent] = useState(0)
  const triggerRef = useRef(null)

  const form = useForm({
    defaultValues: {
      [name]: [""],
    },
  })

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
          <Form {...form}>
            <FormField
              name={name}
              control={form.control}
              render={() => (
                <FormItem>
                  {options.map((el) => (
                    <FormField
                      key={el.id}
                      name={name}
                      control={form.control}
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <FormLabel>{el.label}</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(el.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, el.id])
                                  : field.onChange(field.value?.filter((value) => value !== el.id))
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
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

export default PopoverCheckbox

PopoverCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}
