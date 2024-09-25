import { placeholderCn, resetOutline } from "@/lib/classnames"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

const FormInput = ({ form, name, label, type = "text", placeholder }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              className={cn(resetOutline, placeholderCn)}
              placeholder={placeholder}
              type={type}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormInput

FormInput.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.any.isRequired,
  }),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password"]), // nếu khác 2 dạng này thì báo lỗi
  placeholder: PropTypes.string,
}
