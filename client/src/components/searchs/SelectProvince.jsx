import { X } from "lucide-react"
import { Button } from "../ui/button"
import PropTypes from "prop-types"

const SelectProvince = ({ onClose }) => {
  return (
    <div
      className="absolute top-full left-0 right-0 max-h-[500px] overflow-y-auto rounded-md
     bg-slate-50 text-slate-900 rounded-t-none"
    >
      <div className="flex items-center justify-between py-4 px-6 border-y border-input">
        <p className="font-bold text-sm text-slate-900">
          Bạn muốn tìm bất động sản ở tỉnh thành nào?
        </p>
        <Button
          onClick={(e) => {
            e.stopPropagation() // để tránh hiện tượng nổi bọt
            onClose()
          }}
          variant="transparent"
        >
          <X size={16} />
        </Button>
      </div>
      <div className="text-sm text-slate-900 py-4 px-6">
        <div>
          <p className="font-bold text-slate-400">Các tỉnh thành nổi bật</p>
        </div>
      </div>
    </div>
  )
}

export default SelectProvince

SelectProvince.propTypes = {
  onClose: PropTypes.func.isRequired,
}
