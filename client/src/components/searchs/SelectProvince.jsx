import { X } from "lucide-react"
import { Button } from "../ui/button"
import PropTypes from "prop-types"
import { provinceTops } from "@/lib/constants"

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
      <div className="text-sm text-slate-900 py-4 px-6 space-y-6">
        <div className="space-y-4">
          <p className="font-bold text-slate-400">Các tỉnh thành nổi bật</p>
          <div className="flex items-center justify-around gap-4 rounded-md">
            {provinceTops.map((el) => (
              <div
                key={el.id}
                className="group relative rounded-md aspect-[3/2] flex-1 overflow-hidden"
              >
                <img
                  src={el.imageUrl}
                  alt={el.label}
                  className="h-full w-full rounded-md group-hover:animate-scale-up-center "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute left-0 right-0 bottom-1 text-center font-medium text-slate-50">
                  {el.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-slate-400">Tất cả tỉnh thành</p>
          <div className="flex items-center justify-around gap-4 rounded-md">
            {provinceTops.map((el) => (
              <div
                key={el.id}
                className="group relative rounded-md aspect-[3/2] flex-1 overflow-hidden"
              >
                <img
                  src={el.imageUrl}
                  alt={el.label}
                  className="h-full w-full rounded-md group-hover:animate-scale-up-center "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute left-0 right-0 bottom-1 text-center font-medium text-slate-50">
                  {el.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectProvince

SelectProvince.propTypes = {
  onClose: PropTypes.func.isRequired,
}
