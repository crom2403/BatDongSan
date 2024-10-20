import { placeholderCn, resetOutline } from "@/lib/classnames"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

const FormInput = ({ form, name, label, type = "text", placeholder, readOnly = false }) => {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              className={cn(resetOutline, placeholderCn, readOnly && "bg-slate-200 cursor-default")}
              placeholder={placeholder}
              type={type}
              {...field}
              readOnly={readOnly}
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
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password"]), // nếu khác 2 dạng này thì báo lỗi
  placeholder: PropTypes.string,
}
